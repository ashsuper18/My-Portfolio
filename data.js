// Portfolio Configuration Data
// Edit this file to update your portfolio content easily

const portfolioData = {
    // Personal Information
    personal: {
        name: "Ashish Kumar",
        title: "Data Analyst & Business Intelligence Specialist",
        description: "Transforming complex data into actionable insights that drive business growth and strategic decision-making.",
        email: "ashish@example.com",
        phone: "+91 XXX XXX XXXX",
        location: "India",
        linkedin: "https://www.linkedin.com/in/ashishk123/",
        github: "https://github.com/ashishk123",
        resumeFile: "./Ashish Kumar Data Analyst Resume_v2.pdf",
        profileImage: "https://via.placeholder.com/400x500/4f46e5/ffffff?text=Your+Photo"
    },

    // About Section
    about: {
        description: [
            "I'm a dedicated Data Analyst with expertise in transforming complex datasets into meaningful business insights. With a strong foundation in statistical analysis, data visualization, and business intelligence tools, I help organizations make data-driven decisions that drive growth and efficiency.",
            "My experience spans across various industries, where I've successfully implemented analytics solutions, created interactive dashboards, and presented findings to stakeholders at all levels."
        ],
        stats: [
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "10+", label: "Tools Mastered" }
        ]
    },

    // Experience Timeline
    experience: [
        {
            title: "Senior Data Analyst",
            company: "Tech Company",
            duration: "2023 - Present",
            description: "Leading data analysis initiatives for business intelligence and strategic planning. Developed automated reporting systems that reduced manual work by 70%.",
            responsibilities: [
                "Created executive dashboards using Power BI and Tableau",
                "Implemented predictive models for customer behavior analysis",
                "Led cross-functional teams to drive data-driven decision making"
            ]
        },
        {
            title: "Data Analyst",
            company: "Previous Company",
            duration: "2021 - 2023",
            description: "Analyzed customer data to identify trends and opportunities for business growth. Collaborated with marketing and sales teams to optimize campaigns.",
            responsibilities: [
                "Performed statistical analysis on large datasets",
                "Created data visualizations for stakeholder presentations",
                "Improved data quality processes and documentation"
            ]
        },
        {
            title: "Junior Data Analyst",
            company: "First Company",
            duration: "2020 - 2021",
            description: "Started my analytics journey by supporting senior analysts with data collection, cleaning, and basic analysis tasks.",
            responsibilities: [
                "Learned SQL, Python, and Excel for data analysis",
                "Assisted in creating monthly and quarterly reports",
                "Developed strong foundation in data visualization tools"
            ]
        }
    ],

    // Projects
    projects: [
        {
            title: "Sales Performance Dashboard",
            description: "Interactive Power BI dashboard analyzing sales trends, customer segments, and revenue forecasting with real-time data integration.",
            image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=Sales+Dashboard",
            technologies: ["Power BI", "SQL", "Python"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Customer Behavior Analysis",
            description: "Machine learning model to predict customer churn and identify high-value customers using advanced analytics techniques.",
            image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Customer+Analytics",
            technologies: ["Python", "Sklearn", "Tableau"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Financial Risk Assessment",
            description: "Comprehensive analysis of financial portfolios with risk modeling and automated reporting for investment decisions.",
            image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Financial+Analysis",
            technologies: ["R", "Excel", "VBA"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ],

    // Skills organized by categories
    skills: {
        "Programming Languages": [
            { name: "Python", icon: "fab fa-python" },
            { name: "SQL", icon: "fas fa-database" },
            { name: "R", icon: "fab fa-r-project" },
            { name: "VBA", icon: "fas fa-file-excel" }
        ],
        "Data Visualization": [
            { name: "Tableau", icon: "fas fa-chart-bar" },
            { name: "Power BI", icon: "fas fa-chart-line" },
            { name: "Matplotlib", icon: "fab fa-python" },
            { name: "Seaborn", icon: "fas fa-chart-pie" }
        ],
        "Databases & Tools": [
            { name: "MySQL", icon: "fas fa-database" },
            { name: "PostgreSQL", icon: "fas fa-server" },
            { name: "Excel", icon: "fab fa-microsoft" },
            { name: "Git", icon: "fab fa-git-alt" }
        ],
        "Machine Learning": [
            { name: "Scikit-learn", icon: "fas fa-brain" },
            { name: "Pandas", icon: "fas fa-robot" },
            { name: "NumPy", icon: "fas fa-calculator" },
            { name: "TensorFlow", icon: "fas fa-chart-area" }
        ]
    },

    // Navigation Menu
    navigation: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
    ],

    // Hero floating cards
    heroCards: [
        { icon: "fas fa-chart-line", text: "Analytics" },
        { icon: "fas fa-database", text: "Big Data" },
        { icon: "fas fa-chart-pie", text: "Visualization" }
    ]
};

// Function to populate the portfolio with data
function populatePortfolio() {
    // Update page title
    document.title = `${portfolioData.personal.name} - ${portfolioData.personal.title}`;
    
    // Update navigation
    populateNavigation();
    
    // Update hero section
    populateHero();
    
    // Update about section
    populateAbout();
    
    // Update experience
    populateExperience();
    
    // Update projects
    populateProjects();
    
    // Update skills
    populateSkills();
    
    // Update contact
    populateContact();
}

function populateNavigation() {
    const navMenu = document.getElementById('nav-menu');
    const logoElement = document.querySelector('.nav-logo span');
    
    if (logoElement) {
        logoElement.textContent = portfolioData.personal.name;
    }
    
    if (navMenu) {
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach((link, index) => {
            if (portfolioData.navigation[index]) {
                link.textContent = portfolioData.navigation[index].name;
                link.href = portfolioData.navigation[index].href;
            }
        });
    }
}

function populateHero() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const resumeLink = document.querySelector('a[href*="Resume"]');
    
    if (heroTitle) {
        heroTitle.innerHTML = `Hi, I'm <span class="highlight">${portfolioData.personal.name}</span>`;
    }
    
    if (heroSubtitle) {
        heroSubtitle.textContent = portfolioData.personal.title;
    }
    
    if (heroDescription) {
        heroDescription.textContent = portfolioData.personal.description;
    }
    
    if (resumeLink) {
        resumeLink.href = portfolioData.personal.resumeFile;
    }
    
    // Update social links
    updateSocialLinks();
    
    // Update floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        if (portfolioData.heroCards[index]) {
            const icon = card.querySelector('i');
            const span = card.querySelector('span');
            if (icon) icon.className = portfolioData.heroCards[index].icon;
            if (span) span.textContent = portfolioData.heroCards[index].text;
        }
    });
}

