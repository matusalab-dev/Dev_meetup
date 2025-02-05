import Image from "next/image";
import Link from "next/link";
import { cn } from "../utils/utils";

const Logo = ({
  logoLink = "/",
  styleSuffix = "",
  onToggle,
}: {
  logoLink?: string;
  styleSuffix?: string;
  onToggle?: () => void;
}) => {
  return (
    <Link
      onClick={onToggle}
      href={logoLink}
      className="flex flex-col w-min capitalize leading-7 sm:leading-[0.025rem] text-2xl sm:text-xl font-medium"
    >
      <span className="tracking-wider text-2xl">DEV </span>
      <span
        className={`${cn("w-min bg-black text-pure_white text-lg px-[0.375rem] sm:px-2  sm:py-[0.15rem] -mt-1", styleSuffix)}`}
      >
        Meetup
      </span>
    </Link>
  );
};

export default Logo;
