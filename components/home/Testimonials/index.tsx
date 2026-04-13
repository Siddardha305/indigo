import TestimonialsBackground from "./Hero6Background";
import Hero6Header from "./Hero6Header";
import Hero6Carousel from "./Hero6Carousel";

export default function Testimonials() {
  return (
    <TestimonialsBackground>
      <div className="w-full relative z-10 flex flex-col pt-4 pb-12">
        <Hero6Header />
        <Hero6Carousel />
      </div>
    </TestimonialsBackground>
  );
}
