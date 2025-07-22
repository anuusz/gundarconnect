<template>
  <div id="app">
    <!-- Sidebar -->
    <div class="sidebar fixed">
      <ul>
        <li>
          <a href="#" class="sidebar-item" data-tooltip="Beranda" @click="goToPage('/home')">
<<<<<<< HEAD
            <i class="icon home-icon"></i>
          </a>
=======
          <i class="icon home-icon"></i>
</a>

>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
        </li>
        <li>
          <a href="#" class="sidebar-item" data-tooltip="Pencarian" @click="openSearchModal">
            <i class="icon search-icon"></i>
          </a>
        </li>
        <li>
          <a href="#" class="sidebar-item" data-tooltip="Notifikasi" @click="openNotificationModal">
            <i class="icon bell-icon"></i>
            <!-- Badge for unread notifications -->
            <span v-if="unreadCount > 0" class="notification-badge">{{ unreadCount }}</span>
          </a>
        </li>
        <li>
          <a href="#" class="sidebar-item" data-tooltip="Tersimpan" @click="goToPage('saved')">
            <i class="icon save-icon"></i>
          </a>
        </li>
      </ul>
    </div>

    <!-- Search Modal -->
    <div v-if="showSearchModal" class="search-modal-overlay" @click.self="closeSearchModal">
      <div class="search-modal">
        <!-- Modal Header -->
        <div class="search-modal-header">
          <h2>Pencarian</h2>
          <button class="close-search-btn" @click="closeSearchModal">
<<<<<<< HEAD
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
=======
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Search Input -->
        <div class="search-input-container">
          <div class="search-input-wrapper">
<<<<<<< HEAD
            <svg class="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
=======
            <svg
              class="search-input-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Cari postingan, pengguna, atau topik..."
              class="search-input"
              @input="handleSearchInput"
              ref="searchInput"
            />
            <button v-if="searchQuery" @click="clearSearch" class="clear-search-btn">
<<<<<<< HEAD
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
=======
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

<<<<<<< HEAD
        <!-- Search Results -->
        <div class="search-content">
  <div v-if="searchResults.length > 0">
    <div
      v-for="result in searchResults"
      :key="result.id"
      class="search-result-item"
      @click="goToResult(result)"
      style="cursor: pointer; padding: 12px; border-bottom: 1px solid #eee;"
    >
      <p>{{ result.content }}</p>
      <small>Penulis: {{ result.author?.fullName || 'Tidak diketahui' }}</small>
    </div>
  </div>

  <div v-else class="search-empty-state">
    <div class="empty-state-content">
      <div class="empty-state-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <h3>Mulai Pencarian</h3>
      <p>Ketik kata kunci untuk mencari postingan, pengguna, atau topik yang menarik</p>
    </div>
  </div>
</div>
=======
        <!-- Search Content -->
        <div class="search-content">
          <div class="search-empty-state">
            <div class="empty-state-content">
              <div class="empty-state-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3>Mulai Pencarian</h3>
              <p>Ketik kata kunci untuk mencari postingan, pengguna, atau topik yang menarik</p>
            </div>
          </div>
        </div>
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
      </div>
    </div>

    <!-- Notification Modal -->
<<<<<<< HEAD
    <div v-if="showNotificationModal" class="notification-modal-overlay" @click.self="closeNotificationModal">
=======
    <div
      v-if="showNotificationModal"
      class="notification-modal-overlay"
      @click.self="closeNotificationModal"
    >
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
      <div class="notification-modal">
        <!-- Modal Header -->
        <div class="notification-modal-header">
          <h2>Notifikasi</h2>
          <div class="notification-header-actions">
            <button v-if="unreadCount > 0" @click="markAllAsRead" class="mark-all-read-btn">
              Tandai Semua Dibaca
            </button>
            <button class="close-notification-btn" @click="closeNotificationModal">
<<<<<<< HEAD
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
=======
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Notification Filters -->
        <div class="notification-filters">
          <button
            v-for="filter in notificationFilters"
            :key="filter.id"
            @click="setActiveNotificationFilter(filter.id)"
            :class="['notification-filter-btn', { active: activeNotificationFilter === filter.id }]"
          >
            {{ filter.label }}
            <span v-if="filter.count > 0" class="filter-count">{{ filter.count }}</span>
          </button>
        </div>

        <!-- Notification Content -->
        <div class="notification-content">
          <!-- Loading State -->
          <div v-if="isLoadingNotifications" class="notification-loading">
            <div class="loading-spinner"></div>
            <span>Memuat notifikasi...</span>
          </div>

          <!-- Notifications List -->
          <div v-else-if="filteredNotifications.length > 0" class="notifications-list">
            <div
              v-for="notification in filteredNotifications"
              :key="notification.id"
              :class="['notification-item', { unread: !notification.isRead }]"
              @click="handleNotificationClick(notification)"
            >
              <div class="notification-avatar">
