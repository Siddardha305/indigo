import HeroBackground from "./HeroBackground";
import HeroShape from "./HeroShape";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <HeroBackground>
      <HeroShape>
        <HeroText />
      </HeroShape>
    </HeroBackground>
  );
}
