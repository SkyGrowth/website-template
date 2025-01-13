import Image from "next/image";
import React from "react";
import Button from "../main/Button";
import HeroImage from "../../../public/images/hero.png";

const Card = ({ title, description, buttonText }) => {
  return (
    <div className="shadow-md border border-slate-200 rounded-lg max-w-sm">
      <Image
        src={HeroImage}
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-t-lg"
      />
      <div className="p-5">
        <h5 className="text-slate-900 font-bold text-2xl tracking-tight mb-2">
          {title}
        </h5>
        <p className="font-normal text-slate-700 mb-3">{description}</p>
        <Button text={buttonText} />
      </div>
    </div>
  );
};

export default Card;
