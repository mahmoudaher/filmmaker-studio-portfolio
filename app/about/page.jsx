import PageHeader from "@/components/PageHeader";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "About – Souleyman Mumtaz",
  description:
    "Learn more about Souleyman Mumtaz, a documentary filmmaker and photojournalist whose work spans film and photography projects.",
};

export default function Page() {
  return (
    <section className="max-w-[1200px] mx-auto px-0 sm:px-6">
      <PageHeader />

      <div className="grid grid-cols-1 md:grid-cols-[500px_1fr] gap-8 mt-8 md:mt-10 items-start">
        <div className="w-full">
          <Image
            src="/assets/about.jpeg"
            alt="Portrait of Souleyman Mumtaz"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="text-sm sm:text-lg text-white/80 sm:text-white/80 font-federo leading-2 sm:leading-[30px] pr-2 space-y-4">
            <p>
              Souleyman Mumtaz is a documentary filmmaker and photojournalist
              whose work explores conflict, resilience, and social change
              through powerful visuals. Since 2013, he has worked independently
              and with international media organizations, producing documentary
              films and photographic projects that examine displacement,
              humanitarian crises, and cultural transformation across the Middle
              East and North Africa.
            </p>
            <p>
              His work has been featured through collaborations with
              humanitarian agencies, global news platforms, and documentary
              networks focused on human rights and crisis response. He
              concentrates on capturing real-life narratives from the ground,
              documenting communities affected by war, migration, and recovery
              through intimate and honest imagery.
            </p>
            <p>
              Over the past decade, he has covered major regional events,
              produced investigative visual stories, and developed documentary
              projects that highlight resilience and everyday survival. His goal
              is to create powerful, authentic work that informs global
              audiences, bridges cultural understanding, and amplifies voices
              that are often overlooked.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
