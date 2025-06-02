/**
 * Centralized image URL configuration
 * 
 * This file provides a single location to manage all image URLs used throughout the application.
 * Using a dedicated image hosting service like Cloudinary ensures reliable image loading.
 */

export const images = {
  // Logo and profile images
  logo: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857731/logo1_qfimus.png",
  profileLarge: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857728/2018_gziiet.jpg",
  profileMedium: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857728/2018_gziiet.jpg",
  
  // Project images
  projects: {
    devSecOps: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857733/wiki-dev-sec-ops-WC04-24-graphic_gyadcc.webp",
    contentStreaming: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857728/benefits-securing-high-value-streaming-services-1_gtzjp6.webp",
    multiVpc: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857733/What_is_a_Virtual_Private_Cloud_blog_cover_b10c66bd9c_p53dwi.png",
    s3Hosting: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857729/Hosting-Static-1_pqyl4c.jpg",
    nginxScaling: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748858518/aws-auto-scaling-group_nginx-plus-ha_1_gkofsh.png",
    smartGreenhouse: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857730/image1-28_udgney.png",
    shillingAttack: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857732/MicrosoftTeams-image-129_llps3m.jpg",
  },
  
  // Blog images
  blog: {
    appSecLogo: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857731/logo1_qfimus.png",
    fraudDetection: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857729/blog1_xdtl7f.png",
    quantumSafe: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857730/hq720_o37hs1.jpg",
  },
  
  // Resume
  resume: "https://drive.google.com/file/d/1lFifiIPhpd1kmy2lsoVFG3mpWjFLDMiN/view?usp=sharing",
  
  // Favicon
  favicon: "https://res.cloudinary.com/dx4rvixsa/image/upload/v1748857728/2018_gziiet.jpg",
}

export default images; 