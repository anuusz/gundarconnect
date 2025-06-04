<template>
  <div class="saved-posts-container">
    <!-- Header -->
    <div class="saved-header">
      <h1 class="saved-title">Postingan Tersimpan</h1>

      <div class="header-controls">
        <!-- View Toggle -->
        <div class="view-toggle">
          <button
            @click="activeView = 'grid'"
            :class="['toggle-btn', { active: activeView === 'grid' }]"
          >
            <i class="fa fa-th"></i>
            Grid
          </button>
          <button
            @click="activeView = 'list'"
            :class="['toggle-btn', { active: activeView === 'list' }]"
          >
            <i class="fa fa-list"></i>
            List
          </button>
        </div>

        <!-- Filter -->
        <select class="filter-select" v-model="sortBy">
          <option value="popular">Paling Populer</option>
          <option value="newest">Terbaru Disimpan</option>
          <option value="oldest">Terlama</option>
        </select>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card stat-card-blue">
        <div class="stat-content">
          <div class="stat-info">
            <p class="stat-label">Total Tersimpan</p>
            <p class="stat-value">{{ posts.length }}</p>
          </div>
          <i class="fa fa-bookmark stat-icon"></i>
        </div>
      </div>

      <div class="stat-card stat-card-green">
        <div class="stat-content">
          <div class="stat-info">
            <p class="stat-label">Total Likes</p>
            <p class="stat-value">{{ totalLikes }}</p>
          </div>
          <i class="fa fa-heart stat-icon"></i>
        </div>
      </div>

      <div class="stat-card stat-card-purple">
        <div class="stat-content">
          <div class="stat-info">
            <p class="stat-label">Total Komentar</p>
            <p class="stat-value">{{ totalComments }}</p>
          </div>
          <i class="fa fa-comment stat-icon"></i>
        </div>
      </div>
    </div>

    <!-- Grid View -->
    <transition name="fade" mode="out-in">
      <div v-if="activeView === 'grid'" class="posts-grid">
        <div
          v-for="post in sortedPosts"
          :key="post.id"
          class="post-card"
          @mouseenter="hoveredPost = post.id"
          @mouseleave="hoveredPost = null"
          @click="viewFullPost(post.id)"
        >
          <!-- Image Section -->
          <div class="post-image-container">
            <img :src="post.image" :alt="post.title" class="post-image" @error="handleImageError" />
            <div class="image-overlay"></div>

            <!-- Saved Badge -->
            <div class="saved-badge">
              <i class="fa fa-bookmark"></i>
              <span>Tersimpan</span>
            </div>

            <!-- Time -->
            <div class="post-time">
              <i class="fa fa-clock"></i>
              {{ formatTime(post.savedAt) }}
            </div>
          </div>

          <!-- Content Section -->
          <div class="post-content">
            <!-- Author -->
            <div class="post-author">
              <img
                :src="post.author.avatar || getDefaultAvatar(post.author.username)"
                :alt="post.author.username"
                class="author-avatar"
              />
              <span class="author-name">@{{ post.author.username }}</span>
            </div>

            <!-- Title & Excerpt -->
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ truncateContent(post.content, 100) }}</p>

            <!-- Tags -->
            <div class="post-tags">
              <span
                v-for="tag in post.tags.slice(0, 3)"
                :key="tag"
                class="tag"
                @click.stop="filterByTag(tag)"
              >
                #{{ tag }}
              </span>
              <span v-if="post.tags.length > 3" class="tag tag-more">
                +{{ post.tags.length - 3 }}
              </span>
            </div>

            <!-- Stats & Actions -->
            <div class="post-footer">
              <div class="post-stats">
                <div class="stat">
                  <i class="fa fa-heart"></i>
                  <span>{{ post.likes }}</span>
                </div>
                <div class="stat">
                  <i class="fa fa-comment"></i>
                  <span>{{ post.comments }}</span>
                </div>
              </div>

              <div :class="['post-actions', { show: hoveredPost === post.id }]">
                <button class="action-btn" @click.stop="viewPost(post.id)" title="Lihat">
                  <i class="fa fa-eye"></i>
                </button>
                <button class="action-btn" @click.stop="sharePost(post.id)" title="Bagikan">
                  <i class="fa fa-share"></i>
                </button>
                <button class="action-btn" @click.stop="showOptions(post.id)" title="Opsi">
                  <i class="fa fa-ellipsis-v"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="posts-list">
        <div
          v-for="post in sortedPosts"
          :key="post.id"
          class="post-list-item"
          @click="viewFullPost(post.id)"
        >
          <!-- Thumbnail -->
          <div class="list-thumbnail">
            <img :src="post.image" :alt="post.title" @error="handleImageError" />
            <div class="thumbnail-overlay"></div>
          </div>

          <!-- Content -->
          <div class="list-content">
            <div class="list-header">
              <div class="list-author">
                <img
                  :src="post.author.avatar || getDefaultAvatar(post.author.username)"
                  :alt="post.author.username"
                  class="author-avatar-lg"
                />
                <div class="author-info">
                  <p class="author-name">@{{ post.author.username }}</p>
                  <p class="post-date">{{ formatTime(post.createdAt) }}</p>
                </div>
              </div>

              <div class="saved-info">
                <i class="fa fa-bookmark"></i>
                <span>{{ formatTime(post.savedAt) }}</span>
              </div>
            </div>

            <h3 class="list-title">{{ post.title }}</h3>
            <p class="list-excerpt">{{ truncateContent(post.content, 150) }}</p>

            <div class="list-footer">
              <div class="list-meta">
                <div class="list-tags">
                  <span
                    v-for="tag in post.tags"
                    :key="tag"
                    class="tag"
                    @click.stop="filterByTag(tag)"
                  >
                    #{{ tag }}
                  </span>
                </div>

                <div class="list-stats">
                  <div class="stat">
                    <i class="fa fa-heart"></i>
                    <span>{{ post.likes }}</span>
                  </div>
                  <div class="stat">
                    <i class="fa fa-comment"></i>
                    <span>{{ post.comments }}</span>
                  </div>
                </div>
              </div>

              <div class="list-actions">
                <button class="view-btn" @click.stop="viewPost(post.id)">
                  <i class="fa fa-eye"></i>
                  <span>Lihat</span>
                </button>
                <button class="option-btn" @click.stop="showOptions(post.id)">
                  <i class="fa fa-ellipsis-v"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Empty State -->
    <div v-if="!posts.length" class="empty-state">
      <i class="fa fa-bookmark empty-icon"></i>
      <h3>Belum ada postingan tersimpan</h3>
      <p>Simpan postingan favoritmu untuk melihatnya di sini</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { savedPosts } from '@/stores/savenew'
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = savedPosts
const activeView = ref('grid')
const sortBy = ref('newest')
const hoveredPost = ref(null)

