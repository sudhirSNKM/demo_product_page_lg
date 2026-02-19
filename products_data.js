const productsData = [
    {
        id: "hrm",
        title: "FortuHRM",
        shortDesc: "Complete Human Resource Management Solution.",
        icon: "fas fa-users-cog",
        about: "FortuHRM is an all-in-one Human Resource Management system designed to streamline your HR processes. From recruitment to retirement, manage your workforce with efficiency and ease. It includes modules for payroll, attendance, performance management, and employee self-service.",
        benefits: [
            "Automated Payroll Processing",
            "Real-time Attendance Tracking",
            "Employee Self-Service Portal",
            "Performance Appraisal Management",
            "Recruitment & Onboarding Workflow"
        ],
        pricing: [
            { plan: "Starter", price: "$49/mo", features: ["Up to 10 Employees", "Basic Payroll", "Attendance Tracking"] },
            { plan: "Professional", price: "$149/mo", features: ["Up to 50 Employees", "Full Payroll", "Performance Reviews", "Employee Portal"] },
            { plan: "Enterprise", price: "Custom", features: ["Unlimited Employees", "Dedicated Support", "Custom Integrations", "Advanced Analytics"] }
        ],
        reviews: [
            { user: "Sarah J.", company: "TechStart Inc.", rating: 5, comment: "FortuHRM transformed how we manage our team. Payroll is now a breeze!" },
            { user: "Michael B.", company: "Global Solutions", rating: 4, comment: "Great features and responsive support. Highly recommended for growing teams." }
        ],
        faqs: [
            { question: "Is FortuHRM cloud-based?", answer: "Yes, FortuHRM is a fully cloud-based solution, accessible from anywhere." },
            { question: "Can I integrate with my existing accounting software?", answer: "We support integrations with major accounting platforms like QuickBooks and Xero." }
        ]
    },
    {
        id: "lms",
        title: "FortuLMS",
        shortDesc: "Empower learning with our robust LMS.",
        icon: "fas fa-graduation-cap",
        about: "FortuLMS is a powerful Learning Management System specially built for corporate training and educational institutions. Create courses, track progress, and certify your learners with an intuitive interface.",
        benefits: [
            "Easy Course Creation & Management",
            "Gamification & Leaderboards",
            "Mobile-Friendly Learning",
            "Detailed Reporting & Analytics",
            "Webinar & Virtual Classroom Integration"
        ],
        pricing: [
            { plan: "Basic", price: "$79/mo", features: ["Up to 100 Learners", "Unlimited Courses", "Email Support"] },
            { plan: "Growth", price: "$199/mo", features: ["Up to 500 Learners", "Custom Branding", "Certificates", "API Access"] },
            { plan: "Institution", price: "Custom", features: ["Unlimited Learners", "White Labeling", "SSO", "Dedicated Server"] }
        ],
        reviews: [
            { user: "Emily R.", company: "EduCorp", rating: 5, comment: "The best LMS we've used. Our employees love the gamification features." },
            { user: "David K.", company: "TrainingPro", rating: 4, comment: "Very flexible platform. The reporting tools are excellent for tracking ROI." }
        ],
        faqs: [
            { question: "Does it support SCORM?", answer: "Yes, FortuLMS is fully SCORM 1.2 and 2004 compliant." },
            { question: "Can we host video content?", answer: "Absolutely, you can upload videos directly or embed from YouTube/Vimeo." }
        ]
    },
    {
        id: "billing",
        title: "SmartBill",
        shortDesc: "Effortless invoicing and billing software.",
        icon: "fas fa-file-invoice-dollar",
        about: "SmartBill simplifies your invoicing and billing operations. Create professional invoices, track payments, and manage expenses in one place. Perfect for freelancers and small businesses.",
        benefits: [
            "Create Professional Invoices in Seconds",
            "Automated Recurring Billing",
            "Expense Tracking & Reporting",
            "Multi-Currency Support",
            "Client Client Portal"
        ],
        pricing: [
            { plan: "Freelancer", price: "$15/mo", features: ["5 Active Clients", "Unlimited Invoices", "Expense Tracking"] },
            { plan: "Small Business", price: "$35/mo", features: ["50 Active Clients", "Recurring Billing", "Multi-User Access"] },
            { plan: "Corporate", price: "$99/mo", features: ["Unlimited Clients", "White Labeling", "Priority Support"] }
        ],
        reviews: [
            { user: "John D.", company: "Freelance Designer", rating: 5, comment: "SmartBill saves me hours every month. I get paid faster now." },
            { user: "Lisa M.", company: "Consulting LLC", rating: 5, comment: "Simple, clean, and effective. Exactly what we needed." }
        ],
        faqs: [
            { question: "Is my data secure?", answer: "Yes, we use bank-level encryption to ensure your financial data is safe." },
            { question: "Can I accept credit card payments?", answer: "Yes, SmartBill integrates with Stripe and PayPal for online payments." }
        ]
    },
    {
        id: "web",
        title: "Web Solutions",
        shortDesc: "Custom web development for modern businesses.",
        icon: "fas fa-laptop-code",
        about: "Our Web Solutions team builds high-performance, responsive, and secure websites tailored to your brand. From landing pages to complex web applications, we deliver digital excellence.",
        benefits: [
            "Responsive & Mobile-First Design",
            "SEO Optimized Architecture",
            "Fast Loading Speeds",
            "Secure & Scalable Code",
            "Custom CMS & E-commerce Integration"
        ],
        pricing: [
            { plan: "Landing Page", price: "Starts at $500", features: ["Single Page", "Contact Form", "Mobile Responsive"] },
            { plan: "Business Site", price: "Starts at $1500", features: ["5-10 Pages", "CMS Integration", "SEO Setup"] },
            { plan: "Custom App", price: "Custom", features: ["Full Stack Development", "Database Design", "API Integration"] }
        ],
        reviews: [
            { user: "Mark T.", company: "RetailCo", rating: 5, comment: "They built a beautiful e-commerce site for us. Sales have doubled!" },
            { user: "Jessica W.", company: "StartupHub", rating: 5, comment: "Incredible attention to detail and very professional team." }
        ],
        faqs: [
            { question: "How long does it take to build a website?", answer: "Timeline varies by complexity, usually 2-6 weeks for standard sites." },
            { question: "Do you offer maintenance?", answer: "Yes, we offer ongoing support and maintenance packages." }
        ]
    },
    {
        id: "soft",
        title: "Custom Software",
        shortDesc: "Tailored software solutions for unique needs.",
        icon: "fas fa-cogs",
        about: "When off-the-shelf software isn't enough, our Custom Software development service steps in. We analyze your unique business challenges and build bespoke software solutions to solve them.",
        benefits: [
            "Perfect Fit for Your Workflow",
            "Scalable Architecture",
            "Ownership of Source Code",
            "Seamless Integration with Existing Tools",
            "Long-term Support & Updates"
        ],
        pricing: [
            { plan: "Consultation", price: "Free", features: ["Requirements Gathering", "Feasibility Study", "Quote Estimation"] },
            { plan: "MVP", price: "Custom", features: ["Core Features", "Rapid Prototyping", "User Testing"] },
            { plan: "Full Solution", price: "Custom", features: ["End-to-End Development", "QA Testing", "Deployment"] }
        ],
        reviews: [
            { user: "Robert C.", company: "Logistics Pro", rating: 5, comment: "The custom logistics software they built streamlined our entire operation." },
            { user: "Amanda L.", company: "HealthCare Plus", rating: 4, comment: "Solid development process and good communication throughout." }
        ],
        faqs: [
            { question: "What technologies do you use?", answer: "We use a wide range of modern tech including Python, Java, .NET, and Node.js." },
            { question: "Do I own the code?", answer: "Yes, upon full payment, you own the intellectual property rights." }
        ]
    },
    {
        id: "app",
        title: "Mobile App Dev",
        shortDesc: "iOS and Android apps that users love.",
        icon: "fas fa-mobile-alt",
        about: "Reach your customers on the go with our Mobile App Development services. We create intuitive, high-performance native and cross-platform mobile applications for iOS and Android.",
        benefits: [
            "Native & Cross-Platform (Flutter/React Native)",
            "User-Centric UI/UX Design",
            "Push Notification Integration",
            "Offline Functionality",
            "App Store Optimization (ASO)"
        ],
        pricing: [
            { plan: "Prototype", price: "Starts at $2000", features: ["UI/UX Design", "Clickable Prototype", "User Flow"] },
            { plan: "Standard App", price: "Starts at $5000", features: ["iOS & Android", "Basic Features", "Store Submission"] },
            { plan: "Complex App", price: "Custom", features: ["Advanced Logic", "Backend Integration", "Real-time Features"] }
        ],
        reviews: [
            { user: "Chris P.", company: "Fitness Guru", rating: 5, comment: "Our fitness app is crashing the charts! Amazing work." },
            { user: "Sarah K.", company: "TravelMate", rating: 5, comment: "Smooth performance and great design. Users love it." }
        ],
        faqs: [
            { question: "Do you develop for both iOS and Android?", answer: "Yes, we develop for both platforms using native or cross-platform technologies." },
            { question: "Do you help with App Store submission?", answer: "Yes, we handle the entire submission and approval process." }
        ]
    }
];

// Helper to find product by ID
function getProductById(id) {
    return productsData.find(product => product.id === id);
}
