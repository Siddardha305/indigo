import MainDivider from "../../decorations/MainDivider";

export default function Hero4Header() {
  return (
    <div className="flex flex-col items-center mb-16 px-4 w-full text-center font-sans">
      <h2 className="text-brand-white text-4xl md:text-5xl lg:text-[56px] font-el-messiri tracking-[0.03em] mb-6">
        Inside INDIGO
      </h2>
      
      <MainDivider />
      
      <p className="text-brand-yellow text-lg md:text-[22px] font-medium font-el-messiri tracking-wide">
        Our space is designed with hints of ethnic and the spirit of community.
      </p>
    </div>
  );
}
