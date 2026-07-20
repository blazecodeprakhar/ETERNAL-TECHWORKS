import React from 'react';
import { Lock, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="animate-fadeIn bg-neutral-50 text-neutral-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 bg-primary-50 rounded-2xl text-primary-600">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-neutral-500 font-light max-w-xl mx-auto">
            Last Updated: July 20, 2026. Your privacy matters. Learn how Eternal Techworks secures customer specifications, layout files, and contact details.
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="text-primary-600 font-bold text-lg">01</div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Zero Spam Policy</h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-light">We only contact you regarding technical quotes, site drawings, and purchase order dispatches.</p>
          </div>
          <div className="bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="text-primary-600 font-bold text-lg">02</div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Secure Blueprints</h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-light">Your structural layout drawings, project locations, and structural bills of materials are strictly protected.</p>
          </div>
          <div className="bg-white border border-neutral-200/80 p-6 rounded-2xl shadow-xs space-y-2">
            <div className="text-primary-600 font-bold text-lg">03</div>
            <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Consent Driven</h3>
            <p className="text-[11px] text-neutral-500 leading-relaxed font-light">You choose when to share details, and you can opt out of any notification updates at any time.</p>
          </div>
        </div>

        {/* Section 1: Info Collection */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-neutral-900 flex items-center space-x-2">
            <Eye className="w-5 h-5 text-primary-500" />
            <span>1. Information We Collect</span>
          </h2>
          <div className="space-y-3 text-xs text-neutral-600 font-light leading-relaxed">
            <p>
              When you interact with Eternal Techworks (through our quote forms, call-backs, technical queries, or email transactions), we collect details necessary to fulfill industrial manufacturing services:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Particulars:</strong> Name, professional email address, phone number, and physical/billing addresses.</li>
              <li><strong>Project Metadata:</strong> Structural CAD files, warehouse dimensions, required thermal K-value limits, or insulation core preferences.</li>
              <li><strong>Commercial Metrics:</strong> Billing details, GST numbers, tax certificates, and transactional records.</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Info Use */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-neutral-900 flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-primary-500" />
            <span>2. How We Use Your Information</span>
          </h2>
          <div className="space-y-3 text-xs text-neutral-600 font-light leading-relaxed">
            <p>
              We process personal and project details to ensure seamless custom fabrication and engineering alignment:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Calculating custom panel thickness recommendations.</li>
              <li>Compiling detailed structural quotes and commercial commercial invoices.</li>
              <li>Organizing shipping and logistical transit details from Pune.</li>
              <li>Coordinating our site fabrication and insulation erection crews.</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Data Safety */}
        <div className="bg-white border border-neutral-200/80 p-8 rounded-3xl shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-neutral-900 flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-primary-500" />
            <span>3. Protection and Confidentiality</span>
          </h2>
          <p className="text-xs text-neutral-600 leading-relaxed font-light">
            We value the proprietary nature of industrial engineering blueprints. All blueprint uploads, CAD files, and company documents are stored on secure servers with restricted access. We never sell, rent, or lease customer databases, project specs, or phone numbers to third-party marketing services. Access is granted strictly to our internal manufacturing staff, structural engineers, and logistical transport partners on a need-to-know basis.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Privacy;
