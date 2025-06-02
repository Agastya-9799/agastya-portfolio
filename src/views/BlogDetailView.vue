<template>
  <v-container class="py-16">
    <v-row>
      <v-col cols="12">
        <v-btn to="/blog" prepend-icon="mdi-arrow-left" variant="text" class="mb-6">
          Back to Blog
        </v-btn>
      </v-col>
    </v-row>

    <div v-if="blog" class="section-bg pa-6">
      <!-- Blog Header -->
      <v-row>
        <v-col cols="12">
          <!-- Category & Date -->
          <div class="d-flex flex-wrap align-center mb-4">
            <v-chip :color="getCategoryColor(blog.category)" class="me-4 mb-2">{{ blog.category }}</v-chip>
            <div class="d-flex align-center mb-2">
              <v-icon icon="mdi-calendar" size="small" class="me-2"></v-icon>
              <span class="text-caption">{{ blog.date }}</span>
            </div>
          </div>

          <!-- Title -->
          <h1 class="text-h3 font-weight-bold mb-6">{{ blog.title }}</h1>

          <!-- Featured Image -->
          <v-img
            :src="blog.image"
            :alt="blog.title"
            height="400"
            class="rounded-lg mb-8"
            cover
          ></v-img>
        </v-col>
      </v-row>

      <!-- Blog Content -->
      <v-row>
        <v-col cols="12" lg="8">
          <div class="blog-content">
            <template v-if="blog.slug === 'fraud-detection-timestream-neptune'">
              <p class="text-body-1 mb-4">
                Financial fraud detection is a complex challenge that requires analyzing vast amounts of data across multiple dimensions. Traditional approaches often struggle with the scale and complexity of modern financial transactions. In this article, we'll explore how combining Amazon Timestream's time-series capabilities with Amazon Neptune's graph database creates a powerful solution for detecting complex fraud patterns.
              </p>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">The Challenge of Modern Fraud Detection</h2>

              <p class="text-body-1 mb-4">
                Today's financial fraud is increasingly sophisticated, involving complex networks of transactions designed to evade traditional detection methods. Fraudsters exploit timing patterns, create elaborate transaction networks, and employ identity theft to mask their activities. Effective fraud detection requires:
              </p>

              <ul class="ml-4 mb-6">
                <li class="mb-2">Analyzing temporal patterns and anomalies</li>
                <li class="mb-2">Understanding relationships between entities</li>
                <li class="mb-2">Processing massive transaction volumes in near real-time</li>
                <li class="mb-2">Minimizing false positives while maximizing fraud detection</li>
              </ul>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">Amazon Timestream: Temporal Pattern Detection</h2>

              <p class="text-body-1 mb-4">
                Amazon Timestream is a purpose-built time series database service that makes it easy to store and analyze trillions of time series data points per day. Its key advantages for fraud detection include:
              </p>

              <v-card class="content-card mb-6 pa-4" variant="outlined">
                <h3 class="text-h6 font-weight-bold mb-2">Key Timestream Features:</h3>
                <ul class="ml-4">
                  <li class="mb-2"><strong>Automatic data lifecycle management</strong> - hot and cold storage tiers</li>
                  <li class="mb-2"><strong>Time series-specific query engine</strong> - optimized for temporal analytics</li>
                  <li class="mb-2"><strong>Scalable ingestion</strong> - handles millions of points per second</li>
                  <li class="mb-2"><strong>Purpose-built functions</strong> - for time series anomaly detection</li>
                </ul>
              </v-card>

              <p class="text-body-1 mb-4">
                Timestream excels at detecting anomalies in transaction timing, frequency, and amounts. By analyzing historical patterns, it can flag deviations that may indicate fraudulent activity.
              </p>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">Amazon Neptune: Relationship Analysis</h2>

              <p class="text-body-1 mb-4">
                Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it easy to build and run applications that work with highly connected datasets. For fraud detection, Neptune provides:
              </p>

              <v-card class="content-card mb-6 pa-4" variant="outlined">
                <h3 class="text-h6 font-weight-bold mb-2">Key Neptune Features:</h3>
                <ul class="ml-4">
                  <li class="mb-2"><strong>Relationship modeling</strong> - captures complex transaction networks</li>
                  <li class="mb-2"><strong>Pattern matching</strong> - identifies known fraud schemes</li>
                  <li class="mb-2"><strong>Path analysis</strong> - traces money flows through multiple accounts</li>
                  <li class="mb-2"><strong>Community detection</strong> - reveals hidden relationships between entities</li>
                </ul>
              </v-card>

              <p class="text-body-1 mb-4">
                Neptune shines in identifying complex fraud networks by analyzing relationships between accounts, transactions, and entities. This capability is crucial for detecting sophisticated schemes involving multiple parties.
              </p>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">Integration Architecture</h2>

              <p class="text-body-1 mb-4">
                The power of combining these services comes from their complementary strengths. Here's a high-level architecture:
              </p>

              <ol class="ml-4 mb-6">
                <li class="mb-2"><strong>Data Ingestion:</strong> Transaction data flows through Amazon Kinesis to both Timestream and Neptune</li>
                <li class="mb-2"><strong>Temporal Analysis:</strong> Timestream processes time-based patterns and anomalies</li>
                <li class="mb-2"><strong>Relationship Analysis:</strong> Neptune examines entity relationships and transaction networks</li>
                <li class="mb-2"><strong>Fraud Scoring:</strong> AWS Lambda functions combine insights from both services</li>
                <li class="mb-2"><strong>Alert Generation:</strong> High-risk transactions trigger alerts via Amazon SNS</li>
              </ol>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">Conclusion</h2>

              <p class="text-body-1 mb-4">
                The combination of Amazon Timestream and Amazon Neptune creates a powerful platform for modern fraud detection that addresses both temporal patterns and relationship analysis. This approach enables financial institutions to detect more sophisticated fraud schemes while reducing false positives.
              </p>

              <p class="text-body-1 mb-4">
                By leveraging the strengths of both services, organizations can build fraud detection systems that are more effective, scalable, and adaptable to evolving threats.
              </p>
            </template>

            <template v-else-if="blog.slug === 'quantum-safe-cryptography'">
              <p class="text-body-1 mb-4">
                Quantum computing represents both a revolutionary advancement in computational capability and a significant threat to our current cryptographic infrastructure. This article explores quantum-safe cryptography approaches and how organizations can prepare for a post-quantum world.
              </p>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">The Quantum Threat to Cryptography</h2>

              <p class="text-body-1 mb-4">
                Classical computers struggle with certain mathematical problems that form the foundation of today's public-key cryptography. These include integer factorization (RSA) and discrete logarithm problems (ECC, DSA, DH). Quantum computers, however, can use Shor's algorithm to solve these problems efficiently, potentially breaking:
              </p>

              <ul class="ml-4 mb-6">
                <li class="mb-2">RSA encryption and signatures</li>
                <li class="mb-2">Elliptic Curve Cryptography (ECC)</li>
                <li class="mb-2">Diffie-Hellman key exchange</li>
                <li class="mb-2">DSA signature schemes</li>
              </ul>

              <p class="text-body-1 mb-4">
                While large-scale quantum computers capable of breaking these algorithms don't exist yet, the threat is real enough that organizations need to begin migration planning now.
              </p>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">Post-Quantum Cryptographic Approaches</h2>

              <p class="text-body-1 mb-4">
                NIST's Post-Quantum Cryptography Standardization process has identified several promising approaches that resist quantum attacks:
              </p>

              <v-card class="content-card mb-6 pa-4" variant="outlined">
                <h3 class="text-h6 font-weight-bold mb-2">Quantum-Resistant Algorithms:</h3>
                <ul class="ml-4">
                  <li class="mb-2"><strong>Lattice-based cryptography</strong> - CRYSTALS-Kyber (encryption) and CRYSTALS-Dilithium (signatures)</li>
                  <li class="mb-2"><strong>Hash-based signatures</strong> - SPHINCS+</li>
                  <li class="mb-2"><strong>Code-based cryptography</strong> - Classic McEliece</li>
                  <li class="mb-2"><strong>Multivariate cryptography</strong> - Rainbow</li>
                </ul>
              </v-card>

              <p class="text-body-1 mb-4">
                These algorithms rely on mathematical problems that quantum computers cannot solve efficiently, providing protection against both classical and quantum attacks.
              </p>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">Preparing for the Quantum Transition</h2>

              <p class="text-body-1 mb-4">
                Organizations should follow a phased approach to quantum readiness:
              </p>

              <ol class="ml-4 mb-6">
                <li class="mb-2"><strong>Inventory:</strong> Identify all systems using vulnerable cryptographic algorithms</li>
                <li class="mb-2"><strong>Risk Assessment:</strong> Evaluate the sensitivity and lifespan of protected data</li>
                <li class="mb-2"><strong>Crypto-Agility:</strong> Design systems that can easily swap cryptographic algorithms</li>
                <li class="mb-2"><strong>Hybrid Implementations:</strong> Deploy hybrid schemes using both classical and post-quantum algorithms during transition</li>
                <li class="mb-2"><strong>Monitor Standards:</strong> Follow NIST and other standards bodies for finalized recommendations</li>
              </ol>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">AWS and Quantum-Safe Cryptography</h2>

              <p class="text-body-1 mb-4">
                AWS is actively preparing for post-quantum cryptography:
              </p>

              <ul class="ml-4 mb-6">
                <li class="mb-2">AWS Key Management Service (KMS) and AWS Certificate Manager (ACM) are implementing post-quantum hybrid key exchange</li>
                <li class="mb-2">s2n-tls, AWS's implementation of the TLS protocol, supports post-quantum hybrid key exchange</li>
                <li class="mb-2">AWS Nitro Enclaves provide isolated compute environments for sensitive cryptographic operations</li>
              </ul>

              <p class="text-body-1 mb-4">
                Organizations using AWS can leverage these services to begin their quantum-safe transition.
              </p>

              <h2 class="text-h4 font-weight-bold mt-8 mb-4">Conclusion</h2>

              <p class="text-body-1 mb-4">
                While the timeline for quantum threats remains uncertain, the complexity of cryptographic migration makes early preparation essential. By understanding post-quantum approaches and developing crypto-agility, organizations can protect their data for the quantum era.
              </p>

              <p class="text-body-1 mb-4">
                The transition to quantum-safe cryptography represents not just a technical challenge but an opportunity to build more secure and resilient systems for the future.
              </p>
            </template>

            <template v-else>
              <p class="text-body-1 mb-4">
                Content for this blog post is not available yet. Please check back later.
              </p>
            </template>
          </div>
        </v-col>

        <!-- Sidebar -->
        <v-col cols="12" lg="4">
          <div class="sticky-sidebar">
            <v-card class="sidebar-card pa-4 mb-6" variant="outlined">
              <h3 class="text-h6 font-weight-bold mb-4">About the Author</h3>
              <div class="d-flex align-center mb-4">
                <img 
                  src="/images/logo2.png" 
                  alt="AppSecEngineer Logo" 
                  width="32" 
                  height="32"
                  class="me-2"
                />
                <span class="text-subtitle-1 font-weight-medium">Agastya Reddy</span>
              </div>
              <p class="text-body-2 mb-4">
                Associate Cloud Security Engineer at WE45 Solutions specializing in AWS security, DevSecOps, and cloud architecture.
              </p>
              <v-btn 
                href="https://appsecengineer.com/contributor/agastya-reddy" 
                target="_blank"
                color="primary"
                variant="text"
                prepend-icon="mdi-open-in-new"
                size="small"
                class="px-0"
              >
                View Full Profile
              </v-btn>
            </v-card>

            <v-card class="sidebar-card pa-4 mb-6" variant="outlined">
              <h3 class="text-h6 font-weight-bold mb-4">More Articles</h3>
              <v-list class="pa-0" bg-color="transparent">
                <v-list-item
                  v-for="post in otherPosts"
                  :key="post.slug"
                  :title="post.title"
                  :to="`/blog/${post.slug}`"
                  :active="post.slug === $route.params.blogId"
                  class="px-0"
                  lines="two"
                >
                  <template v-slot:prepend>
                    <v-avatar size="36" class="me-3">
                      <v-img :src="post.thumbnail" :alt="post.title"></v-img>
                    </v-avatar>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>

            <v-card class="sidebar-card pa-4" variant="outlined">
              <h3 class="text-h6 font-weight-bold mb-4">Tags</h3>
              <div class="d-flex flex-wrap gap-2">
                <v-chip
                  v-for="tag in blog.tags"
                  :key="tag"
                  size="small"
                  class="ma-1"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>

    <div v-else class="text-center py-16">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <p class="mt-4">Loading blog post...</p>
    </div>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Blog data
