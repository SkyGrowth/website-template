import Image from "next/image";
import React from "react";
import Header from "./Header";

const Hero = ({ title, subheading, buttonText, image }) => {
  return (
    <div className="bg-slate-200 flex items-center justify-center md:flex-row container text-left md:gap-3 gap-10">
      <Header title={title} subheading={subheading} buttonText={buttonText} />

      <div className="hidden sm:block">
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Hero;
