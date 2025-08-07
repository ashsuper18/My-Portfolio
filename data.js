// Portfolio Configuration Data
// Edit this file to update your portfolio content easily

const portfolioData = {
    // Personal Information
    personal: {
        name: "Ashish Kumar",
        title: "Incentive Compensation Analyst & Data Specialist",
        description: "Transforming pharmaceutical and healthcare data into strategic insights. Specialized in incentive compensation modeling, analytics automation, and driving 80-90% efficiency improvements through innovative data solutions.",
        email: "ashsuper18@gmail.com",
        phone: "+91 9521873768",
        location: "Hyderabad, India",
        linkedin: "https://www.linkedin.com/in/ashishk123/",
        github: "https://github.com/ashsuper18",
        resumeFile: "./Ashish Kumar Data Analyst Resume_v2.pdf",
        profileImage: "./profile-photo.jpeg"  // Replace with your actual photo filename
    },

    // About Section
    about: {
        description: [
            "I'm a results-driven Data Analyst with 3+ years of experience in pharmaceutical and healthcare industries, specializing in incentive compensation modeling and analytics automation. Currently working at Sanofi, I've successfully built tools that reduce manual processing by 80-90% while improving accuracy and compliance.",
            "My expertise spans across Python automation, Power BI dashboards, advanced analytics, and stakeholder collaboration. I've delivered measurable business impact including 20% increases in product sales and significant improvements in web engagement through data-driven insights."
        ],
        stats: [
            { number: "3+", label: "Years Experience" },
            { number: "80-90%", label: "Efficiency Gains" },
            { number: "20%", label: "Sales Impact" }
        ]
    },

    // Experience Timeline
    experience: [
        {
            title: "Incentive Compensation Analyst",
            company: "Sanofi (Pharmaceutical Industry)",
            duration: "Apr 2025 - Present",
            description: "Leading IC automation initiatives and stakeholder collaboration to ensure accurate compensation calculations and compliance-ready processes for one of the world's largest pharmaceutical companies.",
            responsibilities: [
                "Created automated Python tools to simplify IC calculations and reduce manual processing time",
                "Manage monthly and quarterly IC reports, collaborating with stakeholders for accurate delivery",
                "Designed custom IC models based on dynamic KPIs, enabling accurate payout alignment",
                "Built dashboards using Power BI, improving performance visibility and executive decision-making",
                "Ensured compliance-ready processes by maintaining audit documentation and workflows"
            ]
        },
        {
            title: "Data Analyst",
            company: "Indegene (Healthcare Industry)",
            duration: "Jun 2022 - Mar 2025",
            description: "Delivered high-impact analytics solutions for major pharmaceutical clients, driving significant business growth through data-driven insights and automation tools.",
            responsibilities: [
                "Built custom Incentive Calculation Tool using Power BI and Excel, cutting manual effort by 80-90%",
                "Delivered GA4/GAU-based digital insights that boosted web traffic by 20% and engagement by 15%",
                "Led HCP segmentation and territory alignment contributing to 20% increase in product sales",
                "Engineered Python data integration scripts (fuzzy match, cosine similarity) for cleaner analytics",
                "Designed interactive dashboards using Power BI and IQVIA data for strategic reporting",
                "Supported top pharma clients like Johnson & Johnson, Azurity, and Alcon on data initiatives"
            ]
        },
        {
            title: "Consulting Intern",
            company: "Highradius",
            duration: "2021 - 2022",
            description: "Collaborated on backend automation solutions for client payment processes, gaining hands-on experience in end-to-end solution design and validation.",
            responsibilities: [
                "Collaborated on backend automation for client payment processes",
                "Contributed to end-to-end solution design and validation",
                "Gained foundational experience in enterprise-level data solutions"
            ]
        }
    ],

    // Projects
    projects: [
        {
            title: "Incentive Calculation Tool",
            description: "Custom Power BI and Excel-based tool that revolutionized IC processing for pharmaceutical clients, achieving 80-90% reduction in manual effort while improving payout accuracy and compliance.",
            image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=IC+Tool",
            technologies: ["Power BI", "Excel", "Python", "VBA"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "HCP Segmentation & Territory Alignment",
            description: "Advanced analytics project for major US pharma client using machine learning and statistical modeling, contributing to 20% increase in product sales through optimized territory strategies.",
            image: "https://via.placeholder.com/400x250/10b981/ffffff?text=HCP+Analytics",
            technologies: ["Python", "Power BI", "IQVIA", "ML"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Digital Insights Dashboard (GA4/GAU)",
            description: "Comprehensive web analytics solution that boosted client web traffic by 20% and engagement by 15% through actionable insights and strategic recommendations.",
            image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Digital+Analytics",
            technologies: ["GA4", "GAU", "Power BI", "Python"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "US State Quiz - Python Game",
            description: "Interactive Python-based educational game using Turtle and Pandas libraries to test users' knowledge of US states with engaging visual interface and data tracking.",
            image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Python+Game",
            technologies: ["Python", "Turtle", "Pandas"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Drum Kit Website",
            description: "Fun JavaScript-based interactive drum kit website with user behavior tracking and engagement analytics to understand user interaction patterns and preferences.",
            image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Drum+Kit",
            technologies: ["JavaScript", "HTML", "CSS", "Analytics"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Data Integration Scripts",
            description: "Advanced Python scripts using fuzzy matching and cosine similarity algorithms for integrating unmatched datasets, enabling cleaner analytics and improved data quality.",
            image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Data+Integration",
            technologies: ["Python", "Fuzzy Logic", "NLP", "Data Science"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ],

    // Skills organized by categories
    skills: {
        "Programming & Analytics": [
            { name: "Python", icon: "fab fa-python" },
            { name: "SQL", icon: "fas fa-database" },
            { name: "Excel", icon: "fas fa-file-excel" },
            { name: "Power Query", icon: "fas fa-cogs" }
        ],
        "Business Intelligence": [
            { name: "Power BI", icon: "fas fa-chart-line" },
            { name: "GA4", icon: "fab fa-google" },
            { name: "GAU", icon: "fas fa-chart-bar" },
            { name: "IQVIA", icon: "fas fa-chart-pie" }
        ],
        "Development & Tools": [
            { name: "GitHub", icon: "fab fa-github" },
            { name: "VBA", icon: "fas fa-code" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "AI Tools", icon: "fas fa-robot" }
        ],
        "Specialized Skills": [
            { name: "Incentive Compensation", icon: "fas fa-calculator" },
            { name: "HCP Segmentation", icon: "fas fa-users" },
            { name: "Data Integration", icon: "fas fa-project-diagram" },
            { name: "Automation", icon: "fas fa-bolt" }
        ],
        "Soft Skills": [
            { name: "Problem Solving", icon: "fas fa-lightbulb" },
            { name: "Stakeholder Management", icon: "fas fa-handshake" },
            { name: "Project Planning", icon: "fas fa-tasks" },
            { name: "Cross-Team Collaboration", icon: "fas fa-people-arrows" }
        ]
    },

    // Education Section
    education: [
        {
            degree: "B.Tech - Electronics & Communication Engineering",
            institution: "SRM Institute of Science and Technology",
            location: "Chennai, India",
            duration: "2018 - 2022",
            gpa: "8.4/10",
            description: "Strong foundation in engineering principles, data analysis, and problem-solving methodologies."
        },
        {
            degree: "Intermediate",
            institution: "St. Joseph's International School",
            location: "India",
            duration: "2016 - 2018",
            gpa: "8.0/10",
            description: "Focused on mathematics, science, and analytical thinking."
        },
        {
            degree: "Secondary School",
            institution: "Kendriya Vidyalaya",
            location: "India",
            duration: "2014 - 2016",
            gpa: "9.2/10",
            description: "Excellent academic performance with strong fundamentals."
        }
    ],

    // Certifications Section
    certifications: [
        {
            name: "Python for Data Science and AI",
            issuer: "IBM",
            date: "2023",
            icon: "fab fa-python",
            description: "Advanced Python programming for data science applications"
        },
        {
            name: "Databases and SQL for Data Science",
            issuer: "IBM", 
            date: "2023",
            icon: "fas fa-database",
            description: "Database management and SQL optimization techniques"
        },
        {
            name: "Tools for Data Science",
            issuer: "IBM",
            date: "2023", 
            icon: "fas fa-tools",
            description: "Comprehensive toolkit for data science workflows"
        },
        {
            name: "Google Universal Analytics Essential Training",
            issuer: "LinkedIn Learning",
            date: "2023",
            icon: "fab fa-google",
            description: "Web analytics and user behavior analysis"
        },
        {
            name: "Advanced Google Analytics",
            issuer: "LinkedIn Learning", 
            date: "2023",
            icon: "fas fa-chart-line",
            description: "Advanced analytics techniques and implementation"
        }
    ],

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
        { icon: "fas fa-calculator", text: "IC Analytics" },
        { icon: "fas fa-chart-line", text: "Power BI" },
        { icon: "fab fa-python", text: "Python" }
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
