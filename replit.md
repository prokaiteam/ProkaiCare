# ProKai - AI-Powered Exam Preparation Landing Page

## Overview

ProKai is a static marketing landing page for an AI-powered exam preparation application. The website promotes an educational app that helps students prepare for various exams (SSC, UPSC, CBSE) with AI-driven explanations and adaptive learning. The site is designed as a single-page application with modern animations and responsive design to showcase the app's features and encourage downloads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and Vanilla JavaScript
- **Architecture Pattern**: Static single-page website with client-side animations
- **Styling Approach**: CSS Custom Properties (CSS Variables) for consistent theming
- **Animation Strategy**: CSS animations combined with JavaScript Intersection Observer API for scroll-triggered effects

### Design System
- **Color Scheme**: Pink-based palette with primary pink (#E91E63), gradients, and complementary colors
- **Typography**: Inter font family from Google Fonts for modern, clean readability
- **Layout**: Responsive design using CSS Grid and Flexbox
- **Visual Effects**: Floating background elements, parallax scrolling, and loading animations

## Key Components

### 1. Loading Animation System
- **Purpose**: Provides smooth page load experience
- **Implementation**: CSS overlay with spinner animation, JavaScript-controlled fade-out
- **User Experience**: Creates anticipation and polish during initial page load

### 2. Scroll Animation Framework
- **Technology**: Intersection Observer API for performance-optimized scroll detection
- **Features**: Fade-in, slide-up, bounce, and typewriter effects triggered on scroll
- **Benefits**: Engages users as they scroll through content sections

### 3. Interactive Elements
- **Animated Counters**: Numbers that count up when visible on screen
- **FAQ Toggle System**: Expandable FAQ sections for better information organization
- **Smooth Scrolling**: Navigation that smoothly scrolls to page sections
- **Hover Effects**: Interactive feedback on buttons and cards

### 4. Responsive Design
- **Approach**: Mobile-first responsive design
- **Breakpoints**: Flexible layout that adapts to different screen sizes
- **Touch-Friendly**: Optimized for mobile interaction patterns

## Data Flow

### Client-Side Only Architecture
1. **Page Load**: HTML loads, CSS applies styling, JavaScript initializes animations
2. **User Interaction**: Scroll events trigger animation observers
3. **Dynamic Effects**: JavaScript modifies DOM classes to trigger CSS animations
4. **Navigation**: Smooth scrolling and section highlighting based on scroll position

### Animation Lifecycle
1. Elements start with base CSS states
2. Intersection Observer detects when elements enter viewport
3. JavaScript adds animation classes
4. CSS transitions and animations execute
5. Final states are maintained for completed animations

## External Dependencies

### Content Delivery Networks (CDNs)
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for visual elements (referenced but not fully implemented)

### No Backend Dependencies
- Pure client-side application with no server requirements
- No database connections or API integrations
- Self-contained static website suitable for any web hosting platform

## Deployment Strategy

### Static Hosting Requirements
- **Hosting Type**: Any static web hosting service (GitHub Pages, Netlify, Vercel, etc.)
- **File Structure**: Simple flat file structure with HTML, CSS, JS, and assets
- **Build Process**: No build step required - files can be served directly
- **Performance**: Optimized for fast loading with minimal dependencies

### Asset Management
- **Images**: Local asset folder structure for logos and graphics
- **Fonts**: Loaded from Google Fonts CDN for optimal performance
- **CSS/JS**: Inline and external files for modular development

### SEO Optimization
- **Meta Tags**: Comprehensive meta descriptions and keywords for search engines
- **Language**: Hindi language setting for regional targeting
- **Performance**: Lightweight codebase for fast page load speeds
- **Accessibility**: Semantic HTML structure for screen readers and SEO

The architecture prioritizes simplicity, performance, and user engagement through modern web animations while maintaining compatibility across devices and browsers.

## Recent Changes

### July 20, 2025
- **Logo Integration**: Added user's ProKai logo image to header section
- **Content Restoration**: Updated all content to use original English copywriting (removed Hindi translations)  
- **Performance Optimization**: Reduced loading times with faster animations and mobile optimizations
- **JavaScript Error Fix**: Resolved selector error causing console warnings
- **Header Structure**: Added complete header with logo, main title, subtitle, and tagline as requested
- **Fast Loading**: Optimized CSS and JavaScript for quicker page rendering