// Computed
const totalLikes = computed(() => {
  return posts.reduce((acc, post) => acc + post.likes, 0)
})

const totalComments = computed(() => {
  return posts.reduce((acc, post) => acc + post.comments, 0)
})

const sortedPosts = computed(() => {
  const sorted = [...posts]

  switch (sortBy.value) {
    case 'popular':
      return sorted.sort((a, b) => b.likes + b.comments - (a.likes + a.comments))
    case 'newest':
      return sorted.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt))
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.savedAt) - new Date(b.savedAt))
    default:
      return sorted
  }
})

// Methods
const formatTime = (timestamp) => {
  if (!timestamp) return ''
  const date = new Date(timestamp)
  const now = new Date()
  const diff = Math.floor((now - date) / 1000)

  if (diff < 60) return 'Baru saja'
  if (diff < 3600) return `${Math.floor(diff / 60)} menit yang lalu`
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam yang lalu`
  if (diff < 604800) return `${Math.floor(diff / 86400)} hari yang lalu`

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const truncateContent = (content, max) => {
  if (!content) return ''
  return content.length <= max ? content : content.slice(0, max) + '...'
}

const getDefaultAvatar = (username) => {
  return `https://ui-avatars.com/api/?name=${username}&background=4a5568&color=fff`
}

const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/400x300/1a1a2e/4a5568?text=No+Image'
}

const viewFullPost = (id) => {
  router.push({ name: 'post-detail', params: { id } })
}

const viewPost = (id) => {
  viewFullPost(id)
}

const sharePost = (id) => {
  console.log('Share post:', id)
  // Implement share functionality
}

const showOptions = (id) => {
  console.log('Show options for:', id)
  // Implement options menu
}

const filterByTag = (tag) => {
  console.log('Filter by tag:', tag)
  // Implement tag filtering
}
</script>

<style scoped>
/* Container */
.saved-posts-container {
  min-height: 100vh;
  background-color: #0f0f1a;
  padding: 2rem;
}

