<template>
  <div class="section-bg">
    <v-container class="py-16">
      <!-- Header Section -->
      <v-row class="mb-16">
        <v-col cols="12" class="text-center">
          <h1 class="page-title mb-4" data-aos="fade-up">
            About Me
          </h1>
          <p class="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            Associate Cloud Security Engineer & AppSec Specialist | Ex-HOD & Professor | Full Stack Developer
          </p>
        </v-col>
      </v-row>

      <!-- Main About Section -->
      <v-row class="mb-16">
        <v-col cols="12" md="4" class="text-center">
          <div data-aos="fade-right">
            <div class="about-image-container mb-6">
              <div class="about-background"></div>
              <v-avatar size="280" class="about-avatar">
                <v-img
                  src="/agastya-portfolio/images/2018.JPG"
                  alt="Agastya Katamreddy - Cloud Security Engineer"
                  class="about-image"
                ></v-img>
              </v-avatar>
              <!-- Status Badge -->
              <div class="status-badge">
                <v-chip color="success" variant="flat" prepend-icon="mdi-circle" size="small">
                  Available for opportunities
                </v-chip>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <div data-aos="fade-left">
            <h2 class="about-title mb-6">Hello, I'm Agastya Katamreddy</h2>
            <div class="about-content mb-6">
              <p class="about-text mb-4">
                Associate Cloud Security Engineer at <strong>WE45 Solutions</strong> (Sep 2024 – Present), specializing in AppSec, cloud security, and automation. Previously, Full Stack Developer at <strong>Ensar Solutions</strong> (Mar 2024 – Aug 2024), and Assistant Professor & HOD (Computer Science) at <strong>SREE VENKATESWARA COLLEGE OF ENGINEERING</strong>, Andhra Pradesh (2021 – 2023).
              </p>
              <p class="about-text mb-4">
                I bring a unique blend of academic leadership and hands-on engineering, with a passion for secure cloud architectures, DevSecOps, and empowering teams through technology and mentorship.
              </p>
              <p class="about-text mb-4">
                Let's connect: <a href="mailto:katamreddyagastya@gmail.com">katamreddyagastya@gmail.com</a> | <a href="https://www.linkedin.com/in/agastya-reddy-630a0a238/" target="_blank">LinkedIn</a> | <a href="https://x.com/agastya9799" target="_blank">Twitter/X</a>
              </p>
            </div>
            <!-- Achievement Stats -->
            <v-card class="stats-card mb-6" variant="outlined">
              <v-card-text class="pa-6">
                <v-row>
                  <v-col cols="6" sm="3" class="text-center">
                    <div class="stat-container">
                      <div class="stat-number text-primary">2+</div>
                      <div class="stat-label">Years Experience</div>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="3" class="text-center">
                    <div class="stat-container">
                      <div class="stat-number text-info">10+</div>
                      <div class="stat-label">Projects Completed</div>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="3" class="text-center">
                    <div class="stat-container">
                      <div class="stat-number text-success">3</div>
                      <div class="stat-label">Industries</div>
                    </div>
                  </v-col>
                  <v-col cols="6" sm="3" class="text-center">
                    <div class="stat-container">
                      <div class="stat-number text-warning">100%</div>
                      <div class="stat-label">Dedication</div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <!-- Action Buttons -->
            <div class="action-buttons">
              <v-btn
                color="primary"
                size="large"
                prepend-icon="mdi-download"
                variant="flat"
                class="me-4 mb-2"
                elevation="2"
                href="/agastya-portfolio/Agastya Resume.docx.pdf"
                download
              >
                Download Resume
              </v-btn>
              <v-btn
                color="surface"
                size="large"
                variant="elevated"
                prepend-icon="mdi-email"
                to="/contact"
                class="mb-2"
              >
                Get In Touch
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Skills Progress -->
      <v-row class="mb-16">
        <v-col cols="12">
          <h2 class="section-title text-center mb-12" data-aos="fade-up">
            Core Competencies
          </h2>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="skills-card h-100" variant="outlined" data-aos="fade-right">
            <v-card-text class="pa-8">
              <h3 class="card-title mb-6">
                <v-icon icon="mdi-cog" class="me-2" color="primary"></v-icon>
                Technical Skills
              </h3>
              <div v-for="skill in technicalSkills" :key="skill.name" class="skill-item mb-6">
                <div class="skill-header d-flex justify-space-between align-center mb-3">
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
                <div class="d-flex align-center">
                  <v-progress-linear
                    :model-value="skill.level"
                    color="primary"
                    height="8"
                    rounded
                    class="skill-progress flex-grow-1"
                  ></v-progress-linear>
                  <v-chip color="primary" variant="outlined" size="small" class="ml-3">
                    {{ skill.level }}%
                  </v-chip>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="skills-card h-100" variant="outlined" data-aos="fade-left">
            <v-card-text class="pa-8">
              <h3 class="card-title mb-6">
                <v-icon icon="mdi-account-group" class="me-2" color="secondary"></v-icon>
                Professional Skills
              </h3>
              <div v-for="skill in professionalSkills" :key="skill.name" class="skill-item mb-6">
                <div class="skill-header d-flex justify-space-between align-center mb-3">
                  <span class="skill-name">{{ skill.name }}</span>
                </div>
                <div class="d-flex align-center">
                  <v-progress-linear
                    :model-value="skill.level"
                    color="secondary"
                    height="8"
                    rounded
                    class="skill-progress flex-grow-1"
                  ></v-progress-linear>
                  <v-chip color="secondary" variant="outlined" size="small" class="ml-3">
                    {{ skill.level }}%
                  </v-chip>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Experience Timeline -->
      <v-row class="mb-16">
        <v-col cols="12">
          <h2 class="section-title text-center mb-12" data-aos="fade-up">
            Professional Journey
          </h2>
        </v-col>
        <v-col cols="12">
          <div class="timeline-container">
            <div
              v-for="(item, index) in experienceTimeline"
              :key="index"
              class="timeline-item"
              :data-aos="'fade-up'"
              :data-aos-delay="index * 200"
            >
              <div class="timeline-dot">
                <v-avatar :color="item.color" size="60">
                  <v-icon :icon="item.icon" size="30" color="white"></v-icon>
                </v-avatar>
              </div>
              <v-card class="timeline-card" variant="outlined" elevation="2">
                <v-card-text class="pa-8">
                  <div class="card-header d-flex flex-column flex-sm-row justify-space-between align-start mb-6">
                    <div>
                      <h3 class="timeline-title">{{ item.title }}</h3>
                      <p class="timeline-company text-primary">{{ item.company }}</p>
                      <p class="timeline-location">{{ item.location }}</p>
                    </div>
                    <v-chip :color="item.color" variant="flat" class="mt-2 mt-sm-0">
                      {{ item.duration }}
                    </v-chip>
                  </div>
                  <p class="timeline-description mb-6">{{ item.description }}</p>
                  <div class="achievements-section mb-6" v-if="item.achievements && item.achievements.length">
                    <h4 class="achievement-title mb-4">
                      <v-icon icon="mdi-trophy" class="me-2" color="warning"></v-icon>
                      Key Achievements
                    </h4>
                    <v-row>
                      <v-col
                        v-for="achievement in item.achievements"
                        :key="achievement"
                        cols="12"
                        class="achievement-item"
                      >
                        <div class="d-flex align-start">
                          <v-icon icon="mdi-check-circle" color="success" class="me-3 mt-1" size="small"></v-icon>
                          <span class="achievement-text">{{ achievement }}</span>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="technologies-section" v-if="item.technologies && item.technologies.length">
                    <h4 class="tech-title mb-3">
                      <v-icon icon="mdi-code-tags" class="me-2" color="info"></v-icon>
                      Technologies Used
                    </h4>
                    <v-chip-group>
                      <v-chip
                        v-for="tech in item.technologies"
                        :key="tech"
                        size="small"
                        :color="item.color"
                        variant="outlined"
                      >
                        {{ tech }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Education Only (No Certifications) -->
      <v-row class="mb-16">
        <v-col cols="12" md="6">
          <h2 class="section-title mb-8" data-aos="fade-up">
            <v-icon icon="mdi-school" class="me-3" color="secondary"></v-icon>
            Education
          </h2>
          <v-card
            v-for="edu in education"
            :key="edu.degree"
            class="edu-card mb-6"
            variant="outlined"
            data-aos="fade-left"
            elevation="1"
          >
            <v-card-text class="pa-6">
              <div class="d-flex align-center">
                <v-avatar color="secondary" size="60" class="me-4">
                  <v-icon icon="mdi-school" size="30" color="white"></v-icon>
                </v-avatar>
                <div>
                  <h3 class="edu-degree">{{ edu.degree }}</h3>
                  <p class="edu-institution">{{ edu.institution }}</p>
                  <p class="edu-duration">{{ edu.duration }}</p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Blog & Publications -->
      <v-row>
        <v-col cols="12">
          <h2 class="section-title mb-8" data-aos="fade-up">
            <v-icon icon="mdi-file-document-edit" class="me-3" color="primary"></v-icon>
            Blog & Publications
          </h2>
        </v-col>
        <v-col cols="12">
          <v-card class="blog-card" variant="outlined" data-aos="fade-up">
            <v-card-text class="pa-8">
              <v-row>
                <v-col cols="12">
                  <div class="blog-content">
                    <h3 class="text-h4 font-weight-bold mb-4">
                      AppSecEngineer Contributor
                    </h3>
                    <p class="text-body-1 mb-4">
                      I'm <strong>Muni Naga Agastya Eeswar Reddy Katamreddy</strong>, but you can call me Agastya! As an Associate Cloud Security Engineer, I write about AWS security, cloud architecture, and DevSecOps practices.
                    </p>
                    <p class="text-body-1 mb-6">
                      Born and raised in Nellore, Andhra Pradesh, I graduated from Sree Venkateswara College of Engineering, where I mastered the art of cloud security, caffeine consumption, and explaining why "just disable it" is never the right answer.
                    </p>
                    
                    <h4 class="text-h5 font-weight-bold mb-4">
                      <v-icon icon="mdi-pencil" class="me-2" color="secondary"></v-icon>
                      Featured Articles
                    </h4>
                    
                    <v-list class="blog-list pa-0 mb-6" bg-color="transparent">
                      <v-list-item
                        prepend-icon="mdi-file-document"
                        title="Strengthening Transactional Fraud Detection with Amazon Timestream and Amazon Neptune"
                        to="/blog/fraud-detection-timestream-neptune"
                        class="blog-list-item mb-2"
                      ></v-list-item>
                      <v-list-item
                        prepend-icon="mdi-file-document"
                        title="Quantum-Safe Cryptography Blog"
                        to="/blog/quantum-safe-cryptography"
                        class="blog-list-item"
                      ></v-list-item>
                    </v-list>
                    
                    <div class="d-flex">
                      <v-btn 
                        href="https://appsecengineer.com/contributor/agastya-reddy" 
                        target="_blank"
                        color="primary"
                        prepend-icon="mdi-open-in-new"
                        variant="flat"
                        class="me-4"
                      >
                        View Author Profile
                      </v-btn>
                      <v-btn
                        to="/blog"
                        color="secondary"
                        prepend-icon="mdi-book-open-page-variant"
                        variant="outlined"
                      >
                        Browse All Articles
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const technicalSkills = [
  { name: 'AWS Cloud Services', level: 85 },
  { name: 'DevSecOps', level: 83 },
  { name: 'Containerization with Docker', level: 80 },
  { name: 'Terraform Infrastructure as Code', level: 78 },
  { name: 'CI/CD Pipelines', level: 82 },
  { name: 'Security Scanning & OWASP', level: 70 }
]

const professionalSkills = [
  { name: 'Problem Solving', level: 90 },
  { name: 'Team Collaboration', level: 85 },
  { name: 'Project Management', level: 75 },
  { name: 'Technical Communication', level: 80 },
  { name: 'Leadership & Mentoring', level: 70 },
  { name: 'Continuous Learning', level: 95 }
]

const experienceTimeline = [
  {
    title: 'Associate Cloud Security Engineer',
    company: 'WE45 Solutions',
    location: 'Remote / India',
    duration: 'Sep 2024 – Present',
    color: 'primary',
    icon: 'mdi-shield-lock',
    description: 'AppSec engineer focusing on cloud security, automation, and secure DevOps practices. Leading security reviews, automating compliance, and collaborating with engineering teams to build secure cloud-native solutions.',
    achievements: [
      'Automated security compliance for cloud deployments',
      'Reduced incident response time by 30%',
      'Developed internal AppSec training for engineers'
    ],
    technologies: ['AWS', 'Terraform', 'Python', 'Jenkins', 'Docker', 'AppSec']
  },
  {
    title: 'Full Stack Developer',
    company: 'Ensar Solutions',
    location: 'Remote / India',
    duration: 'Mar 2024 – Aug 2024',
    color: 'info',
    icon: 'mdi-laptop',
    description: 'Worked on end-to-end web application development, building scalable and secure solutions using modern JavaScript frameworks and cloud services.',
    achievements: [
      'Delivered 3+ production web apps',
      'Improved CI/CD pipeline efficiency by 25%',
      'Mentored junior developers in best practices'
    ],
    technologies: ['Vue.js', 'Node.js', 'AWS', 'Docker', 'CI/CD']
  },
  {
    title: 'Assistant Professor & HOD (Computer Science)',
    company: 'SREE VENKATESWARA COLLEGE OF ENGINEERING',
    location: 'Andhra Pradesh, India',
    duration: '2021 – 2023',
    color: 'success',
    icon: 'mdi-school',
    description: 'Led the Computer Science department at SREE VENKATESWARA COLLEGE OF ENGINEERING, taught core subjects, and managed academic operations. Fostered a culture of innovation and practical learning.',
    achievements: [
      'Headed department and curriculum design',
      'Organized 5+ tech workshops and seminars',
      'Guided 100+ students in projects and placements'
    ],
    technologies: ['Teaching', 'Leadership', 'Curriculum Design', 'Mentoring']
  }
]

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Indian Technical University',
    duration: '2015 – 2019'
  }
]
</script>

