import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceHighlights from './components/ExperienceHighlights';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-deep-black selection:bg-gold selection:text-black">
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <ExperienceHighlights />
          
          {/* Signature Quote Section */}
          <section className="py-48 px-6 text-center bg-deep-black">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-12">
                "The chair was never just a chair. It’s where <span className="text-gold">confidence is crafted</span>."
              </h2>
              <div className="w-24 h-px bg-gold mx-auto" />
            </div>
          </section>

          <ServicesSection />

          {/* Team / Barbers Preview */}
          <section className="py-32 bg-deep-black">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div className="space-y-4">
                  <span className="text-gold font-mono text-sm tracking-widest">OUR ARTISANS</span>
                  <h2 className="text-5xl md:text-7xl font-bold">The Masters.</h2>
                </div>
                <p className="text-white/40 max-w-sm mb-2">
                  Our team of expert barbers and therapists are dedicated to the art of grooming and wellness.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-charcoal">
                    <img 
                      src={`https://images.unsplash.com/photo-1512690196252-741d2fd36ad0?q=80&w=2070&auto=format&fit=crop&sig=${i}`}
                      alt="Barber"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-8 left-8">
                      <h4 className="text-2xl font-bold">Master Artisan</h4>
                      <p className="text-gold text-sm uppercase tracking-widest">Senior Barber</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-48 bg-gold text-black text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-5xl md:text-8xl font-bold leading-none mb-12">
                READY TO <br /> ELEVATE?
              </h2>
              <a 
                href="tel:+254706710739" 
                className="bg-black text-white px-12 py-6 text-sm font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 interactive inline-block"
              >
                Book Your Session
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
