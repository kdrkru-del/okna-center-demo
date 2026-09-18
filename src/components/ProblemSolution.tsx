import React, { useState } from 'react';
import { AlertTriangle, Sparkles, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const ProblemSolution: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="problem" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Философия алюминиевого остекления
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Почему холодный алюминий разрушает комфорт в квартире
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Покупая квартиру с панорамными окнами, мы ждем нового качества жизни. Но суровые зимы и ветра Владивостока обнажают физику холодного металла.
          </p>
        </div>

        {/* Expectation vs Reality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

          {/* Card 1: Expectation */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Что мы ожидаем от панорамного остекления</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Покупая квартиру с панорамными окнами, мы ожидаем, что они подарят нам не просто красивый вид, а новое качество жизни: эстетику «живой картины» за стеклом, море естественного света, ощущение простора и свободы, престиж и статус элитного жилья, безупречный комфорт без сквозняков и холода, а также личное пространство для романтики и уединения — дом, где современные технологии безупречно служат нашей гармонии с городом и природой.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-blue-600">
              <CheckCircle2 className="w-4 h-4" /> Мечта о комфортном доме
            </div>
          </div>

          {/* Card 2: Reality */}
          <div className="bg-white border border-red-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Что в итоге мы получаем на практике</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Реальность холодного фасадного остекления оказывается жестоким контрастом с мечтой: вместо «живой картины» — запотевшие и обледеневшие рамы, закрывающие вид; вместо моря света — холодный металл, излучающий стужу; вместо ощущения свободы — промерзающие стены и конденсат на подоконниках; вместо престижа — вечная борьба со сквозняками и шумом; вместо комфорта — счета за обогреватели и сырость, разрушающая отделку.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-red-50 flex items-center gap-2 text-xs font-semibold text-red-500">
              <XCircle className="w-4 h-4" /> Системная проблема холодного алюминия
            </div>
          </div>

        </div>

        {/* Solution Banner */}
        <div className="mt-12 bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-sky-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Простое и элегантное инженерное решение
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                Не спешите менять фасад: термокороб создает эффект термоса
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Да, алюминиевый профиль действительно промерзает. Да, он может гудеть на ветру и создавать дискомфорт. Но это не значит, что вам придется либо мириться с холодом, либо менять остекление (что сложно, дорого и часто невозможно технически и архитектурно).
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Инженерная мысль не стоит на месте. Наша <strong className="text-gray-800 font-semibold">«Лаборатория ремонта»</strong> применяет систему бесшовных термокоробов, которая надежно изолирует металлический каркас изнутри, отсекая мостики холода и возвращая панорамным окнам их главную функцию — радовать вас уютом и теплом.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-sky-100 shadow-sm text-center space-y-4">
              <div className="text-2xl font-black text-sky-600">Эффект термоса</div>
              <p className="text-sm text-gray-600">
                Рамы становятся комнатной температуры на ощупь без демонтажа фасадного остекления
              </p>
              <a
                href="#services"
                className="w-full py-3 px-4 bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                Узнать об услугах
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Before / After Slider */}
        <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Визуальное сравнение: До и После установки
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Двигайте ползунок, чтобы увидеть разницу между холодным профилем и смонтированным термокоробом
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto h-[300px] sm:h-[440px] rounded-2xl overflow-hidden select-none border border-gray-200 shadow-md">
            {/* "After" Image (Base) — реальное фото после монтажа термокоробов */}
            <img
              src={getAssetUrl('images/projects/full_JV5OBZCS.jpg')}
              alt="После: Установленный термокороб — белые чистые рамы комнатной температуры"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
              ПОСЛЕ: Бесшовный термокороб
            </div>

            {/* "Before" Image (Clipped) — конденсат и запотевшее стекло */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img
                src={getAssetUrl('images/projects/full_kfGX33dN.jpg')}
                alt="До: Промерзающее запотевшее стекло с конденсатом"
                className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-90"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                ДО: Конденсат, лёд, промерзание
              </div>
            </div>

            {/* Slider Divider */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-xs shadow-xl border-2 border-gray-200">
                ↔
              </div>
            </div>

            {/* Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Сравнение алюминиевой рамы до и после установки термокороба"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          <div className="flex justify-between max-w-4xl mx-auto mt-3 text-xs text-gray-400">
            <span>← Исходный холодный профиль</span>
            <span>Теплый смонтированный термокороб →</span>
          </div>
        </div>

      </div>
    </section>
  );
};
