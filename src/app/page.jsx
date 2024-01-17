import Form1 from "@/components/100Level/Record1";
import Form2 from "@/components/200Level/Record2";
import Form3 from "@/components/300Level/Record3";
import Form4 from "@/components/400Level/Record4";
import Combine from "@/components/Combine";
import AllLevels from "@/components/AllLevels";
import ContactUs from "@/components/ContactUs";
import FAQs from "@/components/FAQS";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import Matrics from "@/components/Matrics";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Combine />
      <About />
      
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <FAQs />
      <ContactUs />
    </>
  );
}
