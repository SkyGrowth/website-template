import Image from "next/image";
import React from "react";
import TextSection from "./TextSection";

const RightTextSection = ({
  title,
  subheading,
  titleStyle,
  subheadingStyle,
  buttonText,
  image,
}) => {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row container text-left md:gap-3 gap-10">
      <div>
        <Image
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <TextSection
        title={title}
        subheading={subheading}
        titleStyle={titleStyle}
        subheadingStyle={subheadingStyle}
        buttonText={buttonText}
      />
    </div>
  );
};

export default RightTextSection;
