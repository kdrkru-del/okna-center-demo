import React, { useState } from 'react';
import { Settings2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { ParameterConfig } from '../types';

interface CalculatorProps {
  onApplyConfig: (config: ParameterConfig) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onApplyConfig }) => {
  const [structureType, setStructureType] = useState('Прямая лоджия');
  const [footage, setFootage] = useState(8);
  const [colorOption, setColorOption] = useState('Базовый белый шелк RAL 9016');
  const [serviceLevel, setServiceLevel] = useState('Установка «под ключ» с замером');

  const structureOptions = [
    { label: 'Прямая лоджия', desc: 'Стандартная витражная секция (2–4 створки)' },
    { label: 'Угловой балкон', desc: 'Стойки с угловым поворотом и сопряжением' },
    { label: 'Панорамный фасад в пол', desc: 'Витраж от пола до потолка большой высоты' },
    { label: 'Эркерное остекление', desc: 'Нестандартные радиусные или ломаные углы' }
  ];

  const colorOptions = [
    { label: 'Базовый белый шелк RAL 9016', code: '#FFFFFF' },
    { label: 'Графитовый антрацит RAL 7016', code: '#374151' },
    { label: 'Матовый глубокий черный RAL 9005', code: '#111827' },
    { label: 'Ламинация под текстуру дерева', code: '#854D0E' }
  ];

  const serviceOptions = [
    'Установка «под ключ» с замером',
    'Только изготовление и поставка комплекта коробов',
    'Изготовление по размерам заказчика'
  ];

  const handleApply = () => {
    onApplyConfig({
      structureType,
      footage: `${footage} пог. м стоек/ригелей`,
      color: colorOption,
      serviceLevel,
      notes: `Выбранный тип: ${structureType}, объем: ${footage} м, цвет: ${colorOption}, формат: ${serviceLevel}`
    });
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#090D12] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Подбор параметров
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Конфигуратор параметров для расчета остекления
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Укажите характеристики вашего остекления. Инженер лаборатории подготовит индивидуальный расчет с учетом геометрических особенностей профильной системы.
          </p>
        </div>

        {/* Configurator Card */}
        <div className="mt-14 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Configuration Controls */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Step 1: Structure Type */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-mono">1</span>
                  Тип вашей конструкции:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {structureOptions.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setStructureType(opt.label)}
                      className={`p-3.5 rounded-xl border text-left transition-all text-xs flex flex-col justify-between gap-1.5 cursor-pointer ${
                        structureType === opt.label
                          ? 'bg-orange-500/10 border-orange-500 text-white shadow-md'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span className="font-semibold">{opt.label}</span>
                      <span className="text-[11px] text-slate-400">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Footage Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-mono">2</span>
                    Ориентировочная длина стоек и ригелей:
                  </label>
                  <span className="text-base font-black text-orange-400 font-mono bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                    ~ {footage} пог. м
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="40"
                  step="1"
                  value={footage}
                  onChange={(e) => setFootage(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>3 м (небольшая лоджия)</span>
                  <span>15 м (стандартный балкон)</span>
                  <span>40 м (витражный фасад в пол)</span>
                </div>
              </div>

              {/* Step 3: Color & Lamination */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-mono">3</span>
                  Цвет и покрытие:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {colorOptions.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setColorOption(item.label)}
                      className={`p-3 rounded-xl border text-left transition-all text-xs flex items-center gap-2.5 cursor-pointer ${
                        colorOption === item.label
                          ? 'bg-orange-500/10 border-orange-500 text-white shadow-sm'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: item.code }}
                      />
                      <span className="text-xs font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Service Level */}
              <div className="space-y-3 pt-1">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 text-xs flex items-center justify-center font-mono">4</span>
                  Формат сотрудничества:
                </label>
                <div className="space-y-2">
                  {serviceOptions.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        serviceLevel === opt
                          ? 'bg-orange-500/10 border-orange-500 text-white'
                          : 'bg-slate-800/40 border-slate-700/80 text-slate-300 hover:bg-slate-800/70'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceLevel"
                        checked={serviceLevel === opt}
                        onChange={() => setServiceLevel(opt)}
                        className="w-4 h-4 text-orange-500 focus:ring-orange-500 accent-orange-500"
                      />
                      <span className="text-xs font-medium">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Specification Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B0F14] border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="space-y-6 text-left">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-orange-400" />
                    <span className="font-bold text-white text-base">Спецификация для расчета</span>
                  </div>
                  <span className="text-[11px] text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20 font-bold">
                    Без выдуманных цен
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Тип объекта:</span>
                    <span className="text-white font-medium text-right">{structureType}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Примерный объем:</span>
                    <span className="text-white font-medium">~ {footage} пог. м</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Цвет и фактура:</span>
                    <span className="text-white font-medium text-right">{colorOption}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400">Формат работ:</span>
                    <span className="text-white font-medium text-right">{serviceLevel}</span>
                  </div>
                </div>

                {/* Honest Engineering Explanation */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-400">
                    <ShieldCheck className="w-4 h-4" /> Честный подход к смете:
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Каждая стоечно-ригельная система имеет свои геометрические пазы, толщину стоек и схему примыкания к стенам. Окончательная смета рассчитывается после лазерного замера инженера на объекте без скрытых доплат.
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Прямое изготовление в цехе без посредников</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Выезд на замер по Владивостоку</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 pt-4 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 px-5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-orange-600/30 hover:shadow-orange-600/40 transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                >
                  Перенести параметры в заявку на расчет
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 text-center">
                  Параметры автоматически перейдут в форму обращения ниже
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
