   
                // Navigation functionality
            // Move showSection function to global scope
        function showSection(sectionId) {
            // Get elements needed for the function
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            const mobileNav = document.getElementById('mobileNav');
            
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Update active nav link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.target === sectionId) {
                    link.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            if (mobileNav) {
                mobileNav.classList.remove('active');
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            // Get all nav links
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            const mobileNav = document.getElementById('mobileNav');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const closeMobileMenu = document.querySelector('.close-mobile-menu');
            
            // Add click event to nav links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetSection = this.dataset.target;
                    showSection(targetSection);
                });
            });
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', function() {
                mobileNav.classList.add('active');
            });
            
            closeMobileMenu.addEventListener('click', function() {
                mobileNav.classList.remove('active');
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!mobileNav.contains(e.target) && e.target !== mobileMenuBtn) {
                    mobileNav.classList.remove('active');
                }
            });

            // Initialize with Home section
            showSection('home');
        });

       

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
        const items = ["Designer", "Developer", "Freelancer"];
        const span = document.querySelector('.changing-text');
        if (!span) return; // Exit if element not found

        let index = 0;
        setInterval(() => {
            index = (index + 1) % items.length;
            span.style.opacity = 0;
            setTimeout(() => {
                span.textContent = items[index];
                span.style.opacity = 1;
            }, 300);
        }, 2000);
    });

       

        
