/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, Footprints, Instagram, Linkedin, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ServiceDetail } from './components/ServiceDetail';
import { ImpactPage } from './components/ImpactPage';
import { ImpactSummary } from './components/ImpactSummary';
import { Footer } from './components/Footer';
import { DonatePage } from './components/DonatePage';
import { Founders } from './components/Founders';

const founders = [
  {
    id: 0,
    name: "DERICK OCHIENG",
    title: "CO-FOUNDER & DIRECTOR",
    bio: "A sports storyteller, content specialist, basketball player, and documentary producer committed to elevating African sports narratives. Derick combines an athlete’s perspective with a storyteller’s vision.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    socials: { instagram: "#", linkedin: "#", music: "#" }
  },
  {
    id: 1,
    name: "DAVIDSON “SLOUCH” OLUOCH",
    title: "CO-FOUNDER & CREATIVE DIRECTOR",
    bio: "Award-winning cinematographer and visual storyteller. Known for his cinematic approach, Slouch brings powerful moments to life through film, defining the UV visual identity and technical expertise.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    socials: { instagram: "#", linkedin: "#", music: "#" }
  }
];

const servicesData = [
  { title: 'Documentary Production', image: '/assets/story1.jpeg', desc: 'Crafting powerful, cinematic visual stories.', details: 'Detailed info about our Documentary Production capabilities...', exampleLink: 'https://www.youtube.com/watch?v=zG9dea1LTfo' },
  { title: 'Sports Storytelling', image: '/assets/sat1.jpeg', details: 'We dive deep to uncover the stories that make sports matter.', exampleLink: 'https://www.instagram.com/reels/DOD_UI8DAqT/' },
  { title: 'Content Creation', image: '/assets/images (6).jpeg', desc: 'Dynamic media for diverse platforms.', details: 'Creating engaging content that resonates with your audience.', exampleLink: '#projects' },
  { title: 'Event Coverage', image: '/assets/images (7).jpeg', desc: 'Capturing live energy and intensity.', details: 'Professional coverage for your most important sporting events.', exampleLink: 'https://www.instagram.com/reels/DP1tOY9jFqZ/' },
  { title: 'Athlete Features', image: '/assets/Impact.jpg', details: 'Bringing the spotlight to athletes with compelling stories.', exampleLink: 'https://www.youtube.com/watch?v=tEec0IVQiAM' }
];

const projectsData = [
  { 
    title: 'UV Episode 1', 
    image: '/assets/story1.jpeg', 
    desc: 'A compelling story of resilience, determination, and the pursuit of greatness.', 
    date: 'March 12, 2025',
    tags: ['Documentary', 'Resilience'],
    youtubeUrl: 'https://www.youtube.com/watch?v=zG9dea1LTfo'
  },
  { 
    title: 'UV Episode 2 – Destiny Delayed', 
    image: '/assets/story1.jpeg', 
    desc: 'An inspiring documentary exploring setbacks, perseverance, and the relentless pursuit of dreams.', 
    date: 'February 27, 2025',
    tags: ['Documentary', 'Perseverance'],
    youtubeUrl: 'https://www.youtube.com/watch?v=MOlWlKfRV1k'
  }
];


