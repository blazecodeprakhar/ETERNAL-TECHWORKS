import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, ChevronDown, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: 'PUF Roof Panel',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', product: 'PUF Roof Panel', message: '' });
    }, 5000);
  };

  return (
    <div className="animate-fade-in bg-neutral-50 text-neutral-800">
      
      {/* PAGE HEADER */}
      <section className="bg-white border-b border-neutral-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-600 uppercase">Contact Information</span>
          <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight">Let's Discuss Your Project scope</h1>
          <p className="text-sm text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            Have an upcoming industrial roofing, clean room, or prefab cabin installation? Contact our sales office in Pune for technical consultations and estimations.
          </p>
        </div>
      </section>

      {/* CORE FORM & INFORMATION HUB */}
      <ScrollReveal duration={950}>
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT COLUMN: INFO & CHANNELS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-neutral-900">Registered Office &amp; Coordinates</h2>
              
              <div className="space-y-4">
                {/* Address Card */}
                <div className="flex items-start space-x-4 p-5 bg-white border border-neutral-200 rounded-2xl shadow-xs">
                  <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-600">
                    <strong className="block text-neutral-900 mb-1 text-sm">Pune Address</strong>
                    2nd Floor, B Wing, City Vista, Downtown Rd,<br />
                    Ashoka Nagar, Kharadi, Pune, Maharashtra – 411014
                  </div>
                </div>

                {/* Call & Email Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="tel:+917030091321" 
                    className="flex items-center space-x-3 p-4 bg-white border border-neutral-200 rounded-2xl hover:border-primary-500/20 transition-all shadow-xs group"
                  >
                    <Phone className="w-5 h-5 text-primary-600 group-hover:scale-105 transition-transform" />
                    <div>
                      <span className="block text-[9px] text-neutral-400 uppercase font-bold">Calling Helpline</span>
                      <span className="block text-xs font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">+91 7030091321</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:eternaltechworks@gmail.com" 
                    className="flex items-center space-x-3 p-4 bg-white border border-neutral-200 rounded-2xl hover:border-primary-500/20 transition-all shadow-xs group"
                  >
                    <Mail className="w-5 h-5 text-primary-600 group-hover:scale-105 transition-transform" />
                    <div>
                      <span className="block text-[9px] text-neutral-400 uppercase font-bold">Email Address</span>
                      <span className="block text-xs font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">eternaltechworks@gmail.com</span>
                    </div>
                  </a>
                </div>

                {/* GST Info Card */}
                <div className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-2xl shadow-xs text-xs text-neutral-600">
                  <div>
                    <span className="font-semibold text-neutral-900">GST Registration:</span> 27BPWPM2603D2ZT
                  </div>
                  <div className="bg-primary-50 border border-primary-100 px-2 py-1 rounded text-primary-600 font-bold uppercase tracking-wider text-[9px]">
                    Registered GST
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Messaging */}
            <div className="space-y-3">
              <span className="block text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Instant Support Channels</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/917030091321?text=Hi%20Eternal%20Techworks,%20I'm%20interested%20in%20your%20insulation%20/%20PUF%20panel%20services.%20Please%20contact%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-md shadow-emerald-500/10 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/eternal-techworks-puf-pir/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-700 hover:bg-primary-600 text-white font-bold text-xs uppercase tracking-wider px-4 py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-md shadow-primary-500/10 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LinkedIn Business</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: QUICK CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-xs relative">
              <h3 className="text-lg font-bold text-neutral-900 mb-6">Send an Online Inquiry</h3>
              
              {formSubmitted ? (
                <div className="bg-primary-50 border border-primary-100 p-8 rounded-2xl text-center space-y-4 animate-scaleUp">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white mx-auto shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">Inquiry Received Successfully</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed max-w-sm mx-auto font-light">
                    Thank you for contacting Eternal Techworks. Our structural engineering sales desk will review your details and contact you shortly with estimates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs text-neutral-750 font-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50 border border-neutral-200 focus:border-primary-500 rounded-xl px-4 py-3 text-xs text-neutral-800 focus:outline-none transition-colors" 
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-neutral-750 font-semibold">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50 border border-neutral-200 focus:border-primary-500 rounded-xl px-4 py-3 text-xs text-neutral-800 focus:outline-none transition-colors" 
                        placeholder="e.g. rahul@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs text-neutral-750 font-semibold">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50 border border-neutral-200 focus:border-primary-500 rounded-xl px-4 py-3 text-xs text-neutral-800 focus:outline-none transition-colors" 
                        placeholder="e.g. +91 9876543210"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-neutral-750 font-semibold">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50 border border-neutral-200 focus:border-primary-500 rounded-xl px-4 py-3 text-xs text-neutral-800 focus:outline-none transition-colors" 
                        placeholder="e.g. Steel Builders Ltd."
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-750 font-semibold">Product or Service of Interest *</label>
                    <div className="relative">
                      <select 
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-50 border border-neutral-200 focus:border-primary-500 rounded-xl px-4 py-3 text-xs text-neutral-800 focus:outline-none appearance-none transition-colors"
                      >
                        <option>PUF Roof Panel</option>
                        <option>PIR Wall Panel</option>
                        <option>Rockwool Panel</option>
                        <option>Insulation Boards / Bubble Sheet</option>
                        <option>Custom Prefab Cabin Manufacturing</option>
                        <option>Installation &amp; Fabrication Services</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-4 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-neutral-750 font-semibold">Project Details / Message *</label>
                    <textarea 
                      rows="4" 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-50 border border-neutral-200 focus:border-primary-500 rounded-xl px-4 py-3 text-xs text-neutral-800 focus:outline-none transition-colors resize-none" 
                      placeholder="Please describe details about panel thickness, dimensions, layout or service requirements..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-md shadow-primary-500/10 hover:shadow-primary-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </ScrollReveal>

    </div>
  );
};

export default Contact;
