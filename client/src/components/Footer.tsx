import { Github, Mail, Linkedin, Twitter, ExternalLink, GraduationCap, School } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 dark:bg-black text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent" />
              HC-Scholarly Web Portal
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the academic community with premium Scopus journals, conference tools, and collaborative workshop resources.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Research Tools</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.scopus.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                  Scopus Database
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://ugccare.unipune.ac.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                  UGC Care List
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://moodle.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                  Moodle LMS
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#resources" className="text-gray-400 hover:text-white transition-colors text-sm">Journals & Conferences</a>
              </li>
              <li>
                <a href="#toolkit" className="text-gray-400 hover:text-white transition-colors text-sm">Workshop Toolkit</a>
              </li>
              <li>
                <a href="#github-integration" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub for Research</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/hc344937-hash/scholarly-we-portal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@scholarlyportal.edu"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} HC-Scholarly Web Portal. Created by HC.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