<<<<<<< HEAD
  <!-- Fixed: Gunakan getAvatarUrl helper dan fallback yang proper -->
  <img
    v-if="notification.avatar && notification.avatar !== '/api/placeholder/40/40'"
    :src="getAvatarUrl(notification.avatar)"
    :alt="notification.username"
    @error="handleAvatarError"
  />
  <div v-else class="avatar-placeholder">
    {{ (notification.username || 'U').charAt(0).toUpperCase() }}
  </div>
=======
                <img
                  :src="notification.avatar || '/api/placeholder/40/40'"
                  :alt="notification.username"
                />
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
                <!-- Notification type icon overlay -->
                <div class="notification-type-icon" :class="notification.type">
                  <svg
                    v-if="notification.type === 'like'"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                  <svg
                    v-else-if="notification.type === 'comment'"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l4 4 4-4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
                    />
                  </svg>
                  <svg
                    v-else-if="notification.type === 'follow'"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M12.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
                    />
                  </svg>
                  <svg
                    v-else-if="notification.type === 'mention'"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                    />
                  </svg>
                </div>
              </div>

              <div class="notification-content-text">
                <div class="notification-header">
                  <span class="notification-username">{{ notification.username }}</span>
                  <span class="notification-time">{{ notification.timestamp }}</span>
                </div>
                <div class="notification-message">
                  {{ notification.message }}
                </div>
                <div v-if="notification.postContent" class="notification-post-preview">
                  "{{ notification.postContent }}"
                </div>
              </div>

              <!-- Unread indicator -->
              <div v-if="!notification.isRead" class="unread-indicator"></div>

              <!-- Action buttons -->
              <div class="notification-actions">
                <button
                  v-if="!notification.isRead"
                  @click.stop="markAsRead(notification.id)"
                  class="mark-read-btn"
                  title="Tandai dibaca"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
                <button
                  @click.stop="deleteNotification(notification.id)"
                  class="delete-notification-btn"
                  title="Hapus notifikasi"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="notification-empty-state">
            <div class="empty-state-content">
              <div class="empty-state-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3>Tidak ada notifikasi</h3>
              <p>
                <span v-if="activeNotificationFilter === 'all'">
                  Anda belum memiliki notifikasi apa pun
                </span>
                <span v-else>
                  Tidak ada notifikasi
                  {{
                    notificationFilters
                      .find((f) => f.id === activeNotificationFilter)
                      ?.label.toLowerCase()
                  }}
                </span>
              </p>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div v-if="filteredNotifications.length > 5" class="notification-modal-footer">
          <button @click="loadMoreNotifications" class="load-more-btn">Muat Lebih Banyak</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import io from 'socket.io-client'
import { getAvatarUrl } from '@/utils/avatar'

