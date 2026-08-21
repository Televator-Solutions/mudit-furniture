import React, { useState, createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomBar } from './MobileBottomBar';
import { ScrollToTop } from '../common/ScrollToTop';
import { EnquiryModal } from '../common/EnquiryModal';

interface EnquiryModalContextType {
  openEnquiryModal: (productName?: string, requirement?: string) => void;
  closeEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType>({
  openEnquiryModal: () => {},
  closeEnquiryModal: () => {},
});

export const useEnquiryModal = () => useContext(EnquiryModalContext);

export const Layout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProductName, setModalProductName] = useState<string | undefined>(undefined);
  const [modalRequirement, setModalRequirement] = useState<string | undefined>(undefined);

  const openEnquiryModal = (productName?: string, requirement?: string) => {
    setModalProductName(productName);
    setModalRequirement(requirement);
    setIsModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsModalOpen(false);
    setModalProductName(undefined);
    setModalRequirement(undefined);
  };

  return (
    <EnquiryModalContext.Provider value={{ openEnquiryModal, closeEnquiryModal }}>
      <div className="min-h-screen flex flex-col bg-sand-50 text-charcoal-900 selection:bg-wood-200">
        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-wood-800 text-white rounded-md text-sm font-semibold shadow-card"
        >
          Skip to main content
        </a>

        <ScrollToTop />
        <Header />

        <main id="main-content" className="flex-1 focus:outline-none">
          <Outlet />
        </main>

        <Footer />
        <MobileBottomBar />

        {/* Global Modal Instance */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={closeEnquiryModal}
          productName={modalProductName}
          defaultRequirement={modalRequirement}
        />
      </div>
    </EnquiryModalContext.Provider>
  );
};
