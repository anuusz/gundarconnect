<template>
  <div class="feed-list">
    <div class="post-input">
      <input
        type="text"
        placeholder="Apa yang ingin anda tanya?"
        @click="openNewThreadModal"
        readonly
      />
    </div>
    <FeedItem v-for="post in posts" :key="post.id" :post="post" />

    <!-- Modal Popup -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <button class="cancel-btn" @click="closeModal">Cancel</button>
          <h3>New Post</h3>
          <button class="post-btn" @click="submitPost" :disabled="!newPost.trim()">Post</button>
        </div>

        <div class="modal-body">
          <div class="user-info">
            <div class="user-avatar">
              <img src="../assets/profile.png" alt="User Avatar" />
            </div>
            <div class="user-details">
              <span class="username">AdminProd</span>
            </div>
          </div>

          <div class="post-content">
            <textarea
              v-model="newPost"
              placeholder="What's new?"
              rows="4"
              class="post-textarea"
              @input="adjustTextareaHeight"
              ref="postTextarea"
            ></textarea>

            <div class="post-actions">
              <div class="action-buttons">
                <button class="action-btn" title="Add Image">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21,15 16,10 5,21"/>
                  </svg>
                </button>
                <!-- <button class="action-btn" title="Add GIF">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="6" width="20" height="12" rx="2"/>
                    <circle cx="8" cy="12" r="2"/>
                    <circle cx="16" cy="12" r="2"/>
                  </svg>
                </button> -->
                <button class="action-btn" title="Add Poll">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="20" x2="12" y2="10"/>
                    <line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                  </svg>
                </button>
                <!-- <button class="action-btn" title="Add Location">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </button> -->
              </div>
            </div>
          </div>

          <div class="privacy-setting">
            <span class="privacy-text">Anyone can reply</span>
            <button class="privacy-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import FeedItem from './FeedItem.vue'

export default {
  name: 'FeedList',
  components: {
    FeedItem,
  },
  setup() {
    const posts = ref([])
    const showModal = ref(false)
    const newPost = ref('')
    const postTextarea = ref(null)

    // Ambil feed dari backend
    const fetchPosts = async () => {
      try {
        // Hapus pengecekan token, biarkan request tanpa Authorization jika token tidak ada
        const token = localStorage.getItem('token')
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {}
        const res = await fetch('http://localhost:5000/api/posts', {
          headers
        })
        if (!res.ok) throw new Error('Gagal memuat feed')
        const data = await res.json()
        console.log('FEED DATA:', data) // Tambahkan log ini untuk debug
        posts.value = Array.isArray(data) ? data : []
      } catch (err) {
        posts.value = []
        console.error('Feed fetch error:', err)
      }
    }

    onMounted(fetchPosts)

    const openNewThreadModal = () => {
      showModal.value = true
      nextTick(() => {
        if (postTextarea.value) {
          postTextarea.value.focus()
        }
      })
    }

    const closeModal = () => {
      showModal.value = false
      newPost.value = ''
    }

    // Submit post ke backend
    const submitPost = async () => {
      if (newPost.value.trim()) {
        try {
          const token = localStorage.getItem('token')
          const res = await fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              content: newPost.value,
              image: ''
            })
          })
          if (!res.ok) throw new Error('Gagal membuat postingan')
          await fetchPosts() // Ambil ulang feed setelah post sukses
          closeModal()
        } catch (err) {
          alert(err.message || 'Gagal membuat postingan')
        }
      }
    }

    const adjustTextareaHeight = () => {
      if (postTextarea.value) {
        postTextarea.value.style.height = 'auto'
        postTextarea.value.style.height = postTextarea.value.scrollHeight + 'px'
      }
    }

    return {
      posts,
      showModal,
      newPost,
      postTextarea,
      openNewThreadModal,
      closeModal,
      submitPost,
      adjustTextareaHeight
    }
  },
}
</script>

<style scoped>
.feed-list {
  width: 50%;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  padding: 16px;
}

.post-input {
  background-color: #101238;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;
}

.post-input input {
  width: 100%;
  background-color: #2a3e6a;
  border: none;
  border-radius: 20px;
  padding: 12px 16px;
  color: white;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
}

.post-input input::placeholder {
  color: #8f8f9d;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #1a1a2e;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #2a3e6a;
}

.modal-header h3 {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.cancel-btn, .post-btn {
  background: none;
  border: none;
  color: #8f8f9d;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.post-btn {
  background-color: #007bff;
  color: white;
}

.post-btn:disabled {
  background-color: #2a3e6a;
  color: #8f8f9d;
  cursor: not-allowed;
}

.cancel-btn:hover {
  background-color: #2a3e6a;
}

.post-btn:hover:not(:disabled) {
  background-color: #0056b3;
}

.modal-body {
  padding: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.username {
  color: white;
  font-weight: 600;
  font-size: 14px;
}

.user-subtitle {
  color: #8f8f9d;
  font-size: 12px;
}

.post-content {
  margin-bottom: 16px;
}

.post-textarea {
  width: 100%;
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  font-family: inherit;
  resize: none;
  outline: none;
  min-height: 60px;
  max-height: 200px;
  overflow-y: auto;
  box-sizing: border-box;
}

.post-textarea::placeholder {
  color: #8f8f9d;
}

.post-actions {
  margin-top: 16px;
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.action-btn {
  background: none;
  border: none;
  color: #8f8f9d;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: #2a3e6a;
  color: white;
}

.privacy-setting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-top: 1px solid #2a3e6a;
}

.privacy-text {
  color: #8f8f9d;
  font-size: 14px;
}

.privacy-btn {
  background: none;
  border: none;
  color: #8f8f9d;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.privacy-btn:hover {
  background-color: #2a3e6a;
}

/* Responsive */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    margin: 20px;
  }

  .feed-list {
    width: 90%;
  }
}
</style>
