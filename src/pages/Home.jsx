import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import ProcessSection from '@/components/landing/ProcessSection';
import AboutSection from '@/components/landing/AboutSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <ProcessSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}