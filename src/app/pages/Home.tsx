import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, GraduationCap, Database, Cloud, BarChart3, Zap, Calendar, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const skills = {
    languages: ["Python", "SQL", "Scala", "Java", "Bash"],
    dataProcessing: ["Apache Spark", "Apache Airflow", "dbt", "Pandas", "PySpark"],
    cloudPlatforms: ["AWS (S3, EMR, Glue, Lambda)", "Google Cloud (BigQuery, Dataflow)", "Azure (Synapse, Data Factory)"],
    dataWarehouses: ["Snowflake", "BigQuery", "Redshift", "PostgreSQL", "MySQL"],
    streaming: ["Apache Kafka", "Apache Flink", "AWS Kinesis", "Google Pub/Sub"],
    tools: ["Docker", "Kubernetes", "Git", "Terraform", "Jenkins", "MLflow"],
  };

  const experience = [
    {
      role: "Data Engineer",
      company: "Financial Software Solutions",
      logo: "/images/logo_fss.png",
      period: "Aug 2025 - Present",
      description: "Leading data infrastructure initiatives, designing scalable pipelines processing 50TB+ daily. Reduced data latency by 60% through optimization.",
      responsibilities: [
        "Architected and deployed real-time data pipelines using Kafka and Flink",
        "Optimized data warehouse queries reducing costs by 40%",
        "Led team of 5 engineers in cloud migration project",
        "Implemented CI/CD pipelines for data workflows"
      ]
    },
    {
      role: "Data Analyst",
      company: "Map Pacific Singapore",
      logo: "/images/logo_mps.png",
      period: "Aug 2024 - Feb 2025",
      description: "Built ETL pipelines using Airflow and Spark. Migrated on-premise data warehouse to cloud, improving performance by 3x.",
      responsibilities: [
        "Developed 20+ ETL pipelines processing 10TB daily",
        "Migrated on-premise warehouse to Snowflake",
        "Created data quality monitoring framework",
        "Automated data ingestion from 15+ sources"
      ]
    }
  ];

  const education = [
    {
      degree: "Data Science",
      school: "Nguyen Tat Thanh University",
      logo: "/images/logo_ntt.png",
      period: "2022 - 2025",
      description: "Focused on advanced data analytics, machine learning, big data technologies, and statistical modeling. Completed capstone project on real-time data pipeline optimization."
    },
    {
      degree: "Medicine",
      school: "Nguyen Tat Thanh University",
      logo: "/images/logo_ntt.png",
      period: "2020 - 2022",
      description: "Gained strong analytical and problem-solving skills through rigorous medical training. Developed expertise in data interpretation and critical thinking."
    }
  ];

  const certifications = [
    {
      name: "Databricks Data Engineer Professional",
      issuer: "Databricks",
      date: "2028",
      verifyLink: "https://credentials.databricks.com/",
      logo: "/images/cert_dep.png"
    },
    {
      name: "Databricks Data Engineer Associate",
      issuer: "Databricks",
      date: "2028",
      verifyLink: "https://credentials.databricks.com/",
      logo: "/images/cert_dea.png"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2028",
      verifyLink: "https://aws.amazon.com/verification",
      logo: "/images/cert_clf-c02.png"
    },
  ];

  const projects = [
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

  return (
    <div className="bg-gray-950">
      {/* Section 1: About Me */}
      <section id="about" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTI0IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xMiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Hi, I'm Huan 👋
              </h1>
              <p className="text-2xl text-primary mb-6">
                Data Engineer
              </p>
              <p className="text-xl text-gray-300 mb-6">
                I'm a passionate Data Engineer specializing in building scalable data solutions,
                optimizing cloud infrastructure, and delivering actionable insights through modern
                data technologies.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                My expertise spans the entire data lifecycle - from ingestion and transformation
                to warehousing and analytics. I'm committed to building efficient, reliable systems
                that turn raw data into valuable insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById("projects");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors"
                >
                  View Projects
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-3 border border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white rounded-lg font-medium transition-colors"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-primary/20">
                <ImageWithFallback
                  src="/images/avatar.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Competencies & Technical Skills */}
      <section id="skills" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Core Competencies */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Competencies
            </h2>
            <p className="text-xl text-gray-400">
              End-to-end data engineering expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Database,
                title: "Data Pipeline Development",
                description: "Building scalable ETL/ELT pipelines using Apache Airflow, Spark, and modern orchestration tools.",
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                description: "Designing and implementing cloud-native solutions on AWS, GCP, and Azure platforms.",
              },
              {
                icon: BarChart3,
                title: "Data Warehousing",
                description: "Creating efficient data warehouses with Snowflake, BigQuery, and Redshift for analytics.",
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                description: "Implementing streaming solutions with Kafka, Flink, and event-driven architectures.",
              },
            ].map((competency, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <competency.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {competency.title}
                </h3>
                <p className="text-gray-400">{competency.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Data Processing</h3>
              <div className="flex flex-wrap gap-2">
                {skills.dataProcessing.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloudPlatforms.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Data Warehouses</h3>
              <div className="flex flex-wrap gap-2">
                {skills.dataWarehouses.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Streaming</h3>
              <div className="flex flex-wrap gap-2">
                {skills.streaming.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Work Experience (Tree Structure) */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-400">
              My professional journey
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-gray-900 hidden md:block transform -translate-x-1.5"></div>

                  <div className="md:ml-20 bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex gap-4 items-start flex-1">
                        <div className="w-16 h-16 flex-shrink-0 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {job.role}
                          </h3>
                          <p className="text-lg text-primary">{job.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-gray-300">
                            <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Certifications */}
      <section id="certifications" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-400">
              Professional credentials and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                <div className="aspect-[22/17] bg-gradient-to-br from-gray-800 to-gray-900 flex items-start justify-center overflow-hidden">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-cover object-top scale-100 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 mb-4">Issued: {cert.date}</p>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Education */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Education
            </h2>
            <p className="text-xl text-gray-400">
              Academic background
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex gap-4 items-start flex-1">
                    <div className="w-16 h-16 flex-shrink-0 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary">{edu.school}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Projects */}
      <section id="projects" className="py-20 bg-gray-950">
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
            {projects.map((project, index) => (
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

      {/* Section 7: Contact */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interested in collaborating or have a question? I'd love to hear from you.
              Feel free to reach out through the form below or via any of the contact methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-3 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-3 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="mt-3 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={6}
                    className="mt-3 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-hover text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:work.ngoconghuan@gmail.com"
                      className="text-primary hover:underline"
                    >
                      work.ngoconghuan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a
                      href="tel:+84706996998"
                      className="text-primary hover:underline"
                    >
                      0706 996 998
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-300">Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                  <h4 className="font-semibold text-white mb-4">
                    Connect on Social Media
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white border border-gray-700 transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 border border-blue-500 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:huan@example.com"
                      className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-hover border border-primary transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                  <h4 className="font-semibold text-white mb-3">
                    Availability
                  </h4>
                  <p className="text-gray-300 mb-4">
                    I'm currently open to new opportunities and consulting projects.
                    Whether you need help with data infrastructure, pipeline development,
                    or cloud migration, I'd be happy to discuss how I can help.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
