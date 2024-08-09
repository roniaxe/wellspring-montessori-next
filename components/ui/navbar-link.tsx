import { cn } from "@/lib/utils";
import Link from "next/link";

type NavbarLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({
  children,
  className,
  href,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      href={href}
      className={cn("text-gray-800 hover:text-gray-600", className)}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
