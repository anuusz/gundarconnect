<template>
  <div class="app-layout">
    <TopBar />
    <div class="main-container">
      <sidebar />
      <div class="profile-container">
        <!-- Header Section -->
        <div class="profile-header">
          <div class="cover-image">
            <div class="cover-gradient"></div>
          </div>

          <div class="profile-info-section">
            <div class="profile-avatar-container">
              <div class="profile-avatar">
<<<<<<< HEAD
                <template v-if="user && user.avatar">
                  <img :src="getAvatarUrl(user.avatar)" alt="Avatar" style="width:150px;height:150px;border-radius:50%" />
                </template>
                <template v-else>
                  <div class="avatar-placeholder">
                    <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </div>
                </template>
                <!-- <button class="edit-avatar-btn">
=======
                <div class="avatar-placeholder">
                  <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                </div>
                <button class="edit-avatar-btn">
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    />
                  </svg>
<<<<<<< HEAD
                </button> -->
=======
                </button>
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
              </div>
            </div>

            <div class="profile-details">
<<<<<<< HEAD
              <template v-if="user">
                <h1 class="profile-name">{{ user.fullName || '-' }}</h1>
                <p class="profile-username">@{{ user.username || '-' }}</p>
                <p class="profile-bio">{{ user.bio || '-' }}</p>
                <p class="profile-major">{{ user.major || '-' }}</p>
              </template>
              <template v-else>
                <div class="profile-notfound">
                  <h1 class="profile-name">User tidak ditemukan</h1>
                  <p class="profile-username">Profil ini tidak tersedia.</p>
                  <p style="color:#ffbaba;font-size:0.95rem;">Username yang dicari: <b>{{ route.params.username || '(tidak ada di route)' }}</b></p>
                </div>
              </template>

              <!-- <div class="profile-meta">
=======
              <h1 class="profile-name">{{ user?.fullName || '-' }}</h1>
              <p class="profile-username">@{{ user?.username || '-' }}</p>
              <p class="profile-bio">{{ user?.bio || '-' }}</p>

              <div class="profile-meta">
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
                <span class="meta-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  Jakarta, Indonesia
                </span>
                <span class="meta-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                    />
                  </svg>
                  Bergabung Januari 2024
                </span>
<<<<<<< HEAD
              </div> -->
            </div>

            <div class="profile-actions">
              <template v-if="isOwnProfile">
                <button class="btn-primary" @click="showEditModal = true">Edit Profile</button>
                <!-- Logout Button -->
                <button class="btn-logout" @click="showLogoutConfirm = true" title="Logout">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                  </svg>
                  Logout
                </button>
              </template>
              <template v-else>
                <button class="btn-follow" :class="{ following: isFollowing }" @click="toggleFollow">
                  {{ isFollowing ? 'Following' : 'Follow' }}
                </button>
              </template>
=======
              </div>
            </div>

            <div class="profile-actions">
              <button class="btn-primary" @click="showEditModal = true">Edit Profile</button>
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
              <button class="btn-secondary" @click="showShareModal = true">Share</button>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-number">{{ posts.length }}</span>
            <span class="stat-label">Posts</span>
          </div>
<<<<<<< HEAD
          <div class="stat-item clickable" @click="showFollowers = true">
            <span class="stat-number">{{ (followers || []).length }}</span>
            <span class="stat-label">Followers</span>
          </div>
          <div class="stat-item clickable" @click="showFollowing = true">
            <span class="stat-number">{{ (following || []).length }}</span>
=======
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Followers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0</span>
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
            <span class="stat-label">Following</span>
          </div>
        </div>

