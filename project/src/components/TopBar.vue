<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <img src="@/assets/connect.png" alt="Logo" class="logo" />
    </div>
    <div class="top-bar-right">
      <a href="#" class="profile-link" @click.prevent="handleProfileClick">
        <img :src="userAvatar" alt="User" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { getAvatarUrl } from '@/utils/avatar'

const router = useRouter()

// Get current user info from token
const getCurrentUser = () => {
  const token = localStorage.getItem('token')
  if (!token) return null

  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    console.error('Error parsing token:', e)
    return null
  }
}

// Computed: User avatar
const userAvatar = computed(() => {
  const user = getCurrentUser()
  return user?.avatar ? getAvatarUrl(user.avatar) : '/src/assets/profile.png'
})  // Handle profile click
const handleProfileClick = () => {
  const user = getCurrentUser()
  if (!user) {
    router.push('/login')
    return
  }

  // Redirect to user profile using their username
  router.push(`/@${user.username}`)
}
</script>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0e061a;
  color: #fff;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100px; /* Menambahkan tinggi tetap berdasarkan ukuran logo */
}
.top-bar-left {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 350px;
  margin-left: 350px;
  width: 165px;
  height: 100px;
}

/* .search-input {
  padding: 10px;
  border: none;
  border-radius: 20px;
  width: 300px;
  font-size: 14px;
} */

.top-bar-right .avatar {
  width: 45px; /* Avatar size */
  height: 45px;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 10px;
}
</style>
