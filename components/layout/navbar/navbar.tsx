import NavbarLink from "../../ui/navbar-link";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import MobileMenuClient from "./mobile-menu-client";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavbarLink href="/" className="text-xl font-bold text-gray-800">
              MyApp
            </NavbarLink>
          </div>

          {/* Desktop Menu */}
          <DesktopMenu />

          {/* Mobile Menu */}
          <MobileMenuClient>
            <MobileMenu />
          </MobileMenuClient>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
