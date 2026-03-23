import { Github, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const projectsData = [
  {
    title: "Real-time Analytics Platform",
    description: "Designed and implemented a streaming data pipeline capable of processing over 10 million events daily. Built using Apache Kafka for message queuing, Apache Flink for stream processing, and AWS services for scalable infrastructure. The system provides real-time insights with sub-second latency.",
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzM5MDIwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Kafka", "Flink", "AWS", "Python", "Redis"],
    metrics: ["10M+ events/day", "< 1s latency", "99.9% uptime"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Cloud Data Warehouse Migration",
    description: "Led the migration of a legacy on-premise data warehouse to Snowflake, involving 50TB+ of historical data. Implemented incremental loading strategies, optimized table structures, and created dbt models for transformations. Achieved 70% reduction in query times and 40% cost savings.",
    image: "https://images.unsplash.com/photo-1634632409665-fc2bdbb81959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGFic3RyYWN0fGVufDF8fHx8MTc3MzkxODI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Snowflake", "dbt", "Python", "AWS S3", "SQL"],
    metrics: ["50TB migrated", "70% faster queries", "40% cost reduction"],
    github: "https://github.com",
  },
  {
    title: "ML Pipeline Automation",
    description: "Developed an end-to-end machine learning pipeline using Apache Airflow for orchestration. Automated data preprocessing, feature engineering, model training, evaluation, and deployment. Integrated MLflow for experiment tracking and model versioning. Reduced model deployment time from weeks to hours.",
    image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc3Mzk4MDU3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Airflow", "MLflow", "Docker", "Python", "Kubernetes"],
    metrics: ["90% time saved", "5 models deployed", "Automated retraining"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-400">
            A collection of my data engineering work
          </p>
        </div>

        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg shadow-primary/10 ring-1 ring-gray-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Key Metrics
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-4 py-2 bg-green-500/10 text-green-400 rounded-lg font-medium border border-green-500/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2 border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white hover:border-primary/50">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2 bg-primary hover:bg-primary-hover text-white">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
