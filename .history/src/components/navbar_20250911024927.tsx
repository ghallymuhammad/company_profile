"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useAuth } from "../app/context/AuthContext";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href?: string
  ) {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  return (
    <li>
      <a
        href={href || "#"}
        className="font-medium cursor-pointer"
        onClick={(e) => handleNavClick(e, href)}
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const handleOpen = () => setOpen((cur) => !cur);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  React.useEffect(() => {
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-0 py-0 ${
        isScrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex h-16 md:h-20 w-full items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/image/casinglaptoplogo.png"
            alt="Casing Laptop"
            width={140}
            height={40}
            className="h-8 w-auto md:h-9"
            priority={false}
          />
        </Link>

        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About Us</NavItem>
          <NavItem href="#services">Our Services</NavItem>
          <NavItem href="#team">Meet the Team</NavItem>
          <NavItem href="#blog">Blog & Tips</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>

        <div className="hidden gap-2 lg:flex">
          <button
            className={`p-2 rounded-md transition-colors ${
              isScrolling ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Visit our Twitter"
          >
            <i className="fa-brands fa-twitter text-base" />
          </button>
          <button
            className={`p-2 rounded-md transition-colors ${
              isScrolling ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Visit our Facebook"
          >
            <i className="fa-brands fa-facebook text-base" />
          </button>
          <button
            className={`p-2 rounded-md transition-colors ${
              isScrolling ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Visit our Instagram"
          >
            <i className="fa-brands fa-instagram text-base" />
          </button>

          {/* Authentication buttons */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isScrolling ? "text-gray-600" : "text-white"}`}>
                {user?.name}
              </span>
              <button
                onClick={handleLogout}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolling
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }`}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolling
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Login
              </button>
            </Link>
          )}

          <a href="/contact" target="_blank">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isScrolling
                  ? "bg-gray-500 hover:bg-gray-600 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-900"
              }`}
            >
              Get a Quote
            </button>
          </a>
        </div>

        <button
          className={`ml-auto inline-block lg:hidden p-2 rounded-md transition-colors ${
            isScrolling ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          onClick={handleOpen}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5 shadow-lg">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About Us</NavItem>
            <NavItem href="#services">Our Services</NavItem>
            <NavItem href="#team">Meet the Team</NavItem>
            <NavItem href="#blog">Blog & Tips</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>
          <div className="mt-4 space-y-3">
            {/* Authentication section for mobile */}
            {isAuthenticated ? (
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">
                  Logged in as: <strong>{user?.name}</strong> ({user?.role})
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login">
                <button 
                  onClick={() => setOpen(false)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Login
                </button>
              </Link>
            )}
            
            {/* Social and contact buttons */}
            <div className="flex gap-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" aria-label="Visit our Twitter">
                <i className="fa-brands fa-twitter text-base" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" aria-label="Visit our Facebook">
                <i className="fa-brands fa-facebook text-base" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" aria-label="Visit our Instagram">
                <i className="fa-brands fa-instagram text-base" />
              </button>
              <a href="/contact" target="_blank">
                <button className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors ml-auto">
                  Get a Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
