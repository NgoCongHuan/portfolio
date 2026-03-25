import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";

export function Contact() {
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

  return (
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
                    href="https://www.facebook.com/huan.ngo.94214/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-hover border border-primary transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/NgoCongHuan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-hover border border-primary transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/huanngocong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-hover border border-primary transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:pers.ngoconghuan@gmail.com"
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
  );
}
