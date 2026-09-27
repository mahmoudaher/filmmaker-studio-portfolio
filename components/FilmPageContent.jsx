"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { filmProjects } from "@/data/film-projects";

const projects = filmProjects;

export default function FilmPageContent() {
  const [activeVideo, setActiveVideo] = useState(null);
  const dialogRef = useRef(null);

  const openVideo = useCallback((video) => {
    if (!video?.embedUrl) return;
    setActiveVideo(video);
    document.body.style.overflow = "hidden";
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!activeVideo) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo, closeVideo]);

  useEffect(() => {
    if (activeVideo && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [activeVideo]);

  const featured = projects[0];
  const remaining = projects.slice(1);

  return (
    <div className="text-white">
      <section className="mt-6 sm:mt-8 md:mt-12 mb-8 sm:mb-10 md:mb-14">
   
       
      </section>

      {featured && (
        <section className="mb-10 sm:mb-12 md:mb-16">
          <button
            type="button"
            className="group cursor-pointer text-left w-full"
            onClick={() => openVideo(featured)}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.4/1] overflow-hidden rounded-sm">
              <Image
                src={featured.thumbnail}
                alt={featured.title}
                fill
                sizes="100vw"
                priority
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-12">
                <div className="max-w-xl">
                  {featured.accolade && (
                    <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bebas text-red-500 mb-1 sm:mb-2">
                      {featured.accolade}
                    </p>
                  )}

                  <h2 className="text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px] tracking-[0.08em] sm:tracking-[0.12em] uppercase font-federo text-white leading-[1.1] mb-2 sm:mb-3">
                    {featured.title}
                  </h2>

                  <p className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] uppercase font-bebas text-neutral-400 mb-2 sm:mb-3">
                    {featured.role}
                  </p>

                  <p className="text-[11px] sm:text-[12px] md:text-[14px] leading-relaxed text-neutral-300 font-montserrat mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                    {featured.logline}
                  </p>

                  <span className="inline-flex items-center gap-2 sm:gap-3 border border-white/20 bg-black/50 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] uppercase font-bebas text-white group-hover:border-red-700 group-hover:bg-red-900/30 transition-all duration-500">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-red-600 bg-black/60">
                      <FaPlay className="ml-[2px] h-3 w-3 text-red-500" />
                    </span>
                    Watch Film
                  </span>
                </div>
              </div>
            </div>
          </button>
        </section>
      )}

      {remaining.length > 0 && (
        <section className="pb-8 sm:pb-10 md:pb-16">
          <div className="space-y-8 sm:space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14">
            {remaining.map((project, idx) => (
              <article
                key={project._id}
                className={idx % 2 === 1 ? "md:mt-20" : ""}
              >
                <button
                  type="button"
                  className="group cursor-pointer text-left w-full"
                  onClick={() => openVideo(project)}
                >
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-950 rounded-sm">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.85]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/60 backdrop-blur-sm group-hover:border-red-600 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-500">
                          <FaPlay className="ml-[2px] h-4 w-4 text-white group-hover:text-red-500 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[11px] tracking-[0.2em] font-bebas text-white/40">
                        {String(idx + 2).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
                    {project.accolade && (
                      <div className="flex items-center gap-2">
                        <span className="h-px w-3 sm:w-4 bg-red-700" />
                        <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bebas text-red-500">
                          {project.accolade}
                        </p>
                      </div>
                    )}

                    <h2 className="text-[15px] sm:text-[18px] md:text-[22px] tracking-[0.1em] sm:tracking-[0.14em] uppercase font-federo text-white group-hover:text-neutral-200 transition-colors duration-300">
                      {project.title}
                    </h2>

                    <p className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.24em] uppercase font-bebas text-neutral-500">
                      {project.role}
                    </p>

                    <p className="text-[12px] sm:text-[13px] leading-relaxed text-neutral-400 font-montserrat line-clamp-3">
                      {project.logline}
                    </p>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeVideo && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title || "Video lightbox"}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md px-3 sm:px-4 py-4 animate-film-modal-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeVideo();
          }}
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={closeVideo}
              className="absolute -top-10 sm:-top-12 right-0 flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.26em] uppercase font-bebas text-neutral-400 hover:text-white transition-colors"
            >
              <span className="h-px w-4 sm:w-6 bg-neutral-600" />
              Close
            </button>

            <p className="absolute -top-10 sm:-top-12 left-0 text-[11px] sm:text-[12px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bebas text-neutral-500 truncate max-w-[55%] sm:max-w-[60%]">
              {activeVideo.title}
            </p>

            <div className="w-full aspect-[16/9] overflow-hidden border border-neutral-800/50 bg-black shadow-2xl shadow-black/50 rounded-sm">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title || "Film playback"}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
