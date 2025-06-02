<template>
  <div>
    <!-- Hero Section -->
    <div class="section-bg mb-8">
      <v-container fluid class="hero-section pa-0">
        <v-row no-gutters class="fill-height align-center">
          <v-col cols="12">
            <v-container class="hero-container">
              <v-row align="center" justify="center" class="hero-row">
                <v-col cols="12" lg="6" md="6" sm="12" class="hero-text-col">
                  <div data-aos="fade-up" class="hero-content">
                    <div class="welcome-badge mb-4">
                      <v-chip color="primary" variant="outlined" size="large" prepend-icon="mdi-hand-wave">
                        Welcome to my world
                      </v-chip>
                    </div>
                    
                    <h1 class="hero-title mb-4">
                      <span class="text-primary">Agastya Reddy</span>
                    </h1>
                    
                    <div class="typewriter-container mb-6">
                      <div class="typewriter-text" id="typewriter"></div>
                    </div>
                    
                    <p class="hero-description mb-8">
                      Associate Cloud Security Engineer with expertise in AWS environments, DevSecOps, and application security. Specializing in implementing secure cloud architectures, automating security controls, and integrating security into CI/CD pipelines.
                    </p>
                    
                    <div class="hero-actions mb-8">
                      <v-btn
                        color="primary"
                        size="x-large"
                        variant="flat"
                        prepend-icon="mdi-download"
                        class="hero-btn-primary"
                        elevation="4"
                        href="./Agastya Resume.docx.pdf"
                        download
                      >
                        Download Resume
                      </v-btn>
                      <v-btn
                        color="surface"
                        size="x-large"
                        variant="elevated"
                        prepend-icon="mdi-email"
                        class="hero-btn-secondary"
                        to="/contact"
                      >
                        Get In Touch
                      </v-btn>
                    </div>

                    <!-- Quick Stats -->
                    <div class="hero-stats">
                      <v-row>
                        <v-col cols="3" class="text-center">
                          <div class="stat-number text-primary">1+</div>
                          <div class="stat-label">Years</div>
                        </v-col>
                        <v-col cols="3" class="text-center">
                          <div class="stat-number text-primary">15+</div>
                          <div class="stat-label">Projects</div>
                        </v-col>
                        <v-col cols="3" class="text-center">
                          <div class="stat-number text-primary">8+</div>
                          <div class="stat-label">AWS</div>
                        </v-col>
                        <v-col cols="3" class="text-center">
                          <div class="stat-number text-primary">99%</div>
                          <div class="stat-label">Uptime</div>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </v-col>
                
                <v-col cols="12" lg="6" md="6" sm="12" class="hero-image-col">
                  <div data-aos="fade-left" data-aos-delay="200" class="hero-image-wrapper">
                    <div class="hero-image-container">
                      <div class="profile-card">
                        <div class="profile-gradient"></div>
                        <v-avatar class="profile-avatar">
                          <v-img
                            src="../../public/images/2018.JPG"
                            alt="Agastya Reddy"
                            class="profile-image"
                            cover
                          ></v-img>
                        </v-avatar>
                        
                        <!-- Floating Tech Icons -->
                        <div class="tech-icon tech-icon-1">
                          <v-icon icon="mdi-aws" size="24" color="primary"></v-icon>
                        </div>
                        <div class="tech-icon tech-icon-2">
                          <v-icon icon="mdi-docker" size="20" color="info"></v-icon>
                        </div>
                        <div class="tech-icon tech-icon-3">
                          <v-icon icon="mdi-terraform" size="18" color="success"></v-icon>
                        </div>
                        <div class="tech-icon tech-icon-4">
                          <v-icon icon="mdi-security" size="16" color="warning"></v-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Skills Section -->
    <div class="section-bg mb-8">
      <v-container class="skills-section">
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2 class="section-title mb-4" data-aos="fade-up">
              Technical Expertise
            </h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Technologies and tools I excel at
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            v-for="(category, index) in skillCategories"
            :key="category.title"
            cols="12"
            sm="6"
            md="6"
            lg="3"
            xl="3"
          >
            <v-card
              class="skill-card h-100"
              variant="elevated"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 100"
              elevation="2"
            >
              <v-card-text class="skill-card-content">
                <div class="skill-icon-container mb-4">
                  <v-avatar :color="category.color" class="skill-avatar">
                    <v-icon :icon="category.icon" size="40" color="white"></v-icon>
                  </v-avatar>
                </div>
                
                <h3 class="skill-title mb-4">{{ category.title }}</h3>
                
                <div class="skill-chips">
                  <v-chip
                    v-for="skill in category.skills"
                    :key="skill"
                    :color="category.color"
                    variant="outlined"
                    size="small"
                    class="ma-1"
                  >
                    {{ skill }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Featured Projects -->
    <div class="section-bg mb-8">
      <v-container fluid class="projects-section">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4" data-aos="fade-up">
                Featured Projects
              </h2>
              <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
                Some of my recent cloud & DevSecOps work
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              v-for="(project, index) in featuredProjects"
              :key="project.title"
              cols="12"
              sm="6"
              md="6"
              lg="4"
              xl="4"
            >
              <v-card
                class="project-card h-100"
                variant="elevated"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 100"
                elevation="3"
              >
                <div class="project-image-wrapper">
                  <v-img
                    :src="project.image"
                    class="project-image"
                    cover
                  >
                    <div class="project-overlay">
                      <v-chip color="primary" variant="flat" size="small">
                        {{ project.category }}
                      </v-chip>
                    </div>
                  </v-img>
                </div>
                
                <v-card-text class="project-content">
                  <h3 class="project-title mb-3">{{ project.title }}</h3>
                  <p class="project-description mb-4">{{ project.description }}</p>
                  
                  <div class="project-metrics mb-4">
                    <v-row dense>
                      <v-col cols="6">
                        <div class="metric">
                          <div class="metric-value">{{ project.improvement }}</div>
                          <div class="metric-label">Improvement</div>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="metric">
                          <div class="metric-value">{{ project.uptime }}</div>
                          <div class="metric-label">Uptime</div>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  
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
                </v-card-text>
                
                <v-card-actions class="project-actions">
                  <v-spacer></v-spacer>
                  <v-btn
                    icon="mdi-heart-outline"
                    variant="text"
                    size="small"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mt-8">
            <v-col cols="12" class="text-center">
              <v-btn
                to="/projects"
                size="large"
                color="primary"
                variant="elevated"
                append-icon="mdi-arrow-right"
                elevation="2"
              >
                View All Projects
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </div>

    <!-- Call to Action -->
    <div class="section-bg">
      <v-container class="cta-section">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8" xl="6">
            <v-card class="cta-card" variant="elevated" elevation="8">
              <v-card-text class="cta-content">
                <div data-aos="fade-up">
                  <h2 class="cta-title mb-4">Ready to Build Something Amazing?</h2>
                  <p class="cta-description mb-8">
                    I'm always interested in new opportunities and exciting projects. 
                    Let's discuss how we can bring your cloud infrastructure ideas to life 
                    with security and scalability in mind.
                  </p>
                  
                  <div class="cta-buttons">
                    <v-btn
                      to="/contact"
                      size="x-large"
                      color="primary"
                      prepend-icon="mdi-rocket-launch"
                      variant="flat"
                      elevation="4"
                      class="cta-btn-primary"
                    >
                      Start a Project
                    </v-btn>
                    <v-btn
                      href="mailto:katamreddyagastya@gmail.com"
                      size="x-large"
                      variant="outlined"
                      prepend-icon="mdi-email"
                      class="cta-btn-secondary"
                    >
                      Send Email
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: 'mdi-cloud',
    color: 'primary',
    skills: ['AWS', 'Azure', 'GCP', 'CloudFormation', 'Terraform']
  },
  {
    title: 'DevOps & CI/CD',
    icon: 'mdi-cogs',
    color: 'info',
    skills: ['Docker', 'Jenkins', 'GitLab CI', 'Pipeline Automation']
  },
  {
    title: 'Security',
    icon: 'mdi-security',
    color: 'warning',
    skills: ['SAST/DAST', 'OWASP', 'SonarQube', 'Security Scanning', 'Compliance']
  },
  {
    title: 'Programming',
    icon: 'mdi-code-tags',
    color: 'success',
    skills: ['Python', 'Bash', 'JavaScript', 'YAML', 'Go']
  }
]

