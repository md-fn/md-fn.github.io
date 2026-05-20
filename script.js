// ============================================================
// PORTFOLIO — Mohammed Faihal Khateeb
// ============================================================
//
// ADDING IMAGES:
//   1. Create an "images/" folder in the repo root.
//   2. Drop your photos in (jpg / png / webp).
//   3. Update the "image" path in each project below, e.g.:
//      image: 'images/robotic-arm.jpg'
//   For project pages do the same in the detail HTML files.
// ============================================================

const projects = {

    // ---- FEATURED (shown on home page bento grid) -----------
    featured: [
        {
            id:          'robotic-arm',
            title:       'Color-Sorting Robotic Arm',
            category:    'Robotics & Embedded',
            image:       'Media/Robotic Arm/Arm 1.jpg',
            description: 'Fully designed in Fusion 360. 4-bar linkages keep the end-effector level, herringbone 2:1 gear at the base, parallel servo gripper, single-flange bearings for smooth low-backlash joints. PIC18 + TCS3200 color sensor drives automated color sorting.',
            tags:        ['Fusion 360', 'PIC18', '28BYJ-48', '3D Print', 'TCS3200'],
            link:        'projects/robotic-arm.html'
        },
        {
            id:          'cdp-2026',
            title:       'Ball-Redirecting Goal Robot [WIP]',
            category:    'Robotics & Embedded',
            image:       'Media/CDP 2026/Main Image - current state.jpg',
            description: 'IEEE CDP 2026 — A stepper motor rotates a panel to redirect a tennis ball into the correct goal. Webcam + Raspberry Pi 4B for real-time trajectory calculation. Mechanical system complete; electronics WIP.',
            tags:        ['RPi 4B', 'OpenCV', 'Stepper', 'TMC2209', 'Arduino Nano'],
            link:        'projects/cdp-2026.html'
        },
        {
            id:          'cdp-2025',
            title:       'Line-Following Robot',
            category:    'Robotics & Embedded',
            image:       'Media/CDP 2025/Robot Main.jpg',
            description: 'IEEE CDP 2025 internal competition. Custom 5-LDR analog line sensor array with PID, Raspberry Pi 5, servo-driven parallel gripper, 3D-printed camera mount, and a custom RPi enclosure with aluminium heatsink.',
            tags:        ['Raspberry Pi', 'OpenCV', 'PID', 'Custom Sensors'],
            link:        'projects/cdp-2025.html'
        },
        {
            id:          'edp-2025',
            title:       'Precision Catapult — 2nd Place',
            category:    '3D Design & Fabrication',
            image:       'Media/EDP 2025/Final Image wide.png',
            description: 'IEEE Student Day UAE — Engineering Design Project 2025. No electronics allowed. Adjustable arm stop for range control, dual-profile ball holder for two projectile sizes. Wood frame + 3D-printed components designed in Fusion 360.',
            tags:        ['EDP 2025', 'Fusion 360', '3D Print', 'Mechanical'],
            link:        'projects/edp-2025.html'
        },
        {
            id:          'corexy-printer',
            title:       'Custom CoreXY 3D Printer',
            category:    '3D Design & Fabrication',
            image:       'Media/Custom CoreXy/Main 2.jpg',
            description: 'Built from salvaged parts on a community CoreXY frame design. Several mechanical components re-designed from scratch to match specific Components.',
            tags:        ['3D Printing', 'Fusion 360', 'Mechanical Design', 'Salvaged Parts'],
            link:        'projects/corexy.html'
        },
        {
            id:          'bt-speaker',
            title:       'Bluetooth Speaker Enclosure',
            category:    '3D Design & Fabrication',
            image:       'Media/Speaker Enclosure/1779185453791.jpg',
            description: 'Stripped an old Bluetooth speaker module and designed a completely new housing in Fusion 360  modern aesthetic, improved internal geometry for better bass, redesigned controls placement.',
            tags:        ['Fusion 360', 'Industrial Design', '3d Printing'],
            link:        'projects/3d-designs.html#speaker'
        },
        {
            id:          'bird-table',
            title:       'Bird Table — Wood &amp; 3D Print',
            category:    '3D Design & Fabrication',
            image:       'Media/3d printign and wood - bird table/IMG_250220_225927.jpg',
            description: 'Hybrid wood-and-3D-print garden bird table. Structural frame is wood; connector brackets, roof trim, and feed tray mounts are all PETG-printed parts designed in Fusion 360 to fit the timber dimensions exactly.',
            tags:        ['Fusion 360', '3d Printing', 'Wood', 'Hybrid Build'],
            link:        'projects/3d-designs.html#bird-table'
        }
    ],

    // ---- ROBOTICS & EMBEDDED --------------------------------
    robotics: [
        {
            id:          'robotic-arm',
            title:       'Color-Sorting Robotic Arm',
            category:    'Robotics & Embedded',
            image:       'Media/Robotic Arm/Arm 2.jpg',
            description: 'Fully designed in Fusion 360. 4-bar linkages keep the end-effector level, herringbone 2:1 gear at the base, parallel servo gripper, single-flange bearings for smooth low-backlash joints. PIC18 + TCS3200 color sensor drives automated color sorting.',
            tags:        ['Fusion 360', 'PIC18', '28BYJ-48', 'ULN2003', 'TCS3200'],
            link:        'projects/robotic-arm.html'
        },
        {
            id:          'cdp-2026',
            title:       'Ball-Redirecting Goal Robot [WIP]',
            category:    'Robotics & Embedded',
            image:       'Media/CDP 2026/Main Image - current state.jpg',
            description: 'IEEE CDP 2026 — A stepper motor rotates a deflector panel to redirect a tennis ball into the correct goal. Webcam + Raspberry Pi 4B for real-time trajectory calculation. Mechanical system complete; electronics WIP.',
            tags:        ['RPi 4B', 'OpenCV', 'Stepper Motor', 'TMC2209', 'Arduino Nano'],
            link:        'projects/cdp-2026.html'
        },
        {
            id:          'cdp-2025',
            title:       'Line-Following Robot',
            category:    'Robotics & Embedded',
            image:       'Media/CDP 2025/Robot Main.jpg',
            description: 'IEEE CDP 2025 internal competition. Custom 5-LDR analog line sensor array with PID, Raspberry Pi 4B, servo-driven parallel gripper, 3D-printed camera mount, and a custom RPi enclosure with aluminium heatsink.',
            tags:        ['Raspberry Pi', 'OpenCV', 'PID Control', 'Custom Sensors'],
            link:        'projects/cdp-2025.html'
        },
        {
            id:          'dewa-pipeline',
            title:       'Pipeline Monitoring AI Robot',
            category:    'Robotics & Embedded',
            image:       '',
            description: '1st Place — DEWA AI Competition (Grade 12). Autonomous pipeline inspection robot with AI-driven anomaly detection and real-time reporting.',
            tags:        ['AI', 'Autonomous', 'Robotics', 'Competition'],
            link:        'projects/dewa-pipeline.html'
        }
    ],

    // ---- 3D DESIGN & FABRICATION ----------------------------
    design: [
        {
            id:          'robotic-arm-cad',
            title:       'Robotic Arm — Full CAD',
            category:    '3D Design & Fabrication',
            image:       'Media/Robotic Arm/Wireframe main.jpg',
            description: 'Complete Fusion 360 design: herringbone 2:1 base gear, dual 4-bar parallel linkages keeping the end-effector level, single-flange bearing joints for minimal backlash, and a parallel servo gripper. Fully 3D-printed and assembled.',
            tags:        ['Fusion 360', 'Herringbone Gear', '4-bar Linkage', '3d Printing', 'Single-Flange Bearings'],
            link:        'projects/robotic-arm.html'
        },
        {
            id:          'corexy-printer',
            title:       'Custom CoreXY 3D Printer',
            category:    '3D Design & Fabrication',
            image:       'Media/Custom CoreXy/Main.png ',
            description: 'Built from salvaged parts on a community CoreXY frame design. Several mechanical components re-designed from scratch to match specific Components.',
            tags:        ['3D Printing', 'Fusion 360', 'Mechanical Design', 'Salvaged Parts'],
            link:        'projects/corexy.html'
        },
        {
            id:          'edp-2025',
            title:       'Precision Catapult — 2nd Place',
            category:    '3D Design & Fabrication',
            image:       'Media/EDP 2025/Final Image.jpg',
            description: 'IEEE Student Day UAE — EDP 2025. No-electronics mechanical catapult. Adjustable arm stop for range control, dual-profile ball holder for two projectile sizes. Designed in Fusion 360, printed and assembled.',
            tags:        ['EDP 2025', '2nd Place', 'Fusion 360', '3D Print'],
            link:        'projects/edp-2025.html'
        },
        {
            id:          'bt-speaker',
            title:       'Bluetooth Speaker Enclosure',
            category:    '3D Design & Fabrication',
            image:       'Media/Speaker Enclosure/1779185453791.jpg',
            description: 'Stripped an old Bluetooth speaker module and designed a completely new housing in Fusion 360  modern aesthetic, improved internal geometry for better bass, redesigned controls placement.',
            tags:        ['Fusion 360', 'Industrial Design', '3d Printing'],
            link:        'projects/3d-designs.html#speaker'
        },
        {
            id:          'monitor-arm',
            title:       '3D-Printed Monitor Arm',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Slides up/down an aluminium tube, rotates, and tilts via a 4-bar linkage that keeps the centre of rotation near the tube — so it stays in position without counterweights.',
            tags:        ['Fusion 360', '4-bar Linkage', '3d Printing'],
            link:        'projects/3d-designs.html#monitor-arm'
        },
        {
            id:          'bird-table',
            title:       'Bird Table — Wood &amp; 3D Print',
            category:    '3D Design & Fabrication',
            image:       'Media/3d printign and wood - bird table/IMG_250220_225927.jpg',
            description: 'Hybrid wood-and-3D-print garden bird table. Structural frame is wood; connector brackets, roof trim, and feed tray mounts are all PETG-printed parts designed in Fusion 360 to fit the timber dimensions exactly.',
            tags:        ['Fusion 360', '3d Printing', 'Wood', 'Hybrid Build'],
            link:        'projects/3d-designs.html#bird-table'
        },
        {
            id:          'rc-car-body',
            title:       '1/5 Scale RC Car Body',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Sleek, aerodynamic 1/5-scale RC car body designed in Fusion 360 and 3D-printed. Also designed sand capable wheels witha hard shell and a tread pattern suited to desert terrain.',
            tags:        ['Fusion 360', 'Automotive Design', '3d Printing', 'RC'],
            link:        'projects/3d-designs.html'
        },
        {
            id:          'camera-slider',
            title:       'Motorized Camera Slider',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Belt-driven motorized camera slider designed and 3D-printed for smooth time-lapse and video motion. Currently work in progress.',
            tags:        ['Fusion 360', 'Stepper Motor', '3d Printing', 'WIP'],
            link:        'projects/3d-designs.html'
        }
    ]
};


// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupNavigation();
    setupHamburger();
});


// ============================================================
// LOAD & RENDER
// ============================================================

function loadProjects() {
    renderProjects('featured-projects',  projects.featured);
    renderProjects('robotics-projects',  projects.robotics);
    renderProjects('design-projects',    projects.design);
}

function renderProjects(containerId, projectsArray) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projectsArray.map(project => {
        const tagsHtml = project.tags
            ? `<div class="project-tags">${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>`
            : '';

        const imgHtml = project.image
            ? `<img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">`
            : '';

        return `
            <a href="${project.link}" class="project-card">
                <div class="project-image-wrapper" data-label="${project.title}">
                    ${imgHtml}
                </div>
                <div class="project-content">
                    <div class="project-category">${project.category}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    ${tagsHtml}
                    <span class="project-link">VIEW PROJECT →</span>
                </div>
            </a>
        `;
    }).join('');
}


// ============================================================
// NAVIGATION
// ============================================================

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const sectionId = item.dataset.section;
            navigateToSection(sectionId);
        });
    });

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1) || 'home';
        navigateToSection(hash);
    });

    const initial = window.location.hash.slice(1) || 'home';
    navigateToSection(initial);
}

function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');

    sections.forEach(s => s.classList.remove('active'));
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionId);
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        window.history.pushState(null, null, `#${sectionId}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ============================================================
// HAMBURGER
// ============================================================

function setupHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('navMenu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.nav-wrapper')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}
