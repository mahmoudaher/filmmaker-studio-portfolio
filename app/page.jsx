"use client";
import HomePageVid from "@/components/HomePageVid";
import TransitionLink from "@/components/TransitionLink";

export default function Page() {
  return (
    <section id="home" className="relative w-screen h-[100svh] overflow-hidden">
      <HomePageVid />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-federo tracking-[0.05em] leading-none text-[40px] sm:text-[100px] md:text-[120px] text-transparent bg-clip-text bg-gradient-to-b from-white/95 via-slate-200 to-zinc-500">
          SOULEYMAN
        </h1>
        <p className="text-white/70 tracking-[0.35em] text-xs sm:text-sm mb-4">
          DOCUMENTARY FILMMAKER & PHOTOJOURNALIST
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <TransitionLink
            href="/photography"
            className="relative group px-4 font-sansita tracking-[3px] sm:px-16 py-3 text-white text-xs sm:text-sm overflow-hidden"
          >
            <span className="relative z-10">PHOTOGRAPHY</span>
            <span className="absolute top-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute bottom-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute left-0 top-0 h-full border-l border-white"></span>
            <span className="absolute right-0 top-0 h-full border-r border-white"></span>
          </TransitionLink>

          <TransitionLink
            href="/film"
            className="relative group px-6 sm:px-16 py-3 font-sansita tracking-[3px] text-white text-xs sm:text-sm overflow-hidden"
          >
            <span className="relative z-10">FILM</span>
            <span className="absolute top-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-t border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute bottom-0 left-0 right-0 flex justify-between">
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
              <span className="block w-5 border-b border-white transition-all duration-700 group-hover:w-full"></span>
            </span>
            <span className="absolute left-0 top-0 h-full border-l border-white"></span>
            <span className="absolute right-0 top-0 h-full border-r border-white"></span>
          </TransitionLink>
        </div>
      </div>

      <p className="absolute bottom-2 right-4 z-10 text-white/20 text-[10px] sm:text-sm">
        Developed by Mahmoud Al Daher
      </p>
    </section>
  );
}