const featuredProjects = [
  {
    title: 'Comprehensive DevSecOps Pipeline',
    description: 'Robust DevSecOps pipeline integrating DAST, SAST, and SCA security testing approaches for complete application security coverage.',
    image: './images/wiki-dev-sec-ops-WC04-24-graphic.webp',
    category: 'DevSecOps',
    improvement: '95%',
    uptime: '99.9%',
    technologies: ['Azure DevOps', 'OWASP ZAP', 'Python', 'Docker', 'CI/CD']
  },
  {
    title: 'Secure Content Streaming Platform',
    description: 'AWS-based content delivery platform with tiered access control using CloudFront signed URLs for premium content protection.',
    image: './images/benefits-securing-high-value-streaming-services-1.webp',
    category: 'Cloud',
    improvement: '100%',
    uptime: '99.5%',
    technologies: ['AWS CloudFront', 'Amazon S3', 'AWS Lambda', 'Amazon RDS', 'Terraform']
  },
  {
    title: 'Multi-VPC Infrastructure',
    description: 'Advanced and secure AWS multi-VPC architecture utilizing Terraform with VPC peering and enhanced security measures.',
    image: './images/What_is_a_Virtual_Private_Cloud_blog_cover_b10c66bd9c.png',
    category: 'Cloud',
    improvement: '90%',
    uptime: '99.8%',
    technologies: ['AWS', 'Terraform', 'VPC', 'NAT Gateway', 'Security Groups']
  }
]

