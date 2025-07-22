<template>
  <div class="saved-container">
    <div class="saved-header">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
      <!-- <h1>Postingan Tersimpan</h1> -->
      <div class="filter-options">
        <!-- <select v-model="sortOption" class="sort-select">
          <option value="newest">Terbaru</option>
          <option value="oldest">Terlama</option>
          <option value="popular">Paling Populer</option>
        </select> -->
        <div class="view-toggle">
          <!-- <button :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">
            <i class="fa fa-list"></i>
          </button>
          <button :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">
            <i class="fa fa-th"></i> -->
          <!-- </button> -->
        </div>
      </div>
    </div>
    <TopBar />
<<<<<<< HEAD
=======
=======
      <h1>Postingan Tersimpan</h1>
      <div class="filter-options">
        <select v-model="sortOption" class="sort-select">
          <option value="newest">Terbaru</option>
          <option value="oldest">Terlama</option>
          <option value="popular">Paling Populer</option>
        </select>
        <div class="view-toggle">
          <button :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">
            <i class="fa fa-list"></i>
          </button>
          <button :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">
            <i class="fa fa-th"></i>
          </button>
        </div>
      </div>
    </div>

>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    <SavedList />
    <Sidebar />

  </div>
</template>

<script setup>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
import { computed, ref, onMounted } from 'vue'
import { useSavedStore } from '@/stores/saved'
import SavedList from '@/components/SavedList.vue'
import SavedItem from '@/components/SavedItem.vue'
import Sidebar from '@/components/sidebar.vue'
import TopBar from '@/components/TopBar.vue'


const savedStore = useSavedStore()
<<<<<<< HEAD
=======
=======
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import SavedList from '@/components/SavedList.vue'
import SavedItem from '@/components/SavedItem.vue'
import Sidebar from '@/components/sidebar.vue'


const store = useStore()

>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
const viewMode = ref('list') // 'list' atau 'grid'
const sortOption = ref('newest')
const selectedFolder = ref(null)
const showAddFolderModal = ref(false)
const hasFolders = ref(false)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
const folders = ref([])

const savedPosts = computed(() => savedStore.savedPosts)

const filteredSavedPosts = computed(() => {
  let result = [...savedPosts.value]
  if (selectedFolder.value) {
    result = result.filter((post) => post.folderId === selectedFolder.value)
  }
<<<<<<< HEAD
=======
=======

const folders = ref([
  // Contoh data folder
  // { id: 1, name: 'Tutorial', postCount: 5 },
  // { id: 2, name: 'Inspirasi', postCount: 3 }
])

const savedPosts = computed(() => store.state.saved.savedPosts)

const filteredSavedPosts = computed(() => {
  let result = [...savedPosts.value]

  if (selectedFolder.value) {
    result = result.filter((post) => post.folderId === selectedFolder.value)
  }

>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
  switch (sortOption.value) {
    case 'newest':
      return result.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt))
    case 'oldest':
      return result.sort((a, b) => new Date(a.savedAt) - new Date(b.savedAt))
    case 'popular':
      return result.sort((a, b) => b.likes - a.likes)
    default:
      return result
  }
})

function removeFromSaved(postId) {
<<<<<<< HEAD
  savedStore.unsavePost(postId)
=======
<<<<<<< HEAD
  savedStore.unsavePost(postId)
=======
  store.dispatch('saved/removeSavedPost', postId)
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
}

function selectFolder(folderId) {
  selectedFolder.value = folderId
}

function createNewFolder(folderName) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
  // Implement folder creation if needed
  showAddFolderModal.value = false
}

onMounted(() => {
  savedStore.fetchSavedPosts()
})
<<<<<<< HEAD
=======
=======
  store.dispatch('saved/addFolder', folderName)
  showAddFolderModal.value = false
}
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
</script>

<style scoped>
.saved-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.saved-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;
  padding-bottom: 15px;
}

.saved-header h1 {
  margin: 0;
  color: #f0f0f0;
}

.filter-options {
  display: flex;
  gap: 15px;
  align-items: center;
}

.sort-select {
  background-color: #2a2a36;
  color: #f0f0f0;
  border: 1px solid #444;
  padding: 8px 12px;
  border-radius: 4px;
}

.view-toggle button {
  background-color: transparent;
  border: 1px solid #444;
  color: #999;
  padding: 8px 10px;
  cursor: pointer;
}

.view-toggle button.active {
  background-color: #444;
  color: #fff;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-state img {
  max-width: 150px;
  margin-bottom: 20px;
  opacity: 0.7;
}

.empty-state h2 {
  margin-bottom: 10px;
  color: #f0f0f0;
}

.empty-state p {
  color: #999;
  margin-bottom: 20px;
}

.explore-button {
  display: inline-block;
  background-color: #4a6fa5;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
}

.folders-section {
  margin-bottom: 30px;
}

.folders-container {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 10px 0;
}

.folder-item {
  background-color: #2a2a36;
  border-radius: 8px;
  padding: 15px;
  min-width: 120px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.folder-item:hover {
  background-color: #3a3a46;
}

.folder-icon {
  font-size: 24px;
  margin-bottom: 10px;
  color: #4a6fa5;
}

.folder-name {
  font-weight: 500;
  margin-bottom: 5px;
}

.folder-count {
  font-size: 12px;
  color: #888;
}

.add-folder {
  border: 2px dashed #444;
  background-color: transparent;
}

.saved-posts-container.list {
  display: block;
}

.saved-posts-container.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
</style>
