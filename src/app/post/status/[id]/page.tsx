import Comments from "@/components/Comments";
import Post from "@/components/Post";
import Image from "next/image";
import Link from "next/link";

const StatusPage = () => {
  return (
    <div>
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md z-10 p-4 bg-[#00000084]">
        <Link href="/">
          <Image src="/icons/back.png" alt="back icon" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <Post type="status"/>
      <Comments />
    </div>
  );
};

export default StatusPage;
