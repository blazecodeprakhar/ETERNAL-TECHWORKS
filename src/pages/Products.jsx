import React, { useState } from 'react';
import { Layers, Flame, CheckCircle, FlameKindling, Info, Settings, ShieldAlert, Sparkles, Shield, Compass } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ScrollReveal from '../components/ScrollReveal';

const Products = () => {
  const [activeTab, setActiveTab] = useState('puf-roof');
  const [selectedThickness, setSelectedThickness] = useState(50);
  const [selectedWallThickness, setSelectedWallThickness] = useState(50);
  const [selectedRockwoolThickness, setSelectedRockwoolThickness] = useState(50);

  const productTabs = [
    { id: 'puf-roof', name: 'PUF/PIR Roof Panel', tag: 'High-Tensile Corrugated' },
    { id: 'puf-wall', name: 'PUF/PIR Wall Panel', tag: 'Micro-Ribbed / Clean Room' },
    { id: 'rockwool', name: 'Rockwool Panel', tag: 'Fireproof & Acoustic Cores' },
    { id: 'xps', name: 'XPS Boards (Insuboard)', tag: 'Supreme Petrochem Trademark' },
    { id: 'bubble-sheet', name: 'Aluminium Bubble Sheet', tag: 'Radiant Heat Barriers' },
    { id: 'accessories', name: 'Accessories & Flashing', tag: 'Ridge Caps & Trim' }
  ];

  // Technical performance calculator data for Rockwool
  const rockwoolSpecs = {
    50: { overall: 58, uValue: 0.90, rValue: 1.10, weight: 6.3 },
    80: { overall: 88, uValue: 0.56, rValue: 1.80, weight: 9.0 },
    100: { overall: 138, uValue: 0.45, rValue: 2.20, weight: 11.2 },
    120: { overall: 158, uValue: 0.37, rValue: 2.70, weight: 13.0 },
    150: { overall: 188, uValue: 0.30, rValue: 3.30, weight: 16.0 },
  };

  return (
    <div className="animate-fade-in bg-neutral-50 text-neutral-800">
      
      {/* PAGE HEADER */}
      <section className="bg-white border-b border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Product Catalog</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Formulate &amp; Provide Multi-Insulation Systems</h1>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            We supply high-performance industrial insulation panels, sheets, and accessories sourced from recognized manufacturing brands. Focus on reliable services and timely site delivery support.
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
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-md ring-1 ring-neutral-900'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-white text-neutral-600'
                }`}
              >
                <span className={`block font-bold text-sm ${activeTab === tab.id ? 'text-primary-500' : 'text-neutral-900'}`}>{tab.name}</span>
                <span className="block text-[10px] text-neutral-400 font-semibold mt-1 uppercase tracking-wider">{tab.tag}</span>
              </button>
            ))}
          </div>

          {/* RIGHT DETAILED CONTAINER */}
          <div className="lg:col-span-9 bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm min-h-[550px] relative">
            
            {/* TAB 1: PUF/PIR ROOF PANELS */}
            {activeTab === 'puf-roof' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Roof Insulation</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">PUF/PIR Roof Panel</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      Sourced from recognized manufacturing plants, these roof panels feature dual-sided galvanized steel skins bound to a rigid polyurethane foam core. The trapezoidal top ribs and interlocking side joints prevent rainwater leakage, making them ideal for factory roofs, commercial warehouses, and modular structures.
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
                    <ImagePlaceholder category="puf" title="PUF Roof Panel Profile" />
                  </div>
                </div>

                {/* Property Selector */}
                <div className="border-t border-neutral-100 pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">Thickness Options</h4>
                      <p className="text-[11px] text-neutral-400 font-light">Select thickness to view target application recommendations.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200">
                      {[30, 40, 50, 60, 80, 100, 120].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedThickness(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                            selectedThickness === t
                              ? 'bg-neutral-950 text-white'
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
                      <span className="block text-sm font-bold text-primary-650">
                        {selectedThickness <= 50 ? 'Modular Site Shelters' : selectedThickness <= 80 ? 'Factory Cladding & Sheds' : 'Commercial Chambers'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PUF/PIR WALL PANELS */}
            {activeTab === 'puf-wall' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Wall &amp; Partition</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">PUF/PIR Wall Panel</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      Sourced from recognized suppliers, these panels feature micro-ribbed or plain surface finishes. Tongue-and-groove joint profile locks ensure zero insulation breaks, making them suitable for clean rooms, internal partitioning, security outposts, and insulated modular enclosures.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Core Density: 40-45 kg/m³</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Joint Style: Tongue &amp; Groove</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Effective Width: 1000 mm / 1150 mm</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Surface: Micro-ribbed or Flat</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="puf" title="PUF Wall Panel Profile" />
                  </div>
                </div>

                {/* Property Selector */}
                <div className="border-t border-neutral-100 pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">Core Thickness Options</h4>
                      <p className="text-[11px] text-neutral-400 font-light">Select thickness to view recommendations.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200">
                      {[30, 40, 50, 60, 80, 100, 120].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedWallThickness(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                            selectedWallThickness === t
                              ? 'bg-neutral-950 text-white'
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
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Temperature Capability</span>
                      <span className="block text-sm font-bold text-neutral-800">
                        {selectedWallThickness <= 50 ? 'Ambient temperature range' : selectedWallThickness <= 80 ? 'Chilled spaces (0°C to 10°C)' : 'Low temperature walk-in areas'}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Primary Application</span>
                      <span className="block text-sm font-bold text-primary-655">
                        {selectedWallThickness <= 50 ? 'Office Partition Walls' : selectedWallThickness <= 80 ? 'Food Processing Enclosures' : 'Industrial Walk-in Rooms'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ROCKWOOL FIREPROOF PANELS */}
            {activeTab === 'rockwool' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Safety Grade</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">Rockwool Panel</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      Sourced from recognized manufacturing plants, these panels use a non-combustible mineral wool core (100 kg/m³ density) oriented perpendicular to structural sheets. They provide outstanding resistance to high-temperature fire spread and ambient acoustic dampening, making them the standard choice for generator rooms, high-safety partitions, and furnace enclosures.
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
                        <span>Acoustic Absorption (Soundproof)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Tongue &amp; Groove joint lock</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="rockwool" title="Rockwool Wall Panel" />
                  </div>
                </div>

                {/* Rockwool Calculator */}
                <div className="border-t border-neutral-100 pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900">Performance Metrics</h4>
                      <p className="text-[11px] text-neutral-400 font-light">Select thickness to calculate thermal transmittance (U-Value) and R-Value.</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 bg-neutral-100 p-1.5 rounded-xl border border-neutral-200">
                      {[50, 80, 100, 120, 150].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedRockwoolThickness(t)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                            selectedRockwoolThickness === t
                              ? 'bg-neutral-950 text-white'
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

            {/* TAB 4: XPS BOARDS */}
            {activeTab === 'xps' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Slab &amp; Under-Floor</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">XPS Boards (Insuboard)</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      We supply premium Extruded Polystyrene (XPS) insulation boards. Features an extremely high compressive strength parameters and closed-cell water barrier structure, making them highly effective for under-slab insulation, building cavity walls, roof gardens, and refrigerated truck body backing.
                    </p>
                    <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xl text-[10px] text-neutral-500 font-mono">
                      <strong>Note:</strong> "Insuboard" name is borrowed from/is a registered trademark of Supreme Petrochem Ltd.
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Compressive Strength: &ge; 250 kPa</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Water Absorption: &le; 1%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Density: 32-35 kg/m³</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Thickness: 25mm to 100mm</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="puf" title="XPS Insuboard Insulation" />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: ALUMINIUM BUBBLE SHEET */}
            {activeTab === 'bubble-sheet' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Radiant Barrier</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">Aluminium Bubble Sheet</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      Composed of low-density polyethylene air bubble cells laminated with high-quality reflective aluminium foil on both sides. Effectively blocks radiant heat transfer, serving as an economical and highly efficient insulation underlayment for factory shed metal roofs, poultry structures, and residential ceilings.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-neutral-700">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Reflectivity: 95% - 97%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Foil Purity: 99.5% Pure Aluminium</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Structure: Single/Double Bubble options</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                        <span>Corrosion resistant surface</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="puf" title="Aluminium Radiant Heat Sheet" />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: ACCESSORIES & FLASHING */}
            {activeTab === 'accessories' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-md">Finishing Items</span>
                    <h3 className="text-2xl font-extrabold text-neutral-900">Accessories &amp; Flashing</h3>
                    <p className="text-neutral-500 font-light text-xs leading-relaxed">
                      We supply prepainted galvanized metal (PPGI, PPGL, GI) flashing and installation support accessories matching panel face attributes. Materials are available in standard 2,500 mm lengths, with steel thickness parameters matching our panel offerings.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700">
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Roof Trims &amp; Caps</strong>
                        Outer Ridge, barge boards, end closures, and eave gutters.
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Clean Room Covings</strong>
                        PVC corner profiles, aluminum backings, internal 3D adapters.
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Suspension Fixtures</strong>
                        Ceiling support bars, heavy-duty structural rod systems.
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
                        <strong className="block text-neutral-900 mb-1">Structural Top Hats</strong>
                        Profile channels colored in standard RAL colors for purlin mounts.
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ImagePlaceholder category="accessories" title="Trim Accessories &amp; Flashing" />
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
