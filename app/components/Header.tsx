"use client";
import NavBar from "./nav/NavBar";
import { NavBarType } from "../constants/navbar";
import { HEADER_COPYRIGHT, HeaderCopyTypes } from "../constants/header";
import HeroSection from "./HeroSection";
import { usePathname } from "next/navigation";

const Header = ({
  headerNavBar,
  headerNavBarMobile,
  navBarRoute,
  logoLink,
}: {
  headerNavBar: NavBarType[];
  headerNavBarMobile: NavBarType[];
  navBarRoute: number;
  logoLink: string;
}) => {
  const currentPathname = usePathname();
  const freelancePathname = "/freelancing";
  return (
    <header id="header" className="py-4">
      {/* nav-section */}
      <NavBar
        navBar={headerNavBar}
        navBarMobile={headerNavBarMobile}
        routeIndex={navBarRoute}
        logoLink={logoLink}
      />
    </header>
  );
};

export default Header;
