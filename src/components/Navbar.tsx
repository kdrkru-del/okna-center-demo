import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'О проблеме', href: '#problem' },
    { name: 'Что нужно знать', href: '#knowledge' },
    { name: 'Услуги', href: '#services' },
    { name: 'О компании', href: '#about' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm py-2'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 lg:gap-6">

          {/* ─── Logo ─── */}
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
            aria-label="ОКНА-ЦЕНТР — главная"
          >
            {/* Icon */}
            <div className="w-9 h-9 rounded-lg bg-sky-500 group-hover:bg-sky-600 transition-colors flex items-center justify-center text-white shadow-sm shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="2" width="14" height="14" rx="2"/>
                <line x1="9" y1="2" x2="9" y2="16"/>
                <line x1="2" y1="9" x2="16" y2="9"/>
              </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-gray-900 text-[15px] tracking-tight whitespace-nowrap">
                  ОКНА-ЦЕНТР
                </span>
                <span className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-wider bg-sky-50 text-sky-600 border border-sky-200 rounded whitespace-nowrap">
                  20+ лет
                </span>
              </div>
              <span className="hidden sm:block text-[10px] text-gray-400 font-medium whitespace-nowrap">
                Лаборатория ремонта • Владивосток
              </span>
            </div>
          </a>

          {/* ─── Desktop nav ─── */}
          <nav
            className="hidden xl:flex items-center gap-1 flex-1 justify-center"
            aria-label="Основное меню"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-gray-600 hover:text-sky-600 transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-lg hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ─── Right: phone + CTA ─── */}
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-auto">
            {/* Phone block */}
            <a
              href="tel:+79140722222"
              className="flex flex-col items-end group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
            >
              <span className="flex items-center gap-1 text-[13px] font-bold text-gray-800 group-hover:text-sky-600 transition-colors whitespace-nowrap">
                <Phone className="w-3 h-3 text-sky-500 shrink-0" />
                +7 (914) 072-22-22
              </span>
              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                Владивосток • 09:00–19:00
              </span>
            </a>

            {/* CTA button */}
            <button
              onClick={onOpenBooking}
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2.5 text-[13px] font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-xl shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
            >
              Обсудить утепление
            </button>
          </div>

          {/* ─── Mobile controls ─── */}
          <div className="flex items-center gap-2 ml-auto xl:hidden">
            <button
              onClick={onOpenBooking}
              className="md:hidden px-3 py-2 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-xl min-h-[44px] flex items-center justify-center transition-colors whitespace-nowrap"
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
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ─── Mobile dropdown ─── */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col gap-0.5" aria-label="Мобильное меню">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 py-2.5 px-3 rounded-lg flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-gray-300 text-xs">›</span>
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Владивосток, ул. Ильичева 29</span>
              <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> На связи
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+79140722222"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-sm font-semibold min-h-[44px] transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                Позвонить
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-sm font-semibold min-h-[44px] transition-colors"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl text-sm shadow-md min-h-[44px] cursor-pointer transition-colors"
            >
              Обсудить утепление
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
