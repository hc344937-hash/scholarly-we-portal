import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Resources from '@/components/Resources';
import GitHubIntegration from '@/components/GitHubIntegration';
import WorkshopToolkit from '@/components/WorkshopToolkit';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { 
  Globe, 
  Cpu, 
  Stethoscope, 
  Briefcase, 
  FlaskConical, 
  GraduationCap, 
  Users, 
  Gavel, 
  Dribbble,
  Atom,
  LayoutGrid
} from 'lucide-react';

const conferenceTopics = [
  { name: 'Engineering', icon: Cpu, color: 'text-blue-500', count: 124 },
  { name: 'Medical', icon: Stethoscope, color: 'text-red-500', count: 89 },
  { name: 'Business', icon: Briefcase, color: 'text-emerald-500', count: 56 },
  { name: 'Education', icon: GraduationCap, color: 'text-purple-500', count: 42 },
  { name: 'Social Sciences', icon: Users, color: 'text-orange-500', count: 37 },
  { name: 'Sports Science', icon: Dribbble, color: 'text-green-500', count: 18 },
  { name: 'Physical Science', icon: Atom, color: 'text-cyan-500', count: 65 },
  { name: 'Agriculture', icon: Globe, color: 'text-lime-600', count: 24 },
  { name: 'Mathematics', icon: FlaskConical, color: 'text-indigo-500', count: 31 },
  { name: 'Law', icon: Gavel, color: 'text-slate-600', count: 15 },
  { name: 'Interdisciplinary', icon: LayoutGrid, color: 'text-rose-500', count: 29 },
];

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState('All Topics');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Round Table Conference Topics Section */}
      <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-600">
              Round Table: Find Your Conferences
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore upcoming scholarly gatherings organized by academic discipline and global regions.
            </p>
          </div>

          {/* Interactive Topic Table */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {conferenceTopics.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedTopic(topic.name)}
                  className={`group p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center ${
                    selectedTopic === topic.name 
                    ? 'border-accent bg-accent/5 shadow-md scale-105' 
                    : 'border-border hover:border-accent/50 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${topic.color} bg-current/10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{topic.name}</h3>
                  <span className="text-xs text-muted-foreground">{topic.count} Events</span>
                </button>
              );
            })}
            
            {/* Country Selector Card */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Global Search</h3>
                <p className="text-slate-400 text-sm mb-4">Filter conferences by your preferred destination.</p>
              </div>
              <select className="w-full bg-slate-800 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-accent outline-none">
                <option>Choose a Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Germany</option>
                <option>China</option>
                <option>Japan</option>
                {/* ... other countries ... */}
              </select>
            </div>
          </div>
        </div>
      </section>

      <Resources />
      <WorkshopToolkit />
      <GitHubIntegration />
      <Contact />
      <Footer />
    </div>
  );
}
