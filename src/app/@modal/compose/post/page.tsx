"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600] h-max mt-12">
        {/* TOP */}
        <div className="flex justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="cursor-pointer"
          >
            X
          </button>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/profile-pic.jpg"
              alt="profile photo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </div>
          <input
            className="flex-1 bg-transparent outline-none text-lg"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        {/* BOTTOM */}
        <div className="flex justify-between items-center gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap">
            <Image
              src="/icons/image.svg"
              alt="image icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image src="/icons/gif.svg" alt="gif icon" width={20} height={20} />
            <Image
              src="/icons/poll.svg"
              alt="poll icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/emoji.svg"
              alt="emoji icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/schedule.svg"
              alt="schedule icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/icons/location.svg"
              alt="location icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button className="py-2 px-5 rounded-full font-bold text-black bg-white">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
