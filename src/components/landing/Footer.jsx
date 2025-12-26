import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694c5e62039007bf5418deaf/496eb56be_AISelect_20251224_171216_Adobe_Acrobat-removebg-preview.png"
                            alt="Square AI Logo"
                            className="h-8 w-8 object-contain"
                        />
                        <span className="text-lg font-bold tracking-wider">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                SQUARE
                            </span>
                            <span className="text-white ml-1">AI</span>
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            Services
                        </a>
                        <a href="#process" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            Process
                        </a>
                        <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            About
                        </a>
                        <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                            Contact
                        </a>
                    </nav>

                    {/* Copyright */}
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Square AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}