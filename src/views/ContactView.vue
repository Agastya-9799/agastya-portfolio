<template>
  <div class="section-bg">
    <v-container class="py-16">
      <!-- Header Section -->
      <v-row class="mb-16">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 font-weight-bold mb-4" data-aos="fade-up">
            Get In Touch
          </h1>
          <p class="text-h5 text-medium-emphasis" data-aos="fade-up" data-aos-delay="100">
            Let's discuss your next project or opportunity
          </p>
        </v-col>
      </v-row>

      <v-row>
        <!-- Contact Information -->
        <v-col cols="12">
          <div data-aos="fade-right">
            <h2 class="text-h4 font-weight-bold mb-8">Let's Connect</h2>
            
            <p class="text-h6 text-medium-emphasis mb-8 line-height-lg">
              I'm always excited to discuss new opportunities, innovative projects, 
              or just have a conversation about cloud technology and DevSecOps. 
              Feel free to reach out!
            </p>

            <!-- Contact Cards -->
            <v-card
              v-for="contact in contactMethods"
              :key="contact.type"
              class="contact-card mb-4"
              variant="outlined"
              :href="contact.link"
              :target="contact.external ? '_blank' : '_self'"
            >
              <v-card-text class="pa-6">
                <div class="d-flex align-center">
                  <v-avatar :color="contact.color" class="me-4">
                    <v-icon :icon="contact.icon" color="white"></v-icon>
                  </v-avatar>
                  <div>
                    <h3 class="text-h6 font-weight-bold">{{ contact.type }}</h3>
                    <p class="text-body-2 text-medium-emphasis mb-0">{{ contact.value }}</p>
                  </div>
                  <v-spacer></v-spacer>
                  <v-icon icon="mdi-arrow-top-right" class="text-medium-emphasis"></v-icon>
                </div>
              </v-card-text>
            </v-card>

            <!-- Social Links -->
            <div class="mt-8">
              <h3 class="text-h5 font-weight-bold mb-4">Follow Me</h3>
              <div class="d-flex gap-4">
                <v-btn
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  :color="social.color"
                  size="large"
                  icon
                  variant="outlined"
                >
                  <v-icon :icon="social.icon" size="24"></v-icon>
                </v-btn>
              </div>
            </div>

            <!-- Availability Status -->
            <v-card class="availability-card mt-8" variant="outlined">
              <v-card-text class="pa-6">
                <div class="d-flex flex-column">
                  <div class="d-flex align-center mb-4">
                    <div class="status-indicator me-3"></div>
                    <div>
                      <h4 class="text-h6 font-weight-bold text-success">Available for opportunities</h4>
                      <p class="text-body-2 text-medium-emphasis mb-0">
                        Open to full-time positions and interesting projects
                      </p>
                    </div>
                  </div>
                  <div class="d-flex mt-2">
                    <v-btn
                      color="primary"
                      variant="flat"
                      prepend-icon="mdi-file-document-outline"
                      href="../../public/Agastya Resume.docx.pdf"
                      target="_blank"
                    >
                      View Resume
                    </v-btn>
                    <v-btn
                      color="secondary"
                      variant="outlined"
                      class="ms-4"
                      prepend-icon="mdi-download"
                      href="../../public/Agastya Resume.docx.pdf"
                      download
                    >
                      Download Resume
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <!-- FAQ Section -->
      <v-row class="mt-16">
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold text-center mb-12" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          
          <v-expansion-panels
            class="faq-panels"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <v-expansion-panel
              v-for="faq in faqs"
              :key="faq.question"
              class="mb-2"
            >
              <v-expansion-panel-title class="text-h6 font-weight-medium">
                {{ faq.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-body-1 line-height-lg">
                {{ faq.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contactMethods = [
  {
    type: 'Email',
    value: 'katamreddyagastya@gmail.com',
    icon: 'mdi-email',
    color: 'primary',
    link: 'mailto:katamreddyagastya@gmail.com',
    external: true
  },
  {
    type: 'LinkedIn',
    value: '/in/agastya-reddy-630a0a238',
    icon: 'mdi-linkedin',
    color: 'blue',
    link: 'https://www.linkedin.com/in/agastya-reddy-630a0a238/',
    external: true
  },
  {
    type: 'Twitter/X',
    value: '@agastya9799',
    icon: 'mdi-twitter',
    color: 'light-blue',
    link: 'https://x.com/agastya9799',
    external: true
  },
  {
    type: 'Location',
    value: 'India',
    icon: 'mdi-map-marker',
    color: 'orange',
    link: '#',
    external: false
  }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/agastya-reddy-630a0a238/',
    icon: 'mdi-linkedin',
    color: 'blue'
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/agastya9799',
    icon: 'mdi-twitter',
    color: 'light-blue'
  },
  {
    name: 'Email',
    url: 'mailto:katamreddyagastya@gmail.com',
    icon: 'mdi-email',
    color: 'primary'
  }
]

const faqs = [
  {
    question: 'What is your experience with AWS?',
    answer: 'I have 1+ years of hands-on experience working with various AWS services including EC2, S3, RDS, Lambda, CloudFormation, and more. I\'ve designed and implemented scalable, secure cloud architectures for multiple projects.'
  },
  {
    question: 'Do you work on freelance projects?',
    answer: 'Yes, I\'m open to freelance projects, especially those involving cloud infrastructure, DevSecOps implementation, or automation. Feel free to reach out with your project details.'
  },
  {
    question: 'What certifications do you have?',
    answer: 'I\'m currently pursuing AWS Certified Solutions Architect certification. I also hold AWS Cloud Practitioner certification and have completed various specialized training programs.'
  },
  {
    question: 'Are you available for full-time positions?',
    answer: 'Yes, I\'m actively looking for full-time opportunities in cloud engineering, DevSecOps, or related fields. I\'m primarily interested in roles that involve AWS cloud architecture, cloud security, and automation.'
  },
  {
    question: 'What is your preferred tech stack?',
    answer: 'I primarily work with AWS for cloud services, Docker for containerization, Terraform for IaC, Python for automation, and various DevSecOps tools like Jenkins, GitLab CI, and security scanning tools.'
  },
  {
    question: 'Do you provide consulting services?',
    answer: 'Yes, I offer consulting services for cloud migration, DevSecOps implementation, security assessments, and infrastructure optimization. Contact me to discuss your specific needs.'
  }
]
</script>

<style scoped>
.contact-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-form-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.availability-card {
  border: 2px solid rgba(76, 175, 80, 0.3);
  background: rgba(76, 175, 80, 0.05);
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #4CAF50;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

.faq-panels {
  max-width: 800px;
  margin: 0 auto;
}

.line-height-lg {
  line-height: 1.8;
}

/* Mobile optimizations */
@media (max-width: 960px) {
  .contact-card:hover {
    transform: none;
  }
}

/* Enhanced mobile and tablet optimizations */
@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
  }
  
  .text-h4 {
    font-size: 1.5rem !important;
  }
  
  .text-h5 {
    font-size: 1.2rem !important;
  }
  
  .text-h6 {
    font-size: 1.1rem !important;
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
  
  .v-expansion-panel-title {
    min-height: 48px !important;
    padding: 12px !important;
  }
  
  .v-expansion-panel-text__wrapper {
    padding: 12px !important;
  }
  
  .contact-card .v-card-text {
    padding: 12px !important;
  }
  
  .gap-4 {
    gap: 12px !important;
  }
  
  .availability-card .v-card-text {
    padding: 12px !important;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .text-h2 {
    font-size: 2.5rem !important;
  }
  
  .text-h4 {
    font-size: 1.75rem !important;
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
}

.section-bg {
  margin-bottom: 3rem;
}

.contact-card, .faq-panels, .v-card {
  box-shadow: 0 6px 32px rgba(0,0,0,0.10) !important;
}

.text-h2, .section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
}

/* Make contact cards responsive */
.contact-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

/* Enhance social buttons */
.v-btn.v-btn--icon {
  width: 48px !important;
  height: 48px !important;
}

@media (max-width: 480px) {
  .v-btn.v-btn--icon {
    width: 40px !important;
    height: 40px !important;
  }
  
  .v-avatar {
    width: 40px !important;
    height: 40px !important;
  }
}
</style> 