import React, { useState } from 'react';
import { ThermometerSnowflake, ArrowRight, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [thermalMode, setThermalMode] = useState(false);

  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#090D12] via-[#0D131B] to-[#0F141C]">
      {/* Background Subtle Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span className="text-orange-400 font-bold uppercase tracking-wider text-[11px]">
                Лаборатория ремонта «Окна-Центр»
              </span>
              <span className="text-slate-500">•</span>
              <span>г. Владивосток</span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Тепло и тишина <br className="hidden sm:inline" />
              панорамных окон <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                без демонтажа фасада
              </span>
            </h1>

            {/* Subtitle / Positioning */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Инженерная технология утепления промерзающего алюминиевого фасадного остекления с помощью <strong className="text-white font-semibold">бесшовных термокоробов</strong>. Устраняем сырость, обледенение стоек и сквозняки во Владивостоке по принципу «Диагностика – Решение – Результат».
            </p>

            {/* Key Verified Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
                <div className="text-lg sm:text-xl font-black text-orange-400">20+ лет</div>
                <div className="text-xs text-slate-400 mt-1">Опыта на рынке оконных и фасадных систем</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
                <div className="text-lg sm:text-xl font-black text-amber-400">Собственный цех</div>
                <div className="text-xs text-slate-400 mt-1">Производство термокоробов во Владивостоке</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 shadow-sm">
                <div className="text-lg sm:text-xl font-black text-emerald-400">Без пыли и грязи</div>
                <div className="text-xs text-slate-400 mt-1">Без демонтажа стекол и повреждения отделки</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40 transition-all active:scale-[0.98] text-center min-h-[44px]"
              >
                Подобрать параметры остекления
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 shadow-md transition-all active:scale-[0.98] cursor-pointer min-h-[44px]"
              >
                <ThermometerSnowflake className="w-4 h-4 text-orange-400" />
                Записаться на диагностику
              </button>
            </div>

            {/* Trust bullet points */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Рамы комнатной температуры
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Без изменения внешнего вида фасада
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" /> Работаем без посредников
              </span>
            </div>

          </div>

          {/* Right Column: Educational Interactive Thermal Simulation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
              
              {/* Image Container with thermal filter toggle */}
              <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden">
                <img
                  src={getAssetUrl('images/hero/vladivostok-real-window.jpg')}
                  alt="Панорамное алюминиевое остекление во Владивостоке"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    thermalMode
                      ? 'filter hue-rotate-180 invert brightness-110 contrast-125'
                      : 'filter brightness-90 group-hover:scale-105'
                  }`}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-black/30 pointer-events-none" />

                {/* HUD Header */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-200">
                    <span className={`w-2 h-2 rounded-full ${thermalMode ? 'bg-orange-500 animate-pulse' : 'bg-emerald-500'}`} />
                    <span>{thermalMode ? 'СХЕМА ТЕПЛОПОТЕРЬ' : 'РЕАЛЬНЫЙ ВИД'}</span>
                  </div>

                  <div className="bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono text-orange-400 font-bold">
                    ВЛАДИВОСТОК
                  </div>
                </div>

                {/* Interactive Toggle for Thermal View */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md p-3 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-white">Интерактивная схема</span>
                      <span className="text-[10px] text-slate-400">
                        {thermalMode ? 'Зоны промерзания холодного металлокаркаса' : 'Профиль после чистового монтажа короба'}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setThermalMode(!thermalMode)}
                    className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all min-h-[44px] cursor-pointer ${
                      thermalMode
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                        : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                    }`}
                    aria-label="Переключить визуализацию зон теплопотерь"
                  >
                    <Eye className="w-4 h-4" />
                    {thermalMode ? 'Фото объекта' : 'Схема зон холода'}
                  </button>
                </div>

                {/* Physical Concept Overlay Tag */}
                <div className="absolute top-16 right-4 flex flex-col gap-2 pointer-events-none">
                  <div className="bg-blue-950/90 border border-blue-500/40 text-blue-300 text-[11px] font-mono px-2.5 py-1 rounded-md shadow">
                    Металл: прямой мостик холода
                  </div>
                  <div className="bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono px-2.5 py-1 rounded-md shadow">
                    Термокороб: изолирующий барьер
                  </div>
                </div>

              </div>

              {/* Technical Footnote under card */}
              <div className="p-3 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Технология: бесшовный термобарьер</span>
                <span className="text-orange-400 font-semibold">«ОКНА-ЦЕНТР»</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
