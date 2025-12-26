import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Eye, Check } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: 'Our Mission',
        description: 'Making advanced AI technology accessible and practical for local businesses',
    },
    {
        icon: Compass,
        title: 'Our Approach',
        description: 'Personalized solutions that integrate seamlessly with your existing operations',
    },
    {
        icon: Eye,
        title: 'Our Vision',
        description: 'A future where every business leverages AI to maximize efficiency and growth',
    },
];

const benefits = [
    'Tailored solutions for your business',
    'No complex technical jargon',
    'Ongoing support and optimization',
    'Proven ROI and measurable results',
];

export default function AboutSection() {
    return (
        <section id="about" className="relative py-32 bg-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase">
                        About Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        AI Solutions for
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Local Businesses
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        At Square AI, we believe that artificial intelligence shouldn't be reserved 
                        for tech giants. We're dedicated to helping local businesses harness the 
                        power of AI to automate workflows, reduce costs, and unlock new opportunities 
                        for growth.
                    </p>
                </motion.div>

                {/* Value Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300 mb-6">
                                <value.icon className="h-8 w-8 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                                {value.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Square AI */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h3 className="text-3xl font-bold text-white text-center mb-12">
                        Why Choose Square AI?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex items-start gap-4 p-6 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <span className="text-slate-300 text-lg group-hover:text-white transition-colors duration-300">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}