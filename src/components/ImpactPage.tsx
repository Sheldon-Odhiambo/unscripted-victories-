import React from 'react';
import { motion } from 'motion/react';
import { Footer } from './Footer';
import { Heart, Footprints, Camera, Trophy, Goal, Dribbble, Volleyball, Award } from 'lucide-react';

const backgroundIcons = [Heart, Footprints, Trophy, Goal, Dribbble, Volleyball, Award];

export const ImpactPage: React.FC<{onBack: () => void, projects: any[]}> = ({onBack, projects}) => {
    return (
        <div className="min-h-screen bg-white text-gray-900 relative">
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex flex-wrap overflow-hidden">
                {[...Array(20)].map((_, i) => {
                    const Icon = backgroundIcons[i % backgroundIcons.length];
                    return (
                        <motion.div 
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="p-12"
                        >
                            <Icon className="w-24 h-24" />
                        </motion.div>
                    );
                })}
            </div>

            <section className="bg-cyan-600 text-white pt-32 pb-20 px-4 text-center relative z-10">
                <div className="absolute left-8 top-28">
                    <button onClick={onBack} className="font-semibold hover:text-cyan-100 text-lg flex items-center">← Back to Home</button>
                </div>
                <h2 className="text-5xl font-extrabold tracking-tighter mb-4 pt-12">Our Impact, One Story at a Time</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">Discover the journeys of athletes, teams, and communities whose lives and paths have been transformed through sport. Each documentary and feature is a testament to the power of African excellence, showing how authentic storytelling can elevate voices, preserve legacies, and inspire the next generation of champions.</p>
            </section>
            
            <section className="py-20 max-w-5xl mx-auto px-4 text-center relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <motion.div whileHover={{ scale: 1.05 }}>
                        <div className="flex justify-center mb-4"><Heart className="w-12 h-12 text-cyan-600" /></div>
                        <div className="text-6xl font-extrabold mb-2">16</div>
                        <div className="text-lg font-semibold">Schools</div>
                     </motion.div>
                     <motion.div whileHover={{ scale: 1.05 }}>
                        <div className="flex justify-center mb-4"><Footprints className="w-12 h-12 text-cyan-600" /></div>
                        <div className="text-6xl font-extrabold mb-2">100+</div>
                        <div className="text-lg font-semibold">Shoes</div>
                     </motion.div>
                     <motion.div whileHover={{ scale: 1.05 }}>
                        <div className="flex justify-center mb-4"><Camera className="w-12 h-12 text-cyan-600" /></div>
                        <div className="text-6xl font-extrabold mb-2">1000+</div>
                        <div className="text-lg font-semibold">Kids Impacted</div>
                     </motion.div>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50 relative z-10">
               <div className="mt-8">
                 <h3 className="text-4xl font-bold tracking-tighter mb-16 text-center">Featured Projects</h3>
                 <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                   {projects.map((project, index) => (
                     <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                       <img src={project.image} alt={project.title} className="w-full h-96 object-cover" />
                       <div className="p-8">
                           <div className="flex space-x-2 mb-4">
                               {project.tags.map((tag: string, tIndex: number) => (
                                   <span key={tIndex} className="bg-amber-100 px-3 py-1 rounded-full text-xs font-semibold text-amber-900">{tag}</span>
                               ))}
                           </div>
                           <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                           <p className="text-gray-600 mb-6">{project.desc}</p>
                           <div className="flex justify-between items-center text-sm text-gray-500">
                               <span>{project.date}</span>
                           </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>
        </div>
    );
};
