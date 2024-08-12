import NavbarSublink from "../../ui/navbar-sublink";

const MobileMenu: React.FC = () => {
  return (
    <div className="absolute left-0 top-16 w-full bg-white shadow-lg md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <NavbarSublink href="/about" className="rounded-md">
          About
        </NavbarSublink>
        <NavbarSublink href="/contact" className="rounded-md">
          Contact
        </NavbarSublink>
        <NavbarSublink href="/contact" className="rounded-md">
          Contact
        </NavbarSublink>
        <div className="relative">
          <NavbarSublink href="/curriculum" className="rounded-md">
            Curriculum
          </NavbarSublink>
          <div className="ml-4 mt-1 space-y-1">
            <NavbarSublink href="/curriculum/language" className="rounded-md">
              Language Arts & Literature
            </NavbarSublink>
            <NavbarSublink href="/curriculum/math" className="rounded-md">
              Mathematics & Geometry
            </NavbarSublink>
            <NavbarSublink href="/curriculum/history" className="rounded-md">
              History
            </NavbarSublink>
            <NavbarSublink href="/curriculum/geography" className="rounded-md">
              Geography & Natural Studies
            </NavbarSublink>
            <NavbarSublink href="/curriculum/science" className="rounded-md">
              Science & Technology
            </NavbarSublink>
            <NavbarSublink
              href="/curriculum/life-sciences"
              className="rounded-md"
            >
              Life Sciences
            </NavbarSublink>
            <NavbarSublink href="/curriculum/art" className="rounded-md">
              Art & Practical Life Skills
            </NavbarSublink>
            <NavbarSublink href="/curriculum/going-out" className="rounded-md">
              Going Out
            </NavbarSublink>
          </div>
        </div>
        <NavbarSublink href="/gallery" className="rounded-md">
          Gallery
        </NavbarSublink>
      </div>
    </div>
  );
};

export default MobileMenu;