function populateAbout() {
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image img');
    const statItems = document.querySelectorAll('.stat-item');
    
    if (aboutText) {
        const paragraphs = aboutText.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            if (portfolioData.about.description[index]) {
                p.textContent = portfolioData.about.description[index];
            }
        });
    }
    
    if (aboutImage) {
        aboutImage.src = portfolioData.personal.profileImage;
        aboutImage.alt = portfolioData.personal.name;
    }
    
    statItems.forEach((item, index) => {
        if (portfolioData.about.stats[index]) {
            const number = item.querySelector('.stat-number');
            const label = item.querySelector('.stat-label');
            if (number) number.textContent = portfolioData.about.stats[index].number;
            if (label) label.textContent = portfolioData.about.stats[index].label;
        }
    });
}

function populateExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const responsibilities = exp.responsibilities.map(resp => `<li>${resp}</li>`).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <span class="timeline-date">${exp.duration}</span>
                <p>${exp.description}</p>
                <ul>${responsibilities}</ul>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <a href="${project.liveUrl}" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                    <a href="${project.githubUrl}" class="project-link"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">${techTags}</div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = '';
    
    Object.entries(portfolioData.skills).forEach(([category, skills]) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        const skillItems = skills.map(skill => `
            <div class="skill-item">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            </div>
        `).join('');
        
        skillCategory.innerHTML = `
            <h3>${category}</h3>
            <div class="skill-items">${skillItems}</div>
        `;
        
        skillsGrid.appendChild(skillCategory);
    });
}

function populateContact() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    const contactData = [
        { icon: 'fas fa-envelope', title: 'Email', value: portfolioData.personal.email },
        { icon: 'fas fa-phone', title: 'Phone', value: portfolioData.personal.phone },
        { icon: 'fas fa-map-marker-alt', title: 'Location', value: portfolioData.personal.location },
        { icon: 'fab fa-linkedin', title: 'LinkedIn', value: 'linkedin.com/in/ashishk123' }
    ];
    
    contactItems.forEach((item, index) => {
        if (contactData[index]) {
            const icon = item.querySelector('i');
            const title = item.querySelector('h3');
            const value = item.querySelector('p');
            
            if (icon) icon.className = contactData[index].icon;
            if (title) title.textContent = contactData[index].title;
            if (value) value.textContent = contactData[index].value;
        }
    });
}

function updateSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    const socialData = [
        { href: portfolioData.personal.linkedin, icon: 'fab fa-linkedin' },
        { href: portfolioData.personal.github, icon: 'fab fa-github' },
        { href: `mailto:${portfolioData.personal.email}`, icon: 'fas fa-envelope' }
    ];
    
    socialLinks.forEach((link, index) => {
        if (socialData[index]) {
            link.href = socialData[index].href;
            const icon = link.querySelector('i');
            if (icon) icon.className = socialData[index].icon;
        }
    });
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', populatePortfolio);
