document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: "Malaria Parasite Detection Using Transfer Learning",
            description: "Developed a web application for detecting malaria parasites in blood cells using pre-trained models.",
            github: "https://github.com/your-username/malaria-parasite-detection"
        },
        {
            name: "Pest Control on Crop Yield",
            description: "Web application to aid farmers in detecting crop diseases and recommending suitable pesticides or fertilizers.",
            github: "https://github.com/your-username/pest-control"
        },
        {
            name: "Amazon Bestselling Novels Analysis",
            description: "Analysis of bestselling novels from Amazon (2009-2020) using Python.",
            github: "https://github.com/your-username/amazon-novels-analysis"
        },
        {
            name: "Cleaning, Visualization, Modeling and Analysis of Zomato Dataset",
            description: "Analyzed Zomato dataset to extract insights and predict top locations for new restaurants.",
            github: "https://github.com/your-username/zomato-data-analysis"
        }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.github}" target="_blank">View on GitHub</a>`;
        projectList.appendChild(projectItem);
    });

    document.getElementById('hire-me-top').addEventListener('click', () => {
        window.location.href = 'mailto:mulka1s@cmich.edu?subject=Job%20Opportunity';
    });

    document.getElementById('hire-me-bottom').addEventListener('click', () => {
        window.location.href = 'mailto:mulka1s@cmich.edu?subject=Job%20Opportunity';
    });
});
