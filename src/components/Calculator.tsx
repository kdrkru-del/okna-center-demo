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
    { label: 'Базовый белый шелк RAL 9016', code: '#F8FAFC' },
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
    <section id="calculator" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Подбор параметров
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Конфигуратор параметров для расчета остекления
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Укажите характеристики вашего остекления. Инженер лаборатории подготовит индивидуальный расчет с учетом геометрических особенностей профильной системы.
          </p>
        </div>

        {/* Configurator Card */}
        <div className="mt-14 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8 text-left">

              {/* Step 1: Structure Type */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-mono font-bold">1</span>
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
                          ? 'bg-sky-50 border-sky-400 text-gray-900 shadow-sm'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-white'
                      }`}
                    >
                      <span className="font-semibold">{opt.label}</span>
                      <span className="text-[11px] text-gray-400">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Footage Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-mono font-bold">2</span>
                    Ориентировочная длина стоек и ригелей:
                  </label>
                  <span className="text-base font-black text-sky-600 font-mono bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>3 м (небольшая лоджия)</span>
                  <span>15 м (стандартный балкон)</span>
                  <span>40 м (витражный фасад)</span>
                </div>
              </div>

              {/* Step 3: Color */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-mono font-bold">3</span>
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
                          ? 'bg-sky-50 border-sky-400 text-gray-900 shadow-sm'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-white'
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-gray-300 shrink-0"
                        style={{ backgroundColor: item.code }}
                      />
                      <span className="text-xs font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Service Level */}
              <div className="space-y-3 pt-1">
                <label className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 text-xs flex items-center justify-center font-mono font-bold">4</span>
                  Формат сотрудничества:
                </label>
                <div className="space-y-2">
                  {serviceOptions.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        serviceLevel === opt
                          ? 'bg-sky-50 border-sky-400 text-gray-900'
                          : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="serviceLevel"
                        checked={serviceLevel === opt}
                        onChange={() => setServiceLevel(opt)}
                        className="w-4 h-4 text-sky-500 focus:ring-sky-500 accent-sky-500"
                      />
                      <span className="text-xs font-medium">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Summary */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="space-y-6 text-left">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div className="flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-sky-500" />
                    <span className="font-bold text-gray-900 text-base">Спецификация для расчета</span>
                  </div>
                  <span className="text-[11px] text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200 font-bold">
                    Без выдуманных цен
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Тип объекта:</span>
                    <span className="text-gray-800 font-medium text-right">{structureType}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Примерный объем:</span>
                    <span className="text-gray-800 font-medium">~ {footage} пог. м</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Цвет и фактура:</span>
                    <span className="text-gray-800 font-medium text-right">{colorOption}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Формат работ:</span>
                    <span className="text-gray-800 font-medium text-right">{serviceLevel}</span>
                  </div>
                </div>

                {/* Honest note */}
                <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
                    <ShieldCheck className="w-4 h-4" /> Честный подход к смете:
                  </div>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Каждая стоечно-ригельная система имеет свои геометрические пазы, толщину стоек и схему примыкания к стенам. Окончательная смета рассчитывается после замера инженера на объекте без скрытых доплат.
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Прямое изготовление в цехе без посредников</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Выезд на замер по Владивостоку</span>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8 pt-4 border-t border-gray-200 space-y-2">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 px-5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-xl shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                >
                  Перенести параметры в заявку
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-gray-400 text-center">
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