<<<<<<< HEAD
        <!-- Followers Modal -->
        <div v-if="showFollowers" class="modal-overlay" @click="showFollowers = false">
          <div class="modal-container" @click.stop>
            <div class="modal-header">
              <h2 class="modal-title">Followers</h2>
              <button class="modal-close" @click="showFollowers = false">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <div v-if="(followers || []).length === 0">No followers yet.</div>
              <div v-for="f in (followers || [])" :key="f.id" class="follower-item">
                <img :src="getAvatarUrl(f.avatar)" alt="avatar" class="avatar-small" />
                <span>{{ f.fullName || f.username }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Following Modal -->
        <div v-if="showFollowing" class="modal-overlay" @click="showFollowing = false">
          <div class="modal-container" @click.stop>
            <div class="modal-header">
              <h2 class="modal-title">Following</h2>
              <button class="modal-close" @click="showFollowing = false">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <div v-if="(following || []).length === 0">Not following anyone yet.</div>
              <div v-for="f in (following || [])" :key="f.id" class="follower-item">
                <img :src="getAvatarUrl(f.avatar)" alt="avatar" class="avatar-small" />
                <span>{{ f.fullName || f.username }}</span>
              </div>
            </div>
          </div>
        </div>
<!-- ...existing code... -->
<!-- .btn-follow {
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-follow.following {
  background: #10b981;
}
.stat-item.clickable {
  cursor: pointer;
  transition: background 0.2s;
}
.stat-item.clickable:hover {
  background: rgba(102, 126, 234, 0.1);
}
.follower-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.avatar-small {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}


// Follow/following logic
const showFollowers = ref(false)
const showFollowing = ref(false)
const followers = ref([])
const following = ref([])
const isFollowing = ref(false)

// Pastikan followers/following tidak undefined saat render awal
if (!followers.value) followers.value = []
if (!following.value) following.value = []

const fetchFollowers = async () => {
  if (!user.value) return
  const res = await fetch(`/api/follow/${user.value.id}/followers`)
  followers.value = await res.json()
}
const fetchFollowing = async () => {
  if (!user.value) return
  const res = await fetch(`/api/follow/${user.value.id}/following`)
  following.value = await res.json()
}
const checkIsFollowing = async () => {
  const currentUser = getCurrentUser()
  if (!user.value || !currentUser || user.value.id === currentUser.id) {
    isFollowing.value = false
    return
  }
  const res = await fetch(`/api/follow/${user.value.id}/followers`)
  const data = await res.json()
  isFollowing.value = data.some(f => f.id === currentUser.id)
}
const toggleFollow = async () => {
  const currentUser = getCurrentUser()
  if (!user.value || !currentUser) return
  const token = localStorage.getItem('token')
  if (isFollowing.value) {
    await fetch(`/api/follow/${user.value.id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })
    isFollowing.value = false
  } else {
    await fetch(`/api/follow/${user.value.id}`, { method: 'POST', headers: { 'Authorization': `Bearer ${token}` } })
    isFollowing.value = true
  }
  fetchFollowers()
}

watch(user, () => {
  fetchFollowers()
  fetchFollowing()
  checkIsFollowing()
}) -->

=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
        <!-- Navigation Tabs -->
        <div class="profile-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-btn', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <component :is="tab.icon" class="tab-icon" />
            {{ tab.label }}
          </button>
        </div>

        <!-- Content Section -->
        <div class="profile-content">
          <div v-if="activeTab === 'posts'" class="content-grid">
<<<<<<< HEAD
            <PostCard
              v-for="post in posts"
              :key="post.id"
              :post="post"
              @deleted="onPostDeleted"
              @refresh="fetchProfile"
            />
=======
            <PostCard v-for="post in posts" :key="post.id" :post="post" @deleted="onPostDeleted" />
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
          </div>

          <div v-else-if="activeTab === 'about'" class="about-section">
            <AboutInfo />
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Profile Modal -->
    <div v-if="showEditModal" class="modal-overlay" @click="showEditModal = false">
      <div class="modal-container edit-modal" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">Edit Profile</h2>
          <button class="modal-close" @click="showEditModal = false">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<<<<<<< HEAD
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
=======
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
            </svg>
          </button>
        </div>

<<<<<<< HEAD
        <form @submit.prevent="handleUpdateProfile">
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">Profile Picture</label>
              <div class="avatar-upload">
                <div class="avatar-preview">
                  <img v-if="avatarPreview" :src="avatarPreview" alt="Preview" style="width:40px;height:40px;border-radius:50%" />
                  <img v-else-if="user && user.avatar" :src="getAvatarUrl(user.avatar)" alt="Avatar" style="width:40px;height:40px;border-radius:50%" />
                  <svg v-else width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <button type="button" class="upload-btn" @click="$refs.fileInput.click()">Change Photo</button>
                <input type="file" ref="fileInput" style="display:none" accept="image/*" @change="handleFileChange" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input
                type="text"
                class="form-input"
                v-model="editForm.name"
                placeholder="Enter your full name"
                required
              />
            </div>


            <div class="form-group">
              <label class="form-label">Bio</label>
              <textarea
                class="form-textarea"
                v-model="editForm.bio"
                placeholder="Tell us about yourself..."
                rows="4"
              ></textarea>
            </div>

          </div>

          <div class="modal-footer">
            <button type="button" class="btn-cancel" @click="showEditModal = false">Cancel</button>
            <button type="submit" class="btn-save">Save Changes</button>
          </div>
        </form>
=======
        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Profile Picture</label>
            <div class="avatar-upload">
              <div class="avatar-preview">
                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </div>
              <button class="upload-btn">Change Photo</button>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input
              type="text"
              class="form-input"
              v-model="editForm.name"
              placeholder="Enter your full name"
            />
          </div>

          <div class="form-group">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-input"
              v-model="editForm.username"
              placeholder="@username"
            />
          </div>

          <div class="form-group">
            <label class="form-label">Bio</label>
            <textarea
              class="form-textarea"
              v-model="editForm.bio"
              placeholder="Tell us about yourself..."
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">Location</label>
            <input
              type="text"
              class="form-input"
              v-model="editForm.location"
              placeholder="Your location"
            />
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-cancel" @click="showEditModal = false">Cancel</button>
          <button class="btn-save" @click="saveProfile">Save Changes</button>
        </div>
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
      </div>
    </div>

    <!-- Share Modal -->
    <div v-if="showShareModal" class="modal-overlay" @click="showShareModal = false">
      <div class="modal-container share-modal" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">Share Profile</h2>
          <button class="modal-close" @click="showShareModal = false">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="share-options">
            <button class="share-option" @click="shareToSocial('twitter')">
              <div class="share-icon twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  />
                </svg>
              </div>
              <span>Twitter</span>
            </button>

            <button class="share-option" @click="shareToSocial('linkedin')">
              <div class="share-icon linkedin">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span>LinkedIn</span>
            </button>

            <button class="share-option" @click="shareToSocial('facebook')">
              <div class="share-icon facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <span>Facebook</span>
            </button>

            <button class="share-option" @click="copyProfileLink">
              <div class="share-icon copy">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <span>Copy Link</span>
            </button>
          </div>

          <div class="profile-preview">
            <div class="preview-card">
              <div class="preview-avatar">
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
              </div>
              <div class="preview-info">
                <h3 class="profile-name">{{ user?.fullName || '-' }}</h3>
                <p>Frontend Developer • Vue.js Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD

    <!-- Logout Confirmation Modal -->
    <div v-if="showLogoutConfirm" class="modal-overlay" @click="showLogoutConfirm = false">
      <div class="modal-container logout-modal" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">Confirm Logout</h2>
          <button class="modal-close" @click="showLogoutConfirm = false">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="logout-content">
            <div class="logout-icon">
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
              </svg>
            </div>
            <h3>Are you sure you want to logout?</h3>
            <p>You will be redirected to the login page and need to sign in again to access your account.</p>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-cancel" @click="showLogoutConfirm = false">Cancel</button>
          <button class="btn-logout-confirm" @click="handleLogout">Yes, Logout</button>
        </div>
      </div>
    </div>
  </div>

  <!-- debug -->
  <!-- <div style="background: red; color: white; padding: 10px;">
  </div> -->

  <!-- <!- Avatar display section --> -->
  <img
    v-if="user && user.avatar"
    :src="getAvatarUrl(user.avatar)"
    alt="Avatar"
    style="width:40px;height:40px;border-radius:50%"
    @error="handleImageError"
  />

  <!-- Fallback jika tidak ada avatar -->
  <div v-else style="width:40px;height:40px;border-radius:50%;background:#ccc;"></div>

</template>

<script setup>
// Ambil username dari route atau dari token jika /profile
const getProfileUsername = () => {
  if (route.name === 'Profile') {
    const currentUser = getCurrentUser()
    return currentUser?.username || null
  }
  return route.params.username || null
}
// Deklarasi variabel reaktif hanya sekali di awal
const showFollowers = ref(false)
const showFollowing = ref(false)
const followers = ref([])
const following = ref([])
const isFollowing = ref(false)

// mainContentClass untuk layout responsif jika dipakai di template
const mainContentClass = computed(() => {
  return [
    'main-container',
    activeTab.value === 'about' ? 'about-active' : ''
  ].join(' ')
})
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
=======
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
import TopBar from './TopBar.vue'
import sidebar from './sidebar.vue'
import PostCard from './profile/PostCard.vue'
import AboutInfo from './profile/AboutInfo.vue'
<<<<<<< HEAD
import { getAvatarUrl } from '@/utils/avatar'

const route = useRoute()
const router = useRouter()
=======

// Icons
const PostsIcon = {
  template: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>`,
}

const AboutIcon = {
  template: `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
}

const tabs = [
  { id: 'posts', label: 'Posts', icon: PostsIcon },
  { id: 'about', label: 'About', icon: AboutIcon },
]

// const posts = ref([

// ])

const saveProfile = () => {
  // Simulate saving profile
  console.log('Saving profile:', editForm.value)
  showEditModal.value = false
  // Add success notification here if needed
}

const shareToSocial = (platform) => {
  const profileUrl = window.location.href
  const text = `Check out ${editForm.value.name}'s profile on GundarConnect!`

  let shareUrl = ''

  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(profileUrl)}`
      break
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`
      break
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`
      break
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
  showShareModal.value = false
}

const copyProfileLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    console.log('Profile link copied to clipboard!')
    // Add success notification here if needed
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
  showShareModal.value = false
}

onMounted(() => {
  console.log('Profile page mounted')
})

// new code for original profile
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
const user = ref(null)
const posts = ref([])
const activeTab = ref('posts')
const showEditModal = ref(false)
const showShareModal = ref(false)
<<<<<<< HEAD
const showLogoutConfirm = ref(false)
const avatarPreview = ref(null)
const editForm = ref({
  name: '',
  username: '',
  bio: '',
  major: ''
})

const tabs = [
  {
    id: 'posts',
    label: 'Posts',
    icon: 'div'
  },
  {
    id: 'about',
    label: 'About',
    icon: 'div'
  }
]

// Get current user from token
const getCurrentUser = () => {
  const token = localStorage.getItem('token')
  if (!token) return null

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    console.log('Token payload:', payload)
    return payload
  } catch (e) {
    console.error('Error parsing token:', e)
    return null
  }
}

// Fetch profile data
const fetchProfile = async () => {
  try {
    const currentUser = getCurrentUser()
    console.log('Current user from token:', currentUser)

    if (!currentUser) {
      console.log('No user token found, redirecting to login')
      router.push('/login')
      return
    }

    // Get username dari helper
    let targetUsername = getProfileUsername()
    if (targetUsername?.startsWith('@')) {
      targetUsername = targetUsername.substring(1)
    }

    // If no username in route, use current user's ID to fetch profile
    if (!targetUsername) {
      // Jika tidak ada username di route, ambil profil user saat ini
      try {
        const response = await fetch(`http://localhost:5000/api/profile/${currentUser.id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        if (data.user) {
          user.value = data.user
          posts.value = data.posts || []
          return
        } else {
          user.value = null
          posts.value = []
          return
        }
      } catch (error) {
        user.value = null
        posts.value = []
        return
      }
    }

    // Fetch profile by username
    console.log('Fetching profile for username:', targetUsername)
    const response = await fetch(`http://localhost:5000/api/profile/username/${targetUsername}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    console.log('Profile response status:', response.status)

    if (!response.ok) {
      // Jika profile tidak ditemukan, tampilkan fallback kosong
      user.value = null
      posts.value = []
      return
    }

    const data = await response.json()
    console.log('Profile data:', data)

    if (!data.user) {
      user.value = null
      posts.value = []
      return
    }
    user.value = data.user
    posts.value = data.posts || []

    // Update edit form if it's the current user's profile
    if (currentUser && data.user.id === currentUser.id) {
      editForm.value = {
        name: data.user.fullName || '',
        username: data.user.username || '',
        bio: data.user.bio || '',
        major: data.user.major || ''
      }
    }
  } catch (error) {
    console.error('Error in fetchProfile:', error)
    user.value = null
    posts.value = []
  }
}

// Check if current profile is user's own profile
const isOwnProfile = computed(() => {
  const currentUser = getCurrentUser()
  return currentUser && user.value && currentUser.id === user.value.id
})

// Watch route changes
watch(
  () => route.params.username,
  (newUsername, oldUsername) => {
    console.log('Route username changed:', { newUsername, oldUsername })
    fetchProfile()
  }
)
=======

const fetchProfile = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('Token tidak ditemukan')
    // Ambil userId dari JWT (payload)
    const payload = JSON.parse(atob(token.split('.')[1]))
    const userId = payload.id
    const res = await fetch(`http://localhost:5000/api/profile/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Gagal memuat profil')
    const data = await res.json()
    user.value = data.user
    posts.value = data.posts
    console.log('Profile data:', data)
  } catch (err) {
    user.value = null
    posts.value = []
    console.error('Profile fetch error:', err)
  }
}

