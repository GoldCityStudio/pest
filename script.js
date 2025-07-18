// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('.hamburger-line');
            spans.forEach(span => span.classList.toggle('active'));
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-wrapper')) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('.hamburger-line');
                    spans.forEach(span => span.classList.remove('active'));
                }
                document.body.style.overflow = '';
            }
        }
    });
    
    // Enhanced dropdown functionality for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (dropdownLink && dropdownMenu) {
            dropdownLink.addEventListener('click', function(e) {
                // If it's a link to another page, don't prevent default
                if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                    return; // Allow normal navigation
                }
                
                e.preventDefault();
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const otherLink = otherDropdown.querySelector('a');
                        const otherMenu = otherDropdown.querySelector('.dropdown-menu');
                        if (otherLink && otherMenu) {
                            otherLink.setAttribute('aria-expanded', 'false');
                            otherDropdown.classList.remove('active');
                            otherMenu.style.display = 'none';
                        }
                    }
                });
                
                // Toggle current dropdown
                this.setAttribute('aria-expanded', !isExpanded);
                dropdown.classList.toggle('active');
                dropdownMenu.style.display = isExpanded ? 'none' : 'block';
                
                // Add smooth animation for mobile dropdowns
                if (window.innerWidth <= 768) {
                    if (!isExpanded) {
                        dropdownMenu.style.maxHeight = '0';
                        dropdownMenu.style.overflow = 'hidden';
                        dropdownMenu.style.transition = 'max-height 0.3s ease';
                        
                        setTimeout(() => {
                            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
                        }, 10);
                    } else {
                        dropdownMenu.style.maxHeight = '0';
                    }
                }
            });
        }
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                if (navMenu) {
                    navMenu.classList.remove('active');
                    if (mobileMenuToggle) {
                        mobileMenuToggle.classList.remove('active');
                        const spans = mobileMenuToggle.querySelectorAll('.hamburger-line');
                        spans.forEach(span => span.classList.remove('active'));
                    }
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // Enhanced navigation hover effects
    const navItems = document.querySelectorAll('.nav-menu > li > a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Professional dropdown hover effects
    const dropdownItems = document.querySelectorAll('.dropdown-menu li a');
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add professional hover effect
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu on Escape key
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('.hamburger-line');
                    spans.forEach(span => span.classList.remove('active'));
                }
                document.body.style.overflow = '';
            }
        }
    });
    
    // Add loading states to menu interactions
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add subtle loading effect
            this.style.opacity = '0.7';
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                this.style.opacity = '';
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Ensure blog links work properly
    const blogLinks = document.querySelectorAll('.blog-card a, .blog-content a');
    blogLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ensure normal navigation for blog links
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                // Allow normal navigation
                return;
            }
        });
        
        // Force pointer events and cursor
        link.style.pointerEvents = 'auto';
        link.style.cursor = 'pointer';
        link.style.zIndex = '10';
        link.style.position = 'relative';
    });
    
    // Professional menu badge animations
    const menuBadges = document.querySelectorAll('.menu-badge');
    menuBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 2px 8px rgba(255, 255, 255, 0.3)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Enhanced mobile menu slide animation
    if (navMenu) {
        navMenu.addEventListener('transitionend', function() {
            if (this.classList.contains('active')) {
                // Add entrance animation to menu items
                const menuItems = this.querySelectorAll('li');
                menuItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    }, index * 50);
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 50 + 100);
                });
            }
        });
    }
    
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && answer && toggle) {
            question.addEventListener('click', function() {
                const isActive = answer.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherAnswer && otherToggle) {
                            otherAnswer.classList.remove('active');
                            otherToggle.classList.remove('active');
                        }
                    }
                });
                
                // Toggle current FAQ item
                answer.classList.toggle('active');
                toggle.classList.toggle('active');
                
                // Add smooth scroll to answer if opening
                if (!isActive) {
                    setTimeout(() => {
                        answer.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 300);
                }
            });
            
            // Keyboard accessibility for FAQ
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
            
            // Add hover effect for FAQ questions
            question.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            question.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        }
    });
    
    // Form handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('請填寫所有必填欄位', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('請輸入有效的電郵地址', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('正在發送訊息...', 'info');
            
            setTimeout(() => {
                showNotification('訊息已成功發送！我們會盡快回覆您。', 'success');
                this.reset();
            }, 2000);
        });
    }
    
    // Product card interactions
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            showNotification(`已將 ${productName} 加入購物車`, 'success');
        });
    });
    
    const selectOptionsButtons = document.querySelectorAll('.select-options');
    selectOptionsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            showNotification(`正在載入 ${productName} 的選項...`, 'info');
        });
    });
    
    // Language switcher
    const languageSelectors = document.querySelectorAll('.language-switcher select, .language-selector select');
    languageSelectors.forEach(selector => {
        selector.addEventListener('change', function() {
            const selectedLanguage = this.value;
            showNotification(`語言已切換至 ${selectedLanguage === 'zh' ? '中文' : 'English'}`, 'info');
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .product-card, .about-content, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Scroll to top button functionality
    const scrollTopButton = document.querySelector('.scroll-top-button');
    if (scrollTopButton) {
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Search functionality (if needed)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const productName = product.querySelector('h3').textContent.toLowerCase();
                const productDesc = product.querySelector('p')?.textContent.toLowerCase() || '';
                
                if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#4CAF50';
            break;
        case 'error':
            notification.style.backgroundColor = '#f44336';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ff9800';
            break;
        default:
            notification.style.backgroundColor = '#2196F3';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add loading states to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = '載入中...';
    button.disabled = true;
    
    return function() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Service worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Add to cart functionality
function addToCart(productId, productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${productName} 已加入購物車`, 'success');
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Update cart count in header if it exists
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

// WhatsApp function to open with structured questions
function openWhatsAppWithQuestions() {
    if (typeof whatsappService !== 'undefined') {
        whatsappService.openWhatsAppWelcome();
    } else {
        // Fallback to direct WhatsApp link if service not available
        window.open('https://wa.me/85270173695?text=您好！我想了解Babi Pest Control的服務。', '_blank');
    }
}

// WhatsApp Service Integration
document.addEventListener('DOMContentLoaded', function() {
    // Check if WhatsApp service is available
    if (typeof whatsappService !== 'undefined') {
        // Add WhatsApp service buttons to contact sections
        const contactSections = document.querySelectorAll('.contact-section, .cta-section, .call-to-action');
        contactSections.forEach(section => {
            const whatsappBtn = document.createElement('button');
            whatsappBtn.className = 'btn btn-whatsapp';
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> WhatsApp 諮詢';
            whatsappBtn.style.cssText = `
                background: linear-gradient(135deg, #25d366, #128c7e);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 25px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                margin: 10px 5px;
            `;
            
            whatsappBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';
            });
            
            whatsappBtn.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
            
            whatsappBtn.addEventListener('click', function() {
                whatsappService.openWhatsAppWelcome();
            });
            
            // Add to existing button groups
            const buttonGroup = section.querySelector('.btn-group, .cta-buttons, .cta-buttons');
            if (buttonGroup) {
                buttonGroup.appendChild(whatsappBtn);
            } else {
                section.appendChild(whatsappBtn);
            }
        });

        // Add WhatsApp service to service cards
        const serviceCards = document.querySelectorAll('.service-card, .pest-service-card, .service-item');
        serviceCards.forEach(card => {
            const serviceType = card.dataset.service || card.dataset.type || 'direct-contact';
            
            const whatsappBtn = document.createElement('button');
            whatsappBtn.className = 'btn btn-whatsapp-small';
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
            whatsappBtn.title = 'WhatsApp 諮詢';
            whatsappBtn.style.cssText = `
                background: linear-gradient(135deg, #25d366, #128c7e);
                color: white;
                border: none;
                padding: 8px 12px;
                border-radius: 50%;
                font-size: 14px;
                cursor: pointer;
                transition: all 0.3s ease;
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 10;
            `;
            
            whatsappBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                whatsappService.openWhatsAppWithService(serviceType);
            });
            
            // Make sure card has relative positioning
            if (getComputedStyle(card).position === 'static') {
                card.style.position = 'relative';
            }
            
            card.appendChild(whatsappBtn);
        });

        // Add WhatsApp service to blog posts
        const blogPosts = document.querySelectorAll('.blog-post, .post-content');
        blogPosts.forEach(post => {
            const whatsappBtn = document.createElement('button');
            whatsappBtn.className = 'btn btn-whatsapp-blog';
            whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> WhatsApp 諮詢';
            whatsappBtn.style.cssText = `
                background: linear-gradient(135deg, #25d366, #128c7e);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 20px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                margin: 10px 5px;
                font-size: 14px;
            `;
            
            whatsappBtn.addEventListener('click', function() {
                whatsappService.openWhatsAppWelcome();
            });
            
            const ctaSection = post.querySelector('.call-to-action, .cta-section');
            if (ctaSection) {
                ctaSection.appendChild(whatsappBtn);
            }
        });

        // Add WhatsApp service to floating action buttons
        const fabContainer = document.querySelector('.fab-container');
        if (fabContainer) {
            const whatsappFab = document.createElement('a');
            whatsappFab.href = '#';
            whatsappFab.className = 'fab fab-whatsapp';
            whatsappFab.innerHTML = '<i class="fab fa-whatsapp"></i>';
            whatsappFab.setAttribute('aria-label', 'WhatsApp 諮詢');
            whatsappFab.addEventListener('click', function(e) {
                e.preventDefault();
                whatsappService.openWhatsAppWelcome();
            });
            
            fabContainer.appendChild(whatsappFab);
        }

        // Add WhatsApp service to header contact info
        const headerContact = document.querySelector('.contact-info .phone-number');
        if (headerContact) {
            const whatsappLink = document.createElement('a');
            whatsappLink.href = '#';
            whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i> WhatsApp';
            whatsappLink.style.cssText = `
                color: #25d366;
                text-decoration: none;
                font-weight: 600;
                margin-left: 15px;
            `;
            
            whatsappLink.addEventListener('click', function(e) {
                e.preventDefault();
                whatsappService.openWhatsAppWelcome();
            });
            
            headerContact.appendChild(whatsappLink);
        }
    }
}); 