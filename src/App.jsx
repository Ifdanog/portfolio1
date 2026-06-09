import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Hero from './components/hero';
import Footer from './components/footer';
// import { Instagram, Youtube, Twitter, TikTok, Mail, Phone } from 'lucide-react';

function App() {
  const images = [
    "https://picsum.photos/id/1011/800/1200",
    "https://picsum.photos/id/1027/800/1200",
    "https://picsum.photos/id/1033/800/1200",
    "https://picsum.photos/id/106/800/1200",
    "https://picsum.photos/id/133/800/1200",
    "https://picsum.photos/id/201/800/1200",
    "https://picsum.photos/id/211/800/1200",
    "https://picsum.photos/id/251/800/1200",
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="w-4/5 mx-auto rounded-[100px] shadow-md fixed top-5 left-0 right-0 z-50 bg-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold tracking-tight text-brown">BELLARINA</h1> */}
          <img src='/logo.png' className='h-20' />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
            <a href="#stats" className="hover:text-gold transition-colors">Stats</a>
            <a href="#reel" className="hover:text-gold transition-colors">Reel</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#press" className="hover:text-gold transition-colors">Press</a>
            <a href="#contact" className="hover:text-gold transition-colors">Book Me</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <Hero />

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl heading-font font-bold text-center text-brown mb-16">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <GalleryItem key={index} src={img} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE, STATS, REEL, etc. */}
      {/* (Continuing with the same quality... I'll show a few more key sections) */}

            {/* MEASUREMENTS & STATS - Modern Fashion Comp Card Style */}
      <section id="stats" className="py-28 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl heading-font font-bold text-center text-brown mb-20">
            Measurements
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Side - Visual Profile */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-brown to-black rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/id/1011/800/1200" 
                    alt="Amaobi Isabella" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-cream px-8 py-6 rounded-2xl shadow-xl border border-beige">
                  <p className="text-brown text-sm tracking-widest">PROFESSIONAL</p>
                  <p className="text-4xl font-bold text-gold">STATS</p>
                </div>
              </motion.div>

              {/* Right Side - Stats Grid */}
              <div className="space-y-10">
                {[
                  { label: "Height", value: "5'9\" • 175 cm" },
                  { label: "Bust • Waist • Hips", value: "34 • 26 • 36" },
                  { label: "Dress Size", value: "US 4 / UK 8" },
                  { label: "Shoe Size", value: "EU 38 / US 8" },
                  { label: "Hair Color", value: "Natural Black" },
                  { label: "Eye Color", value: "Hazel Brown" },
                  { label: "Location", value: "Lagos, Nigeria" },
                  { label: "Passport & Travel", value: "Valid • Worldwide" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex justify-between items-end border-b border-beige pb-6 group"
                  >
                    <div>
                      <p className="text-brown/60 text-sm font-medium tracking-widest">{stat.label}</p>
                      <p className="text-3xl font-semibold text-brown mt-1 group-hover:text-gold transition-colors">
                        {stat.value}
                      </p>
                    </div>
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - Modern Luxe Cards */}
      <section id="services" className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl heading-font font-bold text-brown">What I Offer</h2>
            <p className="mt-4 text-lg text-brown/70 max-w-md mx-auto">
              Versatile talent for high-end projects and creative collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fashion & Editorial",
                desc: "High-fashion shoots, magazine editorials, and campaign imagery.",
                icon: "📸"
              },
              {
                title: "Runway & Shows",
                desc: "Professional catwalk experience for fashion weeks and presentations.",
                icon: "👠"
              },
              {
                title: "Commercial Campaigns",
                desc: "TV commercials, digital ads, and brand storytelling.",
                icon: "🎥"
              },
              {
                title: "Brand Partnerships",
                desc: "Long-term ambassadorships and influencer collaborations.",
                icon: "🤝"
              },
              {
                title: "Content Creation",
                desc: "UGC, Reels, TikToks, and full social media campaigns.",
                icon: "✨"
              },
              {
                title: "Events & Appearances",
                desc: "Red carpet, hosting, product launches, and private events.",
                icon: "🌟"
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gold/20"
              >
                <div className="text-5xl mb-8 transition-transform group-hover:scale-110 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-brown mb-4 heading-font">
                  {service.title}
                </h3>
                <p className="text-brown/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
            {/* CONTACT - Modern Split Layout */}
      <section id="contact" className="py-28 bg-black text-cream relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-5"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl heading-font font-bold leading-tight text-gold">
                Let's Create<br />Something<br />Beautiful
              </h2>
              
              <p className="mt-8 text-xl text-cream/80 max-w-md">
                Open to international campaigns, editorial work, brand partnerships, and creative collaborations.
              </p>

              <div className="mt-16 space-y-10">
                <div>
                  <p className="uppercase tracking-[3px] text-gold/70 text-sm mb-2">Email</p>
                  <a href="mailto:hello@bellarinatheinfluencer.com" 
                     className="text-2xl hover:text-gold transition-colors">
                    hello@bellarinatheinfluencer.com
                  </a>
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-gold/70 text-sm mb-2">WhatsApp / Phone</p>
                  <a href="https://wa.me/2348012345678" target="_blank"
                     className="text-2xl hover:text-gold transition-colors">
                    +234 801 234 5678
                  </a>
                </div>

                <div>
                  <p className="uppercase tracking-[3px] text-gold/70 text-sm mb-2">Based In</p>
                  <p className="text-2xl">Lagos, Nigeria</p>
                  <p className="text-cream/60 mt-1">Available Worldwide</p>
                </div>
              </div>

              <div className="flex gap-6 mt-16">
                {/* <a href="#" className="text-4xl hover:text-gold transition-colors"><Instagram /></a>
                <a href="#" className="text-4xl hover:text-gold transition-colors"><Youtube /></a>
                <a href="#" className="text-4xl hover:text-gold transition-colors"><Twitter /></a> */}
              </div>
            </motion.div>

            {/* Right Column - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-cream/10 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl"
            >
              <h3 className="text-3xl heading-font font-semibold mb-8 text-white">Booking Inquiry</h3>
              
              <form className="space-y-8">
                <div>
                  <input 
                    type="text" 
                    placeholder="Brand / Agency / Name" 
                    className="w-full bg-transparent border-b border-white/30 pb-4 text-lg placeholder:text-cream/50 focus:border-gold outline-none transition-colors"
                  />
                </div>

                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-white/30 pb-4 text-lg placeholder:text-cream/50 focus:border-gold outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone / WhatsApp" 
                      className="w-full bg-transparent border-b border-white/30 pb-4 text-lg placeholder:text-cream/50 focus:border-gold outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Preferred Dates" 
                      className="w-full bg-transparent border-b border-white/30 pb-4 text-lg placeholder:text-cream/50 focus:border-gold outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    placeholder="Tell me about your project — campaign type, vision, budget range..." 
                    rows={6}
                    className="w-full bg-transparent border-b border-white/30 pb-4 text-lg placeholder:text-cream/50 focus:border-gold outline-none resize-none transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-6 py-7 bg-gold hover:bg-white text-brown font-semibold text-lg tracking-wider rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  SEND INQUIRY
                </button>
              </form>

              <p className="text-center text-xs text-cream/50 mt-8">
                I usually reply within 24–48 hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

function GalleryItem({ src, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
      onClick={() => window.open(src, '_blank')}
    >
      <img src={src} alt={`Look ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
        <p className="text-sm tracking-widest">CAMPAIGN {String(index + 1).padStart(2, '0')}</p>
      </div>
    </motion.div>
  );
}

export default App;