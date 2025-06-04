import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeedView from '../views/FeedView.vue'
import AboutView from '../views/AboutView.vue'
import SavedView from '@/views/SavedView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView,
    },
    {
      path: '/saved',
      name: 'saved',
      component: SavedView, // Tambahkan rute untuk halaman Saved
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../components/ProfilePage.vue'),
    },
  ],
})

export default router
