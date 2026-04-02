"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      <nav>
        {navLinks.map((link) => {
          const isActive =
            pathName === link.href ||
            (pathName.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "font-bold mr-4" : "text-gray-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
