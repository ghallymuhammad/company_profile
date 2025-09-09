// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OnlineCourse from "./online-course";
import CarouselFeatures from "./testimonials";
import TeamsPage from "./teams";
import AboutPage from "./about";
import ServicesPage from "./services";
import BlogListPage from "./blogs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <AboutPage />
      <ServicesPage />
      <OnlineCourse />
      <CarouselFeatures />
      <TeamsPage />
      <BlogListPage />
      <Footer />
    </>
  );
}
