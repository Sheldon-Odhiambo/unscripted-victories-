import React from 'react';

interface ImpactSummaryProps {
    onNavigateToImpact: () => void;
}

export const ImpactSummary: React.FC<ImpactSummaryProps> = ({ onNavigateToImpact }) => {
    return (
        <section className="py-20 text-center">
            <h3 className="text-4xl font-bold tracking-tighter mb-4">Our Impact</h3>
            <p className="font-semibold text-lg mb-6">Empowering Stories, Inspiring Change</p>
            <p className="max-w-2xl mx-auto text-gray-600 mb-10 leading-relaxed">
                Since our inception, Unscripted Victories has been committed to making a meaningful impact in the lives of young people and communities. Through our initiatives, we have inspired growth, resilience, and opportunity—helping individuals unlock their potential and believe in their own journey.

Each effort we make represents more than just support; it is a symbol of empowerment, hope, and transformation. Our work continues to strengthen confidence, open doors to opportunity, and create lasting positive change in the communities we serve.
            </p>
            <div className="flex space-x-4 justify-center">
                <button onClick={onNavigateToImpact} className="bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-700 transition">
                    See our Impact
                </button>
            </div>
        </section>
    );
};
