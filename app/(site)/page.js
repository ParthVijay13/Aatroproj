import Image from "next/image";
import Navbar from "./components/navbar";
import MainBanner from "./components/mainbanner";
import FAQSection from "./components/faqSection";
import IntroductionSection from "./components/introductionSection";
import ServicesOverview from "./components/servicesOverview";
import TestimonialsSection from "./components/testimonialsSection";
export default function Home() {
  return (
    <>
      {/* <h1 className="p-[1rem]">Home</h1> */}
      {/* <Navbar/> */}
      <MainBanner/>
      <IntroductionSection
        name="Ravindra Purohit"
        shortBio="I'm Ravindra Purohit, an author and knowledge seeker passionate about life's profound truths. My journey spans spirituality, emotional well-being, and self-development, inspiring my books on EFT Tapping, Sanatan culture, and Shiv Swarodaya Shastra. Through this platform, I offer astrological predictions and professional guidance to help navigate life's challenges. Join me as I blend ancient wisdom with modern insights to empower personal transformation."
        imageUrl="/images/RavindraImage.jpg" // Place your image in the public/images folder
        imageAlt="image"
        learnMoreUrl="/about"
      />

      <ServicesOverview/>
      {/* <TestimonialsSection/> */}

      <FAQSection/>

    </>
  );
}
