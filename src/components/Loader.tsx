import React from 'react';
import { motion } from 'motion/react';

export const Loader: React.FC = () => {
    return (
        <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative flex items-center justify-center">
                {/* Particles */}
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-500 rounded-full"
                        initial={{ 
                            x: (Math.random() - 0.5) * 1000, 
                            y: (Math.random() - 0.5) * 1000,
                            opacity: 0 
                        }}
                        animate={{ 
                            x: 0, 
                            y: 0,
                            opacity: 1 
                        }}
                        transition={{ duration: 1.5, delay: i * 0.02, ease: "easeOut" }}
                    />
                ))}
                {/* Logo */}
                <motion.img 
                    src="/logo.png" 
                    alt="Loading..." 
                    className="w-16 h-16 relative z-10"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                />
            </div>
        </motion.div>
    );
};
