import Image from "next/image";

import { SocialIcons } from "./SocialIcons";
import { HeaderCopyTypes } from "../constants/header";

import authorImage from "../../public/images/photo_2025-02-05_06-13-59.jpg";
import speakersImage from "../../public/images/photo_2025-02-05_06-15-02.jpg";
import personalImage from "../../public/images/photo_2025-02-05_06-16-52.jpg";
import MarqueeSection from "./MarqueeSection";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-black text-pure_white rounded-xl px-8 sm:max-w-2xl sm:mx-auto lg:max-w-full grid grid-cols-1 gap-x-4 sm:hero-grid space-y-16 lg:space-y-0 md:h-screen relative">
      <div className="sm:col-span-full lg:col-[1/3] lg:row-[1/-1] md:py-10">
        <h1 className="text-[4.25rem] leading-none font-bold  md:flex md:flex-col md:justify-start md:gap-4 xs:text-[17.8vw] lg:gap-0 md:text-[14vw] lg:text-[8vw] sm:leading-[0.875] ">
          <span className="text-lg">Coming soon!</span>
          <div>
            Developer Meetup <span className="text-5xl">V3</span>
          </div>{" "}
        </h1>
        <p className="text-xl sm:text-2xl mt-10 mt-6 max-w-[37ch]">
          An exclusive event for Ethiopian Developers and Tech enthusiasts to
          network, share knowledge and innovate together!
        </p>
      </div>
      <div className="relative flex overflow-hidden w-full h-screen gap-1 sm:gap-4 sm:col-span-full lg:col-[3/-1] lg:ml-0 lg:row-[1/-1]">
        <div className="moved flex flex-col gap-4">
          <Image
            src={authorImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0  scale-100 rounded-sm"
          />
          <Image
            src={speakersImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0  scale-100 rounded-sm"
          />
          <Image
            src={authorImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0  scale-100 rounded-sm"
          />
          <Image
            src={speakersImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0  scale-100 rounded-sm"
          />
        </div>
        <div className="moved flex flex-col gap-4 ">
          <Image
            src={personalImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto  lg:mx-0  scale-100 rounded-sm"
          />
          <Image
            src={authorImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0 h-[663px] scale-100 rounded-sm"
          />
          <Image
            src={authorImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0  scale-100 rounded-sm"
          />
          <Image
            src={authorImage}
            alt="picture of author"
            width="282"
            height="363"
            priority
            placeholder="blur"
            className="xs:ml-auto lg:mx-0  scale-100 rounded-sm"
          />
        </div>
        <div className="cover-opacity"></div>

        {/* <MarqueeSection /> */}
      </div>
      <div className="cover-opacity _2"></div>
    </section>
  );
};

export default HeroSection;
