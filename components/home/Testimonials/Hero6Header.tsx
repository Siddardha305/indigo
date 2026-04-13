import MainDivider from "../../decorations/MainDivider";

export default function Hero6Header() {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-16 w-full text-center font-sans">
      <h2 className="text-brand-white text-3xl md:text-5xl font-el-messiri tracking-[0.02em] mb-6">
        Stories from Our Tables
      </h2>
      
      <MainDivider />
      
      <p className="text-brand-yellow font-medium text-base md:text-[20px] font-sans tracking-wide">
        Hear from our loyal patrons-the true essence of our food and space.
      </p>
    </div>
  );
}
