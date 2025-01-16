import React from "react";
import PageSection from "../components/main/PageSection";
import LeftTextSection from "../components/sub/LeftTextSection";
import RightTextSection from "../components/sub/RightTextSection";
import { SECTION1, SECTION2 } from "./constants";

const page = () => {
  return (
    <div>
      {" "}
      <PageSection backgroundStyle={SECTION1.backgroundStyle}>
        <RightTextSection
          title={SECTION1.title}
          subheading={SECTION1.subheading}
          titleStyle={SECTION1.titleStyle}
          subheadingStyle={SECTION1.subheadingStyle}
          buttonText={SECTION1.buttonText}
          image={SECTION1.image}
        />
      </PageSection>
      <PageSection backgroundStyle={SECTION2.backgroundStyle}>
        <LeftTextSection
          title={SECTION2.title}
          subheading={SECTION2.subheading}
          titleStyle={SECTION2.titleStyle}
          subheadingStyle={SECTION2.subheadingStyle}
          buttonText={SECTION2.buttonText}
          image={SECTION2.image}
        />
      </PageSection>
    </div>
  );
};

export default page;
