<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <img src="@/assets/connect.png" alt="Logo" class="logo" />
    </div>
    <div class="top-bar-right">
      <router-link to="/profile" class="profile-link">
        <img src="@/assets/profile.png" alt="User" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
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
