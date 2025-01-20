import HeroSection from "./components/main/HeroSection";
import { HERO, SECTION1, SECTION2 } from "./home-constants/hero/constants";
import Hero from "./components/sub/Hero";
import ImageCardSection from "./components/main/ImageCardSection";
import PageSection from "./components/main/PageSection";
import RightTextSection from "./components/sub/RightTextSection";
import LeftTextSection from "./components/sub/LeftTextSection";
import { IMAGE_CARD_BG } from "./home-constants/card-image-section/constants";
import IconCardSection from "./components/main/IconCardSection";
import { ICON_CARD_BG } from "./home-constants/card-icon-section/constants";

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
      <IconCardSection backgroundStyle={ICON_CARD_BG.backgroundStyle} />
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
