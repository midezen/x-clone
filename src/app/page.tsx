import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          href="/"
          className="flex items-center pb-3 justify-center border-b-4 border-iconBlue w-fit"
        >
          For You
        </Link>
        <Link href="/" className="flex items-center pb-3 justify-center">
          Following
        </Link>
        <Link href="/" className="flex items-center pb-3 justify-center">
          React.js
        </Link>
        <Link href="/" className="flex items-center pb-3 justify-center">
          JavaScript
        </Link>
        <Link href="/" className="flex items-center pb-3 justify-center">
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
