<template>
  <div class="section-bg">
    <v-container class="py-16">
      <!-- Header Section -->
      <v-row class="mb-16">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 font-weight-bold mb-4" data-aos="fade-up">
            My Projects
          </h1>
          <p class="text-h5 text-medium-emphasis" data-aos="fade-up" data-aos-delay="100">
            Showcasing my work in cloud infrastructure and DevSecOps
          </p>
        </v-col>
      </v-row>

      <!-- Project Filters -->
      <v-row class="mb-8">
        <v-col cols="12">
          <div class="d-flex flex-wrap justify-center gap-4" data-aos="fade-up">
            <v-btn
              v-for="category in categories"
              :key="category.key"
              :color="selectedCategory === category.key ? 'primary' : 'surface'"
              :variant="selectedCategory === category.key ? 'flat' : 'outlined'"
              @click="selectedCategory = category.key"
              :prepend-icon="category.icon"
              class="simple-filter-btn"
            >
              {{ category.name }}
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Projects Grid -->
      <v-row>
        <v-col
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="project-card h-100"
            variant="outlined"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <!-- Project Image -->
            <div class="project-image-container">
              <div
                v-if="project.image"
                class="project-image"
              >
                <v-img
                  :src="project.image"
                  height="250"
                  cover
                ></v-img>
              </div>
              <div
                v-else
                class="project-image"
                :style="{
                  backgroundColor: getBackgroundColor(project.category),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '24px',
                  height: '250px'
                }"
              >
                {{ project.title }}
              </div>
              <div class="overlay">
                <v-chip
                  :color="project.status === 'Completed' ? 'success' : 'warning'"
                  variant="flat"
                  class="status-chip"
                >
                  {{ project.status }}
                </v-chip>
              </div>
            </div>

            <v-card-text class="pa-6">
              <!-- Project Category -->
              <v-chip
                :color="getCategoryColor(project.category)"
                variant="outlined"
                size="small"
                class="mb-3"
              >
                {{ project.category }}
              </v-chip>

              <!-- Project Title & Description -->
              <h3 class="text-h5 font-weight-bold mb-3">
                {{ project.title }}
              </h3>
              <p class="text-body-1 text-medium-emphasis mb-4">
                {{ project.description }}
              </p>

              <!-- Key Features -->
              <div class="mb-4">
                <h4 class="text-h6 font-weight-bold mb-2">Key Features:</h4>
                <ul class="text-body-2 mb-0">
                  <li
                    v-for="feature in project.features.slice(0, 3)"
                    :key="feature"
                    class="mb-1"
                  >
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Technologies -->
              <div class="mb-4">
                <h4 class="text-h6 font-weight-bold mb-2">Technologies:</h4>
                <v-chip-group>
                  <v-chip
                    v-for="tech in project.technologies"
                    :key="tech"
                    size="small"
                    color="primary"
                    variant="outlined"
                  >
                    {{ tech }}
                  </v-chip>
                </v-chip-group>
              </div>

              <!-- Project Stats -->
              <v-row class="mb-4">
                <v-col
                  v-for="stat in project.stats"
                  :key="stat.label"
                  cols="4"
                  class="text-center"
                >
                  <div class="text-h6 font-weight-bold text-primary">{{ stat.value }}</div>
                  <div class="text-caption text-medium-emphasis">{{ stat.label }}</div>
                </v-col>
              </v-row>
            </v-card-text>

            <!-- Actions -->
            <v-card-actions class="pa-6 pt-0">
              <v-btn
                @click="showProjectDetails(project)"
                color="primary"
                variant="elevated"
                class="me-2"
              >
                View Details
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                @click="showProjectDetails(project)"
                icon
                variant="text"
                color="primary"
              >
                <v-icon icon="mdi-information"></v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Project Details Dialog -->
      <v-dialog v-model="detailsDialog" max-width="800">
        <v-card v-if="selectedProject">
          <v-card-title class="d-flex align-center pa-6">
            <v-icon :icon="'mdi-folder-multiple'" class="me-3" color="primary"></v-icon>
            <span class="text-h4">{{ selectedProject.title }}</span>
            <v-spacer></v-spacer>
            <v-btn
              @click="detailsDialog = false"
              icon
              variant="text"
            >
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="pa-6">
            <div
              v-if="selectedProject.image"
              class="project-image mb-6 rounded"
            >
              <v-img
                :src="selectedProject.image"
                height="300"
                cover
                class="rounded"
              ></v-img>
            </div>
            <div
              v-else
              class="project-image mb-6 rounded"
              :style="{
                backgroundColor: getBackgroundColor(selectedProject.category),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '30px',
                height: '300px'
              }"
            >
              {{ selectedProject.title }}
            </div>

            <div class="mb-6">
              <h3 class="text-h5 font-weight-bold mb-3">Project Overview</h3>
              <p class="text-body-1 line-height-lg">{{ selectedProject.longDescription }}</p>
            </div>

            <div class="mb-6">
              <h3 class="text-h5 font-weight-bold mb-3">Key Features</h3>
              <v-list class="bg-transparent">
                <v-list-item
                  v-for="feature in selectedProject.features"
                  :key="feature"
                >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-check-circle" color="success"></v-icon>
                  </template>
                  <v-list-item-title>{{ feature }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>

            <div class="mb-6">
              <h3 class="text-h5 font-weight-bold mb-3">Challenges & Solutions</h3>
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="challenge in selectedProject.challenges"
                  :key="challenge.title"
                >
                  <v-expansion-panel-title>
                    {{ challenge.title }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    {{ challenge.solution }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <div class="mb-6">
              <h3 class="text-h5 font-weight-bold mb-3">Technologies Used</h3>
              <v-chip-group>
                <v-chip
                  v-for="tech in selectedProject.technologies"
                  :key="tech"
                  color="primary"
                  variant="outlined"
                >
                  {{ tech }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('all')
const detailsDialog = ref(false)
const selectedProject = ref(null)

const categories = [
  { key: 'all', name: 'All Projects', icon: 'mdi-view-grid' },
  { key: 'cloud', name: 'Cloud Infrastructure', icon: 'mdi-cloud' },
  { key: 'devsecops', name: 'DevSecOps', icon: 'mdi-security' },
  { key: 'automation', name: 'Automation', icon: 'mdi-cogs' },
  { key: 'monitoring', name: 'Monitoring', icon: 'mdi-chart-line' }
]

const projects = [
  {
    id: 1,
    title: 'Comprehensive DevSecOps Pipeline with Multi-Tool Security Testing',
    category: 'devsecops',
    status: 'Completed',
    description: 'Robust DevSecOps pipeline integrating DAST, SAST, and SCA security testing approaches for complete application security coverage.',
    longDescription: 'Designed and implemented a robust DevSecOps pipeline integrating three security testing approaches for complete application security coverage. Created a unified Azure DevOps CI/CD solution that performs Dynamic Application Security Testing (DAST) using OWASP ZAP for runtime vulnerability detection, Static Application Security Testing (SAST) for source code analysis of Python and Node.js applications to identify issues like hardcoded credentials and insecure functions, and Software Composition Analysis (SCA) to detect vulnerable third-party dependencies with known CVEs. The pipeline automatically deploys test applications, executes all three security testing methods in sequence, and generates comprehensive reports in standardized formats published as pipeline artifacts. This implementation ensures vulnerabilities are detected early in the development lifecycle through a fully automated process, enhancing application security without manual intervention.',
    image: '/images/wiki-dev-sec-ops-WC04-24-graphic.webp',
    features: [
      'Three-tier security testing (DAST, SAST, SCA)',
      'Automated Azure DevOps CI/CD pipeline',
      'OWASP ZAP integration for runtime vulnerability scanning',
      'Source code analysis for Python and Node.js applications',
      'Dependency vulnerability scanning',
      'Standardized security reporting as pipeline artifacts'
    ],
    technologies: ['Azure DevOps', 'Azure Pipelines', 'OWASP ZAP', 'Python', 'Node.js', 'Docker', 'CI/CD'],
    stats: [
      { label: 'Security Coverage', value: '95%' },
      { label: 'Automation', value: '100%' },
      { label: 'Time Saved', value: '80%' }
    ],
    github: null,
    demo: null,
    challenges: [
      {
        title: 'Tool Integration Complexity',
        solution: 'Created a modular pipeline architecture with clear separation of security testing stages.'
      },
      {
        title: 'Report Standardization',
        solution: 'Developed custom parsers to normalize outputs from different security tools into a consistent format.'
      },
      {
        title: 'Performance Optimization',
        solution: 'Implemented parallel testing where possible and optimized scan configurations for faster pipeline execution.'
      }
    ]
  },
  {
    id: 2,
    title: 'Secure Content Streaming Platform with Tiered Access Control',
    category: 'cloud',
    status: 'Completed',
    description: 'AWS-based content delivery platform with tiered access control using CloudFront signed URLs for premium content protection.',
    longDescription: 'Developed a secure digital content delivery platform with tiered access control using AWS cloud services. Designed and implemented an architecture that distinguishes between free and premium content through secure signed URLs. Created a user management system with secure profile image uploads via pre-signed URLs. Premium content is protected using CloudFront signed URLs with time-limited access tokens, preventing unauthorized sharing and access. Free content is delivered through optimized direct delivery paths. Implemented comprehensive security measures including access policies, time-based URL expiration, content encryption, and secure storage configurations to protect valuable digital assets.',
    image: '/images/benefits-securing-high-value-streaming-services-1.webp',
    features: [
      'Tiered access control (free vs. premium content)',
      'CloudFront signed URLs for premium content protection',
      'S3 pre-signed URLs for secure profile image uploads',
      'Time-limited access tokens to prevent unauthorized sharing',
      'Comprehensive security policies and access controls',
      'Infrastructure as Code deployment with Terraform'
    ],
    technologies: ['AWS CloudFront', 'Amazon S3', 'AWS IAM', 'AWS Lambda', 'Amazon EC2', 'AWS SDK (Boto3)', 'Amazon RDS', 'Amazon Route 53', 'Amazon VPC', 'Terraform'],
    stats: [
      { label: 'Security', value: 'High' },
      { label: 'Scalability', value: '99.9%' },
      { label: 'Content Protection', value: '100%' }
    ],
    github: null,
    demo: null,
    challenges: [
      {
        title: 'URL Signing Security',
        solution: 'Implemented secure key management and rotation for CloudFront key pairs.'
      },
      {
        title: 'Access Control Logic',
        solution: 'Created a sophisticated permissions system that manages content access based on user subscription level.'
      },
      {
        title: 'Infrastructure Scalability',
        solution: 'Designed a multi-region architecture with edge optimization for global content delivery.'
      }
    ]
  },
  {
    id: 3,
    title: 'Hosting a Website on AWS S3',
    category: 'cloud',
    status: 'Completed',
    description: 'A streamlined approach to website deployment using AWS S3 infrastructure for global accessibility and scalability.',
    longDescription: 'Hosting a Website on AWS S3 offers a streamlined approach to website deployment, harnessing the power of Amazon Web Services\' robust S3 infrastructure. Simplify the process by ensuring your S3 bucket is publicly accessible, enabling global accessibility and swift content delivery worldwide. With scalable infrastructure, websites hosted on AWS S3 effortlessly adapt to fluctuating traffic demands, ensuring optimal performance at all times.',
    image: '/images/Hosting-Static-1.jpg',
    features: [
      'Simplified deployment process',
      'Global content delivery with public S3 bucket',
      'Scalable infrastructure for traffic fluctuations',
      'Fast content access worldwide',
      'Cost-effective hosting solution',
      'Suitable for users of all expertise levels'
    ],
    technologies: ['AWS', 'S3', 'CloudFront', 'Route 53', 'IAM', 'HTML/CSS/JavaScript'],
    stats: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Load Time', value: '<2s' },
      { label: 'Cost', value: '-40%' }
    ],
    github: null,
    demo: null,
    challenges: [
      {
        title: 'Content Delivery Optimization',
        solution: 'Implemented CloudFront distribution for edge caching and faster global access.'
      },
      {
        title: 'Security Configuration',
        solution: 'Created secure bucket policies and IAM roles to ensure proper access controls.'
      }
    ]
  },
  {
    id: 4,
    title: 'Multi-VPC Infrastructure with Secure Communication',
    category: 'cloud',
    status: 'Completed',
    description: 'Advanced and secure AWS multi-VPC architecture utilizing Terraform with VPC peering and enhanced security measures.',
    longDescription: 'This project entails the creation of an advanced and secure AWS multi-VPC architecture utilizing Terraform. It includes the setup of two Virtual Private Clouds (VPCs) named Chennai and Nellore, each with distinct subnets to segregate public and private traffic. VPC peering was established to enable seamless and secure communication between the two VPCs. A NAT Gateway is deployed in the Chennai VPC to facilitate internet access for instances in private subnets, while a Bastion Host provides secure SSH access.',
    image: '/images/What_is_a_Virtual_Private_Cloud_blog_cover_b10c66bd9c.png',
    features: [
      'Multi-VPC architecture with Terraform automation',
      'VPC peering for secure cross-VPC communication',
      'Public and private subnet segregation',
      'NAT Gateway for private subnet internet access',
      'Bastion Host for secure SSH access',
      'Security groups and network ACLs'
    ],
    technologies: ['AWS', 'Terraform', 'VPC', 'NAT Gateway', 'Bastion Host', 'Security Groups', 'Network ACLs'],
    stats: [
      { label: 'Resources', value: '20+' },
      { label: 'Deployment', value: '15min' },
      { label: 'Security', value: 'Enhanced' }
    ],
    github: null,
    demo: null,
    challenges: [
      {
        title: 'Complex Networking Requirements',
        solution: 'Implemented a modular Terraform structure with clear separation of networking components.'
      },
      {
        title: 'Security Across VPCs',
        solution: 'Created granular security groups and network ACLs with least-privilege access controls.'
      }
    ]
  },
  {
    id: 5,
    title: 'Scalable Nginx Deployment with Auto Scaling',
    category: 'cloud',
    status: 'Completed',
    description: 'Deploying scalable and highly available Nginx web servers on AWS EC2 with Auto Scaling Groups and Elastic Load Balancer.',
    longDescription: 'This project focuses on deploying a scalable and highly available Nginx web server on AWS EC2 instances. It leverages AWS Auto Scaling Groups (ASG) to ensure the deployment dynamically adjusts to traffic demands, maintaining optimal performance. An Elastic Load Balancer (ELB) is configured to distribute incoming traffic across multiple EC2 instances, enhancing fault tolerance and availability. The ASG is set with a minimum of 1 instance, desired capacity of 2 instances, and a maximum of 3 instances to balance cost and performance.',
    image: '/images/aws-auto-scaling-group_nginx-plus-ha.png',
    features: [
      'Auto Scaling Groups for dynamic capacity adjustment',
      'Elastic Load Balancer for traffic distribution',
      'High availability across multiple instances',
      'Cost optimization with flexible instance count',
      'Automated scaling based on traffic patterns',
      'Fault tolerance and redundancy'
    ],
    technologies: ['AWS', 'EC2', 'Auto Scaling Groups', 'Elastic Load Balancer', 'Nginx', 'CloudWatch'],
    stats: [
      { label: 'Availability', value: '99.9%' },
      { label: 'Response Time', value: '200ms' },
      { label: 'Cost Efficiency', value: '35%' }
    ],
    github: null,
    demo: null,
    challenges: [
      {
        title: 'Scaling Policy Configuration',
        solution: 'Implemented CloudWatch metrics-based scaling policies to handle traffic spikes efficiently.'
      },
      {
        title: 'Instance Health Monitoring',
        solution: 'Created custom health checks and monitoring dashboards for real-time visibility.'
      }
    ]
  },
  {
    id: 6,
    title: 'Automating Smart Greenhouse Using IoT',
    category: 'automation',
    status: 'Completed',
    description: 'IoT-enabled framework for automating and monitoring greenhouses to optimize plant growth and resource utilization.',
    longDescription: 'This project addresses the optimization challenges faced by farmers through a Smart Green House concept enabled by IoT technology. The system utilizes a network of sensors placed strategically throughout a greenhouse to collect data on plant conditions. This data is then analyzed by a Smart Green House Intelligence Decision Support System (SGHIDSS) which automatically makes decisions about water supply, nutrition levels, and other environmental factors. The automated environment ensures efficient operation of all sensors and control systems, making the greenhouse technique accessible and practical for small farms and individuals.',
    image: '/images/MicrosoftTeams-image-129.jpg',
    features: [
      'IoT sensor network for real-time monitoring',
      'Automated decision support system',
      'Water and nutrition level optimization',
      'Environmental condition control',
      'Reduced workforce requirements',
      'Accessible for small-scale farmers'
    ],
    technologies: ['IoT', 'Sensors', 'Microcontrollers', 'Automation', 'Data Analytics', 'Decision Support Systems'],
    stats: [
      { label: 'Resource Savings', value: '40%' },
      { label: 'Yield Increase', value: '25%' },
      { label: 'Labor Reduction', value: '60%' }
    ],
    github: null,
    demo: null,
    challenges: [
      {
        title: 'Sensor Integration',
        solution: 'Developed a unified data collection framework for various sensor types and protocols.'
      },
      {
        title: 'Decision Algorithm',
        solution: 'Created an intelligent system that analyzes multiple parameters for optimal growing conditions.'
      }
    ]
  },
  {
    id: 7,
    title: 'Group Shilling Attack Detection Using Clustering',
    category: 'devsecops',
    status: 'Completed',
    description: 'Detection of coordinated shilling attacks in online recommender systems using bisecting K-means clustering algorithm.',
    longDescription: 'This research project addresses the challenge of identifying group shilling attacks in online recommender systems, where multiple attackers collude to bias recommendations by injecting fake profiles. Unlike existing approaches that focus on individual attackers, this method detects coordinated group attacks. The solution extracts rating tracks for items, divides them into candidate groups based on time intervals, and calculates suspicious degrees using item attention degree and user activity metrics. Finally, it employs the bisecting K-means algorithm to cluster candidate groups and identify attack groups.',
    image: '/images/hq720.jpg',
    features: [
      'Rating track extraction and analysis',
      'Time-based candidate group division',
      'Item attention degree calculation',
      'User activity assessment',
      'Bisecting K-means clustering',
      'Group attack identification'
    ],
    technologies: ['Machine Learning', 'Clustering Algorithms', 'Data Mining', 'Python', 'Security Analysis', 'Recommendation Systems'],
    stats: [
      { label: 'Detection Rate', value: '92%' },
      { label: 'False Positives', value: '<5%' },
      { label: 'Processing Time', value: '30s' }
    ],
    github: null,
    demo: null,
    challenges: [
      {
        title: 'Data Preprocessing',
        solution: 'Implemented robust preprocessing techniques to handle large-scale rating datasets.'
      },
      {
        title: 'Algorithm Optimization',
        solution: 'Optimized the clustering algorithm for performance while maintaining detection accuracy.'
      }
    ]
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

const getCategoryColor = (category) => {
  const colors = {
    'cloud': 'primary',
    'devsecops': 'secondary',
    'automation': 'success',
    'monitoring': 'warning'
  }
  return colors[category] || 'primary'
}

const getBackgroundColor = (category) => {
  const colors = {
    'cloud': '#42a5f5',
    'devsecops': '#66bb6a',
    'automation': '#81c784',
    'monitoring': '#ffa726'
  }
  return colors[category] || '#42a5f5'
}

const showProjectDetails = (project) => {
  selectedProject.value = project
  detailsDialog.value = true
}
</script>

<style scoped>
.section-bg {
  margin-bottom: 3rem;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  box-shadow: 0 6px 32px rgba(0,0,0,0.10) !important;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-image {
  transition: transform 0.3s ease;
  display: block;
  width: 100%;
  border: none;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  z-index: 1;
}

.status-chip {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.line-height-lg {
  line-height: 1.8;
}

/* Enhanced Mobile optimizations */
@media (max-width: 960px) {
  .project-card:hover {
    transform: translateY(-4px);
  }
  
  .project-card:hover .project-image {
    transform: scale(1.02);
  }
  
  .text-h5 {
    font-size: 1.25rem !important;
  }
  
  .text-h6 {
    font-size: 1.05rem !important;
  }
  
  .v-card-text {
    padding: 16px !important;
  }
  
  .v-card-actions {
    padding: 8px 16px 16px !important;
  }
  
  .simple-filter-btn {
    margin-bottom: 8px;
    font-size: 0.85rem;
  }
}

@media (max-width: 600px) {
  .v-container {
    padding: 8px !important;
  }
  
  .py-16 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  
  .mb-16 {
    margin-bottom: 32px !important;
  }
  
  .v-chip-group {
    flex-wrap: wrap;
  }
  
  .v-card {
    border-radius: 12px !important;
  }
  
  .project-image {
    height: 200px !important;
  }
}

.text-h2, .section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
}

.text-h5, .section-subtitle {
  font-size: clamp(1rem, 3vw, 1.25rem);
}

/* Fix Dialog for Mobile */
.v-dialog .v-card {
  margin: 0;
  max-height: 100vh;
  overflow-y: auto;
}

@media (max-width: 600px) {
  .v-dialog {
    margin: 8px !important;
    width: calc(100% - 16px) !important;
  }
  
  .v-dialog .v-card-title {
    font-size: 1.25rem !important;
    padding: 16px !important;
  }
  
  .v-dialog .v-card-text {
    padding: 16px !important;
  }
}

.filter-container {
  padding: 1rem;
  background: rgba(var(--v-theme-surface-variant), 0.3);
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.filter-btn {
  font-weight: 600 !important;
  min-width: 160px;
  border-radius: 12px !important;
  transition: all 0.3s ease;
  text-transform: none;
  letter-spacing: 0.5px;
  padding: 0.75rem 1.5rem !important;
}

.filter-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1) !important;
}

/* Light mode specific styles */
:root {
  --filter-btn-color-light: rgba(0, 0, 0, 0.87);
  --filter-btn-bg-light: rgba(255, 255, 255, 0.9);
}

.v-theme--light .filter-btn {
  color: var(--filter-btn-color-light) !important;
  background-color: var(--filter-btn-bg-light);
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.v-theme--light .filter-btn:hover {
  background-color: rgba(var(--v-theme-primary), 0.1);
  border-color: rgba(var(--v-theme-primary), 0.5);
}

.v-theme--light .filter-btn.v-btn--active {
  color: white !important;
  background: linear-gradient(45deg, #00BCD4, #FF4081) !important;
  border: none;
}

/* Simple light mode visibility fix for filter buttons */
.simple-filter-btn {
  font-weight: 600;
}

.v-theme--light .simple-filter-btn.v-btn--variant-outlined {
  border-color: rgba(0, 0, 0, 0.4) !important;
  color: rgba(0, 0, 0, 0.8) !important;
}

.v-theme--light .simple-filter-btn.v-btn--variant-flat {
  color: white !important;
}
</style> 