import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  return (
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
  );
}
