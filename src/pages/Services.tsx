import { motion } from 'motion/react';
import { Facebook, Search, PencilRuler, Compass, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Social Media Advertising',
      icon: <Facebook className="text-fb-blue" size={32} />,
      whatIsIt: 'End-to-end management of paid campaigns on Facebook, Instagram, and LinkedIn.',
      problemSolved: 'Organic reach is dead. Many businesses waste money on "boosting posts" without a clear strategy or conversion goal.',
      benefit: 'Consistent lead flow and brand awareness among highly targeted audience segments in Colombo.',
      color: 'bg-blue-50',
    },
    {
      title: 'Google Ads Management',
      icon: <Search className="text-fb-blue" size={32} />,
      whatIsIt: 'Search, Display, and Video ads that appear when your customers are actively looking for solutions.',
      problemSolved: 'Traditional advertising (radio/TV/print) is expensive and impossible to track accurately.',
      benefit: 'Place your business at the very top of search results, paying only when a potential customer clicks.',
      color: 'bg-amber-50',
    },
    {
      title: 'Branding & Creative Design',
      icon: <PencilRuler className="text-fb-blue" size={32} />,
      whatIsIt: 'Professional visual assets including ad banners, video content, and brand identity systems.',
      problemSolved: 'Poor design ruins even the best ad strategies. Small businesses often lack high-quality creative assets.',
      benefit: 'Projects a professional image that builds instant trust and increases your ad click-through rates (CTR).',
      color: 'bg-purple-50',
    },
    {
      title: 'Campaign Strategy',
      icon: <Compass className="text-fb-blue" size={32} />,
      whatIsIt: 'Strategic roadmaps that align your business goals with the right digital channels.',
      problemSolved: 'Most businesses jump into advertising without a funnel, leading to high abandonment and low conversion.',
      benefit: 'A structured plan that guides customers from initial awareness to final purchase with maximum efficiency.',
      color: 'bg-emerald-50',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-24 sm:py-32 border-b border-gray-100" id="services-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl font-display font-bold text-gray-900 mb-6"
          >
            Digital Solutions for <span className="text-fb-blue">Modern Growth</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto lowercase first-letter:uppercase">
            We provide a full suite of advertising services designed to help small businesses dominate their niche online.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 hover:border-fb-blue/20 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} rounded-bl-[4rem] group-hover:scale-150 transition-transform duration-700 opacity-50`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-8 border border-gray-50">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">{service.title}</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-fb-blue mb-2">What it is</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">{service.whatIsIt}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">The Problem</h4>
                      <p className="text-gray-600 leading-relaxed">{service.problemSolved}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">The Benefit</h4>
                      <p className="text-gray-700 font-medium leading-relaxed">{service.benefit}</p>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-50 flex justify-between items-center">
                    <Link to="/contact" className="text-fb-blue font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Inquire About This Service <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gray-900 py-24" id="services-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">Not sure where to start?</h2>
            <p className="text-xl text-gray-400">
              Every business is unique. We provide free 30-minute consultations to help you determine the best channel for your specific goals and budget.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 bg-fb-blue text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-fb-blue-dark transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-fb-blue/20"
          >
            <MessageCircle size={24} />
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
