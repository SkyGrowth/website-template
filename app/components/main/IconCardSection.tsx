import {
  CARD1,
  CARD2,
  CARD3,
} from "@/app/home-constants/card-icon-section/constants";
import React from "react";
import IconCard from "../sub/IconCard";

const IconCardSection = ({ backgroundStyle }) => {
  return (
    <section
      className={`${backgroundStyle} flex items-center justify-center lg:py-16`}
    >
      <div className="grid gap-3 lg:grid-cols-3">
        <IconCard
          title={CARD1.title}
          description={CARD1.description}
          buttonText={CARD1.buttonText}
          backgroundStyle={CARD1.backgroundStyle}
          icon={CARD1.icon}
          border={CARD1.border}
          titleStyle={CARD1.titleStyle}
          subheadingStyle={CARD1.subheadingStyle}
        />
        <IconCard
          title={CARD2.title}
          description={CARD2.description}
          buttonText={CARD2.buttonText}
          backgroundStyle={CARD2.backgroundStyle}
          icon={CARD2.icon}
          border={CARD2.border}
          titleStyle={CARD2.titleStyle}
          subheadingStyle={CARD2.subheadingStyle}
        />
        <IconCard
          title={CARD3.title}
          description={CARD3.description}
          buttonText={CARD3.buttonText}
          backgroundStyle={CARD3.backgroundStyle}
          icon={CARD3.icon}
          border={CARD3.border}
          titleStyle={CARD3.titleStyle}
          subheadingStyle={CARD3.subheadingStyle}
        />
      </div>
    </section>
  );
};

export default IconCardSection;
