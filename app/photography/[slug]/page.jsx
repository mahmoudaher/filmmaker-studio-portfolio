import PageHeader from "@/components/PageHeader";
import Footer from "@/components/footer";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import {
  getProjectBySlug,
  photographyProjects,
} from "@/data/photography-projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return photographyProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project – Souleyman Mumtaz" };
  return {
    title: `${project.title} – Souleyman Mumtaz`,
    description: `Photography project: ${project.title}. Documentary filmmaker and photojournalist.`,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-[1200px] mx-auto px-0 sm:px-6">
      <PageHeader />

      <div className="mt-8 md:mt-10 pb-10 text-white">
        <p className="text-[26px] sm:text-[35px] font-bebas opacity-90 leading-tight text-center md:text-left">
          {project.title}
        </p>
        <p className="text-sm sm:text-base md:text-md text-[#efd2d2] mb-8 opacity-90 font-thin mt-2 text-justify md:text-left leading-7 sm:leading-2">
          {project.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 [grid-auto-flow:dense]">
          {project.images.map((src, index) => {
            const pattern = index % 6;
            const layout = [
              "sm:col-span-2 aspect-[3/2]", // wide hero
              "aspect-[2/3]", // portrait
              "aspect-[4/3]", // landscape
              "sm:col-span-2 aspect-[16/9]", // cinematic wide
              "aspect-[4/5]", // tall portrait
              "aspect-square", // square
            ][pattern];

            return (
              <div
                key={src}
                className={`relative w-full overflow-hidden bg-zinc-900 ${layout}`}
              >
                <Image
                  src={src}
                  alt={`${project.title} – image ${index + 1}`}
                  fill
                  sizes={
                    pattern === 0 || pattern === 3
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                  className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            );
          })}
        </div>
      </div>

      <TransitionLink
        href="/photography"
        className="inline-block text-[#efd2d2] text-[12px] uppercase font-federo tracking-[0.35em] transition-colors hover:opacity-80 mb-6"
      >
        ← Back to Photography
      </TransitionLink>

      <Footer />
    </section>
  );
}
