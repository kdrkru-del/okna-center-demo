import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Send, MessageSquare, Square } from 'lucide-react';

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

  const bookingMsg = `Запись на замер (Окна-Центр, Лаборатория ремонта, Владивосток):\nИмя: ${name}\nТелефон: ${phone}\nЖелаемая дата: ${date || 'в ближайшее время'}\nАдрес/район: ${address || 'уточняется'}`;

  const inputClass = "w-full px-3.5 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 min-h-[44px] transition-colors";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Обсудить утепление — вызов специалиста"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-white border border-gray-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 border border-gray-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Закрыть окно"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-50 text-sky-500 border border-sky-100">
                <Square className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Обсудить утепление</h3>
                <p className="text-xs text-gray-500">Выезд специалиста во Владивостоке</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed pt-1">
              Специалист проведет осмотр фасадного остекления, выявит зоны промерзания, снимет точные размеры стоек и подготовит смету без посредников.
            </p>

            <div className="space-y-3 pt-1">
              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                  Ваше имя <span className="text-sky-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                  Номер телефона <span className="text-sky-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__"
                  className={`${inputClass} font-mono`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    Желаемая дата
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 block mb-1.5">
                    Адрес / Район
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="ул. Ильичева..."
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-xl shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Сформировать заявку на замер
              </button>
            </div>

            <p className="text-[11px] text-gray-400 text-center">
              Выезд специалиста по Владивостоку согласовывается по телефону
            </p>
          </form>
        ) : (
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-3 text-emerald-600">
              <CheckCircle2 className="w-8 h-8 shrink-0" />
              <div>
                <h4 className="font-bold text-base text-gray-900">Заявка на выезд сформирована!</h4>
                <p className="text-xs text-gray-600">Свяжитесь напрямую с дежурным специалистом:</p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/79140722222?text=${encodeURIComponent(bookingMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 min-h-[44px] shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Отправить в WhatsApp (+7 914 072-22-22)
              </a>

              <a
                href="tel:+79140722222"
                className="w-full py-3.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-sm rounded-xl flex items-center justify-center gap-2 border border-gray-200 min-h-[44px] transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-500" />
                Позвонить дежурному инженеру
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-gray-400 hover:text-gray-700 underline w-full text-center block pt-1 cursor-pointer"
            >
              Закрыть окно
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
