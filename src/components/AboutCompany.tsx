import React from 'react';
import { ABOUT_COMPANY } from '../data/content';
import { Award, Clock, Wrench, ShieldCheck, Factory, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const AboutCompany: React.FC = () => {
  const getAdvIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles className="w-5 h-5 text-sky-500" />;
      case 1:
        return <Award className="w-5 h-5 text-amber-500" />;
      case 2:
        return <Clock className="w-5 h-5 text-emerald-500" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-blue-500" />;
      default:
        return <Wrench className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            О компании
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {ABOUT_COMPANY.title}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            {ABOUT_COMPANY.subtitle}
          </p>
        </div>

        {/* Two-Column Story Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: Detailed Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left text-gray-600 text-sm sm:text-base leading-relaxed">
            <div className="border-l-4 border-sky-500 pl-4 py-1">
              <p className="font-semibold text-gray-800 italic text-base sm:text-lg">
                «Компания начиналась с простой, но важной миссии — помогать людям возвращать комфорт в их дома.»
              </p>
            </div>

            <p>{ABOUT_COMPANY.storyP1}</p>
            <p>{ABOUT_COMPANY.storyP2}</p>
            <p>{ABOUT_COMPANY.storyP3}</p>
            
            <div className="p-5 bg-sky-50/60 rounded-2xl border border-sky-100 space-y-2 text-sm text-gray-700">
              <p className="font-semibold text-sky-900">
                {ABOUT_COMPANY.storyP4}
              </p>
              <p>{ABOUT_COMPANY.storyP5}</p>
            </div>

            <p>{ABOUT_COMPANY.storyP6}</p>
            <p className="font-medium text-gray-800">{ABOUT_COMPANY.storyP7}</p>
          </div>

          {/* Right: Production Photo & Advantages */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Production Factory Photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group">
              <img
                src={getAssetUrl('images/projects/c4a407dfcfd2b4c5832060ec67a0ae9d.jpg')}
                alt="Собственный производственный цех Лаборатории ремонта компании ОКНА-ЦЕНТР во Владивостоке"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-md text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
                  <Factory className="w-4 h-4" />
                  Собственный цех во Владивостоке
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Весь цикл раскроя и подгонки термокоробов на специализированном оборудовании
                </p>
              </div>
            </div>

            {/* 4 Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
              {ABOUT_COMPANY.advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2 hover:border-sky-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-white shadow-xs border border-gray-100">
                      {getAdvIcon(idx)}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {adv.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
