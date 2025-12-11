// ============================================
// M2D AGENCY - JAVASCRIPT FUNCIONAL SIMPLIFICADO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 M2D Agency - JavaScript inicializado');
    
    // 1. NAVBAR SCROLL
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
    
    // 2. MENU MOBILE
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // 3. ANIMAÇÃO "VENDE"
    const vendeElement = document.querySelector('.vende-animated');
    if (vendeElement) {
        vendeElement.style.animation = 'vendeAnimation 3s infinite alternate';
    }
    
    // 4. ANIMAÇÕES AO SCROLL
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
        observer.observe(el);
    });
    
    // 5. CARREGAR PORTFÓLIO SIMPLES E FUNCIONAL
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    if (portfolioGrid) {
        console.log('📁 Carregando portfólio...');
        
        // Array de projetos SIMPLES
        const portfolioProjects = [
            {
                title: "Bicho Mimado",
                description: "Petshop & Clínica Veterinária com design premium, atendimento 24h e mais de 50 serviços especializados.",
                url: "https://bichomimado.netlify.app/",
                tags: ["Landing Page", "Petshop", "Clínica Veterinária"],
                color: "#ff6b8b"
            },
            {
                title: "Alemão AutoCenter",
                description: "Site para mecânica automotiva com serviços transparentes, galeria de trabalhos e orçamento via WhatsApp.",
                url: "https://alemaoautocenter.netlify.app/",
                tags: ["Site Institucional", "Mecânica", "Serviços"],
                color: "#4ecdc4"
            },
            {
                title: "Venâncio Barber Shop",
                description: "Barbearia premium com agendamento online, portfólio de cortes e equipe especializada.",
                url: "https://venanciobarbershop.netlify.app/",
                tags: ["Barbearia", "Agendamento", "Design Moderno"],
                color: "#45b7d1"
            },
            {
                title: "Zais Line",
                description: "Estúdio de fotografia e vídeo com portfólio interativo, orçamento online e trabalhos profissionais.",
                url: "https://zaisline.netlify.app/",
                tags: ["Fotografia", "Vídeo", "Portfólio"],
                color: "#96ceb4"
            }
        ];
        
        // Função para criar imagens de placeholder
        function getPlaceholderImage(title) {
            const images = {
                "Bicho Mimado": "https://images.unsplash.com/photo-1583336663277-620dc1996580?w=800&h=600&fit=crop",
                "Alemão AutoCenter": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
                "Venâncio Barber Shop": "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=600&fit=crop",
                "Zais Line": "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop"
            };
            return images[title] || "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop";
        }
        
        // Criar cards de projeto
        portfolioProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'portfolio-card fade-in';
            projectCard.style.animationDelay = `${index * 0.2}s`;
            
            projectCard.innerHTML = `
                <div class="portfolio-image">
                    <img src="${getPlaceholderImage(project.title)}" 
                         alt="${project.title}" 
                         class="portfolio-img"
                         loading="lazy">
                    <div class="portfolio-overlay">
                        <a href="${project.url}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i> Visitar Site
                        </a>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <div class="portfolio-tags">
                        ${project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.url}" target="_blank" class="portfolio-link">
                        Ver projeto completo <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            
            portfolioGrid.appendChild(projectCard);
        });
        
        console.log(`✅ ${portfolioProjects.length} projetos carregados`);
    }
    
    // 6. ANIMAÇÃO DOS NÚMEROS
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const observerStats = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.getAttribute('data-count'));
                    let current = 0;
                    const duration = 1500;
                    const increment = target / (duration / 16);
                    
                    const counter = () => {
                        current += increment;
                        if (current < target) {
                            element.textContent = Math.floor(current);
                            requestAnimationFrame(counter);
                        } else {
                            element.textContent = target + (target === 100 ? '%' : '');
                        }
                    };
                    
                    counter();
                    observerStats.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(stat => observerStats.observe(stat));
    }
    
    // 7. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 8. BACK TO TOP
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.setAttribute('aria-label', 'Voltar ao topo');
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.pageYOffset > 500);
    });
    
    console.log('✅ JavaScript carregado com sucesso!');
});

// CSS necessário mínimo
const portfolioCSS = `
    <style>
    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .portfolio-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
    }
    
    .portfolio-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .portfolio-card:hover {
        transform: translateY(-5px);
        border-color: rgba(255, 0, 60, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .portfolio-image {
        height: 200px;
        position: relative;
        overflow: hidden;
    }
    
    .portfolio-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }
    
    .portfolio-card:hover .portfolio-img {
        transform: scale(1.05);
    }
    
    .portfolio-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .portfolio-card:hover .portfolio-overlay {
        opacity: 1;
    }
    
    .portfolio-content {
        padding: 1.5rem;
    }
    
    .portfolio-content h4 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1.25rem;
    }
    
    .portfolio-content p {
        color: #e9ecef;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1.5;
    }
    
    .portfolio-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .portfolio-tag {
        background: rgba(255, 0, 60, 0.1);
        color: #ff003c;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        border: 1px solid rgba(255, 0, 60, 0.2);
    }
    
    .portfolio-link {
        color: #ff003c;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .portfolio-link:hover {
        color: white;
    }
    
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #ff003c;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .back-to-top.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes vendeAnimation {
        0% { color: #ff003c; text-shadow: 0 0 10px #ff003c; }
        50% { color: #ffcc00; text-shadow: 0 0 20px #ffcc00; }
        100% { color: #00a8ff; text-shadow: 0 0 15px #00a8ff; }
    }
    </style>
`;

// Adicionar CSS dinamicamente
document.head.insertAdjacentHTML('beforeend', portfolioCSS);

console.log('🎨 CSS do portfólio injetado');