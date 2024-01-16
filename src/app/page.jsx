import Form1 from "@/components/100Level/Record1";
import Form2 from "@/components/200Level/Record2";
import Form3 from "@/components/300Level/Record3";
import Form4 from "@/components/400Level/Record4";
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
