import { Award, ExternalLink } from "lucide-react";

const certificationsData = [
  {
    name: "Databricks Data Engineer Professional",
    issuer: "Databricks",
    date: "2028",
    verifyLink: "https://credentials.databricks.com/c57526e2-08e6-4b6b-9b9b-7f710589962b#acc.TnxSwobM",
    logo: "/images/cert_dep.png"
  },
  {
    name: "Databricks Data Engineer Associate",
    issuer: "Databricks",
    date: "2028",
    verifyLink: "https://credentials.databricks.com/9241ff0f-a035-471c-a6ef-a13b83dac7f4#acc.jHWoANBi",
    logo: "/images/cert_dea.png"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2028",
    verifyLink: "https://www.credly.com/badges/140e6211-eb23-481e-9ffa-f64f75953102/linked_in_profile",
    logo: "/images/cert_clf-c02.png"
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-900">
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
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
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
  );
}
