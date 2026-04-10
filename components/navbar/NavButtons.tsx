import Link from "next/link";

export default function NavButtons() {
  return (
    <div className="hidden sm:flex items-center gap-3 lg:gap-[10.22px] shrink-0 ml-4">
      <Link
        href="/reserve"
        className="bg-[#20064A] text-white w-[184.05px] h-[43.36px] flex items-center justify-center rounded-[5.33px] font-medium text-[17px] transition-all duration-300 hover:bg-[#2c0964] hover:shadow-[0_8px_20px_0_rgba(32,6,74,0.15)] outline-none focus-visible:ring-2 focus-visible:ring-[#20064A] focus-visible:ring-offset-2 overflow-hidden whitespace-nowrap"
      >
        Reserve a table
      </Link>
      <Link
        href="/order"
        className="bg-transparent text-[#20064A] border-[1.02px] border-[#20064A] w-[184.05px] h-[43.36px] flex items-center justify-center rounded-[5.33px] font-medium text-[17px] transition-all duration-300 hover:bg-[#20064A]/5 outline-none focus-visible:ring-2 focus-visible:ring-[#20064A] focus-visible:ring-offset-2 overflow-hidden whitespace-nowrap"
      >
        Order now
      </Link>
    </div>
  );
}
