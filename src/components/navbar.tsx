import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

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

  const handleOpen = () => setOpen((cur) => !cur);

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
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 !py-0"
    >
      <div className="flex h-16 md:h-20 w-full items-center justify-between">
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
          {/* Social media icons for business */}
          {/* @ts-ignore */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            aria-label="Visit our Twitter"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          {/* @ts-ignore */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            aria-label="Visit our Facebook"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          {/* @ts-ignore */}
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            aria-label="Visit our Instagram"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="/contact" target="_blank">
            {/* @ts-ignore */}
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Get a Quote
            </Button>
          </a>
        </div>

        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About Us</NavItem>
            <NavItem href="#services">Our Services</NavItem>
            <NavItem href="#team">Meet the Team</NavItem>
            <NavItem href="#blog">Blog & Tips</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            {/* @ts-ignore */}
            <IconButton variant="text" color="gray" size="sm" aria-label="Visit our Twitter">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton variant="text" color="gray" size="sm" aria-label="Visit our Facebook">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            {/* @ts-ignore */}
            <IconButton variant="text" color="gray" size="sm" aria-label="Visit our Instagram">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="/contact" target="_blank">
              {/* @ts-ignore */}
              <Button color="gray" size="sm" className="ml-auto">
                Get a Quote
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