const allBlogs = {
  'fraud-detection-timestream-neptune': {
    title: 'Strengthening Transactional Fraud Detection with Amazon Timestream and Amazon Neptune',
    slug: 'fraud-detection-timestream-neptune',
    date: 'June 15, 2024',
    category: 'AWS',
    image: '/images/blog1.png',
    thumbnail: '/images/blog1.png',
    excerpt: 'Explore how combining Amazon Timestream\'s time-series capabilities with Amazon Neptune\'s graph database creates a powerful solution for detecting complex fraud patterns in financial transactions.',
    tags: ['AWS', 'Timestream', 'Neptune', 'Graph Database', 'Time Series', 'Security', 'Fraud Detection']
  },
  'quantum-safe-cryptography': {
    title: 'Quantum-Safe Cryptography: Preparing for the Post-Quantum Era',
    slug: 'quantum-safe-cryptography',
    date: 'May 28, 2024',
    category: 'Security',
    image: '/images/image1-28.png',
    thumbnail: '/images/image1-28.png',
    excerpt: 'A deep dive into quantum-safe cryptography techniques and how organizations can prepare their infrastructure for the coming quantum computing revolution.',
    tags: ['Security', 'Cryptography', 'Quantum Computing', 'AWS KMS', 'NIST', 'Post-Quantum']
  }
}

