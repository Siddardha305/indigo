import Hero4Background from "./Hero4Background";
import Hero4Header from "./Hero4Header";
import Hero4Grid from "./Hero4Grid";

export default function InteriorGallery() {
  return (
    <Hero4Background>
      <div className="w-full relative z-10 flex flex-col pt-8 pb-12">
        <Hero4Header />
        <Hero4Grid />
      </div>
    </Hero4Background>
  );
}

