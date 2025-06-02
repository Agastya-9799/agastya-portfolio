# Professional Portfolio Website

A modern, responsive portfolio website built with Vue.js 3 and Vuetify 3 (Material Design). Perfect for AWS Cloud Engineers, DevSecOps Specialists, and other tech professionals.

## 🚀 Features

- **Modern Design**: Clean, professional design with Material Design components
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Smooth Animations**: Beautiful scroll animations using AOS (Animate On Scroll)
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **SEO Friendly**: Optimized for search engines
- **Fast Loading**: Optimized performance with Vite build tool

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **UI Framework**: Vuetify 3 (Material Design)
- **Build Tool**: Vite
- **Styling**: SCSS/CSS3
- **Icons**: Material Design Icons
- **Animations**: AOS (Animate On Scroll)
- **State Management**: Pinia
- **Routing**: Vue Router

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Install dependencies**
   ```bash
npm install
```

2. **Start development server**
   ```bash
npm run dev
```

3. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 🎨 Customization

### Personal Information

1. **Update personal details** in the following files:
   - `src/views/HomeView.vue` - Hero section and overview
   - `src/views/AboutView.vue` - Detailed about information
   - `src/views/ExperienceView.vue` - Work experience and achievements
   - `src/App.vue` - Footer and navigation

2. **Replace placeholder content**:
   - Profile photos (replace placeholder URLs with your actual photos)
   - Social media links
   - Contact information
   - Company names and descriptions

### Theme Colors

Update the theme colors in `src/main.js`:

```javascript
themes: {
  dark: {
    colors: {
      primary: '#00BCD4',     // Your brand color
      secondary: '#FF4081',   // Accent color
      // ... other colors
    },
  },
}
```

### Projects

Update your projects in `src/views/ProjectsView.vue`:

1. Replace the `projects` array with your actual projects
2. Update project images, descriptions, and links
3. Modify project categories to match your work

### Skills and Technologies

Update your skills in:
- `src/views/HomeView.vue` - Featured skills
- `src/views/AboutView.vue` - Detailed skill levels
- `src/views/ExperienceView.vue` - Technology stacks

### Contact Form

To make the contact form functional:

1. Set up a backend service (Node.js, Python, etc.)
2. Update the `submitForm` function in `src/views/ContactView.vue`
3. Replace the simulation with actual API calls

Example backend integration:
```javascript
const submitForm = async () => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    
    if (response.ok) {
      successDialog.value = true
      resetForm()
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
```

## 📱 Sections Overview

### 🏠 Home Page
- Hero section with introduction
- Skills showcase
- Featured projects
- Call-to-action

### 👤 About Page
- Detailed biography
- Skills progress bars
- Professional timeline
- Certifications and education

### 💼 Experience Page
- Detailed work experience
- Key achievements with metrics
- Technologies used
- Career goals

### 🚀 Projects Page
- Project portfolio with filtering
- Detailed project information
- Technology stacks
- Live demos and source code links

### 📞 Contact Page
- Contact form with validation
- Contact information
- Social media links
- FAQ section

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### Deployment Options

1. **Netlify**: Upload the dist folder or connect repository
2. **Vercel**: Import your project for instant deployments
3. **AWS S3 + CloudFront**: For AWS-based hosting
4. **Firebase Hosting**: Google's hosting solution

## 🎯 Performance Optimization

The website is already optimized with:

- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Removes unused code during build
- **Image Optimization**: Lazy loading and proper sizing
- **Caching**: Browser caching for static assets
- **Minification**: CSS and JavaScript minification

## 🔧 Customization Tips

### Update Personal Content

Replace all instances of:
- "Your Name" with your actual name
- "your.email@example.com" with your email
- "yourusername" with your actual usernames
- Company names and descriptions
- Project details and links

### Add Your Photos

Replace placeholder image URLs in:
- Home page hero section
- About page profile photo
- Project screenshots (optional)

---

**Your portfolio is ready to customize! 🚀**

*Made with ❤️ using Vue.js and Vuetify*

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](screenshot-desktop.png)

### Mobile View
![Mobile Screenshot](screenshot-mobile.png)

### Dark Theme
![Dark Theme Screenshot](screenshot-dark.png)

---

*Made with ❤️ using Vue.js and Vuetify*
