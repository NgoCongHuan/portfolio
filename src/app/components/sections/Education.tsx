import { Calendar, GraduationCap } from "lucide-react";

const educationData = [
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

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-950">
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
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
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
  );
}
