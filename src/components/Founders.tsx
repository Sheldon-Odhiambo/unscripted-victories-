import React from 'react';

const founders = [
  {
    name: "Derick Ochieng",
    role: "Co-Founder & Director",
    story: "Derick Ochieng is a sports storyteller, content specialist, basketball player, and documentary producer committed to elevating African sports narratives. As a Content Specialist at Giants of Africa, he has created impactful content that highlights the transformative power of sport across the continent. With multiple basketball MVP awards and years of basketball experience, Derick combines an athlete’s perspective with a storyteller’s vision to create authentic and meaningful stories that resonate with audiences.",
    image: "/assets/derrick.jpeg"
  },
  {
    name: "Davidson “Slouch” Oluoch",
    role: "Co-Founder & Creative Director",
    story: "Davidson “Slouch” Oluoch is an award-winning cinematographer, filmmaker, and visual storyteller recognized as Cinematographer of the Year 2025. He serves as a Content Producer at Giants of Africa and is the Founder of Dream Creations, a creative production company dedicated to producing impactful visual content and storytelling projects. Known for his cinematic approach to filmmaking, Slouch has built a reputation for creating compelling stories that connect deeply with audiences and bring powerful moments to life through film. His creative vision and technical expertise are at the heart of Unscripted Victories’ storytelling approach.",
    image: "/assets/slouch.jpeg"
  }
];

export const Founders: React.FC = () => {
    return (
      <section id="founders" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-4xl font-bold tracking-tighter mb-16 text-center">Meet The Founders</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {founders.map((founder, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-3xl aspect-square cursor-pointer">
                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                            <h4 className="text-2xl font-bold mb-2">{founder.name}</h4>
                            <p className="text-cyan-400 font-semibold mb-4">{founder.role}</p>
                            <p className="text-sm leading-relaxed text-gray-200">{founder.story}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    );
};
