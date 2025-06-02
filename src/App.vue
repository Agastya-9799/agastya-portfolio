<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar
      :elevation="2"
      color="surface"
      height="80"
      fixed
    >
      <v-container class="d-flex align-center">
        <router-link to="/" class="text-decoration-none">
          <v-btn
            variant="text"
            size="large"
            class="text-h5 font-weight-bold pa-0"
            color="primary"
          >
            <v-img src="/images/logo1.png" width="40" height="40" class="mr-2"></v-img>
            <span class="name-title">Agastya Reddy</span>
          </v-btn>
        </router-link>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-block">
          <v-btn-group
            variant="text"
            class="me-4"
          >
            <v-btn
              v-for="item in navigationItems"
              :key="item.title"
              :to="item.route"
              :prepend-icon="item.icon"
              size="large"
              class="nav-btn mx-1"
              color="primary"
            >
              {{ item.title }}
            </v-btn>
          </v-btn-group>
        </div>

        <!-- Theme Toggle -->
        <v-btn
          @click="toggleTheme"
          icon
          variant="text"
          size="large"
          class="me-2"
        >
          <v-icon :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"></v-icon>
        </v-btn>

        <!-- Mobile Menu -->
        <v-btn
          class="d-md-none"
          @click="drawer = !drawer"
          icon
          variant="text"
          size="large"
        >
          <v-icon icon="mdi-menu"></v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="300"
    >
      <v-list class="py-4">
        <v-list-item
          v-for="item in navigationItems"
          :key="item.title"
          :to="item.route"
          :prepend-icon="item.icon"
          :title="item.title"
          class="mb-2"
          @click="drawer = false"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-surface mt-16">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <div class="text-h6 mb-2">Let's Connect</div>
            <div class="d-flex justify-center mb-4">
              <v-btn
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                icon
                variant="text"
                size="large"
                class="social-icon mx-2"
                :color="social.color"
              >
                <v-icon :icon="social.icon"></v-icon>
              </v-btn>
            </div>
            <div class="text-body-2 text-medium-emphasis">
              © {{ new Date().getFullYear() }} Agastya. Built with Vue.js & Vuetify.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const drawer = ref(false)

const navigationItems = [
  { title: 'Home', route: '/', icon: 'mdi-home' },
  { title: 'About', route: '/about', icon: 'mdi-account' },
  { title: 'Experience', route: '/experience', icon: 'mdi-briefcase' },
  { title: 'Projects', route: '/projects', icon: 'mdi-code-braces' },
  { title: 'Contact', route: '/contact', icon: 'mdi-email' },
]

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/agastya-reddy-630a0a238/', icon: 'mdi-linkedin', color: 'primary' },
  { name: 'Twitter', url: 'https://twitter.com/agastya9799', icon: 'mdi-twitter', color: 'info' },
  { name: 'Email', url: 'mailto:katamreddyagastya@gmail.com', icon: 'mdi-email', color: 'success' },
]

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>
.v-app-bar {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.name-title {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  background: linear-gradient(45deg, #00BCD4, #FF4081);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-btn {
  font-weight: 600 !important;
  color: rgb(var(--v-theme-primary)) !important;
  transition: transform 0.2s ease;
  position: relative;
}

.nav-btn:hover, .nav-btn.router-link-active {
  transform: translateY(-2px);
  opacity: 1 !important;
}

.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #00BCD4, #FF4081);
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-btn:hover::after, .nav-btn.router-link-active::after {
  width: 80%;
  left: 10%;
}

/* Enhance visibility for light mode */
:root {
  --text-light-mode: rgba(0, 0, 0, 0.87);
  --text-dark-mode: rgba(255, 255, 255, 0.87);
}

.v-theme--light .nav-btn {
  color: var(--text-light-mode) !important;
}

.v-theme--dark .nav-btn {
  color: var(--text-dark-mode) !important;
}

/* Enhance visibility for social icons in light mode */
.v-theme--light .v-footer .v-btn {
  color: var(--text-light-mode) !important;
}

.v-theme--dark .v-footer .v-btn {
  color: var(--text-dark-mode) !important;
}

.social-icon {
  transition: transform 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 5px;
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.1);
  opacity: 1 !important;
}

/* Mobile optimizations */
@media (max-width: 600px) {
  .name-title {
    font-size: 1.2rem;
  }
}
</style>