// Computed blog from route param
const blog = computed(() => {
  return allBlogs[route.params.blogId]
})

// Other blog posts for "More Articles" section
const otherPosts = computed(() => {
  return Object.values(allBlogs).filter(post => post.slug !== route.params.blogId)
})

const getCategoryColor = (category) => {
  const colors = {
    'AWS': 'primary',
    'Security': 'error',
    'DevOps': 'success',
    'Cloud': 'info'
  }
  return colors[category] || 'secondary'
}
</script>

<style scoped>
.blog-content {
  line-height: 1.8;
  color: inherit;
}

.blog-content h2 {
  border-bottom: 2px solid rgba(0, 188, 212, 0.2);
  padding-bottom: 0.5rem;
  color: inherit;
}

.blog-content p {
  margin-bottom: 1.5rem;
  color: inherit;
}

.blog-content ul, .blog-content ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  color: inherit;
}

.sticky-sidebar {
  position: sticky;
  top: 100px;
}

.sidebar-card {
  background-color: var(--v-theme-surface);
}

.content-card {
  background-color: var(--v-theme-surface-variant) !important;
}

.section-bg {
  border-radius: 12px;
  background-color: var(--v-theme-surface);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

@media (max-width: 1264px) {
  .sticky-sidebar {
    position: relative;
    top: 0;
    margin-top: 2rem;
  }
}
</style> 