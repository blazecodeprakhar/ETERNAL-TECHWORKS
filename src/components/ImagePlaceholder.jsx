import React from 'react';
import { Layers, Flame, Building, Wrench, Settings } from 'lucide-react';

const ImagePlaceholder = ({ category, title, height = 'h-64' }) => {
  return (
    <div className={`w-full ${height} bg-linear-to-br from-neutral-50 via-neutral-100 to-neutral-200 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-neutral-300/60 shadow-inner group overflow-hidden relative`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.08),transparent_70%)] group-hover:scale-110 transition-transform duration-700" />
      <div className="p-4 bg-white rounded-full border border-neutral-300/80 text-primary-600 mb-3 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300 shadow-md">
        {category === 'puf' && <Layers className="w-8 h-8" />}
        {category === 'rockwool' && <Flame className="w-8 h-8 text-orange-500" />}
        {category === 'prefab' && <Building className="w-8 h-8" />}
        {category === 'services' && <Wrench className="w-8 h-8" />}
        {category === 'accessories' && <Settings className="w-8 h-8" />}
        {!category && <Layers className="w-8 h-8" />}
      </div>
      <span className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-1">Eternal Techworks</span>
      <h4 className="text-sm font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors duration-300">{title}</h4>
      <p className="text-[10px] text-neutral-500 mt-2 italic">[ Image Placeholder ]</p>
    </div>
  );
};

export default ImagePlaceholder;
