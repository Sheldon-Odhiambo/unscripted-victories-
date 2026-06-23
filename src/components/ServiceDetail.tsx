import React from 'react';

interface Service {
    title: string;
    image: string;
    desc: string;
    details: string;
    exampleLink: string;
}

interface ServiceDetailProps {
    service: Service;
    onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
    return (
        <section className="py-20 px-4 bg-white rounded-3xl max-w-5xl mx-auto">
            <button onClick={onBack} className="mb-8 font-semibold text-cyan-600 hover:text-cyan-700">← Back to Home</button>
            <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-3xl mb-12" />
            <h2 className="text-5xl font-extrabold tracking-tighter mb-6">{service.title}</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{service.details}</p>
            <a href={service.exampleLink} className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition">
                View Project Example
            </a>
        </section>
    );
};
