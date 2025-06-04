// Struktur store untuk mengelola postingan tersimpan
export default {
  namespaced: true,

  state: {
    savedPosts: demoSavedPosts, // Data awal (untuk demo)
    folders: [
      { id: 1, name: 'Tutorial', postCount: 1 },
      { id: 2, name: 'Kampus', postCount: 1 },
      { id: 3, name: 'Teknologi', postCount: 1 },
    ],
  },

  mutations: {
    // Menambahkan postingan ke daftar tersimpan
    ADD_SAVED_POST(state, post) {
      // Tambahkan property savedAt untuk menandai waktu penyimpanan
      const savedPost = {
        ...post,
        savedAt: new Date().toISOString(),
      }

      // Cek apakah postingan sudah ada di daftar tersimpan
      const existingIndex = state.savedPosts.findIndex((p) => p.id === post.id)

      if (existingIndex === -1) {
        // Jika belum ada, tambahkan ke array
        state.savedPosts.unshift(savedPost)
      }
    },

    // Menghapus postingan dari daftar tersimpan
    REMOVE_SAVED_POST(state, postId) {
      state.savedPosts = state.savedPosts.filter((post) => post.id !== postId)
    },

    // Memperbarui detail postingan tersimpan
    UPDATE_SAVED_POST(state, { postId, data }) {
      const index = state.savedPosts.findIndex((post) => post.id === postId)
      if (index !== -1) {
        state.savedPosts[index] = { ...state.savedPosts[index], ...data }
      }
    },

    // Menambahkan folder baru
    ADD_FOLDER(state, folderName) {
      const newId = state.folders.length ? Math.max(...state.folders.map((f) => f.id)) + 1 : 1
      state.folders.push({
        id: newId,
        name: folderName,
        postCount: 0,
      })
    },

    // Mengatur folder untuk postingan
    SET_POST_FOLDER(state, { postId, folderId }) {
      const postIndex = state.savedPosts.findIndex((post) => post.id === postId)
      if (postIndex !== -1) {
        // Kurangi jumlah postingan di folder lama jika ada
        const oldFolderId = state.savedPosts[postIndex].folderId
        if (oldFolderId) {
          const oldFolderIndex = state.folders.findIndex((f) => f.id === oldFolderId)
          if (oldFolderIndex !== -1) {
            state.folders[oldFolderIndex].postCount--
          }
        }

        // Update folder baru untuk postingan
        state.savedPosts[postIndex].folderId = folderId

        // Tambahkan jumlah postingan di folder baru
        const newFolderIndex = state.folders.findIndex((f) => f.id === folderId)
        if (newFolderIndex !== -1) {
          state.folders[newFolderIndex].postCount++
        }
      }
    },
  },

  actions: {
    // Menyimpan postingan
    savePost({ commit }, post) {
      commit('ADD_SAVED_POST', post)
    },

    // Menghapus postingan dari tersimpan
    removeSavedPost({ commit }, postId) {
      commit('REMOVE_SAVED_POST', postId)
    },

    // Memperbarui detail postingan tersimpan
    updateSavedPost({ commit }, payload) {
      commit('UPDATE_SAVED_POST', payload)
    },

    // Menambahkan folder baru
    addFolder({ commit }, folderName) {
      commit('ADD_FOLDER', folderName)
    },

    // Mengatur folder untuk postingan
    setPostFolder({ commit }, payload) {
      commit('SET_POST_FOLDER', payload)
    },
  },

  getters: {
    // Mendapatkan semua postingan tersimpan
    getAllSavedPosts(state) {
      return state.savedPosts
    },

    // Mendapatkan postingan tersimpan berdasarkan ID
    getSavedPostById: (state) => (id) => {
      return state.savedPosts.find((post) => post.id === id)
    },

    // Mendapatkan postingan tersimpan berdasarkan folder
    getSavedPostsByFolder: (state) => (folderId) => {
      return state.savedPosts.filter((post) => post.folderId === folderId)
    },

    // Mendapatkan semua folder
    getAllFolders(state) {
      return state.folders
    },
  },
} // saved.js - Vuex store untuk mengelola postingan tersimpan

// Data awal untuk demo
const demoSavedPosts = [
  {
    id: 'post1',
    title: 'Tips Survival Jadi Mahasiswa Baru',
    content:
      'Semester pertama kuliah bisa jadi menantang bagi banyak mahasiswa baru. Berikut adalah beberapa tips yang bisa membantu Anda beradaptasi: Pertama, buatlah jadwal belajar yang konsisten. Kedua, jangan ragu bergabung dengan organisasi kampus untuk memperluas jaringan. Ketiga, manfaatkan sumber daya kampus seperti perpustakaan dan lab...',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 hari lalu
    savedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 hari lalu
    author: {
      username: 'SeniorPintar',
      avatar: '../assets/avatar1.png',
    },
    likes: 45,
    comments: 12,
    tags: ['mahasiswa baru', 'tips kuliah', 'kampus'],
  },
  {
    id: 'post2',
    title: 'Rekomendasi Laptop Programmer Budget 10 Juta',
    content:
      'Bagi programmer pemula atau mahasiswa IT, memiliki laptop yang andal namun tetap terjangkau adalah kebutuhan penting. Berikut beberapa rekomendasi laptop dengan budget 10 juta yang cocok untuk programming: 1. Acer Swift 3, 2. Lenovo IdeaPad Slim 3, 3. ASUS VivoBook 14...',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 hari lalu
    savedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 hari lalu
    author: {
      username: 'TechReviewer',
      avatar: '../assets/avatar2.png',
    },
    likes: 78,
    comments: 34,
    tags: ['laptop', 'programming', 'teknologi', 'review'],
  },
  {
    id: 'post3',
    title: 'Cara Efektif Belajar JavaScript untuk Pemula',
    content:
      'JavaScript adalah bahasa pemrograman yang wajib dikuasai untuk pengembangan web modern. Artikel ini akan membahas langkah-langkah efektif untuk belajar JavaScript dari nol hingga mahir. Mulai dari konsep dasar, DOM manipulation, hingga framework populer...',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 hari lalu
    savedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 hari lalu
    image: '../assets/javascript-tutorial.png',
    author: {
      username: 'WebDevMaster',
      avatar: '../assets/avatar3.png',
    },
    likes: 126,
    comments: 28,
    tags: ['javascript', 'programming', 'web development', 'tutorial'],
  },
]
