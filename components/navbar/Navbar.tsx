import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-5 md:pt-7 lg:px-8 pointer-events-none">
      <nav className="relative flex items-center justify-between w-full max-w-[1400px] bg-white rounded-[24px] px-6 py-3 md:py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#20064A]/5 pointer-events-auto">
        <NavLogo />
        <NavLinks />
        <NavButtons />
        <MobileMenu />
      </nav>
    </header>
  );
}
