import React from 'react';
import { Flame, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A0E] border-t border-slate-800/80 text-slate-400 text-xs py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Brand & Slogan */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
                <Flame className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                ОКНА-ЦЕНТР
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Лаборатория ремонта светопрозрачных конструкций. Комплексный подход «Диагностика – Решение – Результат». Более 20 лет практического опыта во Владивостоке.
            </p>
            <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" /> Собственное производство
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Разделы
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#problem" className="hover:text-orange-400 transition-colors">О проблеме остекления</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Услуги лаборатории</a></li>
              <li><a href="#calculator" className="hover:text-orange-400 transition-colors">Параметры остекления</a></li>
              <li><a href="#methodology" className="hover:text-orange-400 transition-colors">Инженерный регламент</a></li>
              <li><a href="#gallery" className="hover:text-orange-400 transition-colors">Галерея объектов</a></li>
              <li><a href="#reviews" className="hover:text-orange-400 transition-colors">Отзывы клиентов</a></li>
            </ul>
          </div>

          {/* Contacts Summary */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Владивосток
            </h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>г. Владивосток, ул. Ильичева, дом 29</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>+7 (914) 072-22-22<br />+7 (914) 705-86-83<br />275-86-83</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span>teplo_al@mail.ru</span>
              </p>
            </div>
          </div>

          {/* Engineering Specialization Note */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Специализация
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Ликвидация промерзания холодных алюминиевых фасадов, панорамных витражей, эркеров и лоджий в новостройках Приморского края с гарантией сохранения архитектурного облика.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
              >
                Написать инженеру в WhatsApp →
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Компания «ОКНА-ЦЕНТР» Лаборатория ремонта. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span>г. Владивосток, ул. Ильичева 29</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
