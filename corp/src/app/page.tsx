import Hero from "@/Components/hero";
import homeImg from "../../public/home.jpg";

export default function Home() {
  return (
    <>
      <Hero
        imgData={homeImg}
        imgAlt="home image"
        title="Professional Cloud Hosting"
      />
    </>
  );
}
