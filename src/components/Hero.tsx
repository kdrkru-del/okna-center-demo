import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">

      {/* Full-bleed hero image */}
      <div className="relative flex-1 min-h-[55vh] lg:min-h-[65vh]">
        <img
          src={getAssetUrl('images/hero/vladivostok-real-window.jpg')}
          alt="Современное панорамное алюминиевое остекление с тонкими профилями и большим количеством естественного света"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Very light bottom fade so text panel blends naturally */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white pointer-events-none" />

        {/* City badge floating on photo */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/90 backdrop-blur-sm border border-sky-100 rounded-full px-4 py-2 text-xs font-bold text-sky-700 shadow-sm">
          г. Владивосток
        </div>
      </div>

      {/* Text content panel — white, below the photo */}
      <div className="relative bg-white pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: Heading + CTAs */}
            <div className="lg:col-span-7 space-y-6">

              {/* Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Лаборатория ремонта «ОКНА-ЦЕНТР»
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
                Тепло и комфорт{' '}
                <span className="text-sky-500">панорамного</span>{' '}
                остекления
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Утепление алюминиевого остекления <strong className="text-gray-800 font-semibold">бесшовными термокоробами</strong> без демонтажа фасадной системы. Рамы становятся комнатной температуры, конденсат и сквозняки исчезают.
              </p>

              {/* Key pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="text-lg font-black text-sky-600">20+ лет</div>
                  <div className="text-xs text-gray-500 mt-1">Опыта на рынке оконных и фасадных систем</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="text-lg font-black text-sky-600">Свой цех</div>
                  <div className="text-xs text-gray-500 mt-1">Производство термокоробов во Владивостоке</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="text-lg font-black text-sky-600">Без пыли</div>
                  <div className="text-xs text-gray-500 mt-1">Без демонтажа стекол и повреждения отделки</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/40 transition-all active:scale-[0.98] cursor-pointer min-h-[44px]"
                >
                  Обсудить утепление
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all active:scale-[0.98] min-h-[44px]"
                >
                  Посмотреть работы
                </a>
              </div>

              {/* Trust bullets */}
              <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Рамы комнатной температуры
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Без изменения внешнего вида
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" /> Работаем без посредников
                </span>
              </div>
            </div>

            {/* Right: Clean photo card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                <img
                  src={getAssetUrl('images/hero/vladivostok-penthouse.jpg')}
                  alt="Панорамное остекление пентхауса во Владивостоке — вид изнутри, много света"
                  className="w-full h-[280px] sm:h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-md">
                  <p className="text-xs text-gray-500 mb-0.5">Реализованный объект</p>
                  <p className="text-sm font-bold text-gray-800">Панорамный фасад • Владивосток</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Иллюстрация — не фото компании</p>
                </div>
              </div>
            </div>

          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-12 lg:mt-16">
            <a
              href="#problem"
              className="flex flex-col items-center gap-1.5 text-xs text-gray-400 hover:text-sky-500 transition-colors group"
              aria-label="Прокрутить вниз"
            >
              <span>Узнать подробнее</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
