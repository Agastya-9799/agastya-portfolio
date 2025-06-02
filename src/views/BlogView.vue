<template>
  <div class="section-bg">
    <v-container class="py-16">
      <!-- Header Section -->
      <v-row class="mb-16">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 font-weight-bold mb-4" data-aos="fade-up">
            Blog & Publications
          </h1>
          <p class="text-h5 text-medium-emphasis" data-aos="fade-up" data-aos-delay="100">
            Technical insights on cloud security, AWS architecture, and DevSecOps
          </p>
        </v-col>
      </v-row>

      <!-- Blog Posts -->
      <v-row>
        <v-col
          v-for="post in blogPosts"
          :key="post.id"
          cols="12"
          md="6"
          class="mb-8"
        >
          <v-card
            class="blog-card h-100"
            variant="outlined"
            :data-aos="'fade-up'"
            @click="navigateToBlogPost(post.slug)"
            role="button"
          >
            <!-- Post Image -->
            <div class="blog-image-container">
              <v-img
                :src="post.image"
                height="250"
                cover
                class="blog-image"
              >
                <div class="overlay">
                  <v-chip
                    :color="getCategoryColor(post.category)"
                    variant="flat"
                    class="category-chip"
                  >
                    {{ post.category }}
                  </v-chip>
                </div>
              </v-img>
            </div>

            <v-card-text class="pa-6">
              <!-- Post Title & Description -->
              <div class="d-flex align-center mb-4">
                <v-icon icon="mdi-calendar" size="small" class="me-2"></v-icon>
                <span class="text-caption">{{ post.date }}</span>
              </div>
              
              <h3 class="text-h5 font-weight-bold mb-3">
                {{ post.title }}
              </h3>
              <p class="text-body-1 text-medium-emphasis mb-4">
                {{ post.excerpt }}
              </p>

              <!-- Read More Button -->
              <v-btn
                :to="`/blog/${post.slug}`"
                color="primary"
                variant="text"
                class="px-0"
              >
                Read more
                <v-icon icon="mdi-arrow-right" class="ms-2"></v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Author Profile -->
      <v-row class="mt-8">
        <v-col cols="12">
          <v-card class="author-card" variant="outlined" data-aos="fade-up">
            <v-card-text class="pa-6">
              <div class="d-flex flex-column flex-md-row align-md-center">
                <div class="me-6 text-center text-md-start mb-4 mb-md-0">
                  <img 
                    src="../../public/images/logo2.png" 
                    alt="AppSecEngineer Logo" 
                    width="64" 
                    height="64"
                    class="mb-2"
                  />
                </div>
                <div>
                  <h3 class="text-h6 font-weight-bold mb-2">AppSecEngineer Contributor</h3>
                  <p class="text-body-2 mb-4">
                    Find more of my technical content on cloud security, AWS architecture, and DevSecOps best practices on the AppSecEngineer platform.
                  </p>
                  <v-btn 
                    href="https://appsecengineer.com/contributor/agastya-reddy" 
                    target="_blank"
                    color="primary"
                    prepend-icon="mdi-open-in-new"
                    variant="flat"
                    size="small"
                  >
                    View Author Profile
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const blogPosts = ref([
  {
    id: 1,
    title: 'Strengthening Transactional Fraud Detection with Amazon Timestream and Amazon Neptune',
    slug: 'fraud-detection-timestream-neptune',
    date: 'June 15, 2024',
    category: 'AWS',
    image: '../../public/images/blog1.png',
    excerpt: 'Explore how combining Amazon Timestream\'s time-series capabilities with Amazon Neptune\'s graph database creates a powerful solution for detecting complex fraud patterns in financial transactions.',
  },
  {
    id: 2,
    title: 'Quantum-Safe Cryptography: Preparing for the Post-Quantum Era',
    slug: 'quantum-safe-cryptography',
    date: 'May 28, 2024',
    category: 'Security',
    image: '../../public/images/image1-28.png',
    excerpt: 'A deep dive into quantum-safe cryptography techniques and how organizations can prepare their infrastructure for the coming quantum computing revolution.',
  }
])

const getCategoryColor = (category) => {
  const colors = {
    'AWS': 'primary',
    'Security': 'error',
    'DevOps': 'success',
    'Cloud': 'info'
  }
  return colors[category] || 'secondary'
}

const navigateToBlogPost = (slug) => {
  router.push(`/blog/${slug}`)
}
</script>

<style scoped>
.blog-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px !important;
  background-color: var(--v-theme-surface);
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 188, 212, 0.3);
}

.blog-image-container {
  position: relative;
  overflow: hidden;
}

.blog-image {
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
}

.category-chip {
  font-weight: 600;
}

.author-card {
  background-color: var(--v-theme-surface);
  border: 1px solid rgba(0, 188, 212, 0.2) !important;
  border-radius: 16px !important;
}

.section-bg {
  margin-bottom: 3rem;
}
</style> 