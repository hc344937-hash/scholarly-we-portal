import { 
  Users, 
  Layout, 
  BarChart3, 
  MessageSquare, 
  Timer, 
  Monitor, 
  CheckSquare, 
  Share2, 
  Lightbulb, 
  Zap, 
  FileEdit, 
  HandMetal, 
  Trophy, 
  Coffee,
  BrainCircuit,
  PieChart
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const toolkitData = {
  workshops: [
    {
      title: 'Breakout Rooms',
      description: 'Facilitate focused small group discussions or brainstorming sessions.',
      icon: Users,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Digital Whiteboards',
      description: 'Help participants visually organize ideas during collaborative activities.',
      icon: Layout,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20'
    },
    {
      title: 'Polls & Quizzes',
      description: 'Gather real-time feedback and keep sessions dynamic and engaging.',
      icon: BarChart3,
      color: 'text-green-500 bg-green-50 dark:bg-green-900/20'
    },
    {
      title: 'Collaborative Notes',
      description: 'Allow participants to contribute to shared documents in real-time.',
      icon: MessageSquare,
      color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20'
    },
    {
      title: 'Timers & Breaks',
      description: 'Maintain focus with time-boxed activities and scheduled recharging.',
      icon: Timer,
      color: 'text-red-500 bg-red-50 dark:bg-red-900/20'
    }
  ],
  meetings: [
    {
      title: 'Screen Sharing',
      description: 'Present updates, slides, or visuals seamlessly to all attendees.',
      icon: Monitor,
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      title: 'Integrated Chat & Q&A',
      description: 'Enable discussions without interrupting the meeting flow.',
      icon: MessageSquare,
      color: 'text-teal-500 bg-teal-50 dark:bg-teal-900/20'
    },
    {
      title: 'Scheduling Tools',
      description: 'Simplify coordination with integrated calendars and RSVPs.',
      icon: Timer,
      color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20'
    },
    {
      title: 'Action Item Tracking',
      description: 'Assign tasks and monitor outcomes directly within the platform.',
      icon: CheckSquare,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
    }
  ],
  engagement: [
    {
      title: 'Document Co-Editing',
      description: 'Work together on shared files to stay on the same page.',
      icon: FileEdit,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20'
    },
    {
      title: 'Virtual Hand-Raising',
      description: 'Keep the flow smooth and encourage structured participation.',
      icon: HandMetal,
      color: 'text-rose-500 bg-rose-50 dark:bg-rose-900/20'
    },
    {
      title: 'Gamified Elements',
      description: 'Spice things up with quizzes, leaderboards, or rewards.',
      icon: Trophy,
      color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      title: 'Interactive Icebreakers',
      description: 'Kick off with games that help everyone feel comfortable.',
      icon: Coffee,
      color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20'
    }
  ],
  insights: [
    {
      title: 'Attendance Reports',
      description: 'Track who attended and for how long to measure reach.',
      icon: Users,
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: 'Engagement Metrics',
      description: 'See how participants interacted with polls and tools.',
      icon: PieChart,
      color: 'text-pink-500 bg-pink-50 dark:bg-pink-900/20'
    },
    {
      title: 'AI-Driven Insights',
      description: 'Analyze patterns and offer recommendations for future sessions.',
      icon: BrainCircuit,
      color: 'text-violet-500 bg-violet-50 dark:bg-violet-900/20'
    },
    {
      title: 'AI Notetaker',
      description: 'Automatically transcribe and summarize sessions in real-time.',
      icon: Zap,
      color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
    }
  ]
};

export default function WorkshopToolkit() {
  return (
    <section id="toolkit" className="py-20 bg-slate-50 dark:bg-slate-900/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Workshops & Webinars Toolkit</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive tools and features designed to make your scholarly workshops, 
            meetings, and webinars more collaborative, engaging, and productive.
          </p>
        </div>

        <Tabs defaultValue="workshops" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="meetings">Team Meetings</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="insights">AI & Insights</TabsTrigger>
          </TabsList>

          {Object.entries(toolkitData).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-all">
                      <CardHeader className="pb-2">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${item.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 p-8 bg-accent/5 rounded-2xl border border-accent/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2">Ready to host your next event?</h3>
            <p className="text-muted-foreground">Download our free checklist for seamless and professional webinars.</p>
          </div>
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold hover:opacity-90 transition-all shadow-lg">
            Download Guide
          </button>
        </div>
      </div>
    </section>
  );
}
