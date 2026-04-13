import Link from "next/link";

export default function NavButtons() {
  return (
    <div className="hidden sm:flex items-center gap-3 lg:gap-[10.22px] shrink-0 ml-4">
      <Link
        href="/contact#reservation"
        className="bg-brand-blue text-brand-white w-[184.05px] h-[43.36px] flex items-center justify-center rounded-[5.33px] font-medium text-[17px] transition-all duration-300 hover:opacity-90 hover:shadow-[0_8px_20px_0_rgba(44,0,116,0.15)] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 overflow-hidden whitespace-nowrap"
      >
        Reserve a table
      </Link>
      <Link
        href="/order"
        className="bg-brand-white text-brand-blue border-[1.2px] border-brand-blue w-[184.05px] h-[43.36px] flex items-center justify-center rounded-[5.33px] font-medium text-[17px] transition-all duration-300 hover:bg-brand-blue/5 outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 overflow-hidden whitespace-nowrap"
      >
        Order now
      </Link>
    </div>
  );
}