<style scoped>
/* Page Header */
.page-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #00BCD4, #FF4081);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
}

/* About Section */
.about-image-container {
  position: relative;
  display: inline-block;
}

.about-background {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(45deg, #00BCD4, #FF4081, #9C27B0);
  border-radius: 50%;
  opacity: 0.1;
  animation: pulse 3s ease-in-out infinite;
}

.about-avatar {
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.about-image {
  filter: brightness(1.1) contrast(1.1);
}

.status-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 3;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
}

.about-content {
  max-width: 100%;
}

.about-text {
  font-size: 1.125rem;
  line-height: 1.8;
  opacity: 0.9;
}

/* Stats Card */
.stats-card {
  border-radius: 16px !important;
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.05), rgba(255, 64, 129, 0.05));
  border: 1px solid rgba(0, 188, 212, 0.2) !important;
}

.stat-container {
  padding: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.7;
  margin-top: 8px;
  font-weight: 500;
}

/* Action Buttons */
.action-buttons {
  margin-top: 2rem;
}

/* Skills Section */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
}

.skills-card {
  border-radius: 16px !important;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.skills-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.skill-item {
  transition: all 0.3s ease;
}

.skill-header {
  margin-bottom: 12px;
}

.skill-name {
  font-weight: 600;
  font-size: 1rem;
}

.skill-progress {
  position: relative;
}

.progress-value {
  position: absolute;
  right: 0;
  top: -25px;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.8;
}

/* Timeline */
.timeline-container {
  position: relative;
  padding-left: 2rem;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #00BCD4, #FF4081);
  opacity: 0.3;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  margin-left: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -62px;
  top: 0;
  z-index: 2;
}

.timeline-card {
  border-radius: 16px !important;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.timeline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.card-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-company {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.timeline-location {
  opacity: 0.7;
  margin: 0;
}

.timeline-description {
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.9;
}

.achievement-title {
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.achievement-item {
  padding: 0.5rem 0;
}

.achievement-text {
  font-size: 0.95rem;
  line-height: 1.6;
}

.tech-title {
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

/* Certifications & Education */
.cert-card, .edu-card {
  border-radius: 12px !important;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.cert-card:hover, .edu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.cert-name, .edu-degree {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.cert-issuer, .edu-institution {
  opacity: 0.8;
  margin-bottom: 0.25rem;
}

.cert-date, .edu-duration {
  font-size: 0.875rem;
  opacity: 0.6;
  margin: 0;
}

/* Animations */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.05); opacity: 0.2; }
}

/* Mobile Optimizations */
@media (max-width: 960px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .about-avatar {
    width: 200px !important;
    height: 200px !important;
  }
  
  .about-title {
    font-size: 2rem;
    text-align: center;
  }
  
  .timeline-container {
    padding-left: 1rem;
  }
  
  .timeline-item {
    margin-left: 1rem;
  }
  
  .timeline-dot {
    left: -46px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

/* Enhanced mobile optimizations */
@media (max-width: 600px) {
  .page-title {
    font-size: 2rem !important;
  }
  
  .page-subtitle {
    font-size: 1rem !important;
  }
  
  .about-title {
    font-size: 1.75rem !important;
    margin-bottom: 1rem !important;
  }
  
  .v-container {
    padding: 12px !important;
  }
  
  .py-16 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  
  .mb-16 {
    margin-bottom: 32px !important;
  }
  
  .about-avatar {
    width: 180px !important;
    height: 180px !important;
  }
  
  .about-background {
    display: none;
  }
  
  .timeline-container::before {
    display: none;
  }
  
  .timeline-dot {
    position: relative;
    left: auto;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .timeline-item {
    margin-left: 0 !important;
  }
  
  .timeline-card .v-card-text {
    padding: 16px !important;
  }
  
  .card-header {
    flex-direction: column !important;
    text-align: center;
  }
  
  .action-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .action-buttons .v-btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .skills-card .v-card-text {
    padding: 16px !important;
  }
  
  .cert-card, .edu-card {
    margin-bottom: 16px;
  }
}

/* Tablet optimizations */
@media (min-width: 601px) and (max-width: 960px) {
  .page-title {
    font-size: 2.5rem !important;
  }
  
  .v-container {
    padding: 16px !important;
  }
  
  .py-16 {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
  
  .mb-16 {
    margin-bottom: 48px !important;
  }
  
  .about-avatar {
    width: 220px !important;
    height: 220px !important;
  }
  
  .about-title {
    text-align: center;
    margin-top: 1rem;
  }
  
  .skills-card .v-card-text, 
  .timeline-card .v-card-text {
    padding: 24px !important;
  }
  
  .action-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.section-bg {
  margin-bottom: 3rem;
}

.stats-card, .skills-card {
  box-shadow: 0 6px 32px rgba(0,0,0,0.10) !important;
}

.page-title, .about-title, .section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
}

.ml-3 {
  margin-left: 1rem !important;
}

/* Fix timeline for all devices */
.timeline-container {
  position: relative;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-card {
  margin-left: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Make all cards responsive on all devices */
@media (max-width: 1024px) {
  .pa-8 {
    padding: 24px !important;
  }
  
  .mb-12 {
    margin-bottom: 36px !important;
  }
  
  .cert-card, .edu-card {
    height: 100%;
  }
}

/* Blog Section */
.blog-card {
  border-radius: 16px !important;
  background: linear-gradient(135deg, rgba(74, 63, 226, 0.05), rgba(255, 64, 129, 0.05));
  border: 1px solid rgba(74, 63, 226, 0.2) !important;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15) !important;
}

.blog-image-container {
  position: relative;
}

.blog-content {
  line-height: 1.8;
}

.blog-logo {
  vertical-align: middle;
  display: inline-block;
}

.blog-list {
  background: transparent !important;
}

.blog-list-item {
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.2s ease;
}

.blog-list-item:hover {
  background: rgba(74, 63, 226, 0.08);
  transform: translateX(5px);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.15;
  }
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
}
</style> 