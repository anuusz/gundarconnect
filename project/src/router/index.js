import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FeedView from '@/views/FeedView.vue'
import AboutView from '@/views/AboutView.vue'
import SavedView from '@/views/SavedView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'  // default redirect
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { title: 'Login - GundarConnect' }
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Home - GundarConnect' }
  },
<<<<<<< HEAD
  // {
  //   path: '/feed',
  //   name: 'Feed',
  //   component: FeedView,
  //   meta: { title: 'Feed - GundarConnect' }
  // },
=======
  {
    path: '/feed',
    name: 'Feed',
    component: FeedView,
    meta: { title: 'Feed - GundarConnect' }
  },
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
  {
    path: '/saved',
    name: 'Saved',
    component: SavedView,
    meta: { title: 'Saved - GundarConnect' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'About - GundarConnect' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/components/ProfilePage.vue'),
    meta: { title: 'Profile - GundarConnect' }
<<<<<<< HEAD
  },
  {
    path: '/@:username',
    name: 'UserProfile',
    component: () => import('@/components/ProfilePage.vue'),
    meta: { title: 'Profile - GundarConnect' }
  }
]


=======
  }
]

>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

<<<<<<< HEAD
// Navigation guard: redirect /profile ke /:username jika login
router.beforeEach((to, from, next) => {
  if (to.path === '/profile') {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.username) {
          return next({ name: 'UserProfile', params: { username: payload.username } });
        }
      } catch (e) {}
    }
  }
  next();
});

=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
// Set document title from route meta
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
