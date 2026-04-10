import Hero5Background from "./Hero5Background";
import Hero5Header from "./Hero5Header";
import Hero5TeamImage from "./Hero5TeamImage";
import Hero5Footer from "./Hero5Footer";

export default function Hero5() {
  return (
    <Hero5Background>
      <div className="w-full relative z-10 flex flex-col items-center">
        <Hero5Header />
        <Hero5TeamImage />
        <Hero5Footer />
      </div>
    </Hero5Background>
  );
}
