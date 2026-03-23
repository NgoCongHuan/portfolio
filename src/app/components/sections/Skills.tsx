import { Database, Cloud, BarChart3, Zap } from "lucide-react";

const skillsData = {
  languages: ["Python", "SQL", "Scala", "Java", "Bash"],
  dataProcessing: ["Apache Spark", "Apache Airflow", "dbt", "Pandas", "PySpark"],
  cloudPlatforms: ["AWS (S3, EMR, Glue, Lambda)", "Google Cloud (BigQuery, Dataflow)", "Azure (Synapse, Data Factory)"],
  dataWarehouses: ["Snowflake", "BigQuery", "Redshift", "PostgreSQL", "MySQL"],
  streaming: ["Apache Kafka", "Apache Flink", "AWS Kinesis", "Google Pub/Sub"],
  tools: ["Docker", "Kubernetes", "Git", "Terraform", "Jenkins", "MLflow"],
};

export function Skills() {
  return (
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
              {skillsData.languages.map((skill, index) => (
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
              {skillsData.dataProcessing.map((skill, index) => (
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
              {skillsData.cloudPlatforms.map((skill, index) => (
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
              {skillsData.dataWarehouses.map((skill, index) => (
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
              {skillsData.streaming.map((skill, index) => (
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
              {skillsData.tools.map((skill, index) => (
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
  );
}
