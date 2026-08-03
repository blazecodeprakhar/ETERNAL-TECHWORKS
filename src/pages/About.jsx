import React from 'react';
import { Award, Shield, Eye, CheckCircle, TrendingUp, Users, Compass, HelpCircle } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const milestones = [
    { year: '2021–2024 (3 Years)', title: 'Starting out with established organizations', desc: 'Working closely with leading insulation and roofing suppliers to understand panel standards, quality metrics, and contractor needs.' },
    { year: '2024–2025 (1 Year)', title: 'Freelance & Supply Chain Development', desc: 'Developing strong relationships with recognized manufacturers, establishing a direct channel of quality materials, and learning field challenges.' },
    { year: 'Nov 2025–Present', title: 'Trusted Distributor of Recognized MFG', desc: 'Operating Sagar More (Eternal) as a reliable distributor in Maharashtra, supplying PUF/PIR, rockwool, and accessories with installation support.' }
  ];

  return (
    <div className="animate-fade-in bg-neutral-50 text-neutral-800">
      
      {/* HEADER HERO */}
      <section className="bg-white border-b border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Who We Are</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Our Growth &amp; Distribution Journey</h1>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            With years of combined experience, we supply premium insulation systems sourced from recognized manufacturing brands.
          </p>
        </div>
      </section>

      {/* CORE DETAILS ROW */}
      <ScrollReveal duration={950}>
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Graphics Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-1.5 bg-white border border-neutral-200 rounded-3xl shadow-md overflow-hidden">
                <ImagePlaceholder category="prefab" title="Prefab PUF Construction" height="h-80" />
              </div>
            </div>

            {/* Text Details Right */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full uppercase inline-block">
                  Company Profile
                </span>
                <h2 className="text-3xl font-extrabold text-neutral-900 leading-tight">
                  Empowering Modular Construction &amp; Multi-Insulation Systems
                </h2>
                <div className="h-1.5 w-16 bg-primary-600 rounded-full" />
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4 py-1.5 bg-neutral-105/50 rounded-r-2xl pr-4">
                  <p className="text-xs font-normal text-neutral-850 italic leading-relaxed">
                    "With a solid foundation in industrial supply and insulation systems, our team knows that clients need more than just generic panels. You require certified products with verified thermal properties and reliable project support."
                  </p>
                </div>
                
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  To support this, we have established a trusted distribution chain in Maharashtra. Rather than acting as a manufacturer, we source high-quality sandwich panels (PUF/PIR, rockwool) and insulation sheets from recognized, quality-compliant manufacturing brands.
                </p>

                {/* Grid of Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 border border-neutral-200/85 rounded-2xl shadow-xs">
                    <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 font-sans">Recognized Brand Supply</h4>
                      <p className="text-[10px] text-neutral-500 font-light mt-0.5">Sandwich panels (PUF/PIR, Rockwool) sourced from certified manufacturers.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 border border-neutral-200/85 rounded-2xl shadow-xs">
                    <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 font-sans">Maharashtra Distribution</h4>
                      <p className="text-[10px] text-neutral-500 font-light mt-0.5">Efficient logistics structure for timely site delivery across the state.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 border border-neutral-200/85 rounded-2xl shadow-xs">
                    <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 font-sans">Installation Support</h4>
                      <p className="text-[10px] text-neutral-500 font-light mt-0.5">Professional associate erection teams for high-quality site installation.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-neutral-50 border border-neutral-200/85 rounded-2xl shadow-xs">
                    <CheckCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 font-sans">Clear Communication</h4>
                      <p className="text-[10px] text-neutral-500 font-light mt-0.5">Hassle-free estimation process with Sagar More and prompt project responses.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* MISSION, VISION & OPERATIONAL BELIEFS */}
      <ScrollReveal duration={950} delay={50}>
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mission Card */}
            <div className="p-6 bg-white border border-neutral-200 rounded-3xl shadow-sm space-y-4 hover:shadow-lg hover:-translate-y-1 hover:scale-102 hover:border-primary-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-neutral-900">Our Mission</h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-light">
                  To establish Sagar More (Eternal) as the most reliable distributor in Maharashtra for insulation and acoustic needs, focused on on-time delivery, premium support, and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-6 bg-white border border-neutral-200 rounded-3xl shadow-sm space-y-4 hover:shadow-lg hover:-translate-y-1 hover:scale-102 hover:border-primary-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-neutral-900">Our Vision</h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-light">
                  To be the preferred supply chain partner for clean room panels, site office prefab cabins, and high-performance industrial cladding sheets across the region.
                </p>
              </div>
            </div>

            {/* Operational Beliefs Card */}
            <div className="p-6 bg-white border border-neutral-200 rounded-3xl shadow-sm space-y-4 hover:shadow-lg hover:-translate-y-1 hover:scale-102 hover:border-primary-500/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-neutral-900">Operational Beliefs</h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-light">
                  We focus on safety, environment, and transparency, ensuring our clients receive exactly what is printed on the technical spec sheet of our recognized manufacturers.
                </p>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* HISTORICAL TIMELINE */}
      <ScrollReveal duration={950} delay={50}>
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-200/60">
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Evolution Timeline</span>
            <h2 className="text-3xl font-extrabold text-neutral-900">Our Path of Progress</h2>
            <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light">
              How we evolved over the years, leveraging industry experience to build a premium distribution business.
            </p>
          </div>

          <div className="relative border-l-2 border-neutral-200 ml-4 md:ml-32 space-y-12 py-4">
            {milestones.map((stone, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[140px] top-1 hidden md:block w-28 text-right text-xs font-mono font-bold text-primary-600 uppercase tracking-widest">
                  {stone.year}
                </div>
                
                {/* Bullet Node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary-600 group-hover:bg-primary-500 transition-colors" />
                
                <div className="space-y-1 max-w-2xl">
                  <span className="inline-block md:hidden text-[10px] font-mono font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2 py-0.5 rounded-md mb-1">
                    {stone.year}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                    {stone.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-light">
                    {stone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
};

export default About;
