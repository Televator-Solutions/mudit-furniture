import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, Sparkles } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { BUSINESS_INFO } from '../../data/business';
import { GOOGLE_MAPS_DIRECTIONS_URL, getPhoneCallUrl } from '../../lib/contact';
import { Button } from '../common/Button';
import { MobileMenu } from './MobileMenu';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Collections', path: '/collections' },
  { label: 'Home Furniture', path: '/home-furniture' },
  { label: 'Office Furniture', path: '/office-furniture' },
  { label: 'Custom Furniture', path: '/custom-furniture' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top micro-announcement bar */}
      <div className="bg-charcoal-900 text-sand-100 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-sand-300">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Agra's Trusted Furniture Showroom &bull; ⭐ 4.6/5 from 93+ Reviews</span>
            </span>
            <span>&bull;</span>
            <span>In-Store Pickup & Doorstep Delivery</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href={getPhoneCallUrl()}
              className="flex items-center gap-1.5 text-sand-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{BUSINESS_INFO.contact.phoneDisplay}</span>
            </a>
            <span className="text-charcoal-700">|</span>
            <span className="text-sand-400 font-sans">{BUSINESS_INFO.timings.hours}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-sand-50/95 backdrop-blur-md shadow-soft border-b border-sand-200/80 py-3'
            : 'bg-sand-50/80 backdrop-blur-sm border-b border-sand-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-wood-600 rounded-lg p-1"
            aria-label="Mudit Furnitures Home"
          >
            <div className="w-10 h-10 rounded-xl bg-wood-700 text-white flex items-center justify-center font-serif text-xl font-bold shadow-soft group-hover:bg-wood-800 transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-charcoal-900 leading-tight">
                Mudit Furnitures
              </span>
              <span className="text-[11px] font-medium text-wood-700 tracking-wider">
                मुदित फर्नीचर्स &bull; Agra
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg transition-colors relative ${
                    active
                      ? 'text-wood-800 font-semibold bg-sand-200/70'
                      : 'text-charcoal-700 hover:text-charcoal-950 hover:bg-sand-100'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-wood-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              isExternal
              variant="ghost"
              size="sm"
              leftIcon={<MapPin className="w-3.5 h-3.5 text-wood-700" />}
              className="text-xs"
            >
              Get Directions
            </Button>
            <Button
              href={getPhoneCallUrl()}
              variant="primary"
              size="sm"
              leftIcon={<Phone className="w-3.5 h-3.5" />}
              className="text-xs font-semibold shadow-soft"
            >
              Call Now
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href={getPhoneCallUrl()}
              variant="primary"
              size="sm"
              className="sm:hidden px-3 py-1.5 text-xs"
              leftIcon={<Phone className="w-3.5 h-3.5" />}
            >
              Call
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal-800 hover:bg-sand-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-wood-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
        activePath={location.pathname}
      />
    </>
  );
};
