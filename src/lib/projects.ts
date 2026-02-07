export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "document-querying",
    title: "Intelligent Document Querying System",
    description: "Built a production-ready Retrieval-Augmented Generation (RAG) system for querying and reasoning over enterprise documents. Integrated Amazon Bedrock with Claude 3 Sonnet to retrieve relevant context and generate accurate answers. Designed a scalable vector database using Aurora Serverless and pgvector, achieving sub-second query latency. Automated cloud infrastructure using Terraform to manage VPCs, IAM roles, and S3 data sources, significantly reducing setup time for new knowledge bases. Tuned model parameters to balance factual accuracy and response quality for document-based Q&A.",
    technologies: ["Amazon Bedrock", "RAG", "Aurora Serverless (pgvector)", "Terraform", "AWS S3"],
    githubUrl: "https://github.com/archiips",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
  },
  {
    id: "recommendation-engine",
    title: "Deep Learning Recommendation Engine",
    description: "Developed a deep learning-based recommendation system using Neural Collaborative Filtering in PyTorch on a dataset of 23,000+ user reviews. Improved top-10 recommendation precision by 21.5% and achieved a 36% performance gain over traditional matrix factorization methods. Addressed cold-start and class imbalance challenges through negative sampling, dropout, and feature engineering. Deployed the system with FastAPI and Redis for low-latency inference, with automated retraining and system monitoring using Prometheus and Grafana.",
    technologies: ["PyTorch", "FastAPI", "Redis", "Neural Collaborative Filtering", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/archiips",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop"
  },
  {
    id: "neuroverse",
    title: "Neuroverse – Neuroscience Data Visualization Platform",
    description: "Built a full-stack web application to explore and visualize demographic data from 23 OpenNeuro datasets covering over 2,700 participants. Implemented a RESTful backend using FastAPI to fetch, parse, and serve large neuroscience datasets, deployed with PostgreSQL for scalable storage. Developed a React-based frontend with interactive 3D visualizations using Plotly.js to display age, sex, and diagnosis distributions. Deployed the backend on Render and the frontend on Vercel for scalable access.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Plotly.js", "Vercel"],
    githubUrl: "https://github.com/archiips",
    liveUrl: "https://neuroverse-dusky.vercel.app",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop"
  },
  {
    id: "uw-navigation",
    title: "UW Seattle Navigation System",
    description: "Designed and implemented a navigation system that computes shortest paths on real-world road networks. Built a custom graph with over 19,000 nodes and applied Dijkstra's Algorithm to achieve 99% accuracy compared to standard baselines. Optimized performance by using an in-memory graph engine and Java priority queues, reducing route calculation time to ~40ms. Added K-Nearest Neighbor (KNN) snapping to map user clicks to valid road nodes for improved usability.",
    technologies: ["Java", "Spring Boot", "Dijkstra's Algorithm", "Graph Data Structures"],
    githubUrl: "https://github.com/archiips",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop"
  }
];

export const aboutMe = {
  name: "Archit Jaiswal",
  title: "Computer Science & Software Engineering Student",
  university: "University of Washington",
  gpa: "3.88",
  location: "Seattle, WA",
  email: "architjaiswal18@gmail.com",
  phone: "(425) 543-2143",
  education: [
    "University of Washington",
    "BS in Computer Science & Software Engineering (GPA: 3.88)",
    "AWS AI Engineer Nanodegree"
  ],
  experience: [
    {
      title: "User Insight R&D Intern",
      company: "Apexiel",
      description: "Developed AI-powered user research tools and analytics platforms."
    },
    {
      title: "Software Engineer Intern",
      company: "Genmark AI",
      description: "Built machine learning pipelines and full-stack applications."
    }
  ],
  skills: {
    languages: ["Python", "JavaScript/TypeScript", "Java", "C++"],
    frontendBackend: ["React", "FastAPI", "Flask", "Spring Boot"],
    aiData: ["PyTorch", "RAG", "Embeddings", "Pandas"],
    cloudDevops: ["AWS (S3, Lambda)", "Docker", "PostgreSQL", "Git"]
  },
  github: "https://github.com/archiips",
  linkedin: "https://www.linkedin.com/in/archit-jaiswal4/"
};
