import HeroSection from "./components/main/HeroSection";
import HeroImage from "../public/images/hero.png";
import { HERO } from "./constants/hero/constants";
import Hero from "./components/sub/Hero";
import CardSection from "./components/main/CardSection";

export default function Home() {
  return (
    <div>
      <HeroSection>
        <Hero
          title={HERO.title}
          subheading={HERO.subheading}
          buttonText={HERO.buttonText}
          image={HeroImage}
        />
      </HeroSection>
      <CardSection />
    </div>
  );
}
