import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, LineChart } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Discovery',
        description: 'We meet with your team to understand your processes, pain points, and goals. We identify where AI can make the biggest impact on efficiency and growth.',
    },
    {
        number: '02',
        icon: Lightbulb,
        title: 'Strategy',
        description: 'We create a detailed roadmap tailored to your business. This includes solution design, timeline, expected outcomes, and how it integrates with your current systems.',
    },
    {
        number: '03',
        icon: Rocket,
        title: 'Implementation',
        description: 'Our team builds and deploys your AI solution with minimal disruption. We handle all technical aspects and ensure everything works smoothly with your existing tools.',
    },
    {
        number: '04',
        icon: LineChart,
        title: 'Optimization',
        description: 'We track performance metrics and gather feedback. Based on results, we fine-tune the AI to continuously improve accuracy, efficiency, and ROI.',
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="relative py-32 bg-slate-950">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
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
                        Our Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        How We Work
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A proven process to transform your business with AI
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-500/30" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative"
                        >
                            <div className="text-center">
                                {/* Step Number & Icon */}
                                <div className="relative inline-flex flex-col items-center mb-6">
                                    <span className="text-5xl font-bold text-slate-800 absolute -top-2 -left-4">
                                        {step.number}
                                    </span>
                                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                                        <step.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}