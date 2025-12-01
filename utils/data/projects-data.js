export const projectsData = [
    {
        id: 1,
        name: 'Donor-Finder',
        tools: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Docker', 'Fly.io', 'Vercel', 'CI/CD', 'Semantic Search', 'REST APIs'],
        role: "Software Engineer",
        code: '',
        demo: '',
        description: 'Built a full-stack donor search application using FastAPI (backend) and Next.js (frontend) to search and filter nonprofit donors. Integrated semantic search with PostgreSQL + pgvector and external APIs for donor enrichment. Deployed the backend on Fly.io with Docker and the frontend on Vercel. Delivered a production-ready blueprint with scalable microservice separation and CI/CD support with Git.'
    },
    {
        id: 2,
        name: 'BlueMQ',
        tools: ['C++', 'Distributed Systems', 'Publish-Subscribe', 'Message Queues', 'Partition-Affinity Routing', 'Disk-Backed Persistence'],
        role: "Software Engineer",
        code: '',
        demo: '',
        description: 'Designed and developed a high-performance in-memory publish-subscribe messaging system crafted in C++ for distributed systems. Implemented partition-affinity routing, a lightweight topic registry, durable in-memory message queues with optional disk-backed persistence, and support for failed message handling. Achieved sub-millisecond latency and sustained throughput of 380MB/s for 100KB messages, enabling real-time event processing.'
    },
    {
        id: 3,
        name: 'Emotion Recognition in Tweets using Multi-Modal Data',
        tools: ['Python', 'NLP', 'CNNs', 'Fuzzy Logic', 'LLMs', 'Multi-Modal Learning', 'Late Fusion', 'Machine Learning'],
        role: "Software Engineer",
        code: '',
        demo: '',
        description: 'Developed a fuzzy-rule based unsupervised learning technique for Natural Language Processing (NLP) on textual data, combined with a late fusion model of Convolutional Neural Networks (CNNs) for image features. Explored integration with LLMs for enhanced semantic understanding of tweets. The system identified emotions and their intensities across multi-modal inputs. Published in the IEEE ICAAIC conference.'
    },
    
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },