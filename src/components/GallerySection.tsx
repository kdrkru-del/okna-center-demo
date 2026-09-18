import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/content';
import type { ProjectItem } from '../types';
import { ZoomIn, MapPin, X } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'facade' | 'loggia' | 'details'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            Фото работ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Реализованные объекты во Владивостоке
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Реальные фотографии термокоробов на панорамных фасадах, лоджиях и эркерах от компании «ОКНА-ЦЕНТР».
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {[
            { id: 'all', label: 'Все объекты' },
            { id: 'facade', label: 'Панорамные фасады' },
            { id: 'loggia', label: 'Лоджии и балконы' },
            { id: 'details', label: 'Инженерные узлы' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as 'all' | 'facade' | 'loggia' | 'details')}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all min-h-[44px] cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white border border-gray-200 hover:border-sky-300 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg hover:shadow-sky-100 flex flex-col justify-between text-left"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={getAssetUrl(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-sky-700 rounded-md border border-sky-100 shadow-sm">
                    {project.categoryLabel}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-sky-900/20 backdrop-blur-[1px]">
                    <span className="p-3 rounded-full bg-white text-sky-600 shadow-xl">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                <div className="p-5 text-left space-y-3">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400">Результат:</span>
                  <span className="text-emerald-600 font-semibold">{project.specs.afterState}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white border border-gray-200 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 border border-gray-200 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Закрыть окно просмотра"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 bg-gray-100 max-h-[500px] flex items-center justify-center">
                  <img
                    src={getAssetUrl(selectedProject.image)}
                    alt={selectedProject.title}
                    className="max-h-[500px] w-full object-contain"
                  />
                </div>

                <div className="lg:col-span-5 p-6 text-left flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                      {selectedProject.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" />
                      {selectedProject.location}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                      {selectedProject.description}
                    </p>

                    <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 space-y-2 mt-4 text-xs">
                      <div>
                        <span className="text-gray-400 block text-[11px]">До монтажа:</span>
                        <span className="text-red-500 font-medium">{selectedProject.specs.beforeState}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px]">После монтажа:</span>
                        <span className="text-emerald-600 font-semibold">{selectedProject.specs.afterState}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block text-[11px]">Покрытие:</span>
                        <span className="text-gray-800">{selectedProject.specs.finish}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const el = document.getElementById('contacts');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm rounded-xl transition-colors min-h-[44px] cursor-pointer shadow-md shadow-sky-500/25"
                  >
                    Запросить консультацию по объекту
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
