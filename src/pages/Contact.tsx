import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you shortly.');
  };

  return (
    <div className="pt-20">
      <section className="bg-white py-24" id="contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side content */}
            <div>
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Let's grow your business—<span className="text-fb-blue">reach out today.</span></h1>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Whether you're just starting out or looking to scale your existing advertising efforts, we're here to help you navigate the digital landscape.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-fb-blue/10 rounded-xl flex items-center justify-center text-fb-blue flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-xl font-bold text-gray-900">hello@blueforge.lk</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-fb-blue/10 rounded-xl flex items-center justify-center text-fb-blue flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl font-bold text-gray-900">+94 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-fb-blue/10 rounded-xl flex items-center justify-center text-fb-blue flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-xl font-bold text-gray-900 leading-relaxed">123 Galle Road, Colombo 03,<br />Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Instant Chat</h3>
                </div>
                <p className="text-gray-600 mb-8 lowercase first-letter:uppercase">
                  Need a quick response? Message us directly on WhatsApp for immediate support.
                </p>
                <a 
                  href="https://wa.me/94112345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 active:scale-95"
                  id="whatsapp-btn"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Right side form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-8 lg:p-12 rounded-[2.5rem] border border-gray-100"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-fb-blue focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-fb-blue focus:border-transparent outline-none transition-all"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-fb-blue focus:border-transparent outline-none transition-all"
                      placeholder="077 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-fb-blue focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help your business grow?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-fb-blue text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-fb-blue-dark transition-all shadow-xl shadow-fb-blue/20 active:scale-[0.98]"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section or additional info */}
      <section className="pb-24" id="contact-extra">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-16 text-center">
              <h2 className="text-3xl font-display font-bold text-white mb-6">Our Office Hours</h2>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 text-gray-400">
                 <div>
                    <p className="text-white font-bold mb-2">Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM</p>
                 </div>
                 <div>
                    <p className="text-white font-bold mb-2">Saturday</p>
                    <p>10:00 AM - 2:00 PM</p>
                 </div>
                 <div>
                    <p className="text-white font-bold mb-2">Sunday</p>
                    <p>Closed</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
