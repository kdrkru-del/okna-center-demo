import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import type { LeadFormData } from '../types';

interface ContactSectionProps {
  initialData?: Partial<LeadFormData>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    email: initialData?.email || '',
    structureType: initialData?.structureType || 'Прямая лоджия',
    footage: initialData?.footage || '',
    color: initialData?.color || '',
    contactMethod: initialData?.contactMethod || 'whatsapp',
    message: initialData?.message || ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.startsWith('8')) val = '7' + val.slice(1);
    if (!val.startsWith('7')) val = '7' + val;

    let formatted = '+7';
    if (val.length > 1) formatted += ' (' + val.substring(1, 4);
    if (val.length >= 5) formatted += ') ' + val.substring(4, 7);
    if (val.length >= 8) formatted += '-' + val.substring(7, 9);
    if (val.length >= 10) formatted += '-' + val.substring(9, 11);

    setFormData({ ...formData, phone: formatted });
    if (errors.phone) setErrors({ ...errors, phone: '' });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Пожалуйста, укажите ваше имя';
    if (!formData.phone || formData.phone.length < 18) {
      errs.phone = 'Укажите корректный номер телефона (+7 XXX XXX-XX-XX)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const prefilledMessage = `Здравствуйте! Обращение с сайта «Окна-Центр» (Лаборатория ремонта):\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nКонструкция: ${formData.structureType}\nОбъем стоек: ${formData.footage || 'уточняется'}\nЦвет: ${formData.color || 'по согласованию'}\nСообщение: ${formData.message || 'Требуется консультация и выезд инженера'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(prefilledMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const inputBase = "w-full px-3.5 py-3 rounded-xl bg-white border text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 min-h-[44px] transition-colors";

  return (
    <section id="contacts" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Контакты и заявка
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Свяжитесь с лабораторией ремонта «ОКНА-ЦЕНТР»
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Ответим на вопросы, проконсультируем по типу профиля и организуем выезд специалиста на замер во Владивостоке.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">

              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Офис и Лаборатория
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Компания «ОКНА-ЦЕНТР»
                </h3>
                <p className="text-xs text-gray-500">
                  Лаборатория ремонта светопрозрачных конструкций
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-gray-700 text-sm">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-500 shrink-0 mt-0.5 border border-sky-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-gray-900 block font-semibold">Адрес:</strong>
                  <span>{COMPANY_INFO.address}</span>
                  <span className="text-xs text-gray-400 block mt-0.5">г. Владивосток, Приморский край</span>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3.5 text-gray-700 text-sm">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-500 shrink-0 mt-0.5 border border-sky-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-gray-900 block font-semibold">Телефоны:</strong>
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <div key={idx}>
                      <a href={`tel:${p.raw}`} className="hover:text-sky-600 font-medium transition-colors">
                        {p.display}
                      </a>
                      <span className="text-[11px] text-gray-400 ml-2">({p.type})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-gray-700 text-sm">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-500 shrink-0 mt-0.5 border border-sky-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-gray-900 block font-semibold">Электронная почта:</strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-600 font-mono transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 text-gray-700 text-sm">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-500 shrink-0 mt-0.5 border border-sky-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-gray-900 block font-semibold">Режим работы:</strong>
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Написать в WhatsApp (+7 914 072-22-22)
                </a>
              </div>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      Запрос на расчет и выезд специалиста
                    </h3>
                    <p className="text-xs text-gray-500">
                      Заполните форму, и мы свяжемся с вами в рабочее время для согласования деталей.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Ваше имя <span className="text-sky-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Как к вам обращаться"
                        className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Номер телефона <span className="text-sky-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (___) ___-__-__"
                        className={`${inputBase} font-mono ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                      />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Email (для отправки сметы)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.ru"
                        className={`${inputBase} border-gray-200`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700 block">
                        Тип объекта
                      </label>
                      <select
                        value={formData.structureType}
                        onChange={(e) => setFormData({ ...formData, structureType: e.target.value })}
                        className={`${inputBase} border-gray-200`}
                      >
                        <option value="Прямая лоджия">Прямая лоджия</option>
                        <option value="Угловой балкон">Угловой балкон</option>
                        <option value="Панорамный фасад в пол">Панорамный фасад в пол</option>
                        <option value="Эркерное остекление">Эркерное остекление</option>
                        <option value="Только покупка комплекта коробов">Только покупка комплекта коробов</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Method */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 block">
                      Удобный способ связи
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'whatsapp', label: 'WhatsApp' },
                        { id: 'phone', label: 'Телефонный звонок' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: m.id as 'whatsapp' | 'phone' })}
                          className={`py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                            formData.contactMethod === m.id
                              ? 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/20'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 block">
                      Комментарий / Адрес во Владивостоке
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите ситуацию: новостройка, промерзание стоек, конденсат..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Подготовить и отправить запрос
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с законодательством РФ.
                  </p>
                </form>
              ) : (
                /* Honest Fallback */
                <div className="space-y-6 text-left">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">Данные вашего обращения сформированы!</h4>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Так как внешний сервер на статическом сайте не подключен, выберите удобный подтвержденный канал для отправки:
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/79140722222?text=${encodeURIComponent(prefilledMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Отправить в WhatsApp (+7 914 072-22-22)
                    </a>

                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Запрос с сайта ОКНА-ЦЕНТР')}&body=${encodeURIComponent(prefilledMessage)}`}
                      className="w-full py-3.5 px-4 bg-white hover:bg-gray-50 text-gray-700 font-bold text-sm rounded-xl flex items-center justify-center gap-2 border border-gray-200 transition-all min-h-[44px]"
                    >
                      <Mail className="w-4 h-4 text-sky-500" />
                      Отправить на Email (teplo_al@mail.ru)
                    </a>

                    <button
                      onClick={handleCopy}
                      className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-800 font-medium text-sm rounded-xl flex items-center justify-center gap-2 border border-gray-200 transition-all min-h-[44px] cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Текст скопирован в буфер обмена!' : 'Скопировать текст обращения'}
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 text-xs">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Текст заявки:</span>
                    <pre className="whitespace-pre-wrap font-mono text-[11px] text-gray-500">{prefilledMessage}</pre>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-sky-600 hover:underline cursor-pointer"
                  >
                    ← Вернуться и отредактировать параметры
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
