import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar */}
          <div className="lg:col-span-5 order-1">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-primary/20"></div>

              <div className="relative p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-full blur-2xl"></div>

                <div className="relative rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-primary/20">
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900">
                    <img
                      src="/images/avatar.png"
                      alt="Huan - Data Engineer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"></div>
                
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>

              {/* Social */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-900 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-blue-500 to-[#0066ff]">
                    Huan
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-[#0066ff]/20 to-blue-500/20 blur-lg"></span>
                </span>
                {" "}
                <span className="inline-block animate-wave">👋</span>
              </h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-[#0066ff] to-transparent rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
                  Data Engineer
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-gray-300">
                “Life begins at the end of your comfort zone” – This is my life motto. 
                I made the bold decision to leave medical school after two years and switch to Information Technology, 
                where I discovered my true passion for technology, especially working with data.
              </p>
              <p className="text-gray-400">
                I am a disciplined and constantly evolving person, which allows me to quickly adapt to new tools and technologies. 
                With the knowledge and experience I have gained, 
                I am confident in my ability to transform data into valuable insights that help drive smarter, data-driven decisions for the company.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-primary/50 transition-all group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">5+</div>
                <div className="text-sm text-gray-400">Years Exp.</div>
              </div>
              <div className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-primary/50 transition-all group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-primary/50 transition-all group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">3</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
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
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl"
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
                className="px-8 py-4 border border-gray-700 text-gray-200 hover:bg-gray-800 rounded-xl"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown />
      </div>
    </section>
  );
}