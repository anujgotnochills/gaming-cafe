import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface flex flex-col pt-32">
      <div className="flex-1 max-w-7xl mx-auto px-8 w-full py-12 md:py-20 flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">REACH OUT</span>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 text-on-surface">GET IN <span className="text-primary">TOUCH</span></h1>
          <p className="text-on-surface-variant max-w-xl mb-12 text-lg">
            Ready to experience the ultimate gaming setup? Have questions about our tournaments or private event bookings? Reach out to us below.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 uppercase">Location</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">123 Gaming Boulevard<br/>Cyber District, CA 90210</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 uppercase">Phone</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 uppercase">Email</h3>
                <a href="mailto:info@brandcraft.com" className="text-on-surface-variant text-sm hover:text-primary transition-colors">info@brandcraft.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 uppercase">Hours</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Mon-Thu: 10AM - 2AM<br/>Fri-Sun: 24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full rounded-3xl overflow-hidden border border-outline-variant/30 min-h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzEwLjEiVw!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
