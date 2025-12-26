import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'info@squareai.ca',
        href: 'mailto:info@squareai.ca',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 (825) 925-1712',
        href: 'tel:+18259251712',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: '205 - 89 Shaunslieve Drive, Halifax NS B3M 0H1',
        href: null,
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        
        // Open user's email client
        window.location.href = `mailto:info@squareai.ca?subject=${subject}&body=${body}`;
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="relative py-32 bg-slate-950">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Ready to transform your business with AI? Get in touch today.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Send us a message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Input
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 h-12 rounded-xl"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 h-12 rounded-xl"
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500 rounded-xl resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold h-12 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="space-y-8">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    {item.href ? (
                                        <a href={item.href} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                                                <item.icon className="h-6 w-6 text-cyan-400" />
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                                                <p className="text-white text-lg font-medium group-hover:text-cyan-300 transition-colors duration-300">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                                                <item.icon className="h-6 w-6 text-cyan-400" />
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                                                <p className="text-white text-lg font-medium">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}