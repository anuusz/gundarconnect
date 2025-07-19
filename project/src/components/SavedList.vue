<template>
  <div class="saved-posts-container">
    <!-- Header -->
    <div class="saved-header">
<<<<<<< HEAD
      <h1 class="saved-title">
        <span class="title-icon">📚</span>
        Postingan Tersimpan
      </h1>
      <div class="subtitle">
        {{ posts.length }} postingan telah disimpan
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
      </div>
    </div>

    <!-- Grid View -->
<<<<<<< HEAD
    <div class="posts-grid">
      <div
        v-for="(post, index) in posts"
        :key="post.id"
        class="post-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
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
              v-for="tag in (post.tags || []).slice(0, 3)"
              :key="tag"
              class="tag"
              @click.stop="filterByTag(tag)"
            >
              #{{ tag }}
            </span>
            <span v-if="(post.tags && post.tags.length > 3)" class="tag tag-more">
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
              <button class="action-btn remove-btn" @click.stop="removeSavedPost(post.id)" title="Hapus">
                <i class="fa fa-trash"></i>
              </button>
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>

    <!-- Empty State -->
    <div v-if="!posts.length" class="empty-state">
      <div class="empty-animation">
        <i class="fa fa-bookmark empty-icon"></i>
        <div class="floating-bookmarks">
          <i class="fa fa-bookmark bookmark-float bookmark-1"></i>
          <i class="fa fa-bookmark bookmark-float bookmark-2"></i>
          <i class="fa fa-bookmark bookmark-float bookmark-3"></i>
        </div>
      </div>
      <h3>Belum ada postingan tersimpan</h3>
      <p>Simpan postingan favoritmu untuk melihatnya di sini</p>
      <button class="explore-btn" @click="goToHome">
        <i class="fa fa-compass"></i>
        Jelajahi Postingan
      </button>
    </div>

    <!-- Floating Action Button -->
    <div class="fab-container">
      <button class="fab" @click="showQuickActions = !showQuickActions" title="Quick Actions">
        <i class="fa fa-magic"></i>
      </button>
      <div :class="['fab-menu', { show: showQuickActions }]">
        <button class="fab-item" @click="sortByNewest" title="Urutkan Terbaru">
          <i class="fa fa-sort-amount-down"></i>
        </button>
        <button class="fab-item" @click="sortByPopular" title="Urutkan Populer">
          <i class="fa fa-fire"></i>
        </button>
        <button class="fab-item" @click="clearAll" title="Hapus Semua">
          <i class="fa fa-trash-alt"></i>
        </button>
      </div>
=======

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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { ref, computed, onMounted } from 'vue'
import { useSavedStore } from '@/stores/saved'
import { useRouter } from 'vue-router'

const router = useRouter()
const savedStore = useSavedStore()
const posts = computed(() => savedStore.savedPosts)
const hoveredPost = ref(null)
const showQuickActions = ref(false)

onMounted(() => {
  savedStore.fetchSavedPosts()
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
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

<<<<<<< HEAD
const removeSavedPost = (id) => {
  if (confirm('Hapus postingan dari tersimpan?')) {
    const index = posts.value.findIndex(post => post.id === id)
    if (index > -1) {
      posts.value.splice(index, 1)
    }
  }
=======
const showOptions = (id) => {
  console.log('Show options for:', id)
  // Implement options menu
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

const filterByTag = (tag) => {
  console.log('Filter by tag:', tag)
  // Implement tag filtering
}
<<<<<<< HEAD

const goToHome = () => {
  router.push('/')
}

const sortByNewest = () => {
  posts.value.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt))
  showQuickActions.value = false
}

const sortByPopular = () => {
  posts.value.sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments))
  showQuickActions.value = false
}

const clearAll = () => {
  if (confirm('Hapus semua postingan tersimpan?')) {
    posts.value = []
    showQuickActions.value = false
  }
}
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
</script>

