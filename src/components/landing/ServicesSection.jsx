import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, BarChart3, Cog } from 'lucide-react';

const services = [
    {
        icon: Bot,
        title: 'AI Chatbots',
        description: 'Deploy intelligent chatbots that handle customer inquiries 24/7, improving response times and customer satisfaction.',
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        icon: Workflow,
        title: 'Workflow Automation',
        description: 'Streamline repetitive tasks and optimize business processes with custom AI-powered automation solutions.',
        gradient: 'from-blue-500 to-indigo-500',
    },
    {
        icon: BarChart3,
        title: 'Predictive Analytics',
        description: 'Leverage AI to analyze data patterns and make informed decisions that drive business growth.',
        gradient: 'from-indigo-500 to-purple-500',
    },
    {
        icon: Cog,
        title: 'Custom AI Solutions',
        description: 'Tailored AI implementations designed specifically for your unique business challenges and goals.',
        gradient: 'from-purple-500 to-pink-500',
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-32 bg-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Our Services
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Comprehensive AI solutions tailored to accelerate your business growth
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="group relative h-full p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                                {/* Gradient Glow on Hover */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}