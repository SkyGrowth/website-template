import Image from "next/image";
import React from "react";
import Button from "../main/Button";

const ImageCard = ({
  title,
  description,
  buttonText,
  backgroundStyle,
  image,
  border,
  titleStyle,
  subheadingStyle,
}) => {
  return (
    <div
      className={`${backgroundStyle} shadow-md border ${border} rounded-lg max-w-sm`}
    >
      <Image
        src={image}
        alt="Picture of the author"
        className="rounded-t-lg w-[500px] h-[300px] object-cover"
      />
      <div className="p-5">
        <h5
          className={`${titleStyle.color} ${titleStyle.fontWeight} text-2xl tracking-tight mb-2`}
        >
          {title}
        </h5>
        <p
          className={`${subheadingStyle.color} ${subheadingStyle.fontWeight} mb-3`}
        >
          {description}
        </p>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default ImageCard;
