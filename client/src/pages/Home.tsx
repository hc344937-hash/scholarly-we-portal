import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Resources from '@/components/Resources';
import GitHubIntegration from '@/components/GitHubIntegration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Resources />
      <GitHubIntegration />
      <Contact />
      <Footer />
    </div>
  );
}
