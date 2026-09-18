import React from 'react';
import { DIAGNOSTIC_STEPS } from '../data/content';
import { Award, Zap, Shield } from 'lucide-react';

export const DiagnosticMethodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#0D131B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Комплексный подход
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            «Диагностика – Решение – Результат»
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Мы не просто крепим накладки. Каждый проект реализуется по четкому регламенту, обеспечивающему результат на долгие годы.
          </p>
        </div>

        {/* 5 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16 text-left">
          {DIAGNOSTIC_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex flex-col justify-between relative group hover:shadow-xl transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-mono font-black text-lg">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                Шаг {idx + 1} из 5
              </div>
            </div>
          ))}
        </div>

        {/* Real Trust Factors Banner */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-left space-y-2">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base">Более 20 лет на рынке</h4>
            <p className="text-xs text-slate-400">
              Опыт работы со сложными алюминиевыми и пластиковыми системами остекления во Владивостоке.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-left space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base">Ответственность за результат</h4>
            <p className="text-xs text-slate-400">
              Берем на себя решение там, где другие говорят: «Это особенности холодного профиля, смиритесь».
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-left space-y-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base">Собственное производство</h4>
            <p className="text-xs text-slate-400">
              Собственный раскрой и подгонка термокоробов исключают цепочку посредников и лишние наценки.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
