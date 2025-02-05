import Link from "next/link";

const LinkButton = () => {
  // color: #96f;
  // background-color: #0000;
  // border: .0625rem dashed #c5c5c5;
  // border-radius: .5rem;
  // justify-content: flex-start;
  // padding: .6rem .7rem;
  // font-size: 1rem;
  // font-weight: 500;
  // transition: color .2s, background-color .2s;
  return (
    <Link
      href="#learn-more"
      className="text-black bg-pure_white px-[0.7rem] py-[0.6rem] text-lg font-medium border-[0.0625rem] rounded-[0.5rem] border-dashed border-[#c5c5c5]"
    >
      Learn more
    </Link>
  );
};

export default LinkButton;
