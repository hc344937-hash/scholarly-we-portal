import { useState, useMemo } from 'react';
import { Search, BookOpen, Database, Code, Users, Zap, FileText, Globe, GraduationCap, Microscope, Landmark, Stethoscope, Briefcase, Cpu, FlaskConical, Brain, Gavel, LayoutGrid } from 'lucide-react';

const resourcesData = [
  {
    id: 1,
    title: 'Scopus Indexed Journals',
    description: 'Comprehensive database of peer-reviewed journals across all academic disciplines.',
    category: 'Journals',
    icon: BookOpen,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    id: 2,
    title: 'UGC Care Journals',
    description: 'Reference list of quality journals for academic research in India.',
    category: 'Journals',
    icon: GraduationCap,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
  {
    id: 3,
    title: 'Scopus Conferences',
    description: 'Find high-impact academic conferences indexed in Scopus.',
    category: 'Conferences',
    icon: Globe,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
  {
    id: 4,
    title: 'Online Conferences',
    description: 'Discover upcoming virtual and hybrid scholarly conferences worldwide.',
    category: 'Conferences',
    icon: Monitor,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  },
  {
    id: 5,
    title: 'Engineering & Technology',
    description: 'Research papers and resources for computer science, AI, and electronics.',
    category: 'Topics',
    icon: Cpu,
    color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
  },
  {
    id: 6,
    title: 'Medical & Health Science',
    description: 'Clinical studies, nursing resources, and medical research databases.',
    category: 'Topics',
    icon: Stethoscope,
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  },
  {
    id: 7,
    title: 'Business & Economics',
    description: 'Financial journals, management studies, and economic research tools.',
    category: 'Topics',
    icon: Briefcase,
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
  },
  {
    id: 8,
    title: 'Physical & Life Sciences',
    description: 'Chemistry, biology, and physics research materials and journals.',
    category: 'Topics',
    icon: FlaskConical,
    color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
  },
  {
    id: 9,
    title: 'Social Sciences & Humanities',
    description: 'Psychology, sociology, and education research resources.',
    category: 'Topics',
    icon: Users,
    color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400',
  },
  {
    id: 10,
    title: 'Law & Jurisprudence',
    description: 'Legal research, case studies, and constitutional law databases.',
    category: 'Topics',
    icon: Gavel,
    color: 'bg-slate-100 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400',
  },
];

// Helper to handle the icon import issue
function Monitor(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(resourcesData.map(r => r.category)))];

  const filteredResources = useMemo(() => {
    return resourcesData.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-transparent to-blue-50 dark:to-slate-900/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="section-title mb-4">Academic Resources & Journals</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover a comprehensive collection of Scopus journals, conferences, and study materials curated for scholarly research.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search journals, conferences, topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in-up">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {filteredResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="card-hover bg-white dark:bg-slate-800 rounded-xl p-6 border border-border shadow-sm hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${resource.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{resource.description}</p>

                {/* Category Badge */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                    {resource.category}
                  </span>
                  <a href="#" className="text-accent hover:text-accent/80 font-medium text-sm">
                    Find →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No resources found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
