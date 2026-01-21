export const experiences = [
  {
    id: 1,
    title: 'Full Stack Software Engineer',
    company: "Posterchild Inc.",
    duration: "(Oct 2025 - Present)",
    location: "Remote - Berkeley, California",
    tools: ['Python', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'Javascript', 'GCP', 'CI/CD', 'Microservices', 'Event-Driven Architecture', 'Service Mesh', 'Redis', 'Firestore', 'SQL', 'PostgreSQL', 'ORM', 'Google ADK'],
    image: '/png/posterchild.jpeg',
    description: [
      'Architected a distributed content-generation engine capable of transforming high-volume unstructured metadata into multimodal social assets, utilizing FastAPI orchestration and event-driven workflows to handle high-throughput review processing and React/Next.js dashboards and org-preview UIs.',
      'Operationalized agentic AI pipelines using Gemini to automate brand-voice synthesis and content guidelines; engineered automated feedback loops that reduced manual drafting latency and ensured content consistency across global social channels.',
      'Optimized end-to-end latency for AI-driven content pipelines through workload partitioning and concurrency controls; implemented event-driven orchestration to manage complex DB/LLM interactions, significantly improving system reliability and throughput.',
      'Architected a resilient data layer for high-concurrency content pipelines by leveraging PostgreSQL with pgvector for semantic similarity search and Redis for low-latency caching. Orchestrated GCP infrastructure including autoscaling and service mesh (Cloud Service Mesh) to ensure 99.9% availability and seamless service-to-service communication during traffic spikes.',
      'Designed RESTful APIs with clear contracts and comprehensive tests, and contributed to broader architectural decisions.'
    ]
  },
  {
    id: 2,
    title: 'Software Developer',
    company: "Ottenweller Company Inc.",
    duration: "(Feb 2024 - Sep 2025)",
    location: "Remote - Indiana, United States",
    tools: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'RAG', 'FAISS', 'C#', 'ASP.NET Core', 'Azure Functions', 'Azure AI Foundry', 'Azure App Service', 'Blob Storage', 'REST APIs', 'CI/CD'],
    image: '/png/oci.png',
    description: [
      'Built a Python-based backend system for an Agentic AI-powered Accounts Payable Automation Platform, orchestrating LLM agents using LangChain, LangGraph, and RAG with FAISS vector indexes. Delivered full-stack functionality including user-facing dashboards, and developed specialized agents for document parsing, compliance verification, payment scheduling, and ERP/vendor API integration—reducing invoice processing time by 60% and improving accuracy by 40%.',
      'Implemented backend services in Python (FastAPI) for AI orchestration and C# / ASP.NET Core for enterprise integration, enabling secure interoperability with ERP systems and EDA tools via REST APIs and file parsers and caching mechanisms to reduce API latency.',
      'Deployed and maintained the platform on Azure Functions, Azure AI Foundry, App Service, and Blob Storage, with Git-integrated CI/CD pipelines ensuring scalable and fault-tolerant operations.'
    ]
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: "LTIMindtree",
    duration: "(Oct 2020 - Aug 2022)",
    location: "Chennai, India",
    tools: ['Go', 'Golang', 'Kafka', 'Python', 'Azure', 'Real-time Streaming', 'IoT', 'Pentaho ETL', 'Concurrent Processing', 'Dead-Letter Queues', 'High Availability', 'Disaster Recovery', 'Exactly-Once Processing'],
    image: '/png/lti.png',
    description: [
      'Contributed to the Connected Elevator project as a full-stack developer, building Go (Golang) microservices (REST APIs) and Kafka-based real-time streaming pipelines to ingest and process high-frequency telemetry from global elevator IoT sensors. Integrated ingestion workflows with Azure-based storage and analytics layers.',
      'Developed resilient Kafka consumer workflows with concurrent processing and integrated dead-letter queues (DLQs) to ensure fault-tolerant message handling and observability of failed events. Handled heavy data processing pipelines by tuning Kafka\'s replication factor, partitioning strategy, and broker configurations to meet high availability (HA) and disaster recovery (DR) objectives across production clusters. Ensured exactly-once processing semantics (EOS) using Kafka transactional APIs.',
      'Worked closely with the Pentaho ETL and Azure teams to streamline Kafka topic structures with downstream data transformation and storage layers, enabling consistent schema evolution and scalable data ingestion.'
    ]
  }
]

