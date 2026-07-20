import React, { useState } from 'react';
import { Layers, Flame, CheckCircle, FlameKindling, Info, Settings, ShieldAlert, Sparkles } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ScrollReveal from '../components/ScrollReveal';

const Products = () => {
  const [activeTab, setActiveTab] = useState('pur');
  const [selectedThickness, setSelectedThickness] = useState(50);
  const [selectedRockwoolThickness, setSelectedRockwoolThickness] = useState(50);

  // U-Value & R-Value Data for Rockwool ETPL1000
  const rockwoolSpecs = {
    50: { overall: 58, uValue: 0.90, rValue: 1.10, weight: 6.3 },
    80: { overall: 88, uValue: 0.56, rValue: 1.80, weight: 9.0 },
    100: { overall: 138, uValue: 0.45, rValue: 2.20, weight: 11.2 },
    120: { overall: 158, uValue: 0.37, rValue: 2.70, weight: 13.0 },
    150: { overall: 188, uValue: 0.30, rValue: 3.30, weight: 16.0 },
  };

  const productTabs = [
    { id: 'pur', name: 'PUF / PIR Roof Panels', tag: 'High Thermal Protection' },
    { id: 'rockwool', name: 'Rockwool Wall & Roof', tag: 'Fire Resistant & Sound Dampening' },
    { id: 'other', name: 'Insulation Boards & Sheets', tag: 'XPS / EPS / Bubble / Foil' },
    { id: 'accessories', name: 'Accessories & Flashing', tag: 'Suspension, Trim & Covings' }
  ];

  return (
    <div className="animate-fade-in bg-neutral-50 text-neutral-800">
      
      {/* PAGE HEADER */}
      <section className="bg-white border-b border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Product Catalog</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Continuous Line Insulation Systems</h1>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our industrial panels manufactured using high-pressure chemical blending. Features dynamic joint seals and color-matched trims.
          </p>
        </div>
      </section>

      {/* CORE WORKSPACE */}
      <ScrollReveal duration={950}>
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: SELECTORS */}
          <div className="lg:col-span-3 space-y-3">
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white border-primary-500/60 shadow-md ring-1 ring-primary-500/10'
                    : 'bg-white/40 border-neutral-200 hover:border-neutral-300 hover:bg-white text-neutral-600'
                }`}
              >
                <span className={`block font-bold text-sm ${activeTab === tab.id ? 'text-primary-600' : 'text-neutral-900'}`}>{tab.name}</span>
                <span className="block text-[10px] text-neutral-400 font-semibold mt-1 uppercase tracking-wider">{tab.tag}</span>
              </button>
            ))}
          </div>

          {/* RIGHT DETAILED CONTAINER */}
          <div className="lg:col-span-9 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm min-h-[550px] relative">
            
            {/* TAB 1: PUF/PIR ROOF PANELS */}
            {activeTab === 'pur' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Continuous Profiling</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">Roof Insulated Sandwich Panels (PUR/PIR)</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      Our polyurethane (PUR) and polyisocyanurate (PIR) roof panels feature dual-sided galvanized steel skins bound to a rigid foam core. The trapezoidal top ribs and interlocking side joints prevent rainwater leakage and draft ingress, making them ideal for heavy factory roofs, warehouses, and modular structures.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Core Density: 40-45 kg/m³</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Rib height: 35 mm trapezoidal</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Effective Width: 1000 mm</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>CFC/HCFC Free insulation</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="puf" title="PUR/PIR Roof Panel Profile" />
                  </div>
                </div>

                {/* Property Selector */}
                <div className="border-t border-neutral-100 pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">Core Thickness Options</h4>
                      <p className="text-[11px] text-neutral-400 font-light">Select thickness to view target application recommendations.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200">
                      {[30, 40, 50, 60, 80, 100, 120].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedThickness(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                            selectedThickness === t
                              ? 'bg-primary-600 text-white'
                              : 'text-neutral-500 hover:text-neutral-900'
                          }`}
                        >
                          {t}mm
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                    <div className="space-y-1">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Standard Core Foam</span>
                      <span className="block text-sm font-bold text-neutral-800">
                        Polyurethane (PUR / PIR Options)
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Recommended Span</span>
                      <span className="block text-sm font-bold text-neutral-800">
                        {selectedThickness <= 50 ? 'Up to 2.4 meters spacing' : selectedThickness <= 80 ? 'Up to 3.5 meters spacing' : 'Up to 4.5 meters spacing'}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Primary Application</span>
                      <span className="block text-sm font-bold text-primary-600">
                        {selectedThickness <= 50 ? 'Modular Site Shelters' : selectedThickness <= 80 ? 'Factory Cladding & Sheds' : 'Commercial Cold Chambers'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ROCKWOOL FIREPROOF PANELS */}
            {activeTab === 'rockwool' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Safety Grade</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">Rockwool Wall &amp; Roof Claddings</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      Engineered with a non-combustible mineral wool core (100 kg/m³ density) oriented perpendicular to structural sheets. Providing outstanding resistance to high-temperature fire spread and ambient acoustic dampening, making them the standard choice for power plant walls, machinery zones, and high-safety partitions.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-700">
                      <div className="flex items-center space-x-2">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>Class-A1 Non-Combustible</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>100 kg/m³ Core Density</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Sound Absorption Index (NRC)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Tongue &amp; Groove joint lock</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="rockwool" title="Mineral Wool Structural Panel" />
                  </div>
                </div>

                {/* Rockwool Calculator */}
                <div className="border-t border-neutral-100 pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">ETPL1000 Performance calculator</h4>
                      <p className="text-[11px] text-neutral-400 font-light">Select thickness to calculate thermal transmittance (U-Value) and R-Value.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200">
                      {[50, 80, 100, 120, 150].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedRockwoolThickness(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                            selectedRockwoolThickness === t
                              ? 'bg-primary-600 text-white'
                              : 'text-neutral-500 hover:text-neutral-900'
                          }`}
                        >
                          {t}mm
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-200 text-center">
                    <div>
                      <span className="block text-[10px] text-neutral-450 uppercase font-bold">Selected Thickness</span>
                      <span className="block text-lg font-bold text-neutral-800 mt-1">{selectedRockwoolThickness} mm</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-450 uppercase font-bold">U-Value (W/m²K)</span>
                      <span className="block text-lg font-bold text-primary-600 mt-1">
                        {rockwoolSpecs[selectedRockwoolThickness].uValue}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-450 uppercase font-bold">R-Value (m²K/W)</span>
                      <span className="block text-lg font-bold text-primary-600 mt-1">
                        {rockwoolSpecs[selectedRockwoolThickness].rValue}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-neutral-450 uppercase font-bold">Panel Weight (kg/m²)</span>
                      <span className="block text-lg font-bold text-neutral-800 mt-1">
                        {rockwoolSpecs[selectedRockwoolThickness].weight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: OTHER INSULATION */}
            {activeTab === 'other' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-6">
                    <h3 className="text-2xl font-extrabold text-neutral-900">XPS, EPS Boards &amp; Foil Insulation</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-primary-500/20 transition-colors shadow-xs">
                        <h4 className="text-sm font-bold text-neutral-900">Extruded Polystyrene (XPS) boards</h4>
                        <p className="text-xs text-neutral-500 mt-1 font-light leading-relaxed">
                          Closed-cell polystyrene insulation boards designed for commercial roofs, building cavity walls, under-slab insulation, and refrigerated truck body isolation. Extremely high compressive strength and water barrier parameters.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-primary-500/20 transition-colors shadow-xs">
                        <h4 className="text-sm font-bold text-neutral-900">Expanded Polystyrene (EPS) Sheets</h4>
                        <p className="text-xs text-neutral-500 mt-1 font-light leading-relaxed">
                          Cost-effective packaging and wall lining sheets available in light to high densities, suitable for cold storage chamber backing, structural voids, and ceiling panels.
                        </p>
                      </div>

                      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-primary-500/20 transition-colors shadow-xs">
                        <h4 className="text-sm font-bold text-neutral-900">Aluminum Bubble/Foil Insulation</h4>
                        <p className="text-xs text-neutral-500 mt-1 font-light leading-relaxed">
                          Single and double-layer reflective foil insulation sheets. Works by blocking radiant heat transfers under factory metal roofing and ceiling cladding.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="puf" title="Insulation Board Samples" />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: ACCESSORIES & FLASHING */}
            {activeTab === 'accessories' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <h3 className="text-2xl font-extrabold text-neutral-900">General flashing &amp; Coving Components</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      We manufacture general flashing and support components from prepainted galvanized metal (PPGI, PPGL, GI) matching panel face specifications. Component lengths are typically 2,500 mm with steel thicknesses ranging from 0.45 mm up to 0.80 mm.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Roof Trims &amp; Caps</strong>
                        Outer Ridge, Inner Plain Ridge, barge boards, end closures, and eave gutters.
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Clean Room Covings</strong>
                        PVC corner profiles, backing channels, and internal 2D/3D corner adapters.
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Suspension Fixtures</strong>
                        Hanger brackets, ceiling support bars, and heavy-duty structural rod systems.
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Structural Top Hats</strong>
                        Profile channels colored in Green, Silver, Grey, Red, and Blue for purlin mounts.
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="accessories" title="Trim Accessories &amp; Corner Covings" />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </ScrollReveal>

    </div>
  );
};

export default Products;
