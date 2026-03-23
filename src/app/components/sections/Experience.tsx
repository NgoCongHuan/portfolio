import { Calendar, ChevronRight } from "lucide-react";

const experienceData = [
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

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-950">
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
            {experienceData.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-4 h-4 bg-primary rounded-full border-4 border-gray-900 hidden md:block transform -translate-x-1.5"></div>

                <div className="md:ml-20 bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
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
  );
}
