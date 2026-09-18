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
        return <Hammer className="w-6 h-6 text-orange-400" />;
      case 'sales':
        return <ShoppingBag className="w-6 h-6 text-amber-400" />;
      case 'installation':
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      default:
        return <Hammer className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0D131B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Наши услуги
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Специализированные решения «Лаборатории ремонта»
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Мы решаем системную проблему промерзания панорамных фасадов: от раскроя термокоробов до чистовой установки во Владивостоке.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#0F1622] border border-slate-800 hover:border-orange-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 group"
            >
              <div>
                {/* Image with base URL helper */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={getAssetUrl(srv.image)}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1622] via-transparent to-black/30" />
                  
                  {srv.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-orange-400 font-bold text-xs rounded-lg">
                      {srv.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-slate-900/90 border border-slate-700 shadow-md">
                    {getIcon(srv.id)}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {srv.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  {/* Bullet points */}
                  <div className="pt-2 space-y-2">
                    {srv.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-3.5 px-4 bg-slate-800 hover:bg-orange-600 text-slate-200 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:shadow-lg min-h-[44px] cursor-pointer"
                >
                  Заказать услугу
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Engineering Advantages Matrix (no fabricated numbers) */}
        <div className="mt-16 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 text-left">
            <div>
              <h3 className="text-lg font-bold text-white">Инженерные особенности термокоробов</h3>
              <p className="text-xs text-slate-400">Преимущества системы и совместимость с фасадными конструкциями</p>
            </div>
            <span className="text-xs text-orange-400 font-mono font-bold bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
              «ОКНА-ЦЕНТР» ВЛАДИВОСТОК
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 text-left">
            <div className="border-l-2 border-orange-500 pl-4 space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono">Терморазрыв</span>
              <div className="text-base font-bold text-white">Эффект термоса</div>
              <p className="text-[11px] text-slate-400">Отсекает мостики холода по всей высоте стойки</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4 space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono">Геометрия</span>
              <div className="text-base font-bold text-white">Индивидуальный раскрой</div>
              <p className="text-[11px] text-slate-400">Подбор формы короба под вашу профильную систему</p>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4 space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono">Эстетика</span>
              <div className="text-base font-bold text-white">Широкая палитра цветов</div>
              <p className="text-[11px] text-slate-400">Базовый белый, антрацит, ламинация под дерево</p>
            </div>

            <div className="border-l-2 border-cyan-500 pl-4 space-y-1">
              <span className="text-xs text-slate-400 uppercase font-mono">Монтаж</span>
              <div className="text-base font-bold text-white">Без демонтажа фасада</div>
              <p className="text-[11px] text-slate-400">Чистая установка с сохранением ремонта в квартире</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
