import React, { useState } from 'react';
import { KNOWLEDGE_BASE } from '../data/content';
import { Thermometer, Volume2, Sparkles, ShieldAlert, ChevronDown } from 'lucide-react';

export const WhatToKnow: React.FC = () => {
  const [openProblem, setOpenProblem] = useState<number | null>(1);

  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Thermometer className="w-5 h-5 text-sky-500" />;
      case 2:
        return <Volume2 className="w-5 h-5 text-indigo-500" />;
      case 3:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 4:
        return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      default:
        return <Thermometer className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="knowledge" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            База знаний • Экспертиза
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {KNOWLEDGE_BASE.title}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            {KNOWLEDGE_BASE.subtitle}
          </p>
        </div>

        {/* Intro Quote Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {KNOWLEDGE_BASE.intro}
          </p>
        </div>

        {/* 4 Interactive Problem Cards */}
        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          {KNOWLEDGE_BASE.problems.map((prob) => {
            const isOpen = openProblem === prob.id;
            return (
              <div
                key={prob.id}
                className={`bg-white border rounded-2xl transition-all duration-300 text-left overflow-hidden ${
                  isOpen
                    ? 'border-sky-300 shadow-md ring-1 ring-sky-100'
                    : 'border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenProblem(isOpen ? null : prob.id)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                      {getIcon(prob.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-sky-600">
                          {prob.num}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {prob.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5 font-medium">
                        {prob.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-600 bg-sky-50' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-gray-100 space-y-3.5 animate-in fade-in duration-200">
                    {prob.content.map((p, idx) => (
                      <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
