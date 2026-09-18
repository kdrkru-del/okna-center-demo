import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck, MessageSquare, Square } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'О проблеме', href: '#problem' },
    { name: 'Услуги', href: '#services' },
    { name: 'Параметры', href: '#calculator' },
    { name: 'Технология', href: '#methodology' },
    { name: 'Наши работы', href: '#gallery' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
            aria-label="ОКНА-ЦЕНТР Лаборатория ремонта - главная страница"
          >
            <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/25 group-hover:bg-sky-600 transition-colors shrink-0">
              <Square className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-gray-900 text-base sm:text-lg">
                  ОКНА-ЦЕНТР
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-sky-50 text-sky-600 border border-sky-200 rounded">
                  20+ лет
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide">
                Лаборатория ремонта • Владивосток
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5" aria-label="Основное меню">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded px-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end text-right">
              <a
                href="tel:+79140722222"
                className="text-sm font-bold text-gray-800 hover:text-sky-600 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
              >
                <Phone className="w-3.5 h-3.5 text-sky-500" />
                +7 (914) 072-22-22
              </a>
              <span className="text-[11px] text-gray-400">Владивосток • 09:00–19:00</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-xl shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
            >
              Обсудить утепление
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenBooking}
              className="md:hidden px-3 py-2 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-xl min-h-[44px] flex items-center justify-center transition-colors"
              aria-label="Обсудить утепление"
            >
              Замер
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 shadow-lg">
          <nav className="flex flex-col gap-1" aria-label="Мобильное меню">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 py-2.5 px-3 rounded-lg border-b border-gray-100 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-gray-300 text-sm">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Владивосток, ул. Ильичева 29</span>
              <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> На связи
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <a
                href="tel:+79140722222"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-sm font-semibold min-h-[44px] transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                Позвонить
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-sm font-semibold min-h-[44px] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-1 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-sm shadow-md min-h-[44px] cursor-pointer transition-colors"
            >
              Обсудить утепление
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
