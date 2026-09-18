import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-500 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-200 text-left">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                <span className="text-xs font-black">ОЦ</span>
              </div>
              <span className="font-extrabold text-gray-900 text-lg tracking-tight">
                ОКНА-ЦЕНТР
              </span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Лаборатория ремонта светопрозрачных конструкций. Комплексный подход «Диагностика – Решение – Результат». Более 20 лет практического опыта во Владивостоке.
            </p>
            <div className="flex items-center gap-1.5 text-sky-600 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" /> Собственное производство
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-2">
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider">
              Разделы
            </h4>
            <ul className="space-y-1.5">
              <li><a href="#problem" className="hover:text-sky-600 transition-colors">О проблеме остекления</a></li>
              <li><a href="#knowledge" className="hover:text-sky-600 transition-colors">Что нужно знать</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition-colors">Услуги лаборатории</a></li>
              <li><a href="#about" className="hover:text-sky-600 transition-colors">О компании</a></li>
              <li><a href="#calculator" className="hover:text-sky-600 transition-colors">Параметры остекления</a></li>
              <li><a href="#methodology" className="hover:text-sky-600 transition-colors">Инженерный регламент</a></li>
              <li><a href="#gallery" className="hover:text-sky-600 transition-colors">Галерея объектов</a></li>
              <li><a href="#reviews" className="hover:text-sky-600 transition-colors">Отзывы клиентов</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-2">
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider">
              Владивосток
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <a href="tel:+79140722222" className="hover:text-sky-600 block transition-colors">+7 (914) 072-22-22</a>
                  <a href="tel:+79147058683" className="hover:text-sky-600 block transition-colors">+7 (914) 705-86-83</a>
                  <a href="tel:+74232758683" className="hover:text-sky-600 block transition-colors">275-86-83</a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <a href="mailto:teplo_al@mail.ru" className="hover:text-sky-600 transition-colors">teplo_al@mail.ru</a>
              </p>
            </div>
          </div>

          {/* Specialization */}
          <div className="space-y-2">
            <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider">
              Специализация
            </h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Ликвидация промерзания холодных алюминиевых фасадов, панорамных витражей, эркеров и лоджий в новостройках Приморского края с гарантией сохранения архитектурного облика.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 hover:underline font-semibold"
              >
                Написать инженеру в WhatsApp →
              </a>
            </div>
          </div>

        </div>

        {/* Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px]">
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
