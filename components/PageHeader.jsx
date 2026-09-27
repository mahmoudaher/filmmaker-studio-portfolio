import Navbar from "@/components/Navbar";

export default function PageHeader() {
  return (
    <header>
      <div className="flex items-center justify-between pt-2 md:pt-4 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-8 bg-red-700 hidden md:block" />
          <div>
            <h1 className="font-futura text-[22px] sm:text-[26px] text-white leading-none tracking-[0.04em]">
              SOULEYMAN MUMTAZ
            </h1>
            <p className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-neutral-500 font-bebas mt-0.5">
              Documentary Filmmaker & Photojournalist
            </p>
          </div>
        </div>

        <Navbar />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </header>
  );
}
