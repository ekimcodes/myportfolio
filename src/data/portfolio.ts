export const portfolioData = {
    // =================================================================================
    // 1. Personal Details
    // =================================================================================
    about: {
        firstName: "Edwin",
        lastName: "Kim",
        title: "Computer Science Student @ UC Berkeley",

        // This is the text that appears in the "About Me" card
        description: "I'm a freshly graduated student at **UC Berkeley** for Computer Science. I specialize in AI and have a passion for building tools that solve complex real-world problems at scale.",

        // Contact Information (Displayed in the code block)
        contact: {
            email: "edwinkim0509@berkeley.edu",
            phone: "(310) 617 6693",
            linkedin: "linkedin.com/in/kedwin",
            location: "Berkeley, CA",
            education: "UC Berkeley, CS (2025)",
        },

        // Bullet points for "Current Focus"
        currentFocus: [
            "Creating projects that I would use in my personal life.",
            "Contributing to real-time open source projects.",
            "Taking care of my kitten.",
        ],
    },

    // =================================================================================
    // 2. Skills (Contribution Graph)
    // =================================================================================
    // Levels: 1 (Light Green) to 4 (Darkest Green)
    skills: [
        {
            category: "ML / AI",
            items: [
                { name: "Python", level: 4 },
                { name: "TensorFlow", level: 3 },
                { name: "PyTorch", level: 3 },
                { name: "BiLSTM", level: 4 },
                { name: "Random Forest", level: 3 },
                { name: "Signal Processing", level: 4 },
                { name: "Time Series", level: 4 },
            ],
        },
        {
            category: "Backend",
            items: [
                { name: "API Design", level: 3 },
                { name: "Database Opt", level: 3 },
                { name: "Dist. Systems", level: 2 },
                { name: "Caching", level: 2 },
                { name: "FastAPI", level: 4 },
                { name: "Django", level: 3 },
            ],
        },
        {
            category: "Frontend",
            items: [
                { name: "React", level: 3 },
                { name: "Next.js", level: 3 },
                { name: "Tailwind CSS", level: 3 },
                { name: "Data Viz", level: 4 },
                { name: "Real-time UI", level: 3 },
            ],
        },
        {
            category: "Data Eng",
            items: [
                { name: "ETL Pipelines", level: 3 },
                { name: "Data Fusion", level: 4 },
                { name: "Geospatial", level: 3 },
                { name: "Pandas/Numpy", level: 4 },
            ],
        },
        {
            category: "Infrastructure",
            items: [
                { name: "Git", level: 4 },
                { name: "Docker", level: 3 },
                { name: "AWS", level: 2 },
                { name: "Linux", level: 3 },
                { name: "CI/CD", level: 2 },
            ],
        },
    ],

    // =================================================================================
    // 3. Projects (Pinned Repositories)
    // =================================================================================
    projects: [
        {
            name: "Hermes",
            description: `Grid Outage Prediction & Restoration Time Estimator.
94% precision in forecasting grid failures 48 hours in advance.
Real-time geospatial dashboard processing 10M+ daily data points.`,
            language: "Python",
            languageColor: "#f1e05a", // GitHub language color
            stars: 12,
            forks: 4,
            tags: ["Random Forest", "Geospatial", "Python"],
            githubUrl: "https://github.com/ekimcodes/:",
        },
        {
            name: "CALI",
            description: `Real-time Stress-Tracking Platform.
Custom BiLSTM neural network processing 5 heterogeneous streams.
Converges 40% faster than baseline.`,
            language: "Python",
            languageColor: "#f1e05a",
            stars: 8,
            forks: 2,
            tags: ["BiLSTM", "Signal Processing", "Real-time"],
            githubUrl: "https://github.com/ekimcodes/CALI",
        },
    ],

    // =================================================================================
    // 4. Experience (Timeline)
    // =================================================================================
    education: [
        // Add education here if needed in future, currently integrated into timeline or about
    ],
    experience: [
        {
            year: "2025",
            role: "ML Engineer",
            company: "CALI",
            type: "Full-time", // or Intern, Research
            description: [
                "Architected real-time stress-tracking platform using custom BiLSTM networks.",
                "Fused 5 heterogeneous time-series streams with <10ms tolerance.",
                "Generated 100,000+ synthetic data points for model training.",
                "Achieved 40% improvement in model convergence speed."
            ]
        },
        {
            year: "2024",
            role: "SWE Intern",
            company: "MyFitnessPal",
            type: "Intern",
            description: [
                "Refactored core food-log query engine serving 50M+ DAU.",
                "Reduced request latency by 25% and API payload size by 40%.",
                "Optimized queries for millions of concurrent sessions."
            ]
        },
        {
            year: "2023",
            role: "Computational Researcher",
            company: "UC Berkeley",
            type: "Research",
            description: [
                "Designed scalable materials informatics pipeline for 1,000+ samples.",
                "Automated extraction of 50+ high-dimensional features.",
                "Created dataset of 50,000+ data points, improving accuracy by 23%."
            ]
        }
    ]

};
