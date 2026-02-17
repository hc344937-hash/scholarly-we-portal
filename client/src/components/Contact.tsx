import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-transparent to-blue-50 dark:to-slate-900/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="section-title mb-4">Get in Touch</h2>
            <p className="section-subtitle mx-auto">
              Have questions about the GitHub Student Portal or academic resources? We're here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">Support and general inquiries</p>
                  <a href="mailto:support@scholarly.edu" className="text-accent hover:underline mt-2 inline-block font-medium">
                    support@scholarly.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Community Forum</h3>
                  <p className="text-muted-foreground">Join the discussion with other students</p>
                  <a href="#" className="text-accent hover:underline mt-2 inline-block font-medium">
                    Visit Community Forum
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-border shadow-sm animate-slide-in-right">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
