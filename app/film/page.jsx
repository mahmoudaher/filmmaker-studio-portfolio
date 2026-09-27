import PageHeader from "@/components/PageHeader";
import Footer from "@/components/footer";
import FilmPageContent from "@/components/FilmPageContent";

export const metadata = {
  title: "Film – Souleyman Mumtaz",
  description:
    "Film work by Souleyman Mumtaz, a documentary filmmaker and photojournalist focusing on human stories and real-world narratives.",
};

export default function Page() {
  return (
    <section className="max-w-[1400px] mx-auto px-0 sm:px-6">
      <PageHeader />

      <FilmPageContent />

      <Footer />
    </section>
  );
}