/* Header */
.saved-header {
  max-width: 1400px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.saved-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* View Toggle */
.view-toggle {
  display: flex;
  background-color: #1a1a2e;
  border-radius: 0.5rem;
  padding: 0.25rem;
}

.toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-btn.active {
  background-color: #4f46e5;
  color: white;
}

.toggle-btn:hover:not(.active) {
  color: #e0e0e0;
}

/* Filter Select */
.filter-select {
  background-color: #1a1a2e;
  color: #e0e0e0;
  border: 1px solid #374151;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
}

.filter-select:focus {
  border-color: #4f46e5;
}

/* Stats Grid */
.stats-grid {
  max-width: 1400px;
  margin: 0 auto 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #1f2937;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.stat-card-blue {
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
}

.stat-card-green {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%);
}

.stat-card-purple {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
}

.stat-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-label {
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0 0 0.25rem;
}

.stat-value {
  color: #f3f4f6;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}

.stat-icon {
  font-size: 2rem;
  opacity: 0.5;
}

.stat-card-blue .stat-icon {
  color: #6366f1;
}
.stat-card-green .stat-icon {
  color: #10b981;
}
.stat-card-purple .stat-icon {
  color: #8b5cf6;
}

/* Grid View */
.posts-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.post-card {
  background-color: #1a1a2e;
  border: 1px solid #374151;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
}

.post-card:hover {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  transform: translateY(-4px);
}

/* Image Section */
.post-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.post-card:hover .post-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #1a1a2e 0%, transparent 50%);
  opacity: 0.6;
}

.saved-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: rgba(99, 102, 241, 0.9);
  backdrop-filter: blur(8px);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
}

.post-time {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #d1d5db;
}

/* Content Section */
.post-content {
  padding: 1.25rem;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.author-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid #374151;
}

.author-avatar-lg {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 2px solid #374151;
}

.author-name {
  font-size: 0.875rem;
  color: #9ca3af;
}

.post-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: #f3f4f6;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s;
}

.post-card:hover .post-title {
  color: #6366f1;
}

.post-excerpt,
.list-excerpt {
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0 0 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tags */
.post-tags,
.list-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  padding: 0.25rem 0.5rem;
  background-color: #374151;
  font-size: 0.75rem;
  border-radius: 0.375rem;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.2s;
}

.tag:hover {
  background-color: #4b5563;
  color: #f3f4f6;
}

.tag-more {
  background-color: transparent;
  border: 1px solid #374151;
}

/* Footer */
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-stats,
.list-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #9ca3af;
  font-size: 0.875rem;
}

.post-actions {
  display: flex;
  gap: 0.25rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.post-actions.show {
  opacity: 1;
}

.action-btn {
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #9ca3af;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background-color: #374151;
  color: #f3f4f6;
}

/* List View */
.posts-list {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-list-item {
  background-color: #1a1a2e;
  border: 1px solid #374151;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.post-list-item:hover {
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
  transform: translateX(4px);
}

.list-thumbnail {
  position: relative;
  width: 200px;
  height: 130px;
  border-radius: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
}

.list-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.post-list-item:hover .list-thumbnail img {
  transform: scale(1.1);
}

.thumbnail-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #1a1a2e 0%, transparent 40%);
  opacity: 0.4;
}

.list-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.list-author {
  display: flex;
  gap: 0.75rem;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info .author-name {
  font-weight: 500;
  color: #f3f4f6;
  margin: 0;
}

.post-date {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
}

.saved-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(99, 102, 241, 0.2);
  color: #6366f1;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.list-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #f3f4f6;
  margin: 0 0 0.75rem;
  transition: color 0.2s;
}

.post-list-item:hover .list-title {
  color: #6366f1;
}

.list-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.list-meta {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.list-actions {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #374151;
  border: none;
  color: #f3f4f6;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.view-btn:hover {
  background-color: #4b5563;
}

.option-btn {
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  color: #9ca3af;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.option-btn:hover {
  background-color: #374151;
  color: #f3f4f6;
}

/* Empty State */
.empty-state {
  max-width: 400px;
  margin: 4rem auto;
  text-align: center;
}

.empty-icon {
  font-size: 4rem;
  color: #374151;
  margin-bottom: 1rem;
}

.empty-state h3 {
  color: #f3f4f6;
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
}

.empty-state p {
  color: #6b7280;
  margin: 0;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .saved-posts-container {
    padding: 1rem;
  }

  .saved-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-controls {
    width: 100%;
    justify-content: space-between;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .post-list-item {
    flex-direction: column;
  }

  .list-thumbnail {
    width: 100%;
    height: 200px;
  }

  .list-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .list-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
