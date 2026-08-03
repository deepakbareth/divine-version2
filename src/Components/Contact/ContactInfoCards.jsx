import React from 'react';
import { MapPin, Phone, Mail, Clock, Building, Landmark } from 'lucide-react';

const ContactInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      
      {/* Card 1: Corporate Office (C-Scheme) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-[#002147]/10 text-[#002147] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Building className="w-6 h-6" />
        </div>
        <h4 className="text-xs font-extrabold text-[#002147] uppercase tracking-wider mb-1">Corporate Office (C-Scheme)</h4>
        <p className="text-slate-900 font-bold text-sm leading-snug">
          712, 7th Floor, Crops Arcade, Malviya Marg, C-Scheme, Jaipur - 302001
        </p>
        <p className="text-[#59c28a] font-semibold text-xs mt-2 flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> Main Corporate Branch
        </p>
      </div>

      {/* Card 2: Campus Office (Jagatpura) */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Landmark className="w-6 h-6" />
        </div>
        <h4 className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mb-1">Campus Office (Jagatpura)</h4>
        <p className="text-slate-900 font-bold text-sm leading-snug">
          TA-502, 5th Floor, R-Tech Capital High Street, Apparel Park, Main Mahal Road, Jagatpura, Jaipur
        </p>
        <p className="text-amber-600 font-semibold text-xs mt-2 flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> Jagatpura Campus Branch
        </p>
      </div>

      {/* Card 3: 3 Helpline Phone Numbers */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-[#59c28a]/10 text-[#59c28a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Phone className="w-6 h-6" />
        </div>
        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1">Helpline Phone</h4>
        <p className="text-slate-900 font-extrabold text-sm sm:text-base">
          <a href="tel:9828477772" className="hover:text-[#59c28a] transition-colors">+91 98284 77772</a>
        </p>
        <p className="text-slate-900 font-extrabold text-sm sm:text-base">
          <a href="tel:9828977772" className="hover:text-[#59c28a] transition-colors">+91 98289 77772</a>
        </p>
        <p className="text-slate-900 font-extrabold text-sm sm:text-base">
          <a href="tel:9519914855" className="hover:text-[#59c28a] transition-colors">+91 95199 14855</a>
        </p>
      </div>

      {/* Card 4: Email & Working Hours */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Mail className="w-6 h-6" />
        </div>
        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1">Email & Hours</h4>
        <p className="text-slate-900 font-bold text-sm truncate">
          <a href="mailto:info@divineinstitute.com" className="hover:text-[#002147] transition-colors">info@divineinstitute.com</a>
        </p>
        <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-purple-600 shrink-0" />
          <span>Mon - Sat: 9:30 AM - 7:00 PM</span>
        </div>
      </div>

    </div>
  );
};

export default ContactInfoCards;
