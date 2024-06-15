import Hero from "@/Components/hero";
import React from "react";
import ScaleImg from "../../../public/scale.jpg";

const Scale = () => {
  return (
    <div>
      <Hero
        imgData={ScaleImg}
        imgAlt="ScaleImg image"
        title="Scale your App to infinity"
      />
    </div>
  );
};

export default Scale;
