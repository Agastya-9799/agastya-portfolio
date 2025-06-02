<template>
  <div class="section-bg">
    <v-container class="py-16">
      <!-- Header Section -->
      <v-row class="mb-16">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 font-weight-bold mb-4" data-aos="fade-up">
            Professional Experience
          </h1>
          <p class="text-h5 text-medium-emphasis" data-aos="fade-up" data-aos-delay="100">
            My journey in cloud engineering and DevSecOps
          </p>
        </v-col>
      </v-row>

      <!-- Experience Cards -->
      <v-row class="mb-16">
        <v-col
          v-for="(job, index) in experiences"
          :key="index"
          cols="12"
        >
          <v-card
            class="experience-card mb-8"
            variant="outlined"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 200"
          >
            <v-card-text class="pa-8">
              <v-row>
                <v-col cols="12" md="3" class="text-center text-md-start">
                  <v-avatar size="80" class="company-logo mb-4">
                    <v-icon :icon="job.icon" size="40" color="white"></v-icon>
                  </v-avatar>
                  <div class="company-info">
                    <h3 class="text-h5 font-weight-bold">{{ job.company }}</h3>
                    <p class="text-body-2 text-medium-emphasis">{{ job.location }}</p>
                    <v-chip :color="job.status === 'Current' ? 'success' : 'primary'" variant="outlined" class="mt-2">
                      {{ job.status }}
                    </v-chip>
                  </div>
                </v-col>
                
                <v-col cols="12" md="9">
                  <div class="d-flex flex-column flex-sm-row justify-space-between align-start mb-4">
                    <div>
                      <h2 class="text-h4 font-weight-bold text-primary">{{ job.title }}</h2>
                      <p class="text-h6 text-medium-emphasis">{{ job.department }}</p>
                    </div>
                    <div class="text-end mt-2 mt-sm-0">
                      <p class="text-h6 font-weight-medium">{{ job.duration }}</p>
                      <p class="text-body-2 text-medium-emphasis">{{ job.period }}</p>
                    </div>
                  </div>
                  
                  <p class="text-body-1 mb-6 line-height-lg">
                    {{ job.description }}
                  </p>
                  
                  <!-- Key Responsibilities -->
                  <div class="mb-6">
                    <h4 class="text-h6 font-weight-bold mb-3">
                      <v-icon icon="mdi-briefcase" class="me-2"></v-icon>
                      Key Responsibilities
                    </h4>
                    <v-row>
                      <v-col
                        v-for="responsibility in job.responsibilities"
                        :key="responsibility"
                        cols="12"
                        md="6"
                      >
                        <div class="d-flex align-start mb-2">
                          <v-icon icon="mdi-chevron-right" color="primary" class="me-2 mt-1" size="small"></v-icon>
                          <span class="text-body-2">{{ responsibility }}</span>
                        </div>
                      </v-col>
                    </v-row>
                  </div>
                  
                  <!-- Achievements -->
                  <div class="mb-6">
                    <h4 class="text-h6 font-weight-bold mb-3">
                      <v-icon icon="mdi-trophy" class="me-2"></v-icon>
                      Key Achievements
                    </h4>
                    <v-row>
                      <v-col
                        v-for="achievement in job.achievements"
                        :key="achievement.title"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-card class="achievement-card h-100 text-center pa-4" variant="outlined">
                          <v-icon :icon="achievement.icon" size="32" color="primary" class="mb-2"></v-icon>
                          <h5 class="text-h6 font-weight-bold">{{ achievement.value }}</h5>
                          <p class="text-body-2 text-medium-emphasis">{{ achievement.title }}</p>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                  
                  <!-- Technologies Used -->
                  <div class="mb-4">
                    <h4 class="text-h6 font-weight-bold mb-3">
                      <v-icon icon="mdi-cog" class="me-2"></v-icon>
                      Technologies
                    </h4>
                    <v-chip-group>
                      <v-chip
                        v-for="tech in job.technologies"
                        :key="tech"
                        color="primary"
                        variant="outlined"
                        size="small"
                      >
                        {{ tech }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                  <!-- Tools Used -->
                  <div class="mb-4" v-if="job.tools && job.tools.length">
                    <h4 class="text-h6 font-weight-bold mb-3">
                      <v-icon icon="mdi-wrench" class="me-2"></v-icon>
                      Tools
                    </h4>
                    <v-chip-group>
                      <v-chip
                        v-for="tool in job.tools"
                        :key="tool"
                        color="secondary"
                        variant="outlined"
                        size="small"
                      >
                        {{ tool }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Skills Gained -->
      <v-row class="mb-16">
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold text-center mb-12" data-aos="fade-up">
            Skills Developed
          </h2>
        </v-col>
        
        <v-col
          v-for="(skillSet, index) in skillsSections"
          :key="skillSet.title"
          cols="12"
          md="4"
        >
          <v-card
            class="skill-section-card h-100"
            variant="outlined"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <v-card-text class="pa-6 text-center">
              <v-icon :icon="skillSet.icon" size="48" color="primary" class="mb-4"></v-icon>
              <h3 class="text-h5 font-weight-bold mb-4">{{ skillSet.title }}</h3>
              <v-list class="skill-list">
                <v-list-item
                  v-for="skill in skillSet.skills"
                  :key="skill.name"
                  class="px-0"
                >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-check-circle" color="success" size="small"></v-icon>
                  </template>
                  <v-list-item-title class="text-start">{{ skill.name }}</v-list-item-title>
                  <template v-slot:append>
                    <v-rating
                      :model-value="skill.level"
                      density="compact"
                      size="small"
                      readonly
                      color="primary"
                    ></v-rating>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Career Goals -->
      <v-row>
        <v-col cols="12">
          <v-card class="career-goals-card" variant="outlined" data-aos="fade-up">
            <v-card-text class="pa-8 text-center">
              <v-icon icon="mdi-target" size="64" color="primary" class="mb-4"></v-icon>
              <h2 class="text-h3 font-weight-bold mb-6">Career Goals</h2>
              <p class="text-h6 text-medium-emphasis mb-8 mx-auto" style="max-width: 800px;">
                I'm committed to continuous learning and growth in cloud engineering and DevSecOps. 
                My goal is to become a cloud architecture expert while leading teams to build 
                secure, scalable, and innovative solutions.
              </p>
              
              <v-row justify="center">
                <v-col
                  v-for="goal in careerGoals"
                  :key="goal.title"
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <div class="goal-item">
                    <v-icon :icon="goal.icon" size="32" color="primary" class="mb-2"></v-icon>
                    <h4 class="text-h6 font-weight-bold">{{ goal.title }}</h4>
                    <p class="text-body-2 text-medium-emphasis">{{ goal.description }}</p>
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
const experiences = [
  {
    title: 'Associate Cloud Security Engineer',
    company: 'WE45 Solutions',
    department: 'Cloud Security',
    location: 'Bengaluru, Karnataka, India',
    duration: 'Sep 2024 – Present',
    period: 'Dec 2024 – Present (7 months)',
    status: 'Current',
    icon: 'mdi-shield-lock',
    description: `At WE45, a leader in application and cloud security, I help organizations secure their cloud-native environments. My work spans cloud security assessments, DevSecOps pipeline integration, and security automation. I work with a wide range of AWS services, security tools, and DevSecOps practices.`,
    responsibilities: [
      'Conduct cloud security assessments for client environments',
      'Integrate security automation into DevSecOps pipelines using Jenkins and various security tools',
      'Develop and implement threat models and security blueprints for cloud-native applications',
      'Create technical documentation and implementation guides for AWS security services',
      'Implement and configure security tooling for DAST, SAST, and SCA in CI/CD pipelines',
      'Collaborate with product and engineering teams to embed security by default',
      'Support application security reviews and supply chain security initiatives',
      'Contribute to security automation scripts and custom tool integrations'
    ],
    achievements: [
      { title: 'Cloud Security Assessments Delivered', value: '10+', icon: 'mdi-cloud-check' },
      { title: 'DevSecOps Pipelines Secured', value: '5+', icon: 'mdi-cogs' },
      { title: 'Security Documentation Created', value: '12+', icon: 'mdi-file-document' }
    ],
    technologies: [
      'AWS', 'EC2', 'S3', 'Lambda', 'CloudWatch', 'CloudFront', 'KMS', 'WAF', 'Network Firewall', 'Detective',
      'Docker', 'Terraform', 'Python', 'Azure DevOps', 'Cloud Security', 'DevSecOps', 'DAST', 'SAST', 'SCA',
      'Threat Modeling', 'GitLab CI/CD'
    ],
    tools: [
      'ZAP', 'DefectDojo', 'Nuclei', 'Selenium', 'Jenkins', 'Bamboo', 'Orchestron™', 'Semgrep', 'Docker', 
      'CI/CD', 'Gaia', 'GitLab', 'Azure DevOps', 'AWS CLI', 'Terraform CLI'
    ]
  },
  {
    title: 'Cloud Security Intern',
    company: 'WE45 Solutions',
    department: 'Cloud Security',
    location: 'Bengaluru, Karnataka, India',
    duration: 'Sep 2024 – Dec 2024',
    period: 'Sep 2024 – Dec 2024 (4 months)',
    status: 'Past',
    icon: 'mdi-shield-lock',
    description: `Started at WE45 as a Cloud Security Intern, where I assisted the security team with cloud security assessments and DevSecOps implementation. I gained hands-on experience with AWS security services and security automation tools while supporting client security initiatives.`,
    responsibilities: [
      'Assisted in cloud security assessments for AWS environments',
      'Supported implementation of security scanning tools in CI/CD pipelines',
      'Helped develop security documentation and guidelines',
      'Participated in threat modeling sessions for cloud applications',
      'Learned and applied cloud security best practices'
    ],
    achievements: [
      { title: 'Projects Contributed', value: '5+', icon: 'mdi-rocket-launch' },
      { title: 'Tools Learned', value: '8+', icon: 'mdi-tools' },
      { title: 'Training Completed', value: '3', icon: 'mdi-certificate' }
    ],
    technologies: ['AWS', 'Cloud Security', 'DevSecOps', 'Python', 'Terraform'],
    tools: ['ZAP', 'Docker', 'Jenkins', 'AWS CLI']
  },
  {
    title: 'Full Stack Developer',
    company: 'Ensar Solutions Inc',
    department: 'Software Development',
    location: 'Hyderabad, Telangana, India',
    duration: 'Aug 2024 – Sep 2024',
    period: 'Aug 2024 – Sep 2024 (2 months)',
    status: 'Past',
    icon: 'mdi-laptop',
    description: 'Worked on end-to-end web application development, building scalable and secure solutions using modern JavaScript frameworks and cloud services.',
    responsibilities: [
      'Developed and maintained production web applications',
      'Built scalable backend and frontend features',
      'Integrated CI/CD pipelines for rapid deployment',
      'Collaborated with cross-functional teams on product development',
      'Implemented responsive and user-friendly interfaces'
    ],
    achievements: [
      { title: 'Production Apps Delivered', value: '2', icon: 'mdi-rocket-launch' },
      { title: 'CI/CD Efficiency Improved', value: '20%', icon: 'mdi-cogs' },
      { title: 'Code Reviews Conducted', value: '15+', icon: 'mdi-code-tags-check' }
    ],
    technologies: ['Vue.js', 'Node.js', 'AWS', 'JavaScript', 'HTML', 'CSS'],
    tools: ['Jenkins', 'Docker', 'Git', 'VS Code', 'JIRA']
  },
  {
    title: 'Intern',
    company: 'Ensar Solutions Inc',
    department: 'Software Development',
    location: 'Nellore, Andhra Pradesh, India',
    duration: 'May 2024 – Sep 2024',
    period: 'May 2024 – Sep 2024 (5 months)',
    status: 'Past',
    icon: 'mdi-laptop',
    description: 'Started as an intern at Ensar Solutions, focusing on learning web development fundamentals and assisting with various development tasks.',
    responsibilities: [
      'Assisted in front-end development tasks using HTML, CSS, and JavaScript',
      'Learned and applied Vue.js for building UI components',
      'Participated in code reviews and gained development experience',
      'Helped with testing and quality assurance',
      'Documented code and processes'
    ],
    achievements: [
      { title: 'Components Built', value: '10+', icon: 'mdi-puzzle' },
      { title: 'Skills Acquired', value: '5+', icon: 'mdi-trophy' },
      { title: 'Projects Contributed', value: '3', icon: 'mdi-folder-multiple' }
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Git'],
    tools: ['VS Code', 'JIRA']
  },
  {
    title: 'UI Developer',
    company: 'MNJ SOFTWARE',
    department: 'UI Development',
    location: 'Noida, Uttar Pradesh, India',
    duration: 'Mar 2024 – May 2024',
    period: 'Mar 2024 – May 2024 (3 months)',
    status: 'Past',
    icon: 'mdi-palette',
    description: 'Worked as a UI Developer, focusing on creating responsive and visually appealing user interfaces for web applications.',
    responsibilities: [
      'Designed and developed user interfaces for web applications',
      'Implemented responsive designs for various screen sizes',
      'Created reusable UI components and style libraries',
      'Collaborated with UX designers to implement designs',
      'Ensured cross-browser compatibility'
    ],
    achievements: [
      { title: 'UI Components', value: '20+', icon: 'mdi-view-dashboard' },
      { title: 'Design Systems', value: '1', icon: 'mdi-palette' },
      { title: 'Page Load Time', value: '-30%', icon: 'mdi-speedometer' }
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SASS', 'Bootstrap', 'Responsive Design'],
    tools: ['Figma', 'Adobe XD', 'VS Code', 'Git']
  },
  {
    title: 'Head of Department',
    company: 'SREE VENKATESWARA COLLEGE OF ENGINEERING',
    department: 'Computer Science',
    location: 'Nellore, Andhra Pradesh, India',
    duration: 'Jul 2022 – Oct 2023',
    period: 'Jul 2022 – Oct 2023 (1 year 4 months)',
    status: 'Past',
    icon: 'mdi-school',
    description: 'Led the Computer Science department, managed academic operations, faculty, and curriculum development while teaching core computer science subjects.',
    responsibilities: [
      'Headed department operations and curriculum design',
      'Managed faculty and academic resources',
      'Taught core computer science subjects',
      'Organized technical workshops and seminars',
      'Guided students in projects and career development',
      'Participated in institutional accreditation processes'
    ],
    achievements: [
      { title: 'Workshops Organized', value: '10+', icon: 'mdi-presentation' },
      { title: 'Students Guided', value: '150+', icon: 'mdi-account-group' },
      { title: 'Faculty Managed', value: '15', icon: 'mdi-account-supervisor' }
    ],
    technologies: ['Academic Leadership', 'Curriculum Design', 'Teaching', 'Mentoring'],
    tools: []
  },
  {
    title: 'Assistant Professor',
    company: 'SREE VENKATESWARA COLLEGE OF ENGINEERING',
    department: 'Computer Science',
    location: 'Nellore, Andhra Pradesh, India',
    duration: 'Nov 2021 – Oct 2023',
    period: 'Nov 2021 – Oct 2023 (2 years)',
    status: 'Past',
    icon: 'mdi-school',
    description: 'Taught computer science courses to undergraduate students, guided student projects, and participated in department activities.',
    responsibilities: [
      'Taught core computer science subjects to B.Tech students',
      'Conducted laboratory sessions and practical training',
      'Guided student projects and research activities',
      'Developed course materials and assessment methods',
      'Participated in department and college events'
    ],
    achievements: [
      { title: 'Courses Taught', value: '8+', icon: 'mdi-book-open-variant' },
      { title: 'Projects Guided', value: '25+', icon: 'mdi-lightbulb' },
      { title: 'Student Satisfaction', value: '4.5/5', icon: 'mdi-star' }
    ],
    technologies: ['Teaching', 'Curriculum Development', 'Mentoring', 'Academic Research'],
    tools: []
  }
]

const skillsSections = [
  {
    title: 'Cloud Technologies',
    icon: 'mdi-cloud',
    skills: [
      { name: 'AWS Services', level: 4 },
      { name: 'Infrastructure as Code', level: 4 },
      { name: 'Cloud Security', level: 4 },
      { name: 'Cost Optimization', level: 3 }
    ]
  },
  {
    title: 'DevOps & Automation',
    icon: 'mdi-cogs',
    skills: [
      { name: 'CI/CD Pipelines', level: 4 },
      { name: 'Containerization', level: 3 },
      { name: 'Orchestration', level: 3 },
      { name: 'Monitoring & Logging', level: 4 }
    ]
  },
  {
    title: 'Security & Compliance',
    icon: 'mdi-security',
    skills: [
      { name: 'Security Scanning', level: 4 },
      { name: 'Vulnerability Assessment', level: 4 },
      { name: 'Compliance Frameworks', level: 3 },
      { name: 'Security Automation', level: 4 }
    ]
  },
  {
    title: 'Education & Test Scores',
    icon: 'mdi-certificate',
    skills: [
      { name: 'B.Tech Computer Science (3.15/4)', level: 5 },
      { name: 'GRE Score: 318', level: 5 },
      { name: 'IELTS Score: 6.0', level: 5 },
      { name: 'SREE VENKATESWARA COLLEGE', level: 5 }
    ]
  }
]

const careerGoals = [
  {
    title: 'Cloud Security Architect',
    description: 'Design secure enterprise cloud solutions',
    icon: 'mdi-architecture'
  },
  {
    title: 'Security Leadership',
    description: 'Lead DevSecOps implementation teams',
    icon: 'mdi-account-group'
  },
  {
    title: 'Advanced Certifications',
    description: 'Obtain AWS and security certifications',
    icon: 'mdi-certificate'
  },
  {
    title: 'Research & Innovation',
    description: 'Contribute to security research',
    icon: 'mdi-lightbulb'
  }
]
</script>

<style scoped>
.experience-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border: 2px solid transparent;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 188, 212, 0.3);
}

.company-logo {
  background: linear-gradient(45deg, #00BCD4, #FF4081);
}

.achievement-card {
  transition: transform 0.3s ease;
  border: 2px solid transparent;
}

.achievement-card:hover {
  transform: translateY(-3px);
  border-color: rgba(0, 188, 212, 0.3);
}

.skill-section-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.skill-section-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.skill-list {
  background: transparent !important;
}

.career-goals-card {
  background: linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(255, 64, 129, 0.1) 100%);
  border: 2px solid rgba(0, 188, 212, 0.2);
  box-shadow: 0 6px 32px rgba(0,0,0,0.10) !important;
}

.goal-item {
  padding: 1rem;
  transition: transform 0.3s ease;
}

.goal-item:hover {
  transform: translateY(-3px);
}

.line-height-lg {
  line-height: 1.8;
}

/* Mobile optimizations */
@media (max-width: 960px) {
  .company-logo {
    width: 60px !important;
    height: 60px !important;
  }
}

/* Enhanced mobile optimizations */
@media (max-width: 600px) {
  .text-h2 {
    font-size: 2rem !important;
  }
  
  .text-h3 {
    font-size: 1.75rem !important;
  }
  
  .text-h4 {
    font-size: 1.5rem !important;
  }
  
  .text-h5 {
    font-size: 1.2rem !important;
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
  
  .experience-card .v-card-text {
    padding: 16px !important;
  }
  
  .company-info {
    text-align: center;
    margin-bottom: 24px;
  }
  
  .achievement-card {
    padding: 12px !important;
  }
  
  .experience-card:hover {
    transform: translateY(-3px);
  }
  
  .v-list-item {
    min-height: 48px !important;
  }
  
  .v-rating {
    transform: scale(0.9);
  }
  
  .career-goals-card .v-card-text {
    padding: 16px !important;
  }
}

/* Tablet optimizations */
@media (min-width: 601px) and (max-width: 960px) {
  .text-h2 {
    font-size: 2.5rem !important;
  }
  
  .text-h3 {
    font-size: 2rem !important;
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
  
  .experience-card .v-card-text {
    padding: 24px !important;
  }
  
  .company-info {
    text-align: center;
  }
}

.section-bg {
  margin-bottom: 3rem;
}

.page-title, .section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
}

/* Add responsive padding for all devices */
@media (max-width: 1024px) {
  .pa-8 {
    padding: 24px !important;
  }
  
  .mb-12 {
    margin-bottom: 36px !important;
  }
  
  .skill-list .v-list-item__append {
    padding-left: 8px;
  }
}
</style> 