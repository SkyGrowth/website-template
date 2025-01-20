import React from "react";
import ImageCardSection from "../components/main/ImageCardSection";
import PageSection from "../components/main/PageSection";
import LeftTextSection from "../components/sub/LeftTextSection";
import RightTextSection from "../components/sub/RightTextSection";
import SecondaryHeader from "../components/sub/SecondaryHeader";
import Title from "../components/sub/Title";
import { IMAGE_CARD_BG } from "./about-constants/card-image-section/constants";
import {
  SECONDARY_HEADER,
  SECTION1,
  SECTION2,
  SECTION3,
  TITLE,
} from "./about-constants/contants";

const page = () => {
  return (
    <div>
      <PageSection backgroundStyle={SECTION1.backgroundStyle}>
        <LeftTextSection
          title={SECTION1.title}
          subheading={SECTION1.subheading}
          titleStyle={SECTION1.titleStyle}
          subheadingStyle={SECTION1.subheadingStyle}
          buttonText={SECTION1.buttonText}
          image={SECTION1.image}
        />
      </PageSection>
      <PageSection backgroundStyle={SECTION2.backgroundStyle}>
        <RightTextSection
          title={SECTION2.title}
          subheading={SECTION2.subheading}
          titleStyle={SECTION2.titleStyle}
          subheadingStyle={SECTION2.subheadingStyle}
          buttonText={SECTION2.buttonText}
          image={SECTION2.image}
        />
      </PageSection>
      <PageSection backgroundStyle={SECTION3.backgroundStyle}>
        <LeftTextSection
          title={SECTION3.title}
          subheading={SECTION3.subheading}
          titleStyle={SECTION3.titleStyle}
          subheadingStyle={SECTION3.subheadingStyle}
          buttonText={SECTION3.buttonText}
          image={SECTION3.image}
        />
      </PageSection>
      <ImageCardSection backgroundStyle={IMAGE_CARD_BG.backgroundStyle} />
      <SecondaryHeader
        title={SECONDARY_HEADER.title}
        subheading={SECONDARY_HEADER.subheading}
        titleStyle={SECONDARY_HEADER.titleStyle}
        subheadingStyle={SECONDARY_HEADER.subheadingStyle}
        buttonText={SECONDARY_HEADER.buttonText}
        backgroundStyle={SECONDARY_HEADER.backgroundStyle}
      />
    </div>
  );
};

export default page;
