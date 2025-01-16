import HeroSection from "./components/main/HeroSection";
import { HERO, SECTION1, SECTION2 } from "./constants/hero/constants";
import Hero from "./components/sub/Hero";
import CardSection from "./components/main/ImageCardSection";
import PageSection from "./components/main/PageSection";
import RightTextSection from "./components/sub/RightTextSection";
import LeftTextSection from "./components/sub/LeftTextSection";
import { CARDBACKGROUND } from "./constants/card-image-section/constants";

export default function Home() {
  return (
    <div>
      <HeroSection backgroundStyle={HERO.backgroundStyle}>
        <Hero
          title={HERO.title}
          subheading={HERO.subheading}
          titleStyle={HERO.titleStyle}
          subheadingStyle={HERO.subheadingStyle}
          buttonText={HERO.buttonText}
          image={HERO.image}
        />
      </HeroSection>
      <CardSection backgroundStyle={CARDBACKGROUND.backgroundStyle} />
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
}
