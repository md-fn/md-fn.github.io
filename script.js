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
            id:          'ball-redirect',
            title:       'Ball-Redirecting Goal Robot',
            category:    'Robotics & Embedded',
            image:       '',
            description: 'IEEE CDP 2025 — A single stepper motor rotates a deflector panel to redirect a tennis ball thrown at it into the correct goal. Webcam + Raspberry Pi 4B for real-time angle calculation.',
            tags:        ['RPi 4B', 'OpenCV', 'Stepper', 'Webcam'],
            link:        'projects/ball-redirect.html'
        },
        {
            id:          'line-follower',
            title:       'Autonomous Line-Following Robot',
            category:    'Robotics & Embedded',
            image:       '',
            description: 'IEEE CDP 2024 — Picks and drops coloured cubes into their target zones. Custom 5-LDR analog line sensor array with PID, wheel encoders, RPi + OpenCV, and a 3D-printed adjustable camera mount.',
            tags:        ['Raspberry Pi', 'OpenCV', 'PID', 'Custom Sensors'],
            link:        'projects/line-follower.html'
        },
        {
            id:          'monitor-arm',
            title:       '3D-Printed Monitor Arm',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Slides up/down an aluminium tube, rotates, and tilts via a 4-bar linkage designed so the centre of rotation stays near the pivot point — meaning it stays in place under load without counterweights.',
            tags:        ['Fusion 360', '4-bar Linkage', 'FDM', 'Aluminium Tube'],
            link:        'projects/monitor-arm.html'
        },
        {
            id:          'health-glove',
            title:       'Smart Health Glove',
            category:    'Robotics & Embedded',
            image:       '',
            description: '1st Place — GMU Contest 2022. Wearable glove with pulse, SpO2, temperature, and flex sensors streaming live data to a Blynk IoT dashboard.',
            tags:        ['Sensors', 'IoT', 'Blynk', 'Wearable'],
            link:        'projects/health-glove.html'
        },
        {
            id:          'corexy-printer',
            title:       'Custom CoreXY 3D Printer',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Built from salvaged printer parts using a community CoreXY frame design. Several mechanical components re-designed from scratch to match my specific steppers, linear rails, and frame dimensions.',
            tags:        ['CoreXY', 'Fusion 360', 'Mechanical Design'],
            link:        'projects/corexy-printer.html'
        }
    ],

    // ---- ROBOTICS & EMBEDDED --------------------------------
    robotics: [
        {
            id:          'robotic-arm',
            title:       'Color-Sorting Robotic Arm',
            category:    'Robotics & Embedded',
            image:       'Media/Robotic Arm/Arm 1.jpg',
            description: 'Fully designed in Fusion 360. 4-bar linkages keep the end-effector level, herringbone 2:1 gear at the base, parallel servo gripper, single-flange bearings for smooth low-backlash joints. PIC18 + TCS3200 color sensor drives automated color sorting.',
            tags:        ['Fusion 360', 'PIC18', '28BYJ-48', 'ULN2003', 'TCS3200'],
            link:        'projects/robotic-arm.html'
        },
        {
            id:          'ball-redirect',
            title:       'Ball-Redirecting Goal Robot',
            category:    'Robotics & Embedded',
            image:       '',
            description: 'IEEE CDP 2025 — A single stepper motor rotates a deflector panel to redirect a tennis ball thrown at it into the correct goal. Webcam + Raspberry Pi 4B for real-time angle calculation.',
            tags:        ['RPi 4B', 'OpenCV', 'Stepper Motor', 'Webcam'],
            link:        'projects/ball-redirect.html'
        },
        {
            id:          'line-follower',
            title:       'Autonomous Line-Following Robot',
            category:    'Robotics & Embedded',
            image:       '',
            description: 'IEEE CDP 2024 — Picks and drops coloured cubes into target zones using OpenCV colour detection. Custom 5-LDR line sensor array running on analog PID, wheel encoders, and a 3D-printed camera mount.',
            tags:        ['Raspberry Pi', 'OpenCV', 'PID Control', 'Custom Sensors', 'Encoders'],
            link:        'projects/line-follower.html'
        },
        {
            id:          'dewa-pipeline',
            title:       'Pipeline Monitoring AI Robot',
            category:    'Robotics & Embedded',
            image:       '',
            description: '1st Place — DEWA AI Competition (Grade 12). Autonomous pipeline inspection robot with AI-driven anomaly detection and real-time reporting.',
            tags:        ['AI', 'Autonomous', 'Robotics', 'Competition'],
            link:        'projects/dewa-pipeline.html'
        },
        {
            id:          'health-glove',
            title:       'Smart Health Glove',
            category:    'Robotics & Embedded',
            image:       '',
            description: '1st Place — GMU Contest 2022. Wearable glove with pulse, SpO2, temperature, and flex sensors streaming live data to a Blynk IoT dashboard.',
            tags:        ['Sensors', 'IoT', 'Blynk', 'Wearable'],
            link:        'projects/health-glove.html'
        },
        {
            id:          'greenhouse',
            title:       'Smart Miniature Greenhouse',
            category:    'Robotics & Embedded',
            image:       '',
            description: 'Fully automated miniature greenhouse with environmental sensors, irrigation pump, humidifiers, and grow lights. Live monitoring via an IoT dashboard.',
            tags:        ['IoT', 'Automation', 'Sensors', 'Dashboard'],
            link:        'projects/greenhouse.html'
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
            tags:        ['Fusion 360', 'Herringbone Gear', '4-bar Linkage', 'FDM', 'Single-Flange Bearings'],
            link:        'projects/robotic-arm.html'
        },
        {
            id:          'monitor-arm',
            title:       '3D-Printed Monitor Arm',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Slides up/down an aluminium tube, rotates, and tilts via a 4-bar linkage that keeps the centre of rotation near the tube — so it stays in position without counterweights.',
            tags:        ['Fusion 360', '4-bar Linkage', 'FDM', 'Aluminium Tube'],
            link:        'projects/monitor-arm.html'
        },
        {
            id:          'corexy-printer',
            title:       'Custom CoreXY 3D Printer',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Built from salvaged parts on a community CoreXY frame design. Several mechanical components re-designed from scratch to match specific steppers, linear rails, and frame dimensions.',
            tags:        ['CoreXY', 'Fusion 360', 'Mechanical Design', 'Salvaged Parts'],
            link:        'projects/corexy-printer.html'
        },
        {
            id:          'bt-speaker',
            title:       'Custom Bluetooth Speaker Housing',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Stripped an old Bluetooth speaker and designed a completely new housing from scratch. Modern aesthetic, improved internal geometry for better bass response, and redesigned controls placement.',
            tags:        ['Fusion 360', 'Industrial Design', 'Acoustics', 'FDM'],
            link:        'projects/bt-speaker.html'
        },
        {
            id:          'rpi5-case',
            title:       'RPi5 Case with Custom Heatsink',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Custom Raspberry Pi 5 enclosure designed for the IEEE CDP 2024 robot. Includes a custom-cut aluminium heatsink and 4010 fan mount — maximum cooling in minimum volume.',
            tags:        ['RPi5', 'Thermal Design', 'FDM', 'Aluminium Heatsink'],
            link:        'projects/rpi5-case.html'
        },
        {
            id:          'rc-car-body',
            title:       '1/5 Scale RC Car Body',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Sleek, aerodynamic 1/5-scale RC car body designed in Fusion 360 and 3D-printed. Also designed sand-capable wheels — hard shell with a tread pattern suited to loose terrain.',
            tags:        ['Fusion 360', 'Automotive Design', 'FDM', 'RC'],
            link:        'projects/rc-car-body.html'
        },
        {
            id:          'camera-slider',
            title:       'Motorized Camera Slider',
            category:    '3D Design & Fabrication',
            image:       '',
            description: 'Belt-driven motorized camera slider designed and 3D-printed for smooth time-lapse and video motion. Currently work-in-progress.',
            tags:        ['Fusion 360', 'Stepper Motor', 'FDM', 'WIP'],
            link:        'projects/camera-slider.html'
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
