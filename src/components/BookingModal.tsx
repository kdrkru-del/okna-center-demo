import React, { useState, useEffect } from 'react';
import { X, ThermometerSnowflake, CheckCircle2, Phone, Send, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.startsWith('8')) val = '7' + val.slice(1);
    if (!val.startsWith('7')) val = '7' + val;

    let formatted = '+7';
    if (val.length > 1) formatted += ' (' + val.substring(1, 4);
    if (val.length >= 5) formatted += ') ' + val.substring(4, 7);
    if (val.length >= 8) formatted += '-' + val.substring(7, 9);
    if (val.length >= 10) formatted += '-' + val.substring(9, 11);

    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || phone.length < 18) return;
    setSubmitted(true);
  };

  const bookingMsg = `Запись на замер и тепловизионную диагностику (Окна-Центр, Владивосток):\nИмя: ${name}\nТелефон: ${phone}\nЖелаемая дата: ${date || 'в ближайшее время'}\nАдрес/район: ${address || 'уточняется'}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Вызов инженера-диагноста"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#0F141C] border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Закрыть окно"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Вызов специалиста на замер</h3>
                <p className="text-xs text-slate-400">С тепловизором во Владивостоке</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              Специалист проведет осмотр фасадного остекления, выявит зоны промерзания, снимет точные размеры стоек и подготовит смету без посредников.
            </p>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Ваше имя <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[44px]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Номер телефона <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm font-mono focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[44px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Желаемая дата
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Адрес / Район
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="ул. Ильичева..."
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[44px]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Сформировать заявку на замер
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              Выезд специалиста по Владивостоку согласовывается по телефону
            </p>

          </form>
        ) : (
          <div className="space-y-5 text-left animate-in fade-in duration-200">
            <div className="flex items-center gap-3 text-emerald-400">
              <CheckCircle2 className="w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-bold text-base text-white">Заявка на выезд сформирована!</h4>
                <p className="text-xs text-slate-300">Свяжитесь напрямую с дежурным специалистом:</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/79140722222?text=${encodeURIComponent(bookingMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4" />
                Отправить в WhatsApp (+7 914 072-22-22)
              </a>

              <a
                href="tel:+79140722222"
                className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 border border-slate-700 min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Позвонить дежурному инженеру
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-white underline w-full text-center block pt-2 cursor-pointer"
            >
              Закрыть окно
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
