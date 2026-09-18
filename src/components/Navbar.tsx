import React, { useState, useEffect } from 'react';
import { Phone, Flame, Menu, X, ShieldCheck, MessageSquare } from 'lucide-react';
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
    { name: 'Параметры остекления', href: '#calculator' },
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
          ? 'bg-[#0B0F14]/95 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3'
          : 'bg-[#0B0F14]/75 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Lab Branding */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
            aria-label="ОКНА-ЦЕНТР Лаборатория ремонта - главная страница"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-white text-base sm:text-lg lg:text-xl">
                  ОКНА-ЦЕНТР
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded">
                  20+ лет опыта
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
                Лаборатория ремонта • Владивосток
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Основное меню">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions / Contacts */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end text-right">
              <a
                href="tel:+79140722222"
                className="text-sm font-bold text-white hover:text-orange-400 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                +7 (914) 072-22-22
              </a>
              <span className="text-[11px] text-slate-400">Владивосток • 09:00–19:00</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-lg shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
            >
              Вызвать инженера
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenBooking}
              className="md:hidden px-3 py-2 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 rounded-lg shadow-sm min-h-[44px] flex items-center justify-center"
              aria-label="Заказать замер"
            >
              Замер
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
        <div className="xl:hidden bg-[#0F141C] border-b border-slate-800 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Мобильное меню">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-slate-200 hover:text-orange-400 py-2.5 px-2 border-b border-slate-800/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-600 text-sm">→</span>
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Владивосток, ул. Ильичева 29</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> На связи
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href="tel:+79140722222"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Позвонить
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-semibold min-h-[44px]"
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
              className="w-full mt-2 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-lg text-sm shadow-lg shadow-orange-600/30 min-h-[44px] cursor-pointer"
            >
              Вызвать инженера на замер
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
