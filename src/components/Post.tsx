"use client";

import Image from "next/image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Post = ({ type }: { type?: "status" | "comment" }) => {
  const router = useRouter();
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Ay Dev reposted</span>
      </div>
      {/* POST CONTENT */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`${
            type === "status" && "hidden"
          } relative w-10 h-10 rounded-full overflow-hidden`}
        >
          <Image src="/profile-pic.jpg" alt="avatar" fill />
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <Link href={"/profile/aydev"} className="flex gap-4">
              <div
                className={`${
                  type !== "status" && "hidden"
                } relative w-10 h-10 rounded-full overflow-hidden`}
              >
                <Image src="/profile-pic.jpg" alt="avatar" fill />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${
                  type === "status" && "flex-col !gap-0 !items-start"
                }`}
              >
                <h1 className="text-md font-bold">Ay Dev</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @aydev
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 day ago</span>
                )}
              </div>
            </Link>

            <PostInfo />
          </div>
          {/* TEXT & IMAGE */}
          <p
            className={`${
              type === "status" && "text-lg !cursor-auto"
            } cursor-pointer`}
            onClick={() => router.push("/post/status/234")}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
            aliquam nunc, eget aliquam massa nisl quis neque.
          </p>

          <Image
            src="/post-image.jpg"
            alt="post image"
            width={600}
            height={600}
            className="rounded-lg"
          />
          {type === "status" && (
            <span className="text-textGray">10:08pm • July 15, 2025 </span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
