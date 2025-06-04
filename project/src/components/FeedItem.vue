<template>
  <div
    class="feed-item"
    :class="{ clickable: post.comments && post.comments.length > 0 && !post.isReply }"
  >
    <div class="feed-header">
      <div class="user-info">
        <img :src="post.avatar" alt="User Avatar" class="avatar" />
        <div>
          <div class="username">{{ post.username }}</div>
          <div class="timestamp">{{ post.timestamp }}</div>
        </div>
      </div>
      <div class="more-options">
        <span v-if="post.isReply">Balas</span>
        <span v-else>•••</span>
      </div>
    </div>

    <div class="feed-content">
      <p>{{ post.content }}</p>

      <!-- Gambar jika ada -->
      <img v-if="post.image" :src="post.image" alt="Post Image" class="post-image" />
    </div>

    <div class="feed-actions">
      <div class="action-group">
        <!-- Tombol Like -->
        <div class="action-item">
          <button class="btn" @click="toggleLike" data-label="like">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 17.503 15.625"
            >
              <path
                id="Fill"
                d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
                transform="translate(0 0)"
                :class="{ liked: isLiked }"
              ></path>
            </svg>
          </button>
          <span v-if="likeCount" class="counter">{{ likeCount }}</span>
        </div>

        <!-- Tombol Comment -->
        <div class="action-item">
          <button class="btn" @click="toggleComment" data-label="comment">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
              ></path>
            </svg>
          </button>
          <span v-if="commentCount" class="counter">{{ commentCount }}</span>
        </div>

        <!-- Tombol Share -->
        <div class="action-item">
          <button class="btn" @click="sharePost" data-label="share">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="18" cy="5" r="3" data-path="circle-top"></circle>
              <circle cx="6" cy="12" r="3" data-path="circle-left"></circle>
              <circle cx="18" cy="19" r="3" data-path="circle-bottom"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-path="line-bottom"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-path="line-top"></line>
            </svg>
          </button>
        </div>

        <!-- Tombol Saved -->
        <div class="action-item">
          <button class="btn save-btn" @click="toggleSaved" data-label="save">
            <svg
              class="save-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="white"
              fill="none"
              :class="{ saved: isSaved }"
            >
              <path
                d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                stroke-linejoin="round"
                stroke-linecap="round"
                data-path="box"
              ></path>
              <path
                d="M7 3L7 8L15 8"
                stroke-linejoin="round"
                stroke-linecap="round"
                data-path="line-top"
              ></path>
              <path
                d="M17 20L17 13L7 13L7 20"
                stroke-linejoin="round"
                stroke-linecap="round"
                data-path="line-bottom"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Komentar -->
    <div v-if="showCommentModal" class="comment-modal-overlay" @click.self="closeModal">
      <div class="comment-modal">
        <div class="comment-modal-header">
          <h2>KOMENTAR</h2>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>

        <div class="comment-modal-body">
          <!-- Daftar komentar -->
          <div v-if="post.comments && post.comments.length > 0" class="comments-list">
            <!-- Komentar item -->
            <div v-for="(comment, index) in post.comments" :key="index" class="comment-item">
              <div class="comment-avatar">
                <img :src="comment.avatar" alt="User Avatar" />
              </div>
              <div class="comment-content">
                <div class="comment-header">
                  <div class="comment-username">{{ comment.username }}</div>
                  <div class="comment-timestamp">{{ comment.timestamp }}</div>
                </div>
                <div class="comment-text">{{ comment.content }}</div>

                <!-- Action buttons untuk setiap komentar -->
                <div class="comment-actions">
                  <!-- Tombol Like untuk komentar -->
                  <div class="action-item">
                    <button class="btn" @click="toggleCommentLike(index)" data-label="like">
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 17.503 15.625"
                      >
                        <path
                          d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z"
                          transform="translate(0 0)"
                          :class="{ liked: likedComments[index] }"
                        ></path>
                      </svg>
                    </button>
                    <span v-if="commentLikes[index] > 0" class="counter">{{
                      commentLikes[index]
                    }}</span>
                  </div>

                  <!-- Tombol Reply untuk komentar -->
                  <div class="action-item">
                    <button class="btn" @click="toggleReply(index)" data-label="reply">
                      <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
                        ></path>
                      </svg>
                    </button>
                    <span v-if="commentReplies[index] > 0" class="counter">{{
                      commentReplies[index]
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="no-comments">
            Belum ada komentar. Jadilah yang pertama berkomentar!
          </div>
        </div>

        <div class="comment-modal-footer">
          <div class="comment-input-container">
            <img :src="post.avatar" alt="User Avatar" class="comment-avatar-input" />
            <div class="comment-form">
              <input
                type="text"
                v-model="newComment"
                placeholder="Komentari sebagai David Radot"
                class="comment-input"
                @keyup.enter="submitComment"
              />
              <button @click="submitComment" class="submit-comment" :disabled="!newComment.trim()">
                Kirim
              </button>
            </div>
          </div>
          <div class="action-buttons">
            <button class="cancel-btn" @click="closeModal">Batalkan</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Share -->
    <div v-if="showShareModal" class="share-modal-overlay" @click.self="closeShareModal">
      <div class="share-modal">
        <div class="share-modal-header">
          <h2>Bagikan Post</h2>
          <button class="close-btn" @click="closeShareModal">&times;</button>
        </div>

        <div class="share-modal-body">
          <div class="share-link-container">
            <label class="share-label">Salin tautan:</label>
            <div class="share-input-group">
              <input
                type="text"
                :value="shareLink"
                readonly
                class="share-input"
                ref="shareLinkInput"
              />
              <button @click="copyToClipboard" class="copy-btn" :class="{ copied: isCopied }">
                <span v-if="!isCopied">Salin</span>
                <span v-else>Tersalin!</span>
              </button>
            </div>
          </div>

          <div class="share-options">
            <div class="share-option-label">Atau bagikan ke:</div>
            <div class="share-buttons">
              <button @click="shareToWhatsApp" class="share-option-btn whatsapp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                WhatsApp
              </button>
              <button @click="shareToTwitter" class="share-option-btn twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
                Twitter
              </button>
              <button @click="shareToFacebook" class="share-option-btn facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedItem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLiked: false,
      isSaved: false,
      likeCount: this.post.likes || 0,
      commentCount: this.post.commentCount || 0,
      showComments: false,
      showCommentModal: false,
      showShareModal: false, // State untuk modal share
      newComment: '',
      shareLink: '', // Link yang akan dibagikan
      isCopied: false, // State untuk menunjukkan apakah link sudah disalin
      // Data untuk komentar
      commentLikes: {},
      commentReplies: {},
      likedComments: {},
    }
  },
  created() {
    // Tambahkan event listener untuk tombol Escape
    window.addEventListener('keydown', this.handleKeydown)

    // Generate share link berdasarkan ID post
    this.generateShareLink()

    // Inisialisasi data komentar
    if (this.post.comments) {
      this.post.comments.forEach((comment, index) => {
        this.commentLikes[index] = comment.likes || 0
        this.commentReplies[index] = comment.replies ? comment.replies.length : 0
        this.likedComments[index] = false
      })
    }
  },
  beforeUnmount() {
    // Hapus event listener saat komponen dihapus
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked

      if (this.isLiked) {
        this.likeCount++
      } else if (this.likeCount > 0) {
        this.likeCount--
      }
    },
    toggleCommentLike(commentIndex) {
      this.likedComments[commentIndex] = !this.likedComments[commentIndex]

      if (this.likedComments[commentIndex]) {
        this.commentLikes[commentIndex]++
      } else if (this.commentLikes[commentIndex] > 0) {
        this.commentLikes[commentIndex]--
      }

      console.log(`Toggle like for comment ${commentIndex}:`, this.likedComments[commentIndex])
    },
    toggleComment() {
      this.showCommentModal = !this.showCommentModal
      console.log('Toggle comment modal:', this.showCommentModal)
    },
    toggleReply(commentIndex) {
      console.log(`Toggle reply for comment ${commentIndex}`)
    },
    closeModal() {
      this.showCommentModal = false
    },
    submitComment() {
      if (this.newComment.trim() === '') return

      console.log('Submit comment:', this.newComment)
      this.newComment = ''
    },
    handleKeydown(e) {
      if (e.key === 'Escape') {
        if (this.showCommentModal) {
          this.closeModal()
        }
        if (this.showShareModal) {
          this.closeShareModal()
        }
      }
    },
    toggleSaved() {
      this.isSaved = !this.isSaved
      console.log('Saved state:', this.isSaved)
    },
    sharePost() {
      console.log('Share post clicked')
      this.showShareModal = true
    },
    closeShareModal() {
      this.showShareModal = false
      this.isCopied = false // Reset status copied
    },
    generateShareLink() {
      // Generate link berdasarkan ID post atau URL saat ini
      const postId = this.post.id || Math.random().toString(36).substr(2, 9)
      const baseUrl = window.location.origin
      this.shareLink = `${baseUrl}/post/${postId}`
    },
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.shareLink)
        this.isCopied = true

        // Reset status copied setelah 2 detik
        setTimeout(() => {
          this.isCopied = false
        }, 2000)
      } catch {
        // Fallback untuk browser yang tidak support clipboard API
        this.$refs.shareLinkInput.select()
        document.execCommand('copy')
        this.isCopied = true

        setTimeout(() => {
          this.isCopied = false
        }, 2000)
      }
    },
    shareToWhatsApp() {
      const text = encodeURIComponent(`Check out this post: ${this.shareLink}`)
      window.open(`https://wa.me/?text=${text}`, '_blank')
    },
    shareToTwitter() {
      const text = encodeURIComponent('Check out this post!')
      const url = encodeURIComponent(this.shareLink)
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
    },
    shareToFacebook() {
      const url = encodeURIComponent(this.shareLink)
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
    },
  },
}
</script>

<style scoped>
@import url('@/assets/styles/FeedItem.css');
</style>