export default {
  name: 'Sidebar',
=======
<<<<<<< HEAD
import { onMounted } from 'vue'
import io from 'socket.io-client'

=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
export default {
  name: 'App',
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
  data() {
    return {
      // Search modal states
      showSearchModal: false,
      searchQuery: '',
<<<<<<< HEAD
      searchResults: [],
=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c

      // Notification modal states
      showNotificationModal: false,
      activeNotificationFilter: 'all',
      isLoadingNotifications: false,
<<<<<<< HEAD
      notifications: [],
=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c

      // Notification filters
      notificationFilters: [
        { id: 'all', label: 'Semua', count: 0 },
        { id: 'like', label: 'Suka', count: 0 },
        { id: 'comment', label: 'Komentar', count: 0 },
        { id: 'follow', label: 'Mengikuti', count: 0 },
        { id: 'mention', label: 'Sebutan', count: 0 },
      ],
<<<<<<< HEAD
      socket: null
=======

      // Sample notifications data
      notifications: [
        {
          id: 1,
          type: 'like',
          username: 'Sopo',
          avatar: '/api/placeholder/40/40',
          message: 'menyukai postingan Anda',
          postContent: 'Tips mahasiswa baru yang harus diperhatikan...',
          timestamp: '2 menit lalu',
          isRead: false,
        },
        {
          id: 2,
          type: 'comment',
          username: 'jane_smith',
          avatar: '/api/placeholder/40/40',
          message: 'mengomentari postingan Anda',
          postContent: 'Tips mahasiswa baru yang harus diperhatikan...',
          timestamp: '15 menit lalu',
          isRead: false,
        },
        {
          id: 3,
          type: 'follow',
          username: 'alex_dev',
          avatar: '/api/placeholder/40/40',
          message: 'mulai mengikuti Anda',
          timestamp: '1 jam lalu',
          isRead: false,
        },
        {
          id: 4,
          type: 'mention',
          username: 'sarah_tech',
          avatar: '/api/placeholder/40/40',
          message: 'menyebut Anda dalam komentar',
          postContent: 'JavaScript framework comparison...',
          timestamp: '2 jam lalu',
          isRead: true,
        },
        {
          id: 5,
          type: 'like',
          username: 'mike_coder',
          avatar: '/api/placeholder/40/40',
          message: 'menyukai komentar Anda',
          timestamp: '3 jam lalu',
          isRead: true,
        },
        {
          id: 6,
          type: 'comment',
          username: 'lisa_designer',
          avatar: '/api/placeholder/40/40',
          message: 'mengomentari postingan Anda',
          postContent: 'UI/UX design principles...',
          timestamp: '5 jam lalu',
          isRead: true,
        },
      ],
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    }
  },
  computed: {
    unreadCount() {
      return this.notifications.filter((notif) => !notif.isRead).length
    },
    filteredNotifications() {
      if (this.activeNotificationFilter === 'all') {
        return this.notifications
      }
      return this.notifications.filter((notif) => notif.type === this.activeNotificationFilter)
    },
  },
<<<<<<< HEAD
  mounted() {
    this.loadNotifications()
    this.setupSocketIO()
    window.addEventListener('keydown', this.handleKeyboardShortcuts)
  },
  beforeUnmount() {
    if (this.socket) this.socket.disconnect()
    window.removeEventListener('keydown', this.handleKeyboardShortcuts)
  },
  methods: {
    // Import getAvatarUrl helper
    getAvatarUrl,
    // Navigation
    goToPage(path) {
      this.$router.push(path)
    },


    goToResult(result) {
      // Tutup modal pencarian terlebih dahulu
      this.closeSearchModal();

      // Arahkan ke halaman detail post
      this.$router.push(`/post/${result.id}`);
    },

=======
<<<<<<< HEAD
  mounted() {
    const token = localStorage.getItem('token')
    fetch('http://localhost:5000/api/notifications', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.ok ? res.json() : [])
      .then(notifData => {
        if (Array.isArray(notifData)) {
          this.notifications = notifData.map(n => ({
            id: n.id,
            type: n.type,
            username: n.actor?.fullName || n.actor?.username || '-',
            avatar: n.actor?.avatar || '/api/placeholder/40/40',
            message: n.message,
            postContent: n.postId ? 'Lihat post' : '',
            timestamp: new Date(n.createdAt).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short', year: 'numeric' }),
            isRead: n.isRead
          }))
        }
      })
      .catch(() => {})

    // Socket.io setup
    const userId = localStorage.getItem('userId')
    this.socket = io('http://localhost:5000', {
      auth: { token }
    })
    this.socket.on('connect', () => {
      this.socket.emit('identify', userId)
    })
    this.socket.on('notification', notif => {
      this.notifications.unshift({
        id: notif.id,
        type: notif.type,
        username: notif.actor?.fullName || notif.actor?.username || '-',
        avatar: notif.actor?.avatar || '/api/placeholder/40/40',
        message: notif.message,
        postContent: notif.postId ? 'Lihat post' : '',
        timestamp: new Date().toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short', year: 'numeric' }),
        isRead: false
      })
    })
  },
  beforeUnmount() {
    if (this.socket) this.socket.disconnect()
=======
  created() {
    // Update filter counts
    this.updateFilterCounts()

    // Event listener untuk keyboard shortcuts
    window.addEventListener('keydown', this.handleKeyboardShortcuts)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyboardShortcuts)
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  },
  methods: {
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    // Search methods
    openSearchModal() {
      this.showSearchModal = true
      this.$nextTick(() => {
<<<<<<< HEAD
        if (this.$refs.searchInput) this.$refs.searchInput.focus()
      })
    },
=======
        this.$refs.searchInput?.focus()
      })
    },

    goToPage(path) {
    this.$router.push(path);
  },

>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    closeSearchModal() {
      this.showSearchModal = false
      this.clearSearch()
    },
    clearSearch() {
      this.searchQuery = ''
<<<<<<< HEAD
      this.searchResults = []
    },
    async handleSearchInput() {
  if (this.searchQuery.trim() === '') {
    this.searchResults = []
    return
  }

  try {
    const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(this.searchQuery)}`, {
      method: 'GET',
      credentials: 'include'
    })

    if (!response.ok) throw new Error('Failed to fetch search results')

    this.searchResults = await response.json()
  } catch (error) {
    console.error('Search error:', error)
    this.searchResults = []
  }
},
=======
    },
    handleSearchInput() {
      // Search logic here
    },
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c

    // Notification methods
    openNotificationModal() {
      this.showNotificationModal = true
<<<<<<< HEAD
      this.isLoadingNotifications = true
=======
      // Mark as opened (for read status updates)
      this.isLoadingNotifications = true

      // Simulate loading
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
      setTimeout(() => {
        this.isLoadingNotifications = false
      }, 500)
    },
    closeNotificationModal() {
      this.showNotificationModal = false
    },
    setActiveNotificationFilter(filterId) {
      this.activeNotificationFilter = filterId
    },
    markAsRead(notificationId) {
      const notification = this.notifications.find((notif) => notif.id === notificationId)
      if (notification) {
        notification.isRead = true
        this.updateFilterCounts()
      }
    },
<<<<<<< HEAD
    async markAllAsRead() {
      const token = localStorage.getItem('token')
      try {
        await fetch('http://localhost:5000/api/notifications/mark-all-read', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        })
        this.notifications.forEach((notif) => {
          notif.isRead = true
        })
        this.updateFilterCounts()
      } catch (error) {
        console.error('Failed to mark all as read:', error)
      }
=======
    markAllAsRead() {
      this.notifications.forEach((notif) => {
        notif.isRead = true
      })
      this.updateFilterCounts()
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    },
    deleteNotification(notificationId) {
      this.notifications = this.notifications.filter((notif) => notif.id !== notificationId)
      this.updateFilterCounts()
    },
    handleNotificationClick(notification) {
<<<<<<< HEAD
      if (!notification.isRead) {
        this.markAsRead(notification.id)
      }
      console.log('Navigate to notification content:', notification)
      this.closeNotificationModal()
    },
    loadMoreNotifications() {
=======
      // Mark as read when clicked
      if (!notification.isRead) {
        this.markAsRead(notification.id)
      }

      // Navigate to related content
      console.log('Navigate to notification content:', notification)

      // Close modal after navigation
      this.closeNotificationModal()
    },
    loadMoreNotifications() {
      // Load more notifications from API
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
      console.log('Loading more notifications...')
    },
    updateFilterCounts() {
      this.notificationFilters.forEach((filter) => {
        if (filter.id === 'all') {
          filter.count = this.notifications.length
        } else {
          filter.count = this.notifications.filter((notif) => notif.type === filter.id).length
        }
      })
    },
    handleKeyboardShortcuts(event) {
<<<<<<< HEAD
=======
      // Open search with Ctrl/Cmd + K
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        this.openSearchModal()
      }
<<<<<<< HEAD
      if (event.key === 'Escape') {
        if (this.showSearchModal) this.closeSearchModal()
        if (this.showNotificationModal) this.closeNotificationModal()
      }
    },
=======

      // Close modals with Escape
      if (event.key === 'Escape') {
        if (this.showSearchModal) {
          this.closeSearchModal()
        }
        if (this.showNotificationModal) {
          this.closeNotificationModal()
        }
      }
    },
<<<<<<< HEAD

    // Tambahkan fungsi untuk push notifikasi dari event like, comment, follow
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    pushNotification({ type, username, avatar, message, postContent }) {
      this.notifications.unshift({
        id: Date.now(),
        type,
        username,
        avatar,
        message,
        postContent,
<<<<<<< HEAD
        timestamp: new Date().toLocaleString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        isRead: false,
      })
    },

    // Helper methods
    async loadNotifications() {
      const token = localStorage.getItem('token')
      try {
        const response = await fetch('http://localhost:5000/api/notifications', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        const notifData = await response.json()

        if (Array.isArray(notifData)) {
          this.notifications = notifData.map(n => ({
            id: n.id,
            type: n.type,
            username: n.actor?.fullName || n.actor?.username || '-',
            avatar: n.actor?.avatar || '/api/placeholder/40/40',
            message: n.message,
            postContent: n.postId ? 'Lihat post' : '',
            timestamp: new Date(n.createdAt).toLocaleString('id-ID', {
              hour: '2-digit',
              minute: '2-digit',
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            }),
            isRead: n.isRead
          }))
          this.updateFilterCounts()
        }
      } catch (error) {
        console.error('Failed to load notifications:', error)
      }
    },
    setupSocketIO() {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')

      this.socket = io('http://localhost:5000', {
        auth: { token }
      })

      this.socket.on('connect', () => {
        this.socket.emit('identify', userId)
      })

      this.socket.on('notification', notif => {
        this.notifications.unshift({
          id: notif.id,
          type: notif.type,
          username: notif.actor?.fullName || notif.actor?.username || '-',
          avatar: notif.actor?.avatar || '/api/placeholder/40/40',
          message: notif.message,
          postContent: notif.postId ? 'Lihat post' : '',
          timestamp: new Date().toLocaleString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          isRead: false
        })
        this.updateFilterCounts()
      })
    }
  }
=======
        timestamp: new Date().toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short', year: 'numeric' }),
        isRead: false,
      })
    },
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  },
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
}
</script>

<style scoped>
@import url('@/assets/styles/sidebar.css');
</style>
