import MainDivider from "../../decorations/MainDivider";

export default function Hero5Header() {
  return (
    <div className="flex flex-col items-center mb-10 w-full text-center font-sans">
      <h2 className="text-brand-blue text-3xl md:text-5xl font-el-messiri tracking-[0.02em] font-medium mb-6">
        The INDIGO Family
      </h2>
      
      <MainDivider />

      <p className="text-brand-yellow font-semibold text-base md:text-lg lg:text-[20px] font-sans tracking-wide max-w-3xl">
        Proud, passionate, and powered, the INDIGO team brings our savoury stories to life.
      </p>
    </div>
  );
}
