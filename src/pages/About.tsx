import { motion } from 'motion/react';
import { Target, Users, Shield, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  const values = [
    { name: 'Trust', description: 'We believe in building long-term relationships based on honesty and mutual respect.', icon: <Shield className="text-fb-blue" /> },
    { name: 'Transparency', description: 'No hidden costs or confusing jargon. Just clear data and honest communication.', icon: <Users className="text-fb-blue" /> },
    { name: 'Results', description: 'We focus on tangible outcomes that impact your bottom line directly.', icon: <TrendingUp className="text-fb-blue" /> },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24" id="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-display font-bold text-gray-900 mb-6"
            >
              Helping Local Businesses <span className="text-fb-blue">Thrive Digitally</span>
            </motion.h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Based in the heart of Colombo, BlueForge Advertising was founded with a single mission: to level the playing field for small businesses in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24" id="about-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-fb-blue rounded-3xl -z-0 hidden lg:block" />
            </div>
            
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  BlueForge Advertising started when we noticed a significant gap in the Sri Lankan market. Large agencies were too expensive for small businesses, and DIY advertising often led to wasted budgets and frustration.
                </p>
                <p>
                  We saw talented local entrepreneurs struggling to reach their audience simply because they didn't have access to the same digital tools and strategies as industry giants.
                </p>
                <p>
                  Since then, we've dedicated ourselves to becoming the technical backbone for businesses across Colombo. We combine global advertising standards with localized market insights to create campaigns that resonate with the local culture while utilizing world-class technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50" id="about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">The Values We Live By</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our culture is built on a foundation of integrity and a relentless focus on our clients' success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.name} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-fb-blue/10 rounded-xl flex items-center justify-center mb-6 text-fb-blue">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.name}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-24 bg-white" id="about-focus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-fb-blue text-white rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
               <div>
                 <h2 className="text-4xl font-display font-bold mb-8">Focus on Helping Local Businesses Grow</h2>
                 <p className="text-xl text-white/80 mb-8 leading-relaxed">
                   We aren't interested in working with faceless corporations. Our passion lies in helping the local shop owner, the Colombo startup, and the family business reach their full potential.
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full">
                       <Heart className="text-white" size={24} />
                    </div>
                    <span className="text-lg font-bold">100% Focused on Colombo SME Growth</span>
                 </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                     <p className="text-4xl font-bold mb-2">150+</p>
                     <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Campaigns Run</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                     <p className="text-4xl font-bold mb-2">85%</p>
                     <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Client Retention</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                     <p className="text-4xl font-bold mb-2">3.5x</p>
                     <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Average ROAS</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                     <p className="text-4xl font-bold mb-2">24/7</p>
                     <p className="text-sm text-white/60 uppercase tracking-widest font-bold">Support Provided</p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
