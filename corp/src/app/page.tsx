import Image from "next/image";
import homeImg from "../../public/home.jpg";
export default function Home() {
  return (
    <>
      <div>Home Page</div>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="homeImg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
}
