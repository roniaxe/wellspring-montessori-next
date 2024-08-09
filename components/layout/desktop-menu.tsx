import NavbarLink from "../ui/navbar-link";
import NavbarSublink from "../ui/navbar-sublink";

const DesktopMenu: React.FC = () => {
  return (
    <div className="hidden space-x-8 md:flex">
      <NavbarLink href="/about">About</NavbarLink>
      <NavbarLink href="/contact">Contact</NavbarLink>

      <div className="group relative">
        <NavbarLink href="/curriculum">Curriculum</NavbarLink>

        <div className="absolute left-0 mt-2 w-60 transform rounded-md bg-white opacity-0 shadow-lg transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <NavbarSublink href="/curriculum/language">
            Language Arts & Literature
          </NavbarSublink>
          <NavbarSublink href="/curriculum/math">
            Mathematics & Geometry
          </NavbarSublink>
          <NavbarSublink href="/curriculum/history">History</NavbarSublink>
          <NavbarSublink href="/curriculum/geography">
            Geography & Natural Studies
          </NavbarSublink>
          <NavbarSublink href="/curriculum/science">
            Science & Technology
          </NavbarSublink>
          <NavbarSublink href="/curriculum/life-sciences">
            Life Sciences
          </NavbarSublink>
          <NavbarSublink href="/curriculum/art">
            Art & Practical Life Skills
          </NavbarSublink>
          <NavbarSublink href="/curriculum/going-out">Going Out</NavbarSublink>
        </div>
      </div>
      <NavbarLink href="/gallery">Gallery</NavbarLink>
    </div>
  );
};

export default DesktopMenu;
