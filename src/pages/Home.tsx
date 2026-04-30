import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, BarChart3, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const benefits = [
    {
      title: 'Data-Driven Results',
      description: 'We don\'t guess. We use real-time analytics to optimize your campaigns for maximum ROI.',
      icon: <BarChart3 className="text-fb-blue" size={32} />,
    },
    {
      title: 'Local Market Expertise',
      description: 'Deep understanding of the Sri Lankan consumer landscape and digital habits.',
      icon: <Users className="text-fb-blue" size={32} />,
    },
    {
      title: 'Precise Targeting',
      description: 'Reach your ideal customers exactly where they hang out online, at the right time.',
      icon: <Target className="text-fb-blue" size={32} />,
    },
    {
      title: 'Transparent Reporting',
      description: 'Clear, concise monthly reports so you know exactly where your investment is going.',
      icon: <Zap className="text-fb-blue" size={32} />,
    },
  ];

  const servicesPreview = [
    { title: 'Social Media Advertising', description: 'Scale your brand on Facebook, Instagram, and LinkedIn.' },
    { title: 'Google Ads', description: 'Be found exactly when customers are searching for what you offer.' },
    { title: 'Creative Strategy', description: 'Stand out from the noise with high-converting visual design.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-fb-blue/10 text-fb-blue text-sm font-bold mb-6 tracking-wide uppercase">
                Smater Digital Marketing
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                Grow Your Business with <span className="text-fb-blue">Smarter Advertising</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                We help small businesses in Colombo attract more customers through targeted digital campaigns that actually deliver results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://forms.gle/ahtgmJFqBfKFdd5L9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-fb-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-fb-blue-dark transition-all shadow-xl shadow-fb-blue/20 flex items-center justify-center gap-2 group"
                >
                  Register
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-full text-lg font-bold hover:border-fb-blue transition-all flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                </div>
                <p><span className="text-gray-900 font-bold">50+</span> local businesses trust us</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-fb-blue/5 rounded-3xl overflow-hidden relative border border-gray-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000" 
                  alt="Photography and Creative Ads" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-fb-blue/20 to-transparent" />
                
                {/* Floating elements */}
                <div className="absolute top-10 left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Conversion</p>
                    <p className="text-lg font-bold text-gray-900">+124%</p>
                  </div>
                </div>
                
                <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                  <div className="w-10 h-10 bg-fb-blue/10 rounded-full flex items-center justify-center text-fb-blue">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Reach</p>
                    <p className="text-lg font-bold text-gray-900">10k+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50" id="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg lowercase first-letter:uppercase">
              Comprehensive advertising solutions tailored for small and medium enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesPreview.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8">{service.description}</p>
                <Link to="/services" className="text-fb-blue font-bold flex items-center gap-2 group">
                  Learn More 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Why Partner with BlueForge?</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Most agencies focus on vanity metrics like "likes" and "shares." We focus on one thing: <span className="text-gray-900 font-bold">Revenue Growth</span>.
              </p>
              
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-fb-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className={`p-8 rounded-3xl border border-gray-100 ${index % 2 === 1 ? 'mt-8' : ''} bg-white shadow-sm`}
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" id="home-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-fb-blue rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fb-blue-dark rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Ready to Scale Your Business in Colombo?</h2>
              <p className="text-xl text-white/80 mb-12">
                Stop wasting money on ads that don't convert. Let's build a strategy that actually works for your local business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-fb-blue px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-lg active:scale-95"
                >
                  Book a Free Audit
                </Link>
                <Link
                  to="/contact"
                  className="bg-fb-blue-dark/50 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-fb-blue-dark transition-all active:scale-95"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