const onPostDeleted = (postId) => {
  posts.value = posts.value.filter(p => p.id !== postId)
}

onMounted(fetchProfile)
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
</script>

<style scoped>
/* Layout Styles */
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #0e061a;
}

.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Profile Container - Adjusted untuk layout dengan sidebar */
.profile-container {
  flex: 1;
  overflow-y: auto;
  background: #0e061a;
  color: #ffffff;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  padding-top: 2rem; /* Mengurangi padding-top karena sudah ada TopBar */
}

.profile-header {
  position: relative;
  margin-bottom: 2rem;
}

.cover-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  border-radius: 0 0 24px 24px;
  margin-left: 100px;
}

.cover-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(14, 6, 26, 0.8) 100%);
  border-radius: 0 0 24px 24px;
}

.profile-info-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: end;
  margin-top: -60px;
  position: relative;
  z-index: 10;
}

.profile-avatar-container {
  position: relative;
}

.profile-avatar {
  position: relative;
<<<<<<< HEAD
  width: 150px;
  height: 155px;
=======
  width: 120px;
  height: 120px;
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid #0e061a;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.edit-avatar-btn {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #667eea;
  border: 2px solid #0e061a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-avatar-btn:hover {
  background: #5a6fd8;
  transform: scale(1.1);
}

