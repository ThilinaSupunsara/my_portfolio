    // Navigation functionality
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update active nav link in both desktop and mobile menus
        document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Close mobile menu if open
        const mobileNav = document.getElementById('mobileNav');
        if (mobileNav) {
            mobileNav.classList.remove('active');
        }
    }

    // Initialize navigation
    function initNavigation() {
        // Get all navigation elements
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
        const mobileNav = document.getElementById('mobileNav');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const closeMobileMenu = document.querySelector('.close-mobile-menu');
        
        // Add click event to all nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = this.dataset.target;
                showSection(targetSection);
            });
        });
        
        // Mobile menu toggle button
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                mobileNav.classList.add('active');
            });
        }
        
        // Close mobile menu button
        if (closeMobileMenu) {
            closeMobileMenu.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                mobileNav.classList.remove('active');
            });
        }
        
        // Close mobile menu when clicking outside of it
        document.addEventListener('click', function(e) {
            if (mobileNav && mobileNav.classList.contains('active')) {
                // Check if click is outside mobile nav and not on the menu button
                if (!mobileNav.contains(e.target) && e.target !== mobileMenuBtn) {
                    mobileNav.classList.remove('active');
                }
            }
        });

        // Prevent clicks inside mobile nav from closing it
        if (mobileNav) {
            mobileNav.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

        // Initialize with Home section active
        showSection('home');
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', initNavigation);

       

        // Background effects (from original code)
        // Code snippets to float
        const codeSnippets = [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Java',
            'Laravel',
            'React',
            'MySQL',
            'Firebase',
            'Express.js'
        ];

        // Create floating code snippets
        function createCodeSnippets() {
            const container = document.getElementById('codeSnippets');
            
            setInterval(() => {
                const snippet = document.createElement('div');
                snippet.className = 'code-snippet';
                snippet.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                
                snippet.style.left = Math.random() * 100 + '%';
                snippet.style.animationDelay = '0s';
                snippet.style.animationDuration = (Math.random() * 10 + 20) + 's';
                
                container.appendChild(snippet);
                
                // Remove after animation
                setTimeout(() => {
                    if (snippet.parentNode) {
                        snippet.parentNode.removeChild(snippet);
                    }
                }, 25000);
            }, 3000);
        }

        // Create data visualization bars
        function createDataViz() {
            const container = document.getElementById('dataViz');
            
            for (let i = 0; i < 20; i++) {
                const bar = document.createElement('div');
                bar.className = 'data-bar';
                bar.style.left = (i * 5) + '%';
                bar.style.bottom = '10%';
                bar.style.animationDelay = (i * 0.2) + 's';
                container.appendChild(bar);
            }
        }

        // Custom cursor
        function initCursor() {
            const cursor = document.getElementById('cursor');
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            // Cursor hover effects
            const interactiveElements = document.querySelectorAll('button, a, .tech-button');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });

            function animateCursor() {
                cursorX += (mouseX - cursorX) * 0.1;
                cursorY += (mouseY - cursorY) * 0.1;
                
                cursor.style.left = cursorX - 6 + 'px';
                cursor.style.top = cursorY - 6 + 'px';
                
                requestAnimationFrame(animateCursor);
            }
            animateCursor();
        }

        // Add more geometric shapes dynamically
        function addGeometricShape() {
            const container = document.querySelector('.geometric-shapes');
            const shapes = ['triangle', 'circle', 'diamond'];
            const colors = [
                'rgba(64, 224, 208, 0.2)',
                'rgba(255, 107, 107, 0.2)',
                'rgba(255, 206, 84, 0.2)',
                'rgba(138, 43, 226, 0.2)',
                'rgba(0, 255, 127, 0.2)'
            ];
            
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            shape.className = `geo-shape ${shapeType}`;
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = '0s';
            
            if (shapeType === 'circle') {
                shape.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
                shape.style.width = (Math.random() * 60 + 40) + 'px';
                shape.style.height = shape.style.width;
            } else if (shapeType === 'diamond') {
                shape.style.background = color;
                shape.style.width = (Math.random() * 40 + 30) + 'px';
                shape.style.height = shape.style.width;
            }
            
            container.appendChild(shape);
            
            setTimeout(() => {
                if (shape.parentNode) {
                    shape.parentNode.removeChild(shape);
                }
            }, 15000);
        }

        // Initialize everything
        window.addEventListener('load', () => {
            createCodeSnippets();
            createDataViz();
            initCursor();
            
            // Add geometric shapes periodically
            setInterval(addGeometricShape, 5000);
        });

        // Performance optimization
        let ticking = false;
        function optimizeAnimations() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener('scroll', optimizeAnimations);

        document.addEventListener('DOMContentLoaded', () => {

        // =====================================================
        // TYPEWRITER EFFECT - Name typing animation
        // =====================================================
        const typewriterEl = document.querySelector('.typewriter-text');
        const nameToType = "Thilina Supunsara";
        let charIndex = 0;
        let isDeleting = false;
        let typewriterDone = false;

        function typeWriter() {
            if (!typewriterEl) return;

            if (!typewriterDone) {
                // Typing phase
                if (charIndex < nameToType.length) {
                    typewriterEl.textContent = nameToType.substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(typeWriter, 90);
                } else {
                    // Done typing — hide cursor after a moment
                    typewriterDone = true;
                    const cursor = document.querySelector('.typewriter-cursor');
                    setTimeout(() => {
                        if (cursor) cursor.style.animation = 'none';
                        if (cursor) cursor.style.opacity = '0';
                    }, 2000);
                }
            }
        }

        // Start typing after a short delay
        setTimeout(typeWriter, 500);

        // =====================================================
        // ROTATING TEXT - Role animation
        // =====================================================
        const items = ["Software Engineer", "Full Stack Developer", "Creative Designer"];
        const span = document.querySelector('.changing-text');
        if (span) {
            span.textContent = items[0];
            let index = 0;
            setInterval(() => {
                index = (index + 1) % items.length;
                span.style.opacity = 0;
                span.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    span.textContent = items[index];
                    span.style.opacity = 1;
                    span.style.transform = 'translateY(0)';
                }, 400);
            }, 2500);
        }

        // =====================================================
        // DARK / LIGHT MODE TOGGLE
        // =====================================================
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        // Load saved theme
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                body.classList.toggle('light-mode');
                const isLight = body.classList.contains('light-mode');

                // Swap icon
                if (themeIcon) {
                    if (isLight) {
                        themeIcon.classList.remove('fa-moon');
                        themeIcon.classList.add('fa-sun');
                    } else {
                        themeIcon.classList.remove('fa-sun');
                        themeIcon.classList.add('fa-moon');
                    }
                }

                // Save to localStorage
                localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');

                // Reinit particles with matching color
                initParticles(isLight);
            });
        }

        // =====================================================
        // PARTICLES BACKGROUND
        // =====================================================
        function initParticles(isLight) {
            if (typeof tsParticles === 'undefined') return;

            tsParticles.load("tsparticles", {
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "grab" },
                        onClick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, links: { opacity: 0.5 } },
                        push: { quantity: 3 }
                    }
                },
                particles: {
                    color: {
                        value: isLight ? "#8A2BE2" : "#40E0D0"
                    },
                    links: {
                        color: isLight ? "#8A2BE2" : "#40E0D0",
                        distance: 150,
                        enable: true,
                        opacity: isLight ? 0.15 : 0.12,
                        width: 1
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: true,
                        speed: 0.8,
                        straight: false
                    },
                    number: {
                        density: { enable: true, area: 900 },
                        value: 60
                    },
                    opacity: {
                        value: isLight ? 0.3 : 0.25,
                        animation: {
                            enable: true,
                            speed: 0.8,
                            minimumValue: 0.05
                        }
                    },
                    shape: { type: "circle" },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.5
                        }
                    }
                },
                detectRetina: true
            });
        }

        // Initialize particles on load
        const isLightNow = body.classList.contains('light-mode');
        initParticles(isLightNow);

    });

       

        
