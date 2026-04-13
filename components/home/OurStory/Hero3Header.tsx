import MainDivider from "../../decorations/MainDivider";

export default function Hero3Header() {
  return (
    <div className="flex flex-col items-center mb-16 md:mb-24 w-full text-center font-sans">
      <h2 className="text-brand-blue text-3xl md:text-5xl font-el-messiri tracking-[0.02em] font-semibold mb-6">
        The INDIGO Story
      </h2>
      
      <MainDivider />

      <div className="flex flex-col items-center gap-3 w-full max-w-2xl px-4">
        <p className="text-brand-yellow font-medium text-lg md:text-[22px] font-el-messiri tracking-wide">
          &ldquo;Zaiqa jo dil se nikle, woh sarhadon ka mohtaaj nahi hota.&rdquo;
        </p>
        <p className="text-brand-blue text-base md:text-xl font-medium tracking-wide">
          Flavour that comes from the heart is not bound by borders.
        </p>
      </div>
    </div>
  );
}
