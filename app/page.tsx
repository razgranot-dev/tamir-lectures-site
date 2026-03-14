import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LectureTopics from "@/components/LectureTopics";
import BookSection from "@/components/BookSection";
import WhyInvite from "@/components/WhyInvite";
import IdealAudiences from "@/components/IdealAudiences";
import MediaStrip from "@/components/MediaStrip";
import BookingCTA from "@/components/BookingCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <LectureTopics />
        <BookSection />
        <WhyInvite />
        <IdealAudiences />
        <MediaStrip />
        <BookingCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