const Hero = () => (
    <header className="relative h-[60vh] sm:h-screen flex items-center justify-center text-white">
        <img 
            src="/assets/langinp.jpeg" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-5xl mx-auto text-center px-4">
            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tighter mb-6">
                Every Athlete Has a Story. We Tell It.
            </h2>
            <p className="text-lg sm:text-2xl font-light text-gray-200 max-w-2xl mx-auto mb-10">
                Unscripted Victories is a sports storytelling and documentary platform dedicated to capturing the untold stories.
            </p>
            <div className="flex justify-center">
  <button
    onClick={() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="
      bg-white text-black 
      px-6 py-2.5 sm:px-8 sm:py-3 
      rounded-full font-semibold 
      transition-all duration-300 ease-in-out
      hover:bg-gray-100 
      hover:scale-105 
      hover:shadow-lg
      active:scale-95
    "
  >
    Watch Our Story
  </button>
</div>
        </div>
    </header>
);

export default function App() {
  const [activeFounder, setActiveFounder] = useState(0);
  const [activeService, setActiveService] = useState<any>(null); // Kept minimal for now to fix build
  const [activePage, setActivePage] = useState('home');

  if (activeService) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar onNavigate={setActivePage} />
        <main className="pt-24 min-h-[calc(100vh-200px)]">
          <ServiceDetail service={activeService} onBack={() => setActiveService(null)} />
        </main>
        <Footer />
      </div>
    );
  }

  if (activePage === 'donate') {
      return (
          <div className="min-h-screen bg-gray-50">
              <DonatePage onBack={() => setActivePage('home')} />
          </div>
      );
  }

  if (activePage === 'impact') {
      return (
          <div className="min-h-screen bg-white">
              <Navbar onNavigate={setActivePage} />
              <ImpactPage onBack={() => setActivePage('home')} projects={projectsData} />
              <Footer />
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onNavigate={setActivePage} />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-16 relative z-10 space-y-16">
        <section id="mission" className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row relative pt-32">
            <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-500" />
            <div className="p-12 md:w-1/2">
                <div className="flex items-center gap-2 text-gray-900 mb-4">
                  <Heart className="w-8 h-8" />
                  <Footprints className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold tracking-tighter mb-6 text-gray-900">Our Mission</h3>
                <div className="text-gray-700 space-y-4 leading-relaxed mb-8">
                     <p>Unscripted Victories (UV) is a sports storytelling and documentary platform dedicated to capturing the untold stories of athletes, teams, and communities across Africa.</p>
                     <img src="/assets/langinp.jpeg" alt="Mission" className="rounded-2xl w-full h-48 object-cover my-4" />
                     <p>Our mission is to document, celebrate, and elevate African sports stories through world-class filmmaking and authentic storytelling.</p>
                     <p>We believe that behind every athlete, every team, and every community is a story worth telling.</p>
                </div>
                <p className="font-semibold text-gray-900">- Derick Ochieng & Davidson “Slouch” Oluoch, Co-Founders</p>
            </div>
            <div className="md:w-1/2">
                <img 
                    src="/assets/mission.jpeg" 
                    alt="Mission" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>
        </section>

        <section id="services" className="py-20 bg-white rounded-3xl pt-32">
            <h3 className="text-4xl font-bold tracking-tighter mb-16 text-center">What We Do</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service) => (
                    <div key={service.title} className="group relative h-[300px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex flex-col justify-end p-8 text-white">
                            <h4 className="font-bold text-2xl tracking-tighter mb-2">{service.title}</h4>
                            <p className="opacity-90 leading-snug mb-4">{service.desc}</p>
                            <button onClick={() => setActiveService(service)} className="inline-block bg-white text-black text-sm font-semibold py-2 px-4 rounded-full w-fit hover:bg-gray-200 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section id="projects" className="py-20 pt-32">
          <h3 className="text-4xl font-bold tracking-tighter mb-16 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
            {projectsData.map((project, index) => (
              <a key={index} href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 block group hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
                <div className="p-8">
                    <div className="flex space-x-2 mb-4">
                        {project.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="bg-amber-100 px-3 py-1 rounded-full text-xs font-semibold text-amber-900">{tag}</span>
                        ))}
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                    <p className="text-gray-600 mb-6">{project.desc}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{project.date}</span>
                        <span className="text-cyan-600 font-semibold flex items-center group-hover:underline">See Story →</span>
                    </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        
            <section id="partners" className="py-20 bg-white text-center pt-32">
  <h3 className="text-xl font-bold tracking-widest text-gray-400 mb-4 uppercase">
    Our Partners
  </h3>

  <div className="w-16 h-1 bg-teal-400 mx-auto mb-8"></div>

  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
    Whether you are an athlete, sports organization, brand, school, community project, or event organizer, Unscripted Victories is ready to help bring your story to life.
  </p>

  {/* Partners logos */}
  <div className="flex flex-wrap items-center justify-center gap-12 max-w-6xl mx-auto px-4">
    {[
      { name: "Partner 1", logo: "/assets//partner11.png" },
     
     
    ].map((partner, i) => (
      <div
        key={i}
        className="w-32 h-20 flex items-center justify-center"
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
        />
      </div>
    ))}
  </div>
</section>

        <Founders />
        <ImpactSummary onNavigateToImpact={() => setActivePage('impact')} />
      </main>

      <Footer />
    </div>
  );
}
