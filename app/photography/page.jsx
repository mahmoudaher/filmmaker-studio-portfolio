import PageHeader from "@/components/PageHeader";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";
import Footer from "@/components/footer";
import { photographyProjects } from "@/data/photography-projects";

export const metadata = {
  title: "Photography – Souleyman Mumtaz",
  description:
    "Photography projects by Souleyman Mumtaz, a documentary filmmaker and photojournalist capturing powerful visual stories.",
};

const projects = photographyProjects;

export default function Page() {
  return (
    <section className="max-w-[1200px] mx-auto px-0 sm:px-6">
      <PageHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
        {projects.map((project, index) => (
          <TransitionLink
            key={project._id}
            href={`/photography/${project.slug}`}
            className="block group"
          >
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[355px] overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-90"
              />

              <div
                className="
                  absolute inset-0
                  bg-[#8a3b3b]
                  mix-blend-multiply
                  opacity-0 group-hover:opacity-60
                  transition-opacity duration-500 ease-out
                "
                aria-hidden="true"
              />
            </div>

            <p className="text-[15px] text-[#efd2d2] uppercase font-federo mt-2 transition-colors duration-300 group-hover:text-white text-center">
              {project.title}
            </p>
          </TransitionLink>
        ))}
      </div>

      <Footer />
    </section>
  );
}