onMounted(() => {
  // Initialize typewriter effect
  const typewriter = document.getElementById('typewriter')
  if (typewriter) {
    const texts = [
      'AWS Cloud Engineer',
      'DevSecOps Specialist', 
      'Infrastructure Automation Expert',
      'Security-First Developer'
    ]
    
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    let currentText = ''
    
    function typeEffect() {
      const fullText = texts[textIndex]
      
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1)
        charIndex--
      } else {
        currentText = fullText.substring(0, charIndex + 1)
        charIndex++
      }
      
      typewriter.textContent = currentText
      
      let typeSpeed = isDeleting ? 50 : 100
      
      if (!isDeleting && charIndex === fullText.length) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
        typeSpeed = 500
      }
      
      setTimeout(typeEffect, typeSpeed)
    }
    
    typeEffect()
  }
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(0, 188, 212, 0.05) 0%, 
    rgba(255, 64, 129, 0.05) 50%,
    rgba(156, 39, 176, 0.05) 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-container {
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.hero-row {
  min-height: 80vh;
  gap: 2rem;
}

.hero-text-col {
  display: flex;
  align-items: center;
  order: 1;
}

.hero-image-col {
  display: flex;
  align-items: center;
  justify-content: center;
  order: 2;
}

.hero-content {
  width: 100%;
  max-width: 600px;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  background: linear-gradient(45deg, #00BCD4, #FF4081, #9C27B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

.typewriter-container {
  height: clamp(60px, 8vw, 80px);
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.typewriter-text {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  min-height: 1.2em;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-btn-primary, .hero-btn-secondary {
  border-radius: 12px !important;
  text-transform: none;
  font-weight: 600;
  padding: 0 2rem !important;
  width: 100%;
}

.hero-btn-primary {
  background: linear-gradient(45deg, #00BCD4, #FF4081) !important;
  color: white !important;
}

.hero-stats {
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  opacity: 0.7;
  margin-top: 4px;
}

/* Profile Image */
.hero-image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.hero-image-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-card {
  position: relative;
  padding: 2rem;
}

.profile-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #00BCD4, #FF4081, #9C27B0);
  border-radius: 50%;
  transform: scale(1.1);
  opacity: 0.1;
  animation: pulse 3s ease-in-out infinite;
}

.profile-avatar {
  width: clamp(200px, 25vw, 320px) !important;
  height: clamp(200px, 25vw, 320px) !important;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
}

.tech-icon {
  position: absolute;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  padding: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  animation: float 6s ease-in-out infinite;
}

.tech-icon-1 { top: 20%; right: 10%; animation-delay: 0s; }
.tech-icon-2 { bottom: 30%; right: 20%; animation-delay: 1.5s; }
.tech-icon-3 { top: 60%; left: 10%; animation-delay: 3s; }
.tech-icon-4 { top: 40%; left: 5%; animation-delay: 4.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1.1); opacity: 0.1; }
  50% { transform: scale(1.2); opacity: 0.2; }
}

/* Skills Section */
.skills-section {
  background: rgba(255, 255, 255, 0.02);
  padding: 4rem 1rem;
}

.skill-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.skill-card-content {
  padding: 2rem !important;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.skill-avatar {
  width: clamp(60px, 8vw, 80px) !important;
  height: clamp(60px, 8vw, 80px) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.skill-title {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 600;
  flex-grow: 1;
}

/* Projects Section */
.projects-section {
  background: linear-gradient(135deg, 
    rgba(0, 188, 212, 0.02) 0%, 
    rgba(255, 64, 129, 0.02) 100%);
  padding: 4rem 0;
}

.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px !important;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2) !important;
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-image {
  height: clamp(180px, 25vw, 220px);
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
}

.project-content {
  padding: 1.5rem !important;
  flex-grow: 1;
}

.project-title {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  font-weight: 600;
  line-height: 1.3;
}

.project-description {
  opacity: 0.8;
  line-height: 1.6;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
}

.project-actions {
  padding: 1.5rem !important;
  padding-top: 0 !important;
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}

.metric-label {
  font-size: clamp(0.675rem, 1vw, 0.75rem);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* CTA Section */
.cta-section {
  background: rgba(255, 255, 255, 0.01);
  padding: 4rem 1rem;
}

.cta-card {
  border-radius: 24px !important;
  background: linear-gradient(135deg, 
    rgba(0, 188, 212, 0.1) 0%, 
    rgba(255, 64, 129, 0.1) 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-content {
  padding: clamp(2rem, 5vw, 3rem) !important;
  text-align: center;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  background: linear-gradient(45deg, #00BCD4, #FF4081);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.7;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.cta-btn-primary, .cta-btn-secondary {
  border-radius: 12px !important;
  text-transform: none;
  font-weight: 600;
  padding: 0 2rem !important;
  width: 100%;
  max-width: 300px;
}

/* Section Styles */
.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.7;
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive Breakpoints */

/* Small Mobile: 320px - 480px */
@media (max-width: 480px) {
  .hero-container {
    padding: 1rem 0.5rem;
  }
  
  .hero-row {
    min-height: auto;
    gap: 1rem;
  }
  
  .hero-text-col {
    order: 2;
    padding: 0 1rem;
  }
  
  .hero-image-col {
    order: 1;
    padding: 1rem;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-stats {
    padding: 1rem;
  }
  
  .tech-icon {
    display: none;
  }
  
  .skill-card-content {
    padding: 1.5rem !important;
  }
  
  .project-content {
    padding: 1rem !important;
  }
  
  .project-actions {
    padding: 1rem !important;
    padding-top: 0 !important;
  }
  
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .hero-description {
    font-size: 0.95rem !important;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-btn-primary, .hero-btn-secondary {
    width: 100% !important;
    margin-bottom: 1rem !important;
    margin-right: 0 !important;
  }
  
  .stat-number {
    font-size: 1.25rem !important;
  }
  
  .stat-label {
    font-size: 0.7rem !important;
  }
  
  .profile-card {
    max-width: 250px !important;
    margin: 0 auto;
  }
  
  .profile-avatar {
    width: 150px !important;
    height: 150px !important;
  }
  
  .section-title {
    font-size: 2rem !important;
  }
  
  .section-subtitle {
    font-size: 1rem !important;
  }
}

/* Medium Mobile: 481px - 768px */
@media (min-width: 481px) and (max-width: 768px) {
  .hero-container {
    padding: 1.5rem 1rem;
  }
  
  .hero-text-col {
    order: 2;
  }
  
  .hero-image-col {
    order: 1;
  }
  
  .hero-content {
    text-align: center;
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 3rem !important;
  }
  
  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .hero-btn-primary, .hero-btn-secondary {
    width: auto;
    min-width: 200px;
    margin-bottom: 0.5rem !important;
  }
  
  .hero-stats {
    padding: 1rem;
  }
  
  .profile-card {
    max-width: 300px !important;
    margin: 0 auto;
  }
  
  .profile-avatar {
    width: 180px !important;
    height: 180px !important;
  }
  
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .cta-btn-primary, .cta-btn-secondary {
    width: auto;
    min-width: 200px;
    margin-bottom: 0.5rem !important;
  }
  
  .tech-icon {
    display: none;
  }
}

/* Tablet: 769px - 1024px */
@media (min-width: 769px) and (max-width: 1024px) {
  .hero-container {
    padding: 2rem 1.5rem;
  }
  
  .hero-text-col {
    order: 1;
  }
  
  .hero-image-col {
    order: 2;
  }
  
  .hero-content {
    text-align: left;
  }
  
  .hero-title {
    font-size: 3.5rem !important;
  }
  
  .hero-description {
    font-size: 1rem !important;
  }
  
  .hero-actions {
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .hero-btn-primary, .hero-btn-secondary {
    width: auto;
    min-width: 180px;
  }
  
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
  
  .cta-btn-primary, .cta-btn-secondary {
    width: auto;
    min-width: 200px;
  }
  
  .profile-avatar {
    width: 220px !important;
    height: 220px !important;
  }
  
  .tech-icon {
    transform: scale(0.8);
  }
}

/* Desktop: 1025px - 1440px */
@media (min-width: 1025px) and (max-width: 1440px) {
  .hero-container {
    padding: 3rem 2rem;
  }
  
  .hero-content {
    text-align: left;
  }
  
  .hero-actions {
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .hero-btn-primary, .hero-btn-secondary {
    width: auto;
    min-width: 200px;
  }
  
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
  
  .cta-btn-primary, .cta-btn-secondary {
    width: auto;
    min-width: 220px;
  }
}

/* Large Desktop: 1441px+ */
@media (min-width: 1441px) {
  .hero-container {
    padding: 4rem 3rem;
    max-width: 1600px;
  }
  
  .hero-content {
    text-align: left;
  }
  
  .hero-actions {
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .hero-btn-primary, .hero-btn-secondary {
    width: auto;
    min-width: 240px;
  }
  
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
  
  .cta-btn-primary, .cta-btn-secondary {
    width: auto;
    min-width: 250px;
  }
}

/* Ultra-wide: 1920px+ */
@media (min-width: 1920px) {
  .hero-container {
    max-width: 1800px;
    padding: 5rem 4rem;
  }
}

/* Add more spacing between section-bg blocks */
.section-bg {
  margin-bottom: 3rem;
}

/* Improve card shadow for modern look */
.skill-card, .project-card, .cta-card {
  box-shadow: 0 6px 32px rgba(0,0,0,0.10) !important;
}

/* Increase heading font size and weight */
.hero-title, .section-title, .cta-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
}

/* Improved layout for project cards on all devices */
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-image {
  height: clamp(180px, 25vw, 220px);
  object-fit: cover;
  width: 100%;
}

/* Fix button heights on smaller devices */
@media (max-width: 600px) {
  .cta-btn-primary, .cta-btn-secondary, 
  .hero-btn-primary, .hero-btn-secondary {
    height: auto !important;
    padding: 12px 16px !important;
  }
  
  .v-btn__content {
    white-space: normal;
    text-align: center;
  }
  
  .typewriter-text {
    height: 60px !important;
    font-size: 1.25rem !important;
  }
  
  .welcome-badge {
    display: flex;
    justify-content: center;
  }
  
  .v-container {
    padding: 12px !important;
  }
  
  .skill-card, .project-card {
    margin-bottom: 16px;
  }
}
</style> 