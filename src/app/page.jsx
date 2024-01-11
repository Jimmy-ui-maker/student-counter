import Form1 from "@/components/100Level/Form1";
import Form2 from "@/components/200Level/Form2";
import Form3 from "@/components/300Level/Form3";
import Form4 from "@/components/400Level/Form4";
import About from "@/components/About";
import AllLevels from "@/components/AllLevels";
import ContactUs from "@/components/ContactUs";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
      <AllLevels />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <ContactUs />
    </>
  );
}
