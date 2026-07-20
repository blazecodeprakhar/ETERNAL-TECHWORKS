import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Flame, Building, Wrench, Settings, ArrowRight, Award, Zap, Thermometer, CheckCircle, Layers } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const Home = () => {
  const [exploded, setExploded] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState(null);

  const layers = [
    {
      id: 'top',
      name: 'Top Metal Profile Sheet',
      desc: 'High-tensile prepainted galvanized steel (PPGI) or galvalume (PPGL) sheets with a 35mm trapezoidal rib profile for superior water run-off and structural load bearing.',
      specs: { Material: 'PPGI / PPGL / GI Steel', Thickness: '0.45 mm – 0.80 mm', Coating: 'AZ150 / Zinc 120 GSM', Colors: 'RAL 5012 Light Blue, RAL 9002 Grey White, etc.' }
    },
    {
      id: 'core',
      name: 'Rigid PUF / PIR Core',
      desc: 'High-density rigid Polyurethane Foam (PUR) or Polyisocyanurate (PIR) injected at high pressure, providing outstanding thermal sealing, acoustic isolation, and structural rigidity.',
      specs: { Density: '40 ± 2 kg/m³', 'K-Value': '0.023 W/m·K', 'Cell Structure': '90–95% Closed Cell', Standards: 'IS-12436 compliant, CFC & HCFC Free' }
    },
    {
      id: 'bottom',
      name: 'Bottom Metal Profile Sheet',
      desc: 'Linear micro-ribbed or plain steel lining designed for clean appearance, high resistance to internal humidity, and secure ceiling/wall mounting interface.',
      specs: { Material: 'PPGI / PPGL / Aluminum', Thickness: '0.40 mm – 0.60 mm', Profile: 'Micro-ribbed / Plain / Liner', Color: 'RAL 9002 (Standard Light Grey)' }
    }
  ];

  return (
    <div className="animate-fadeIn bg-neutral-50 text-neutral-800">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary-50/20 to-neutral-50 border-b border-neutral-200/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white border border-neutral-200 shadow-xs rounded-full px-4 py-1.5 text-xs text-primary-600 font-bold">
              <Award className="w-4 h-4 text-primary-500" />
              <span>ISO 9001:2015 &amp; IS-12436 Certified Manufacturing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Premium PUF/PIR <br />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
                Sandwich Panels
              </span>
            </h1>
            
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              We design, manufacture, and install high-density thermal insulated panel sheets, specialized rockwool solutions, and custom portable site cabins. Engineered for thermal efficiency, safety, and ultimate longevity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/products" 
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-primary-500/10 hover:shadow-primary-500/20 text-center hover:-translate-y-0.5"
              >
                View Catalog
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center shadow-xs"
              >
                Get a Quote
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="block text-3xl font-extrabold text-neutral-900">20+</span>
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-primary-600">40+</span>
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Kg/m³ Density</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-neutral-900">0.023</span>
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Thermal K-Value</span>
              </div>
            </div>
          </div>

          {/* Interactive PUF Panel Explode-Viewer */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0 animate-fadeIn">
            <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header Info */}
              <div className="w-full flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">PUF Sandwich Panel Explode-Viewer</h3>
                  <p className="text-[11px] text-neutral-500 font-light">Interactive engineering assembly view</p>
                </div>
                <button
                  onClick={() => setExploded(!exploded)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                    exploded 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {exploded ? 'Collapse Model' : 'Explode Layers'}
                </button>
              </div>

              {/* Interactive Area */}
              <div className="relative w-full h-[400px] flex items-center justify-center bg-radial from-neutral-50 to-white rounded-2xl border border-neutral-150 shadow-inner overflow-hidden select-none">
                
                {/* SVG 3D Isometric stack */}
                <svg viewBox="0 0 500 350" className="w-full max-w-[440px] h-auto z-10 transition-all duration-500">
                  <defs>
                    <linearGradient id="topSkinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="topSkinSideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="coreFoamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fefcf0" />
                      <stop offset="100%" stopColor="#fef08a" />
                    </linearGradient>
                    <linearGradient id="coreFoamSideLGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="100%" stopColor="#fde047" />
                    </linearGradient>
                    <linearGradient id="coreFoamSideRGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fde047" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                    <linearGradient id="bottomSkinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="bottomSkinSideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComponentTransfer in="blur" result="glow">
                        <feFuncA type="linear" slope="0.75" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Connection Lines (Desktop only) */}
                  <g className="hidden lg:block">
                    {/* Top connection line */}
                    <path 
                      d={`M 210,${175 + (exploded ? -65 : 0)} L 140,${175 + (exploded ? -65 : 0)} L 100,70 L 35,70`} 
                      className={`stroke-2 fill-none transition-all duration-500 ${selectedLayer?.id === 'top' ? 'stroke-primary-500' : 'stroke-neutral-300 stroke-dasharray-[3,3]'}`}
                    />
                    <circle cx="210" cy={175 + (exploded ? -65 : 0)} r="4" className={`transition-all duration-500 ${selectedLayer?.id === 'top' ? 'fill-primary-500' : 'fill-neutral-400'}`} />

                    {/* Core connection line */}
                    <path 
                      d="M 290,225 L 350,225 L 390,180 L 455,180" 
                      className={`stroke-2 fill-none transition-all duration-500 ${selectedLayer?.id === 'core' ? 'stroke-amber-500' : 'stroke-neutral-300 stroke-dasharray-[3,3]'}`}
                    />
                    <circle cx="290" cy="225" r="4" className={selectedLayer?.id === 'core' ? 'fill-amber-500' : 'fill-neutral-400'} />

                    {/* Bottom connection line */}
                    <path 
                      d={`M 210,${225 + (exploded ? 65 : 0)} L 140,${225 + (exploded ? 65 : 0)} L 100,290 L 35,290`} 
                      className={`stroke-2 fill-none transition-all duration-500 ${selectedLayer?.id === 'bottom' ? 'stroke-primary-600' : 'stroke-neutral-300 stroke-dasharray-[3,3]'}`}
                    />
                    <circle cx="210" cy={225 + (exploded ? 65 : 0)} r="4" className={`transition-all duration-500 ${selectedLayer?.id === 'bottom' ? 'fill-primary-600' : 'fill-neutral-400'}`} />
                  </g>

                  {/* 3D Bottom Sheet Layer */}
                  <g 
                    onClick={() => setSelectedLayer(layers[2])} 
                    className="cursor-pointer"
                    filter={selectedLayer?.id === 'bottom' ? 'url(#glowFilter)' : ''}
                  >
                    {/* Top face */}
                    <polygon 
                      points={`250,${150 + (exploded ? 65 : 0)} 370,${200 + (exploded ? 65 : 0)} 250,${250 + (exploded ? 65 : 0)} 130,${200 + (exploded ? 65 : 0)}`} 
                      fill="url(#bottomSkinGradient)"
                      className="transition-all duration-500"
                    />
                    {/* Micro-rib markings */}
                    <line x1="160" y1={185 + (exploded ? 65 : 0)} x2="280" y2={235 + (exploded ? 65 : 0)} stroke="white" strokeWidth="1" strokeOpacity="0.4" className="transition-all duration-500" />
                    <line x1="190" y1={175 + (exploded ? 65 : 0)} x2="310" y2={225 + (exploded ? 65 : 0)} stroke="white" strokeWidth="1" strokeOpacity="0.4" className="transition-all duration-500" />
                    <line x1="220" y1={165 + (exploded ? 65 : 0)} x2="340" y2={215 + (exploded ? 65 : 0)} stroke="white" strokeWidth="1" strokeOpacity="0.4" className="transition-all duration-500" />
                    {/* Front-left face */}
                    <polygon 
                      points={`130,${200 + (exploded ? 65 : 0)} 250,${250 + (exploded ? 65 : 0)} 250,${256 + (exploded ? 65 : 0)} 130,${206 + (exploded ? 65 : 0)}`} 
                      fill="url(#bottomSkinSideGradient)"
                      className="transition-all duration-500"
                    />
                    {/* Front-right face */}
                    <polygon 
                      points={`250,${250 + (exploded ? 65 : 0)} 370,${200 + (exploded ? 65 : 0)} 370,${206 + (exploded ? 65 : 0)} 250,${256 + (exploded ? 65 : 0)}`} 
                      fill="url(#bottomSkinSideGradient)"
                      className="transition-all duration-500"
                    />
                  </g>

                  {/* 3D Core Foam Layer */}
                  <g 
                    onClick={() => setSelectedLayer(layers[1])} 
                    className="cursor-pointer"
                    filter={selectedLayer?.id === 'core' ? 'url(#glowFilter)' : ''}
                  >
                    {/* Top face */}
                    <polygon 
                      points="250,100 370,150 250,200 130,150" 
                      fill="url(#coreFoamGradient)"
                    />
                    {/* Front-left face */}
                    <polygon 
                      points="130,150 250,200 250,250 130,200" 
                      fill="url(#coreFoamSideLGradient)"
                    />
                    {/* Front-right face */}
                    <polygon 
                      points="250,200 370,150 370,200 250,250" 
                      fill="url(#coreFoamSideRGradient)"
                    />
                  </g>

                  {/* 3D Top Metal Sheet Layer */}
                  <g 
                    onClick={() => setSelectedLayer(layers[0])} 
                    className="cursor-pointer"
                    filter={selectedLayer?.id === 'top' ? 'url(#glowFilter)' : ''}
                  >
                    {/* Top face */}
                    <polygon 
                      points={`250,${94 + (exploded ? -65 : 0)} 370,${144 + (exploded ? -65 : 0)} 250,${194 + (exploded ? -65 : 0)} 130,${144 + (exploded ? -65 : 0)}`} 
                      fill="url(#topSkinGradient)"
                      className="transition-all duration-500"
                    />
                    {/* Trapezoidal Raised Rib 1 */}
                    <polygon 
                      points={`154,${134 + (exploded ? -65 : 0)} 166,${129 + (exploded ? -65 : 0)} 286,${179 + (exploded ? -65 : 0)} 274,${184 + (exploded ? -65 : 0)}`} 
                      fill="#0284c7"
                      className="transition-all duration-500"
                    />
                    <polygon 
                      points={`154,${134 + (exploded ? -65 : 0)} 274,${184 + (exploded ? -65 : 0)} 274,${188 + (exploded ? -65 : 0)} 154,${138 + (exploded ? -65 : 0)}`} 
                      fill="#0369a1"
                      className="transition-all duration-500"
                    />
                    <polygon 
                      points={`274,${184 + (exploded ? -65 : 0)} 286,${179 + (exploded ? -65 : 0)} 286,${183 + (exploded ? -65 : 0)} 274,${188 + (exploded ? -65 : 0)}`} 
                      fill="#075985"
                      className="transition-all duration-500"
                    />

                    {/* Trapezoidal Raised Rib 2 */}
                    <polygon 
                      points={`190,${119 + (exploded ? -65 : 0)} 202,${114 + (exploded ? -65 : 0)} 322,${164 + (exploded ? -65 : 0)} 310,${169 + (exploded ? -65 : 0)}`} 
                      fill="#0284c7"
                      className="transition-all duration-500"
                    />
                    <polygon 
                      points={`190,${119 + (exploded ? -65 : 0)} 310,${169 + (exploded ? -65 : 0)} 310,${173 + (exploded ? -65 : 0)} 190,${123 + (exploded ? -65 : 0)}`} 
                      fill="#0369a1"
                      className="transition-all duration-500"
                    />
                    <polygon 
                      points={`310,${169 + (exploded ? -65 : 0)} 322,${164 + (exploded ? -65 : 0)} 322,${168 + (exploded ? -65 : 0)} 310,${173 + (exploded ? -65 : 0)}`} 
                      fill="#075985"
                      className="transition-all duration-500"
                    />

                    {/* Trapezoidal Raised Rib 3 */}
                    <polygon 
                      points={`226,${104 + (exploded ? -65 : 0)} 238,${99 + (exploded ? -65 : 0)} 358,${149 + (exploded ? -65 : 0)} 346,${154 + (exploded ? -65 : 0)}`} 
                      fill="#0284c7"
                      className="transition-all duration-500"
                    />
                    <polygon 
                      points={`226,${104 + (exploded ? -65 : 0)} 346,${154 + (exploded ? -65 : 0)} 346,${158 + (exploded ? -65 : 0)} 226,${108 + (exploded ? -65 : 0)}`} 
                      fill="#0369a1"
                      className="transition-all duration-500"
                    />
                    <polygon 
                      points={`346,${154 + (exploded ? -65 : 0)} 358,${149 + (exploded ? -65 : 0)} 358,${153 + (exploded ? -65 : 0)} 346,${158 + (exploded ? -65 : 0)}`} 
                      fill="#075985"
                      className="transition-all duration-500"
                    />

                    {/* Front-left face */}
                    <polygon 
                      points={`130,${144 + (exploded ? -65 : 0)} 250,${194 + (exploded ? -65 : 0)} 250,${200 + (exploded ? -65 : 0)} 130,${150 + (exploded ? -65 : 0)}`} 
                      fill="url(#topSkinSideGradient)"
                      className="transition-all duration-500"
                    />
                    {/* Front-right face */}
                    <polygon 
                      points={`250,${194 + (exploded ? -65 : 0)} 370,${144 + (exploded ? -65 : 0)} 370,${150 + (exploded ? -65 : 0)} 250,${200 + (exploded ? -65 : 0)}`} 
                      fill="url(#topSkinSideGradient)"
                      className="transition-all duration-500"
                    />
                  </g>
                </svg>

                {/* Floating Callouts (Desktop only) */}
                {/* 1. Top Sheet */}
                <div 
                  onClick={() => setSelectedLayer(layers[0])}
                  className={`hidden lg:flex flex-col absolute top-[10%] left-[2%] w-44 bg-white/95 border p-2.5 rounded-xl shadow-xs cursor-pointer transition-all duration-300 hover:-translate-y-0.5 z-20 ${
                    selectedLayer?.id === 'top' 
                      ? 'border-primary-500 ring-2 ring-primary-500/10 shadow-md' 
                      : 'border-neutral-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="text-[10px] text-primary-600 font-bold uppercase tracking-wider mb-0.5">① Outer Skin</span>
                  <span className="text-[11px] font-bold text-neutral-900 leading-tight">Top Profile Sheet</span>
                  <span className="text-[9px] text-neutral-500 mt-1 font-mono">0.5mm PPGI Corrugations</span>
                </div>

                {/* 2. Core Foam */}
                <div 
                  onClick={() => setSelectedLayer(layers[1])}
                  className={`hidden lg:flex flex-col absolute top-[40%] right-[2%] w-44 bg-white/95 border p-2.5 rounded-xl shadow-xs cursor-pointer transition-all duration-300 hover:-translate-y-0.5 z-20 ${
                    selectedLayer?.id === 'core' 
                      ? 'border-amber-500 ring-2 ring-amber-500/10 shadow-md' 
                      : 'border-neutral-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider mb-0.5">② Thermal Core</span>
                  <span className="text-[11px] font-bold text-neutral-900 leading-tight">Polyurethane / PIR</span>
                  <span className="text-[9px] text-neutral-500 mt-1 font-mono">40 kg/m³ High Density</span>
                </div>

                {/* 3. Bottom Sheet */}
                <div 
                  onClick={() => setSelectedLayer(layers[2])}
                  className={`hidden lg:flex flex-col absolute bottom-[10%] left-[2%] w-44 bg-white/95 border p-2.5 rounded-xl shadow-xs cursor-pointer transition-all duration-300 hover:-translate-y-0.5 z-20 ${
                    selectedLayer?.id === 'bottom' 
                      ? 'border-neutral-450 ring-2 ring-neutral-400/10 shadow-md' 
                      : 'border-neutral-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-wider mb-0.5">③ Inner Skin</span>
                  <span className="text-[11px] font-bold text-neutral-900 leading-tight">Bottom Profile Liner</span>
                  <span className="text-[9px] text-neutral-500 mt-1 font-mono">0.4mm Micro-ribbed</span>
                </div>

              </div>

              {/* Mobile Stacking Selector Grid (Mobile/Tablet only) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:hidden mt-4">
                {layers.map((layer, idx) => (
                  <div
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer)}
                    className={`p-3 bg-neutral-50 border rounded-xl cursor-pointer transition-all flex flex-col justify-center text-center ${
                      selectedLayer?.id === layer.id 
                        ? 'border-primary-500 bg-primary-50/20' 
                        : 'border-neutral-200'
                    }`}
                  >
                    <span className="text-[10px] text-primary-600 font-bold uppercase tracking-wider">
                      {idx === 0 ? '① Outer Skin' : idx === 1 ? '② Thermal Core' : '③ Inner Skin'}
                    </span>
                    <span className="text-xs font-bold text-neutral-900 mt-0.5">{layer.name}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic Detail Overlay */}
              <div className="w-full mt-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 min-h-[140px] flex flex-col justify-between">
                {selectedLayer ? (
                  <div className="space-y-2 animate-scaleUp">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-neutral-950 uppercase tracking-wider">{selectedLayer.name}</h4>
                      <button 
                        onClick={() => setSelectedLayer(null)}
                        className="text-[10px] text-neutral-400 hover:text-neutral-900"
                      >
                        Clear Selection
                      </button>
                    </div>
                    <p className="text-[11px] text-neutral-600 leading-relaxed font-light">{selectedLayer.desc}</p>
                    <div className="grid grid-cols-1 gap-1.5 pt-2 text-[10px] font-mono border-t border-neutral-200">
                      {Object.entries(selectedLayer.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-neutral-450">{key}:</span>
                          <span className="text-neutral-700 font-semibold text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full my-auto text-neutral-400 space-y-2">
                    <Layers className="w-6 h-6 text-neutral-300" />
                    <p className="text-xs leading-normal">
                      Select any layer from the diagram above or floating cards to inspect its specific zinc thickness, foam core attributes, and density calculations.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Core Expertise</span>
          <h2 className="text-3xl font-extrabold text-neutral-950">Industrial Solutions Portfolio</h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto font-light">
            We operate modern structural fabrication and panel assembly yards, delivering consistent insulation specs across Pune and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Insulation Solutions',
              desc: 'Thermal & Acoustic panel insulation boards, PUR, PIR, Rockwool cores, and radiant heat foils.',
              icon: Thermometer,
              link: '/products'
            },
            {
              title: 'Custom Prefab Cabins',
              desc: 'Custom security cabins, modular site control rooms, shelter offices, and container offices.',
              icon: Building,
              link: '/services'
            },
            {
              title: 'Installation Services',
              desc: 'Professional panel mounting, double overlapping overlaps, leakproof joint erection, and support purlins.',
              icon: Wrench,
              link: '/services'
            },
            {
              title: 'Structural Steel Fabrication',
              desc: 'Heavy industrial frame beams, load bearing trusses, framework designs, and roof supports.',
              icon: Settings,
              link: '/services'
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-primary-500/20">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">{pillar.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
              <Link 
                to={pillar.link} 
                className="mt-6 inline-flex items-center text-xs font-bold text-primary-600 hover:text-primary-500 space-x-1"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK SHOWCASE SECTION WITH PLACEHOLDERS */}
      <section className="py-20 bg-neutral-100 border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Quality Compliant</span>
              <h2 className="text-3xl font-extrabold text-neutral-900 leading-tight">Advanced Manufacturing Facility in Pune</h2>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Our plant utilizes advanced continuous line profiling equipment, maintaining uniform core densities of 40-45 kg/m³ for PUF/PIR and 100 kg/m³ for Rockwool. Every batch complies with national IS-12436 insulation standard metrics.
              </p>
              
              <ul className="space-y-3 text-xs font-semibold text-neutral-700">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>100% CFC and HCFC-free raw chemicals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Certified Fire Retardant PIR options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Custom panel lengths up to 15 meters</span>
                </li>
              </ul>

              <Link 
                to="/about" 
                className="inline-flex bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-md shadow-primary-500/10 hover:shadow-primary-500/20"
              >
                About Our Growth Journey
              </Link>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ImagePlaceholder category="puf" title="Insulated PUF Roof Panels" height="h-56" />
              <ImagePlaceholder category="rockwool" title="Fireproof Mineral Wool Panels" height="h-56" />
              <ImagePlaceholder category="prefab" title="Prefab Cabin Structures" height="h-56" />
              <ImagePlaceholder category="accessories" title="General Trim Accessories" height="h-56" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA HUB */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-neutral-200/80 rounded-3xl my-16 shadow-xs relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.05),transparent_70%)]" />
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-neutral-900">Need Custom Technical Designs?</h2>
          <p className="text-xs text-neutral-600 font-light leading-relaxed">
            Our structural engineering desk in Kharadi, Pune provides full CAD structural drawings, calculation metrics, and specific load-span tables customized exactly to your architectural scope.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              Contact Our Sales Desk
            </Link>
            <Link 
              to="/technical" 
              className="w-full sm:w-auto bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all border border-neutral-300"
            >
              Compare Core Properties
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
