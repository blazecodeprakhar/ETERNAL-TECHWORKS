import React from 'react';
import { Info, BarChart2, Flame, ShieldAlert, CheckSquare } from 'lucide-react';

const Technical = () => {
  const comparativeInsulation = [
    { name: 'PU-Rigid Foam (Eternal Panels)', thickness: 50, color: 'bg-primary-600' },
    { name: 'EPS (Expanded Polystyrene)', thickness: 80, color: 'bg-primary-400' },
    { name: 'Mineral Wool / Rockwool', thickness: 90, color: 'bg-neutral-500' },
    { name: 'Natural Cork Board', thickness: 100, color: 'bg-amber-600' },
    { name: 'Compressed Woodfiber', thickness: 130, color: 'bg-amber-800' },
    { name: 'Softwood Framing', thickness: 200, color: 'bg-orange-600' },
    { name: 'Lightweight Concrete Block', thickness: 760, color: 'bg-neutral-400' },
    { name: 'Standard Clay Brick Wall', thickness: 1720, color: 'bg-red-500' },
  ];

  return (
    <div className="animate-fadeIn bg-neutral-50 text-neutral-800">
      
      {/* PAGE HEADER */}
      <section className="bg-white border-b border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Engineering Center</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Thermal Properties &amp; Material Science</h1>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            Examine certified material metrics for polyurethane (PUR) and polyisocyanurate (PIR) cores, conforming to national IS-12436 regulatory requirements.
          </p>
        </div>
      </section>

      {/* CORE SPECIFICATIONS SHEET */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* TECHNICAL DATA TABLE (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-neutral-900 flex items-center space-x-2">
                <Info className="w-5 h-5 text-primary-600" />
                <span>Technical Specifications (IS 12436)</span>
              </h3>
              <span className="text-xs text-neutral-400 font-mono">PUR vs PIR Cores</span>
            </div>

            <div className="overflow-x-auto border border-neutral-200 rounded-3xl bg-white shadow-xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-800 font-bold border-b border-neutral-200">
                    <th className="p-4">Characteristic Property</th>
                    <th className="p-4">Polyurethane (PUR)</th>
                    <th className="p-4">Polyisocyanurate (PIR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-600">
                  <tr>
                    <td className="p-4 font-bold text-neutral-800">Foam Core Density</td>
                    <td className="p-4">40 ± 2 kg/m³</td>
                    <td className="p-4">40 ± 2 kg/m³</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="p-4 font-bold text-neutral-800">Thermal Conductivity (K-Value)</td>
                    <td className="p-4">0.023 W/m·K</td>
                    <td className="p-4">0.023 W/m·K</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-800">Compressive Strength (10% Def.)</td>
                    <td className="p-4">2.10 kg/sq.cm</td>
                    <td className="p-4">2.10 kg/sq.cm</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="p-4 font-bold text-neutral-800">Closed Cell Content</td>
                    <td className="p-4">90% – 95%</td>
                    <td className="p-4">90% – 95%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-800">Burning Behavior (Fire Class)</td>
                    <td className="p-4 text-orange-600 font-semibold">125 mm Extent (Self-Exting.)</td>
                    <td className="p-4 text-emerald-600 font-semibold">25 mm Extent (Fire Retardant)</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="p-4 font-bold text-neutral-800">Water Vapor Permeability</td>
                    <td className="p-4">0.12 ng/pasm</td>
                    <td className="p-4">0.12 ng/pasm</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-neutral-800">Dimensional Stability (70°C)</td>
                    <td className="p-4">Linear Change &lt; 2%</td>
                    <td className="p-4">Linear Change &lt; 2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-start space-x-3 text-xs text-orange-850">
              <Flame className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-light">
                <strong>Fire Safety Note:</strong> PIR contains isocyanurate rings that require much higher temperatures to dissociate compared to polyurethane. Hence, PIR has a significantly lower extent of burn (25mm) and releases less toxic smoke under direct flame, qualifying for strict commercial safety approvals.
              </p>
            </div>
          </div>

          {/* INSULATION EFFICIENCY VISUALIZER (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-neutral-900 flex items-center space-x-2">
                <BarChart2 className="w-5 h-5 text-primary-600" />
                <span>Comparative Insulation Thickness</span>
              </h3>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                Thickness required (in millimeters) of other materials to achieve the equivalent thermal insulation R-value of a 50mm PUF panel.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 p-6 rounded-3xl shadow-xs space-y-4">
              {comparativeInsulation.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-700">{item.name}</span>
                    <span className="text-primary-600 font-mono">{item.thickness} mm</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`} 
                      style={{ 
                        width: `${Math.max(3, Math.min(100, (item.thickness / 1720) * 100))}%` 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-primary-50 border border-primary-100 rounded-2xl flex items-start space-x-3 text-xs text-primary-850">
              <CheckSquare className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-light">
                <strong>Structural Savings:</strong> 50mm of PU-Rigid insulation delivers the same thermal barrier performance as a 1720mm (1.72 meter) heavy clay brick wall. This minimizes building envelope volume, decreases dead load on structural foundations, and dramatically cuts HVAC capacity costs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CORE BENEFITS GRID */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-extrabold text-neutral-900 text-center mb-10">Conforming Performance Advantages</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-neutral-600 leading-relaxed font-light">
            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-3">
              <h4 className="font-bold text-neutral-900 text-sm">Low K-Value</h4>
              <p>Maintains a thermal conductivity coefficient of 0.023 W/m·K, which prevents external heat infiltration and maintains cooling load stability.</p>
            </div>
            
            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-3">
              <h4 className="font-bold text-neutral-900 text-sm">Closed Cell Percentage</h4>
              <p>Over 90% closed cells completely isolates the foam core from absorbing atmospheric moisture, maintaining steady thermal insulation over decades.</p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-3">
              <h4 className="font-bold text-neutral-900 text-sm">Mechanical Resistance</h4>
              <p>Withstands high compressive loading of 2.10 kg/cm², ensuring roof panels are self-supporting and safe for periodic maintenance footfalls.</p>
            </div>

            <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-2xl space-y-3">
              <h4 className="font-bold text-neutral-900 text-sm">Eco-Conformance</h4>
              <p>Injected using water/hydrocarbon blowing systems containing zero ozone-depleting substances, satisfying environmental project guidelines.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Technical;
