"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs() {
  var pathname = usePathname();

  var seperatedPaths = pathname.split("/").filter((path) => path);

  return (
    <Breadcrumb className="p-3">
      <BreadcrumbList>
        {pathname !== "/" ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {seperatedPaths.map((path, index) => {
          if (index !== seperatedPaths.length - 1) {
            return (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink asChild>
                    <Link
                      href={`/${seperatedPaths.slice(0, index + 1)}`.toLocaleLowerCase()}
                    >
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            );
          } else {
            return (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </BreadcrumbPage>
              </BreadcrumbItem>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
