// Projects Data
const projects = [
    {
        icon: "🧠",
        title: "SentinelAI",
        tech: ["React", "FastAPI", "Claude", "GPT-4V", "FAISS", "Docker", "AWS"],
        description: "Autonomous multimodal AI agent with custom MCP protocol",
        features: [
            "Real-time processing of text, voice, and vision inputs",
            "Custom Model Context Protocol for tool orchestration",
            "WebSocket streaming: 50+ concurrent connections",
            "RAG system: 10K+ documents, 92% retrieval precision",
            "Deployed on AWS EC2 with Kubernetes"
        ],
        metrics: ["87% Accuracy", "65% Faster", "<500ms Latency"],
        github: "https://github.com/Tejesh0209/SentinelAI",
        docs: "https://github.com/Tejesh0209/SentinelAI#readme"
    },
    {
        icon: "🏨",
        title: "Hotel Cancellation Predictor",
        tech: ["Flask", "LightGBM", "Docker", "Jenkins", "AWS", "MLflow"],
        description: "Production ML system with automated CI/CD pipeline",
        features: [
            "Binary classification with LightGBM algorithm",
            "SMOTE balancing + hyperparameter optimization",
            "Jenkins pipeline: 7 automated stages",
            "MLflow tracking 50+ training experiments",
            "Deployed on AWS EC2 with monitoring"
        ],
        metrics: ["90.67% Accuracy", "8min Deploy", "95% Less Errors"],
        github: "https://github.com/Tejesh0209/HotelReservationPrediction",
        docs: "https://github.com/Tejesh0209/HotelReservationPrediction#readme"
    },
    {
        icon: "📝",
        title: "TextSummarizer",
        tech: ["PEGASUS", "Hugging Face", "FastAPI", "Docker", "AWS ECR/EC2"],
        description: "Fine-tuned transformer for abstractive summarization",
        features: [
            "Fine-tuned PEGASUS on SAMSum dataset (16K dialogues)",
            "Beam search optimization with length penalty",
            "FastAPI microservice with async handling",
            "Docker multi-stage build optimization",
            "GitHub Actions CI/CD automation"
        ],
        metrics: ["ROUGE-L: 0.35", "61% Smaller", "<3s Latency"],
        github: "https://github.com/Tejesh0209/TextSummarizer---Advanced-Text-Summarization-using-Hugging-Face",
        docs: "https://github.com/Tejesh0209/TextSummarizer---Advanced-Text-Summarization-using-Hugging-Face#readme"
    }
];

// Skills Data
const skills = {
    "AI & Machine Learning": ["LLMs", "RAG Systems", "Prompt Engineering", "Fine-tuning", "Transformers", "LangChain", "Claude", "GPT-4", "Agentic AI"],
    "Backend Development": ["FastAPI", "Django", "Node.js", "Python", "Microservices", "REST APIs", "WebSockets"],
    "MLOps & DevOps": ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS EC2", "AWS S3", "MLflow", "Model Monitoring"],
    "Data & Analytics": ["Pandas", "NumPy", "Scikit-learn", "LightGBM", "SQL", "Data Preprocessing", "Feature Engineering"],
    "Frontend": ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
    "Tools & Platforms": ["Git", "Linux", "VSCode", "Jupyter", "AWS", "Docker Hub", "Hugging Face"]
};