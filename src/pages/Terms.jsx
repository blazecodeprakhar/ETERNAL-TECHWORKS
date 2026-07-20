import React from 'react';
import { Shield, BookOpen, AlertCircle, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="animate-fadeIn bg-neutral-50 text-neutral-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-primary-50 rounded-2xl text-primary-600">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Terms of Service</h1>
          <p className="text-sm text-neutral-500 font-light max-w-xl mx-auto">
            Last Updated: July 20, 2026. Please review our manufacturing, supply, and installation terms for Eternal Techworks.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-neutral-900 flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-primary-500" />
            <span>1. Acceptance of Terms</span>
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed font-light">
            By requesting a price quote, placing a purchase order, or engaging Eternal Techworks for the design, fabrication, and installation of sandwich PUF/PIR panels, corrugated profile sheets, or prefabricated cabins, you agree to be bound by these Terms of Service. These terms govern all transactions, engineering designs, and supply agreements between you (the "Client") and Eternal Techworks.
          </p>
        </div>

        {/* Manufacturing Spec */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-neutral-900 flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary-500" />
            <span>2. Custom Manufacturing &amp; Spec Approvals</span>
          </h2>
          
          <div className="space-y-4 text-xs text-neutral-600 font-light leading-relaxed">
            <p>
              Since sandwich panels (PUF/PIR/Rockwool/Glasswool) are manufactured to order, the Client is responsible for verifying the correctness of all specifications listed in the signed sales order or engineering drawing:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Panel Core Type &amp; Thickness:</strong> Standard PUF/PIR density of 40 ± 2 kg/m³ with requested core thickness (e.g., 30mm, 50mm, 100mm).</li>
              <li><strong>Metal Face Parameters:</strong> Zinc coating specifications (GSM), color code (RAL numbers), and top/bottom sheet thickness.</li>
              <li><strong>Dimension Allocations:</strong> Custom lengths as specified for site installation.</li>
            </ul>
            <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start space-x-3 text-amber-800 text-[11px] leading-relaxed">
              <AlertCircle className="w-4 h-4 mt-0.5 text-amber-600 shrink-0" />
              <span>
                <strong>Important Notice:</strong> Once manufacturing has commenced at our production facility in Pune, no order modifications, cancellations, or thickness alterations can be accommodated. All custom-fabricated items are non-refundable.
              </span>
            </div>
          </div>
        </div>

        {/* Quotes, Invoicing, and Payments */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-neutral-900">3. Commercial Quotes &amp; Payment Schedule</h2>
          <div className="space-y-3 text-xs text-neutral-600 font-light leading-relaxed">
            <p>
              Price quotations are valid for exactly 7 calendar days from the date of issuance due to variations in raw coil (steel/aluminum) prices on the domestic market.
            </p>
            <p>
              Unless explicitly agreed otherwise in a signed credit terms letter, our standard billing protocol requires:
            </p>
            <ul className="list-decimal pl-5 space-y-1.5">
              <li>An advance payment of <strong>50%</strong> of the total order value prior to procurement of raw materials and coil slitting.</li>
              <li>The balance payment of <strong>50%</strong> to be cleared upon manufacturing completion, prior to dispatch from our facility.</li>
            </ul>
          </div>
        </div>

        {/* Delivery Logistics & Erection */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-neutral-900">4. Dispatch, Freight, and Site Erection</h2>
          <div className="space-y-3 text-xs text-neutral-600 font-light leading-relaxed">
            <p>
              All dispatches are sold Ex-Factory Pune. While Eternal Techworks can assist in coordinating third-party flatbed or open-body transit trucks, freight charges and transit insurance remain the sole responsibility of the Client.
            </p>
            <p>
              Clients must ensure that the destination site has adequate clearance and heavy-machinery access (cranes, hydraulic lifters, etc.) for unloading panels up to 12 meters in length. Any damage during manual unloading by site workers is not covered under our quality warranty.
            </p>
            <p>
              For projects involving erection services, site preparation must be complete including foundation concrete, steel girders alignment, and utility clearances before our installation team arrives on site.
            </p>
          </div>
        </div>

        {/* Warranty */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-neutral-900">5. Limited Structural Warranty</h2>
          <p className="text-xs text-neutral-600 leading-relaxed font-light">
            Eternal Techworks warrants that all PUF and PIR sandwich panels conform to chemical and density standards under IS-12436 for a period of twelve (12) months from the date of dispatch. This warranty covers issues like core-to-metal delamination, premature thermal decay, or foam degradation. The warranty does not cover damages arising from incorrect installation (not performed by our certified fabricators), structural shift of the parent building, exposure to highly corrosive chemical environments, or acts of God.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Terms;
