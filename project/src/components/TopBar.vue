<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <img src="@/assets/connect.png" alt="Logo" class="logo" />
    </div>
    <div class="top-bar-right">
      <a href="#" class="profile-link" @click.prevent="handleProfileClick">
        <!-- Fixed: Gunakan fallback jika tidak ada avatar -->
        <img v-if="userAvatar && userAvatar !== '/src/assets/profile.png'"
             :src="userAvatar"
             alt="User"
             class="avatar"
             @error="handleAvatarError" />
        <div v-else class="avatar-placeholder">
          {{ (username || 'U').charAt(0).toUpperCase() }}
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAvatarUrl } from '@/utils/avatar'

const router = useRouter()

// Reactive user data
const userData = ref(null)

// Get current user info from localStorage (lebih reliable)
const getCurrentUser = () => {
  try {
    // Coba ambil dari localStorage dulu (data lengkap)
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }

    // Fallback ke token (data minimal)
    const token = localStorage.getItem('token')
    if (!token) return null

    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    console.error('Error getting user:', e)
    return null
  }
}

// Fetch fresh user data from API
const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) return

    const response = await fetch(`http://localhost:5000/api/users/profile`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })

    if (response.ok) {
      const user = await response.json()
      userData.value = user
      // Update localStorage dengan data terbaru
      localStorage.setItem('user', JSON.stringify(user))
    }
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}

// Computed: User avatar
const userAvatar = computed(() => {
  const user = userData.value || getCurrentUser()
  if (!user?.avatar) return null

  return getAvatarUrl(user.avatar)
})

// Computed: Username for placeholder
const username = computed(() => {
  const user = userData.value || getCurrentUser()
  return user?.fullName || user?.username || 'User'
})

// Handle avatar error
const handleAvatarError = (event) => {
  event.target.style.display = 'none'
  // Show placeholder instead
}

// Handle profile click
const handleProfileClick = () => {
  const user = userData.value || getCurrentUser()
  if (!user) {
    router.push('/login')
    return
  }

  // Redirect to user profile using their username
  router.push(`/@${user.username}`)
}

// Load user data on mount
onMounted(() => {
  userData.value = getCurrentUser()
  fetchUserData() // Fetch fresh data
})
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
  height: 100px;
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

.top-bar-right .avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 10px;
  object-fit: cover;
}

/* Avatar placeholder untuk TopBar */
.avatar-placeholder {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #64b5f6, #42a5f5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
  margin-bottom: 10px;
}
</style>
