import { cn } from "@/lib/utils";
import Link from "next/link";

type NavbarSublinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NavbarSublink: React.FC<NavbarSublinkProps> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "block px-4 py-2 text-gray-800 hover:bg-gray-100",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default NavbarSublink;
