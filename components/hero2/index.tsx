import Hero2Background from "./Hero2Background";
import Hero2Header from "./Hero2Header";
import Hero2Arch from "./Hero2Arch";
import Hero2Text from "./Hero2Text";

export default function Hero2() {
  return (
    <Hero2Background>
      <Hero2Header />
      
      {/* 2-Column layout for Arch and Text */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 pt-4">
        <Hero2Arch />
        <Hero2Text />
      </div>
    </Hero2Background>
  );
}