<style scoped>
/* Container */
.saved-posts-container {
  min-height: 100vh;
<<<<<<< HEAD
  background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
  padding: 6rem 2rem 2rem;
  position: relative;
=======
  background-color: #0f0f1a;
  padding: 2rem;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

/* Header */
.saved-header {
  max-width: 1400px;
<<<<<<< HEAD
  margin: 0 auto 3rem;
  text-align: center;
  animation: slideInDown 0.8s ease-out;
}

.saved-title {
  font-size: 3rem;
=======
  margin: 0 auto 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.saved-title {
  font-size: 2.5rem;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
<<<<<<< HEAD
  margin: 0 0 1rem;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title-icon {
  font-size: 2.5rem;
  animation: bounce 2s infinite;
}

.subtitle {
  color: #9ca3af;
  font-size: 1.1rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.3s forwards;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

/* Grid View */
.posts-grid {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
<<<<<<< HEAD
  gap: 2rem;
}

.post-card {
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(50px);
  animation: slideInUp 0.6s ease-out forwards;
}

.post-card:hover {
  border-color: rgba(102, 126, 234, 0.6);
  box-shadow: 0 25px 50px rgba(102, 126, 234, 0.25);
  transform: translateY(-8px) scale(1.02);
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

/* Image Section */
.post-image-container {
  position: relative;
<<<<<<< HEAD
  height: 220px;
=======
  height: 200px;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
<<<<<<< HEAD
  transition: transform 0.6s ease;
}

.post-card:hover .post-image {
  transform: scale(1.15);
=======
  transition: transform 0.3s;
}

.post-card:hover .post-image {
  transform: scale(1.1);
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.image-overlay {
  position: absolute;
  inset: 0;
<<<<<<< HEAD
  background: linear-gradient(to top, rgba(26, 26, 46, 0.8) 0%, transparent 60%);
  opacity: 0.7;
=======
  background: linear-gradient(to top, #1a1a2e 0%, transparent 50%);
  opacity: 0.6;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.saved-badge {
  position: absolute;
<<<<<<< HEAD
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  backdrop-filter: blur(10px);
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  animation: pulse 2s infinite;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.post-time {
  position: absolute;
<<<<<<< HEAD
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: #e0e0e0;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  backdrop-filter: blur(5px);
=======
  bottom: 0.75rem;
  left: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #d1d5db;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

/* Content Section */
.post-content {
<<<<<<< HEAD
  padding: 1.5rem;
=======
  padding: 1.25rem;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.post-author {
  display: flex;
  align-items: center;
<<<<<<< HEAD
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.author-avatar {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 2px solid rgba(102, 126, 234, 0.3);
  transition: border-color 0.3s ease;
}

.post-card:hover .author-avatar {
  border-color: rgba(102, 126, 234, 0.8);
}

.author-name {
  font-size: 0.9rem;
  color: #b0b0c0;
  font-weight: 500;
}

.post-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  color: #f3f4f6;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
<<<<<<< HEAD
  transition: color 0.3s ease;
}

.post-card:hover .post-title {
  color: #667eea;
}

.post-excerpt {
  color: #9ca3af;
  font-size: 0.9rem;
  margin: 0 0 1.2rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tags */
<<<<<<< HEAD
.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}

.tag {
  padding: 0.3rem 0.8rem;
  background: rgba(102, 126, 234, 0.2);
  font-size: 0.75rem;
  border-radius: 1rem;
  color: #b0b0c0;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.tag:hover {
  background: rgba(102, 126, 234, 0.4);
  color: #ffffff;
  transform: translateY(-2px);
}

.tag-more {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

/* Footer */
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

<<<<<<< HEAD
.post-stats {
  display: flex;
  gap: 1.2rem;
=======
.post-stats,
.list-stats {
  display: flex;
  gap: 1rem;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.stat {
  display: flex;
  align-items: center;
<<<<<<< HEAD
  gap: 0.4rem;
  color: #9ca3af;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.stat:hover {
  color: #e0e0e0;
=======
  gap: 0.25rem;
  color: #9ca3af;
  font-size: 0.875rem;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.post-actions {
  display: flex;
<<<<<<< HEAD
  gap: 0.4rem;
  opacity: 0;
  transition: opacity 0.3s ease;
=======
  gap: 0.25rem;
  opacity: 0;
  transition: opacity 0.2s;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.post-actions.show {
  opacity: 1;
}

.action-btn {
<<<<<<< HEAD
  padding: 0.6rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #9ca3af;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.action-btn:hover {
  background: rgba(102, 126, 234, 0.3);
  color: #ffffff;
  transform: translateY(-2px);
}

.remove-btn:hover {
  background: rgba(239, 68, 68, 0.3);
  color: #ff6b6b;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

/* Empty State */
.empty-state {
<<<<<<< HEAD
  max-width: 500px;
  margin: 6rem auto;
  text-align: center;
  animation: fadeInUp 1s ease-out;
}

.empty-animation {
  position: relative;
  margin-bottom: 2rem;
}

.empty-icon {
  font-size: 5rem;
  color: #374151;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

.floating-bookmarks {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.bookmark-float {
  position: absolute;
  font-size: 1.5rem;
  color: rgba(102, 126, 234, 0.3);
  animation: floatBookmark 4s ease-in-out infinite;
}

.bookmark-1 {
  left: -4rem;
  animation-delay: 0s;
}

.bookmark-2 {
  left: 4rem;
  animation-delay: 1.3s;
}

.bookmark-3 {
  left: 0;
  animation-delay: 2.6s;
=======
  max-width: 400px;
  margin: 4rem auto;
  text-align: center;
}

.empty-icon {
  font-size: 4rem;
  color: #374151;
  margin-bottom: 1rem;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.empty-state h3 {
  color: #f3f4f6;
<<<<<<< HEAD
  font-size: 1.8rem;
  margin: 0 0 1rem;
  font-weight: 600;
}

.empty-state p {
  color: #9ca3af;
  margin: 0 0 2rem;
  font-size: 1.1rem;
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.explore-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

/* Floating Action Button */
.fab-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.fab {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.fab:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

.fab-menu {
  position: absolute;
  bottom: 5rem;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.fab-menu.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.fab-item {
  width: 3rem;
  height: 3rem;
  background: rgba(26, 26, 46, 0.9);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  color: #9ca3af;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.fab-item:hover {
  background: rgba(102, 126, 234, 0.3);
  color: white;
  transform: scale(1.1);
}

/* Animations */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes floatBookmark {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
    opacity: 0.7;
  }
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

/* Responsive */
@media (max-width: 768px) {
  .saved-posts-container {
<<<<<<< HEAD
    padding: 5rem 1rem 2rem;
  }

  .saved-title {
    font-size: 2.2rem;
    flex-direction: column;
    gap: 0.5rem;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  }

  .posts-grid {
    grid-template-columns: 1fr;
<<<<<<< HEAD
    gap: 1.5rem;
  }

  .fab-container {
    bottom: 1rem;
    right: 1rem;
  }

  .fab {
    width: 3.5rem;
    height: 3.5rem;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  }
}
</style>