.profile-details {
  padding-top: 1rem;
}

.profile-name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-username {
  color: #a0a0b8;
  margin: 0.25rem 0 1rem 0;
  font-size: 1rem;
}

.profile-bio {
  color: #e0e0e0;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  max-width: 500px;
}

.profile-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a0a0b8;
  font-size: 0.9rem;
}

.meta-item svg {
  opacity: 0.7;
}

.profile-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-top: 1rem;
<<<<<<< HEAD
  flex-wrap: wrap;
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

<<<<<<< HEAD
/* Logout Button Styles */
.btn-logout {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.btn-logout:hover {
  background: linear-gradient(135deg, #c82333, #a71e2a);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(220, 53, 69, 0.3);
}

.btn-logout svg {
  width: 18px;
  height: 18px;
}

=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
.profile-stats {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 1rem;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.stat-number {
  display: block;
  font-size: 1.75rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #a0a0b8;
  font-size: 0.9rem;
  font-weight: 500;
}

.profile-tabs {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  color: #a0a0b8;
  font-weight: 500;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
  transition: all 0.2s ease;
  position: relative;
}

.tab-btn:hover {
  color: #e0e0e0;
  background: rgba(255, 255, 255, 0.05);
}

.tab-btn.active {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 2px;
}

.tab-icon {
  width: 20px;
  height: 20px;
}

.profile-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.about-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }

  .profile-info-section {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }

  .profile-actions {
    justify-content: center;
  }

  .profile-tabs {
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s ease;
}

.modal-container {
  background: #1a0f2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(20px);
  animation: slideUp 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.modal-close {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0a0b8;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  justify-content: flex-end;
}

/* Edit Modal Specific Styles */
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  color: #e0e0e0;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.08);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.avatar-upload {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar-preview {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.upload-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.upload-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.btn-cancel {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cancel:hover {
  background: rgba(255, 255, 255, 0.15);
}

.btn-save {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-save:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

/* Share Modal Specific Styles */
.share-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.share-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.share-option:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.share-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.share-icon.twitter {
  background: #1da1f2;
}

.share-icon.linkedin {
  background: #0077b5;
}

.share-icon.facebook {
  background: #1877f2;
}

.share-icon.copy {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.profile-preview {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.preview-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
}

.preview-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.preview-info h3 {
  margin: 0 0 0.25rem 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
}

.preview-info p {
  margin: 0;
  color: #a0a0b8;
  font-size: 0.85rem;
}

<<<<<<< HEAD
/* Logout Modal Specific Styles */
.logout-modal {
  max-width: 420px;
}

.logout-content {
  text-align: center;
  padding: 1rem 0;
}

.logout-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #dc3545, #c82333);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logout-content h3 {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.logout-content p {
  color: #a0a0b8;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.btn-logout-confirm {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-logout-confirm:hover {
  background: linear-gradient(135deg, #c82333, #a71e2a);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(220, 53, 69, 0.3);
}

=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .modal-container {
    width: 95%;
    margin: 1rem;
  }

  .share-options {
    grid-template-columns: 1fr;
  }
<<<<<<< HEAD

  .profile-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-logout {
    justify-content: center;
  }
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
}
</style>
