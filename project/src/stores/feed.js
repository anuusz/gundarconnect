// stores/feed.js
import { defineStore } from 'pinia'

export const useFeedStore = defineStore('feed', {
  state: () => ({
    posts: [
      {
        id: 1,
        username: 'Dewil Braöll Official',
        avatar: '/src/assets/profile.png', // Gunakan path yang sesuai
        timestamp: 'Hari ini, Pukul 22:00',
        content:
          'Apa sih yang harus diperhatikan kita sebagai Maba?\n\nBro, gue kan baru jadi maba nih, apa sih yang perlu dipersiapain biar ngga kagok sama kehidupan kampus? Tips tips dari senior dong, kayak harus aktif di organisasi, cara cari wactu, tutor untuk maba, bawa apa aja, topik topik yang sering dibahas topik topik yang kagok gimana? Apa tips survival jadi mahasiswa dari matab?',
        likes: 4,
        commentCount: 1,
        comments: [
          {
            id: 101,
            username: 'Henri UG',
            avatar: '/src/assets/profile.png', // Gunakan path yang sesuai
            timestamp: 'Hari ini, Pukul 21:00',
            content: 'Selamat Hari raya Idul Fitri Semuanya!!',
            image: '/src/assets/gundar.png', // Gunakan path yang sesuai atau ganti dengan gambar dari asset Anda
            likes: 2,
            commentCount: 0,
            comments: [],
          },
        ],
      },
      {
        id: 2,
        username: 'Rahmad Darmawan',
        avatar: '/src/assets/profile.png', // Gunakan path yang sesuai
        timestamp: 'Kemarin, Pukul 18:30',
        content:
          'Halo teman-teman, ada yang punya rekomendasi laptop untuk pemrograman dengan budget 10 juta?',
        likes: 8,
        commentCount: 3,
        comments: [
          {
            id: 201,
            username: 'Yoga Pratama',
            avatar: '/src/assets/profile.png', // Gunakan path yang sesuai
            timestamp: 'Kemarin, Pukul 19:00',
            content:
              'Coba lihat Lenovo ThinkPad atau HP Probook, bagus untuk coding dan tahan lama.',
            likes: 3,
            commentCount: 0,
            comments: [],
          },
          {
            id: 202,
            username: 'Dian Sastro',
            avatar: '/src/assets/profile.png', // Gunakan path yang sesuai
            timestamp: 'Kemarin, Pukul 19:15',
            content: 'Asus Vivobook juga bisa jadi pilihan kalau cari yang lebih ringan.',
            likes: 1,
            commentCount: 0,
            comments: [],
          },
        ],
      },
      {
        id: 3,
        username: 'Budi Santoso',
        avatar: '/src/assets/profile.png', // Gunakan path yang sesuai
        timestamp: '2 hari yang lalu, Pukul 09:45',
        content: 'Guys, ada yang tau cara paling efektif untuk belajar JavaScript dari nol?',
        image: '/src/assets/logo.svg', // Gunakan path yang sesuai
        likes: 15,
        commentCount: 4,
        comments: [
          {
            id: 301,
            username: 'Dewi Lestari',
            avatar: '/src/assets/profile.png', // Gunakan path yang sesuai
            timestamp: '2 hari yang lalu, Pukul 10:30',
            content: 'Coba ikuti kelas di freecodecamp.org, materinya lengkap dan gratis.',
            likes: 7,
            commentCount: 0,
            comments: [],
          },
        ],
      },
    ],
  }),

  getters: {
    getPosts: (state) => () => {
      return state.posts
    },

    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id)
    },
  },

  actions: {
    // Menambahkan post baru
    addPost(post) {
      this.posts.unshift({
        id: this.posts.length + 1,
        ...post,
        timestamp: this.getCurrentTimestamp(),
        likes: 0,
        commentCount: 0,
        comments: [],
      })
    },

    // Menambahkan komentar ke post
    addComment(postId, comment) {
      const post = this.posts.find((p) => p.id === postId)
      if (post) {
        post.comments.push({
          id: Date.now(),
          ...comment,
          timestamp: this.getCurrentTimestamp(),
          likes: 0,
          commentCount: 0,
          comments: [],
        })
        post.commentCount = post.comments.length
      }
    },

    // Toggle like pada post
    toggleLike(postId) {
      const post = this.posts.find((p) => p.id === postId)
      if (post) {
        // Sebenarnya di aplikasi nyata, kita perlu menyimpan user mana yang sudah like
        // Untuk contoh sederhana, kita hanya increment/decrement jumlah like
        post.likes = post.likes ? post.likes + 1 : 1
      }
    },

    // Helper untuk mendapatkan timestamp
    getCurrentTimestamp() {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      return `Hari ini, Pukul ${hours}:${minutes}`
    },
  },
})
