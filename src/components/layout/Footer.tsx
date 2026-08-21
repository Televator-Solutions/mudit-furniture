import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Star, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';
import { getPhoneCallUrl, GOOGLE_MAPS_DIRECTIONS_URL } from '../../lib/contact';
import { Container } from '../common/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 text-sand-200 pt-16 pb-24 lg:pb-16 border-t border-charcoal-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-charcoal-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-wood-700 text-white flex items-center justify-center font-serif text-xl font-bold shadow-soft">
                M
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  Mudit Furnitures
                </h3>
                <p className="text-xs text-amber-300 font-medium">मुदित फर्नीचर्स &bull; Agra</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sand-300 leading-relaxed max-w-md">
              Quality furniture for your home and office, crafted with style, comfort and value in mind. Serving Agra with genuine craftsmanship, reasonable pricing, and reliable delivery.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-charcoal-900 border border-charcoal-800 max-w-sm">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-xs font-bold text-white">4.6 / 5.0 Rating</span>
              <span className="text-xs text-sand-400">from 93+ customer reviews in Agra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-sand-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-white transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/custom-furniture" className="hover:text-white transition-colors">
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Furniture Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-sans">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-sand-300">
              <li>
                <Link to="/home-furniture" className="hover:text-white transition-colors">
                  Sofa Sets & Couches
                </Link>
              </li>
              <li>
                <Link to="/home-furniture" className="hover:text-white transition-colors">
                  King & Queen Beds
                </Link>
              </li>
              <li>
                <Link to="/home-furniture" className="hover:text-white transition-colors">
                  Sofa Cum Beds
                </Link>
              </li>
              <li>
                <Link to="/office-furniture" className="hover:text-white transition-colors">
                  Executive Office Chairs
                </Link>
              </li>
              <li>
                <Link to="/office-furniture" className="hover:text-white transition-colors">
                  Steel Almirahs & Cabinets
                </Link>
              </li>
              <li>
                <Link to="/custom-furniture" className="hover:text-white transition-colors">
                  Made-to-Order Closets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-sans">
              Visit & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-sand-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={getPhoneCallUrl()} className="text-white hover:text-amber-300 font-mono font-medium">
                  {BUSINESS_INFO.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="https://muditfurnitures.in" className="text-white hover:text-amber-300">
                  muditfurnitures.in
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-medium text-xs underline underline-offset-4"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400">
  <p>© 2026 Mudit Furnitures. All rights reserved.</p>
  
  <p className="text-center">
    Developed by{' '}
    <a 
      href="https://televatorsolutions.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-amber-400 hover:text-amber-300 hover:underline font-medium transition-colors"
    >
      Televator Solutions Private Limited
    </a>
  </p>

  <div className="flex items-center gap-6">
    <span className="flex items-center gap-1.5">
      <ShieldCheck className="w-4 h-4 text-emerald-400" />
      <span>Verified Store in Agra, Uttar Pradesh</span>
    </span>
  </div>
</div>
      </Container>
    </footer>
  );
};
