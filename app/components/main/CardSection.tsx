import { CARD1, CARD2, CARD3 } from "@/app/constants/card-section/constants";
import React from "react";
import Card from "../sub/Card";

const CardSection = () => {
  return (
    <section className="display flex items-center justify-center m-4 h-1/3">
      <div className="grid gap-3 sm:grid-cols-3">
        <Card
          title={CARD1.title}
          description={CARD1.description}
          buttonText={CARD1.buttonText}
        />
        <Card
          title={CARD2.title}
          description={CARD2.description}
          buttonText={CARD2.buttonText}
        />
        <Card
          title={CARD3.title}
          description={CARD3.description}
          buttonText={CARD3.buttonText}
        />
      </div>
    </section>
  );
};

export default CardSection;
