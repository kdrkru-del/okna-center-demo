import React from 'react';
import { Hammer, ShoppingBag, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';
import { getAssetUrl } from '../utils/assets';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'production':
        return <Hammer className="w-6 h-6 text-sky-500" />;
      case 'sales':
        return <ShoppingBag className="w-6 h-6 text-sky-600" />;
      case 'installation':
        return <Wrench className="w-6 h-6 text-emerald-500" />;
      default:
        return <Hammer className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Наши услуги
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Специализированные решения «Лаборатории ремонта»
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Мы решаем системную проблему промерзания панорамных фасадов: от раскроя термокоробов до чистовой установки во Владивостоке.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white border border-gray-200 hover:border-sky-300 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-sky-100 group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <img
                    src={getAssetUrl(srv.image)}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />

                  {srv.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-gray-200 text-sky-700 font-bold text-xs rounded-lg shadow-sm">
                      {srv.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-white shadow-md border border-gray-100">
                    {getIcon(srv.id)}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 text-left">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="pt-2 space-y-2">
                    {srv.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-3.5 px-4 bg-gray-50 hover:bg-sky-500 text-gray-700 hover:text-white border border-gray-200 hover:border-sky-500 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                >
                  Заказать услугу
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering advantages */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4 text-left">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Инженерные особенности термокоробов</h3>
              <p className="text-xs text-gray-500">Преимущества системы и совместимость с фасадными конструкциями</p>
            </div>
            <span className="text-xs text-sky-700 font-bold bg-sky-50 px-3 py-1 rounded-md border border-sky-200 whitespace-nowrap">
              «ОКНА-ЦЕНТР» ВЛАДИВОСТОК
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-left">
            <div className="border-l-2 border-sky-400 pl-4 space-y-1">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Терморазрыв</span>
              <div className="text-base font-bold text-gray-900">Эффект термоса</div>
              <p className="text-[11px] text-gray-500">Отсекает мостики холода по всей высоте стойки</p>
            </div>

            <div className="border-l-2 border-sky-300 pl-4 space-y-1">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Геометрия</span>
              <div className="text-base font-bold text-gray-900">Индивидуальный раскрой</div>
              <p className="text-[11px] text-gray-500">Подбор формы короба под вашу профильную систему</p>
            </div>

            <div className="border-l-2 border-emerald-400 pl-4 space-y-1">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Эстетика</span>
              <div className="text-base font-bold text-gray-900">Широкая палитра цветов</div>
              <p className="text-[11px] text-gray-500">Базовый белый, антрацит, ламинация под дерево</p>
            </div>

            <div className="border-l-2 border-sky-200 pl-4 space-y-1">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wide">Монтаж</span>
              <div className="text-base font-bold text-gray-900">Без демонтажа фасада</div>
              <p className="text-[11px] text-gray-500">Чистая установка с сохранением ремонта в квартире</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
