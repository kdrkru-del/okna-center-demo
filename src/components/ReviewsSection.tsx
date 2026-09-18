import React from 'react';
import { REVIEWS } from '../data/content';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Отзывы клиентов
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Отзывы заказчиков компании «ОКНА-ЦЕНТР»
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Подлинный опыт заказчиков из Владивостока, решивших проблему промерзания алюминиевого фасадного остекления.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-50 border border-gray-200 hover:border-sky-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left relative group shadow-sm hover:shadow-md transition-all"
            >
              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400" aria-label={`Оценка ${rev.rating} из 5`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gray-200 group-hover:text-sky-100 transition-colors" />
                </div>

                {/* Highlight Quote */}
                <p className="text-sm font-bold text-sky-600 italic">
                  «{rev.highlight}»
                </p>

                {/* Full Review Text */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {rev.text}
                </p>

              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                    {rev.author}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="text-xs text-gray-500">{rev.role}</div>
                </div>
                <span className="text-[11px] font-mono text-gray-400">{rev.city}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
