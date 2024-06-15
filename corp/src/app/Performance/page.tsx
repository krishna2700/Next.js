import Hero from "@/Components/hero";
import React from "react";
import PerformanceImg from "../../../public/performance.jpg";

const Performance = () => {
  return (
    <div>
      <Hero
        imgData={PerformanceImg}
        imgAlt="PerformanceImg image"
        title="Professional Cloud Hosting"
      />
    </div>
  );
};

export default Performance;
