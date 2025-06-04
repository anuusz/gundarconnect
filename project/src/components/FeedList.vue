<template>
  <div class="feed-list">
    <div class="post-input">
      <input type="text" placeholder="Apa yang ingin anda tanya?" />
    </div>

    <FeedItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { useFeedStore } from '@/stores/feed' // Pastikan path ini sesuai
import { computed } from 'vue'
// import { useStore } from 'pinia'
import FeedItem from './FeedItem.vue'

export default {
  name: 'FeedList',
  components: {
    FeedItem,
  },
  setup() {
    const feedStore = useFeedStore()

    // Ambil data post dari getter store
    const posts = computed(() => feedStore.getPosts())

    return {
      posts,
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
}

.post-input input::placeholder {
  color: #8f8f9d;
}
</style>
