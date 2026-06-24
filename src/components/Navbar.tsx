import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="fixed top-4 w-full z-50 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-white bg-black/30 backdrop-blur-md rounded-full py-4 px-8">
          <img
  src="/assets/uvlogo2.png"
  alt="Unscripted Victories Logo"
  className="h-16 w-auto cursor-pointer"
  onClick={() => onNavigate('home')}
/>
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <span className="cursor-pointer hover:text-gray-200" onClick={() => {onNavigate('home'); window.location.hash = '#mission';}}>Mission</span>
            <span className="cursor-pointer hover:text-gray-200" onClick={() => {onNavigate('home'); window.location.hash = '#projects';}}>Projects</span>
            <span className="cursor-pointer hover:text-gray-200" onClick={() => {onNavigate('home'); window.location.hash = '#services';}}>What We Do</span>
            <span className="cursor-pointer hover:text-gray-200" onClick={() => onNavigate('impact')}>Our Impact</span>
            <button className="bg-white text-black rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-gray-100 transition" onClick={() => onNavigate('donate')}>
              Donate
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
            <div className="md:hidden mt-2 bg-black/80 backdrop-blur-md text-white rounded-3xl p-8 flex flex-col items-center space-y-6">
                <span className="cursor-pointer" onClick={() => {onNavigate('home'); setIsOpen(false);}}>Mission</span>
                <span className="cursor-pointer" onClick={() => {onNavigate('home'); setIsOpen(false);}}>Projects</span>
                <span className="cursor-pointer" onClick={() => {onNavigate('home'); setIsOpen(false);}}>What We Do</span>
                <span className="cursor-pointer" onClick={() => {onNavigate('impact'); setIsOpen(false);}}>Our Impact</span>
                <button className="bg-white text-black rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-gray-100 transition" onClick={() => {onNavigate('donate'); setIsOpen(false);}}>
                  Donate
                </button>
            </div>
        )}
      </nav>
    );
};
