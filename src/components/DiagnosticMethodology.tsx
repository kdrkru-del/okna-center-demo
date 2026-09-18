import React from 'react';
import { DIAGNOSTIC_STEPS } from '../data/content';
import { Award, Zap, Shield } from 'lucide-react';

export const DiagnosticMethodology: React.FC = () => {
  return (
    <section id="methodology" className="py-20 lg:py-28 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Комплексный подход
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            «Диагностика – Решение – Результат»
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Мы не просто крепим накладки. Каждый проект реализуется по четкому регламенту, обеспечивающему результат на долгие годы.
          </p>
        </div>

        {/* 5 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16 text-left">
          {DIAGNOSTIC_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="bg-gray-50 border border-gray-200 hover:border-sky-300 rounded-2xl p-5 flex flex-col justify-between relative group hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 font-mono font-black text-lg">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400 font-mono">
                Шаг {idx + 1} из 5
              </div>
            </div>
          ))}
        </div>

        {/* Trust factors */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left space-y-2 hover:border-sky-200 hover:shadow-sm transition-all">
            <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-gray-900 font-bold text-base">Более 20 лет на рынке</h4>
            <p className="text-xs text-gray-500">
              Опыт работы со сложными алюминиевыми и пластиковыми системами остекления во Владивостоке.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left space-y-2 hover:border-sky-200 hover:shadow-sm transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-gray-900 font-bold text-base">Ответственность за результат</h4>
            <p className="text-xs text-gray-500">
              Берем на себя решение там, где другие говорят: «Это особенности холодного профиля, смиритесь».
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left space-y-2 hover:border-sky-200 hover:shadow-sm transition-all">
            <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-gray-900 font-bold text-base">Собственное производство</h4>
            <p className="text-xs text-gray-500">
              Собственный раскрой и подгонка термокоробов исключают цепочку посредников и лишние наценки.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
