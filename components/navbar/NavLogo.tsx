import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-0 outline-none focus-visible:ring-2 focus-visible:ring-[#20064A] rounded-md group">
      {/* Brand Leaf Icon */}
      <div className="relative w-5 h-7 md:w-6 md:h-9 shrink-0 mr-1.5 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo/logoicon.png"
          alt="INDIGO Icon"
          fill
          className="object-contain object-center scale-[0.9] md:scale-100"
          priority
        />
      </div>

      {/* Brand Text */}
      <div className="relative w-32 h-7 md:w-38 md:h-9 shrink-0">
        <Image
          src="/logo/logotextvoilate.png"
          alt="INDIGO - AN INDO-PAK RESTAURANT"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}
