import React from 'react';
import { REVIEWS } from '../data/content';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0D131B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Отзывы клиентов
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Отзывы заказчиков компании «ОКНА-ЦЕНТР»
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Подлинный опыт заказчиков из Владивостока, решивших проблему промерзания алюминиевого фасадного остекления.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left relative group shadow-lg"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400" aria-label={`Оценка ${rev.rating} из 5`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-800 group-hover:text-orange-500/20 transition-colors" />
                </div>

                {/* Highlight Quote */}
                <p className="text-sm font-bold text-orange-400 italic">
                  «{rev.highlight}»
                </p>

                {/* Full Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {rev.text}
                </p>

              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    {rev.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">{rev.role}</div>
                </div>
                <span className="text-[11px] font-mono text-slate-500">{rev.city}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
