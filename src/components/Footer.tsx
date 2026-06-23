import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-950 text-gray-400 py-16 px-8 mt-20 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
                <h4 className="text-white font-bold text-lg mb-4">Unscripted Victories</h4>
                <p className="text-sm leading-relaxed">Documenting, celebrating, and elevating African sports stories through cinematic filmmaking and authentic storytelling.</p>
            </div>
            <div>
                <h4 className="text-white font-bold text-lg mb-4">Links</h4>
                <ul className="space-y-2 text-sm">
                    <li><span className="cursor-pointer hover:text-white" onClick={() => {window.location.hash = '#mission'}}>Mission</span></li>
                    <li><span className="cursor-pointer hover:text-white" onClick={() => {window.location.hash = '#projects'}}>Featured Projects</span></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold text-lg mb-4">Contact & Socials</h4>
                <p className="text-sm">Nairobi, Kenya</p>
                <p className="text-sm">Phone: +254725094775</p>
                <p className="text-sm">unscriptedvictories24@gmail.com</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                    <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
                </div>
            </div>
        </div>
        <div className="text-center text-xs mt-16 pt-8 border-t border-gray-800">
          <p>© {new Date().getFullYear()} Unscripted Victories. All rights reserved.</p>
        </div>
        
        {/* Floating WhatsApp Icon */}
        <a 
          href="https://wa.me/254725094775" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-600 transition z-50"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.012-4.493 10.012-10.013 0-5.52-4.492-10.012-10.012-10.012-5.52 0-10.013 4.492-10.013 10.012 0 1.658.341 3.117 1.221 5.038l-.661 2.49 2.649-.694z"/></svg>
        </a>
      </footer>
    );
};
