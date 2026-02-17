import { ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Scholarly Web Portal for Research & Development</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              Empower Your <span className="gradient-text">Research Journey</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Access premium Scopus journals, upcoming conferences, and a comprehensive workshop toolkit designed for the modern academic researcher.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById('toolkit');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group"
              >
                Workshop Toolkit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('resources');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                Explore Journals
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-accent">1000+</p>
                <p className="text-sm text-muted-foreground">Journals</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-sm text-muted-foreground">Conferences</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Open Access</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="hidden md:flex animate-slide-in-right justify-center items-center">
            <div className="relative w-full max-w-md h-96">
              {/* Central Branding Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-accent/10 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-48 h-48 bg-accent/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-24 h-24 text-accent" />
                    </div>
                  </div>
                  
                  {/* Floating Tags */}
                  <div className="absolute -top-4 -right-4 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border animate-bounce" style={{ animationDelay: '0s' }}>
                    <span className="text-sm font-bold text-blue-600">Scopus Indexed</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <span className="text-sm font-bold text-purple-600">AI Insights</span>
                  </div>
                  <div className="absolute -bottom-4 right-8 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border animate-bounce" style={{ animationDelay: '1s' }}>
                    <span className="text-sm font-bold text-green-600">Workshops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
