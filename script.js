// ============================================
// PORTFOLIO SCRIPT
// ============================================

// Projects database
const projects = {
    featured: [
        {
            id: 'project-1',
            title: 'Smart Home Automation System',
            category: 'Electronics & Robotics',
            image: 'https://via.placeholder.com/400x400?text=Smart+Home',
            description: 'Custom Arduino-based IoT system with wireless sensors and mobile control.',
            link: 'projects/smart-home.html'
        },
        {
            id: 'project-2',
            title: 'Mechanical Arm Design',
            category: '3D Design & Graphics',
            image: 'https://via.placeholder.com/400x400?text=Mechanical+Arm',
            description: 'Full CAD design and 3D-printed robotic manipulator with 6 degrees of freedom.',
            link: 'projects/mechanical-arm.html'
        },
        {
            id: 'project-3',
            title: 'Urban Architecture Photography',
            category: 'Photography & Videography',
            image: 'https://via.placeholder.com/400x400?text=Architecture',
            description: 'A visual journey through contemporary urban landscapes and geometric forms.',
            link: 'projects/architecture-series.html'
        },
        {
            id: 'project-4',
            title: 'LED Matrix Display',
            category: 'Electronics & Robotics',
            image: 'https://via.placeholder.com/400x400?text=LED+Matrix',
            description: 'Programmable 32x32 RGB LED display with custom animations and web control.',
            link: 'projects/led-matrix.html'
        }
    ],
    electronics: [
        {
            id: 'project-1',
            title: 'Smart Home Automation System',
            category: 'Electronics & Robotics',
            image: 'https://via.placeholder.com/400x400?text=Smart+Home',
            description: 'Custom Arduino-based IoT system with wireless sensors and mobile control.',
            link: 'projects/smart-home.html'
        },
        {
            id: 'project-4',
            title: 'LED Matrix Display',
            category: 'Electronics & Robotics',
            image: 'https://via.placeholder.com/400x400?text=LED+Matrix',
            description: 'Programmable 32x32 RGB LED display with custom animations and web control.',
            link: 'projects/led-matrix.html'
        }
    ],
    '3d-design': [
        {
            id: 'project-2',
            title: 'Mechanical Arm Design',
            category: '3D Design & Graphics',
            image: 'https://via.placeholder.com/400x400?text=Mechanical+Arm',
            description: 'Full CAD design and 3D-printed robotic manipulator with 6 degrees of freedom.',
            link: 'projects/mechanical-arm.html'
        },
        {
            id: 'project-5',
            title: 'Product Visualization Suite',
            category: '3D Design & Graphics',
            image: 'https://via.placeholder.com/400x400?text=3D+Renders',
            description: 'High-fidelity 3D renders and animations for product mockups and presentations.',
            link: 'projects/product-viz.html'
        }
    ],
    photography: [
        {
            id: 'project-3',
            title: 'Urban Architecture Photography',
            category: 'Photography & Videography',
            image: 'https://via.placeholder.com/400x400?text=Architecture',
            description: 'A visual journey through contemporary urban landscapes and geometric forms.',
            link: 'projects/architecture-series.html'
        },
        {
            id: 'project-6',
            title: 'Product Photography & Styling',
            category: 'Photography & Videography',
            image: 'https://via.placeholder.com/400x400?text=Product',
            description: 'Professional product shots with creative lighting and styling for e-commerce.',
            link: 'projects/product-photography.html'
        }
    ]
};

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const content = document.getElementById('content');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupNavigation();
});

// Load projects into the grid
function loadProjects() {
    renderProjects('featured-projects', projects.featured);
    renderProjects('electronics-projects', projects.electronics);
    renderProjects('3d-design-projects', projects['3d-design']);
    renderProjects('photography-projects', projects.photography);
}

// Render projects to grid
function renderProjects(containerId, projectsArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projectsArray.map(project => `
        <a href="${project.link}" class="project-card">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-meta">
                <div class="project-category">${project.category}</div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <span class="project-link">View Project</span>
        </a>
    `).join('');
}

// Navigation setup
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.dataset.section;
            navigateToSection(sectionId);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Handle hash navigation (for direct URLs)
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1) || 'home';
        navigateToSection(hash);
    });

    // Load initial section from hash
    const initialSection = window.location.hash.slice(1) || 'home';
    navigateToSection(initialSection);
}

// Navigate to section
function navigateToSection(sectionId) {
    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.history.pushState(null, null, `#${sectionId}`);
    }

    // Update nav link
    navLinks.forEach(link => {
        if (link.dataset.section === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.includes('#')) {
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const sectionId = href.slice(1);
            navigateToSection(sectionId);
        }
    }
});

// Image lazy loading (optional enhancement)
const images = document.querySelectorAll('img');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}
