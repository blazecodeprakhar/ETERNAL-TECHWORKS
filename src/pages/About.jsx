import React from 'react';
import { Award, Shield, Eye, CheckCircle, TrendingUp, Users, Compass } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const About = () => {
  const coreValues = [
    { title: 'Customer Centricity', desc: 'Born from our 20-year legacy of responding directly to customer demands and technical pain points.', icon: Users },
    { title: 'Quality Conformance', desc: 'Products manufactured precisely to national IS-12436 and international engineering standard benchmarks.', icon: Shield },
    { title: 'Eco-Friendly Focus', desc: 'Utilizing blowing agents that are completely CFC and HCFC-free, protecting the ozone layer.', icon: Compass },
    { title: 'Engineering Integrity', desc: 'Delivering full load-span analysis, wind load calculations, and CAD support for complex site erections.', icon: Award }
  ];

  const milestones = [
    { year: '25+ Years Legacy', title: 'Deep Industry Roots', desc: 'Our leadership team began operating in the industrial panel trading and insulation service market, developing invaluable project expertise.' },
    { year: 'Traders to Experts', title: 'Identifying Customer Gaps', desc: 'Over a decade of trading allowed us to study customer feedback, panel structural flaws, and transport logistics in detail.' },
    { year: 'Manufacturing Transition', title: 'Setting Up Continuous Lines', desc: 'Driven to offer superior quality, we established our own advanced continuous profile line manufacturing facility in Pune.' },
    { year: 'Global Footprint', title: 'National & Global Supply', desc: 'Today, Eternal Techworks serves a growing portfolio of contractors, architects, and cold room installers globally.' }
  ];

  return (
    <div className="animate-fadeIn bg-neutral-50 text-neutral-800">
      
      {/* HEADER HERO */}
      <section className="bg-white border-b border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Who We Are</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Our Growth &amp; Manufacturing Journey</h1>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            With a combined 20 years of experience, we have evolved from top industrial panel traders into quality-certified manufacturers, helping construct durable thermal barriers.
          </p>
        </div>
      </section>

      {/* CORE DETAILS ROW */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Graphics Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-1.5 bg-white border border-neutral-200 rounded-3xl shadow-md overflow-hidden">
              <ImagePlaceholder category="prefab" title="Advanced Manufacturing Unit" height="h-80" />
            </div>
            
            <div className="bg-white border border-neutral-200/85 p-6 rounded-2xl flex items-center space-x-4 shadow-sm">
              <div className="p-3 bg-primary-50 rounded-xl text-primary-600 border border-primary-100 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">Direct In-House Controls</h4>
                <p className="text-xs text-neutral-500 mt-1 font-light leading-relaxed">
                  Moving from trading to direct manufacturing gives us absolute authority over density testing, steel thicknesses, and profile roll accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Text Details Right */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Company Profile</span>
              <h2 className="text-3xl font-extrabold text-neutral-900 leading-tight">
                Empowering Modular Construction &amp; Cold Chain Logistics
              </h2>
            </div>
            
            <div className="space-y-4 text-sm text-neutral-600 font-light leading-relaxed">
              <p>
                Our leadership team has led the panel engineering industry for over a decade. Throughout our journey, we realized that industrial clients need more than just commodity sheets—they require certified thermal parameters, load guarantees, and customized corner accessories.
              </p>
              <p>
                By establishing our specialized manufacturing facility in Pune, Maharashtra, we bridge the gap between architectural concept and field durability. We utilize premium pre-painted steel sheets (PPGI, PPGL) and advanced polyurethane blending agents to guarantee high fire retardancy (PIR) and zero insulation voids.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white border border-neutral-200 rounded-2xl shadow-xs space-y-3">
                <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900">Our Mission</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  To supply eco-friendly, certified insulated sandwich panels that lower ambient temperature coefficients and structural weight.
                </p>
              </div>

              <div className="p-6 bg-white border border-neutral-200 rounded-2xl shadow-xs space-y-3">
                <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                  <Eye className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900">Our Vision</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  To be the preferred global partner for clean room setups, site office prefab cabins, and high-performance industrial cladding.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-neutral-100 border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Operational Beliefs</span>
            <h2 className="text-3xl font-extrabold text-neutral-900">Our Corporate Core Values</h2>
            <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light">
              We focus on safety, environment, and transparency, ensuring our clients receive exactly what is printed on the technical spec sheet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-xs space-y-4 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900">{val.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORICAL TIMELINE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Evolution Timeline</span>
          <h2 className="text-3xl font-extrabold text-neutral-900">Our Path of Progress</h2>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light">
            How we evolved over the years, leveraging two decades of trading expertise to build a premium manufacturing business.
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

    </div>
  );
};

export default About;
