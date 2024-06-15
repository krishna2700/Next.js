import React from "react";
import ReliabilityImg from "../../../public/reliability.jpg";
import Hero from "@/Components/hero";

const Reliability = () => {
  return (
    <div>
      <Hero
        imgData={ReliabilityImg}
        imgAlt="ReliabilityImg image"
        title="Super High Reliability Hosting"
      />
    </div>
  );
};

export default Reliability;
