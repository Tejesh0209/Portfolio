// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.getElementById('mobileToggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navLinks').classList.toggle('active');
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
            document.getElementById('mobileToggle').classList.remove('active');
            
            // Smooth scroll to section
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// RENDER PROJECTS DYNAMICALLY
// ============================================
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    
    if (!container) {
        console.error('Projects container not found');
        return;
    }
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <span class="project-icon">${project.icon}</span>
                <h3>${project.title}</h3>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-body">
                <p style="margin-bottom: 1rem; color: #ddd;">${project.description}</p>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="project-metrics">
                    ${project.metrics.map(metric => `<span class="metric">${metric}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub →</a>
                    <a href="${project.docs}" target="_blank" rel="noopener noreferrer" class="project-link">Docs →</a>
                </div>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// ============================================
// RENDER SKILLS DYNAMICALLY
// ============================================
function renderSkills() {
    const container = document.getElementById('skillsContainer');
    
    if (!container) {
        console.error('Skills container not found');
        return;
    }
    
    Object.entries(skills).forEach(([category, skillList]) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        skillCategory.innerHTML = `
            <h4>${category}</h4>
            <div class="skill-tags">
                ${skillList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        
        container.appendChild(skillCategory);
    });
}

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Select all elements to animate
    const animatedElements = document.querySelectorAll(
        '.expertise-card, .project-card, .skill-category, .contact-card, .cert-showcase'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
function updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active class on nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// INITIALIZE EVERYTHING ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Render dynamic content
    renderProjects();
    renderSkills();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Set initial active nav link
    updateActiveNavLink();
});

// ============================================
// EASTER EGG: CONSOLE MESSAGE
// ============================================
console.log('%c👋 Hi there!', 'font-size: 24px; font-weight: bold; color: #0ff;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 16px; color: #f0f;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'font-size: 14px; color: #aaa;');

// ============================================
// PERFORMANCE MONITORING (OPTIONAL)
// ============================================
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log(`⚡ Page loaded in ${loadTime}ms`);
    }
});

// ============================================
// KEYBOARD SHORTCUTS (OPTIONAL)
// ============================================
document.addEventListener('keydown', (e) => {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        if (!e.target.matches('input, textarea')) {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'P' to go to projects
    if (e.key === 'p' || e.key === 'P') {
        if (!e.target.matches('input, textarea')) {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Press 'C' to go to contact
    if (e.key === 'c' || e.key === 'C') {
        if (!e.target.matches('input, textarea')) {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
    }
});