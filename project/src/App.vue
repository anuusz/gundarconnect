<template>
  <div id="app">
<<<<<<< HEAD
    <RouterView />
=======
<<<<<<< HEAD
    <Sidebar />
    <div :class="mainContentClass">
      <RouterView />
    </div>
=======
    <RouterView />
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
  </div>
</template>

<script setup>
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { RouterView, useRoute } from 'vue-router'
import Sidebar from './components/sidebar.vue'
const route = useRoute()
// const mainContentClass = computed(() => {
//   return route.path === '/login' ? 'no-padding' : 'main-content'
// })
</script>

<style scoped>
.main-content {
  padding-top: 64px;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
}
.no-padding {
  padding-top: 0;
  min-height: 100vh;
  overflow: hidden;
}


=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
import { RouterView } from 'vue-router'
</script>

<style scoped>

</style>


<style scoped>
<<<<<<< HEAD
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
p {
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
<<<<<<< HEAD
</style>  
=======
</style>
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
