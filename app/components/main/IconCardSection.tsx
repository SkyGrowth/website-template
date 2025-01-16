import {
  CARD1,
  CARD2,
  CARD3,
} from "@/app/constants/card-image-section/constants";
import React from "react";
import ImageCard from "../sub/ImageCard";

const IconCardSection = ({ backgroundStyle }) => {
  return (
    <section
      className={`${backgroundStyle} flex items-center justify-center lg:py-16`}
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <ImageCard
          title={CARD1.title}
          description={CARD1.description}
          buttonText={CARD1.buttonText}
          backgroundStyle={CARD1.backgroundStyle}
          image={CARD1.image}
          border={CARD1.border}
          titleStyle={CARD1.titleStyle}
          subheadingStyle={CARD1.subheadingStyle}
        />
        <ImageCard
          title={CARD2.title}
          description={CARD2.description}
          buttonText={CARD2.buttonText}
          backgroundStyle={CARD2.backgroundStyle}
          image={CARD2.image}
          border={CARD2.border}
          titleStyle={CARD2.titleStyle}
          subheadingStyle={CARD2.subheadingStyle}
        />
        <ImageCard
          title={CARD3.title}
          description={CARD3.description}
          buttonText={CARD3.buttonText}
          backgroundStyle={CARD3.backgroundStyle}
          image={CARD3.image}
          border={CARD3.border}
          titleStyle={CARD3.titleStyle}
          subheadingStyle={CARD3.subheadingStyle}
        />
      </div>
    </section>
  );
};

export default IconCardSection;
