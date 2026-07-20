import React from 'react';
import { Wrench, Building2, Layers, Settings, ChevronRight, CheckCircle } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Services = () => {
  const servicesList = [
    {
      title: 'Prefab Cabin & Room Manufacturing',
      desc: 'We construct custom-sized prefabricated security outposts, modular office spaces, project staff bunkhouses, and control cabins. Engineered with durable lightweight steel framing and insulated sandwich panel walls.',
      icon: Building2,
      features: ['Custom shapes & layouts', 'Complete power wiring setup', 'Ready-to-use plug-and-play assembly', 'High wind resistance structural framing']
    },
    {
      title: 'PUF Panel Erection & Joint Isolation',
      desc: 'Our erection teams construct cold storage chambers, food processing corridors, and clean room partitions. Utilizing double-overlap interlocking joints and food-grade silicone seals to prevent thermal leaks.',
      icon: Wrench,
      features: ['Food-grade clean rooms', 'Low temperature walk-in freezers', 'Hermetically sealed overlaps', 'Rapid scheduling site timelines']
    },
    {
      title: 'Heavy Structural Steel Fabrication',
      desc: 'We design and fabricate heavy steel support columns, industrial roof trusses, structural channels, and purlin frameworks. Essential for carrying large roof panel assemblies securely.',
      icon: Settings,
      features: ['CAD calculation support', 'High grade welding standards', 'Anti-corrosion primer coating', 'Heavy-load capacity steel grades']
    }
  ];

  const sectors = [
    { name: 'Industrial Warehousing', info: 'Large span roofing & anti-leak wall panels' },
    { name: 'Cold Storages & Chillers', info: 'Low temperature thermal sealing locks' },
    { name: 'Clean Room Installations', info: 'Hygiene-compliant pharmaceutical environments' },
    { name: 'Site Infrastructure Offices', info: 'High-strength portable cabins & shelters' },
    { name: 'Food Processing Units', info: 'Sanitary joint coving insulation' },
    { name: 'Commercial Roofing', info: 'Trapezoidal metal sheets & flashing trims' }
  ];

  return (
    <div className="animate-fade-in bg-neutral-50 text-neutral-800">
      
      {/* PAGE HEADER */}
      <section className="bg-white border-b border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Erection &amp; Supply</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Turnkey Erection &amp; Fabrication</h1>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            We provide full-service support: from continuous line panel supply to structural frames and modular office cabin designs.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {servicesList.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:border-primary-500/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Text Side (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                    <srv.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-extrabold text-neutral-900">{srv.title}</h2>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed font-light">{srv.desc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-neutral-750">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic Side (5 cols) */}
              <div className="lg:col-span-5">
                <ImagePlaceholder category="services" title={srv.title} height="h-60" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTOR GRID */}
      <section className="py-16 bg-neutral-105 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Sectors We Support</span>
            <h2 className="text-3xl font-extrabold text-neutral-900">Industries Served</h2>
            <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light">
              Providing thermal safety and structural reliability across diverse commercial fields.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-xs flex justify-between items-center group hover:border-primary-500/20 hover:scale-102 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {sec.name}
                  </h4>
                  <p className="text-[10px] text-neutral-450 mt-1">{sec.info}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
