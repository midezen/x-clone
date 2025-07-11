import Feed from "@/components/Feed";
import Image from "next/image";
import Link from "next/link";

const UserPage = () => {
  return (
    <div>
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md z-10 p-4 bg-[#00000084]">
        <Link href="/">
          <Image src="/icons/back.png" alt="back icon" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg">Ay Dev</h1>
      </div>
      {/* INFO */}
      <div>
        {/* COVER AND AVATAR */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] object-cover relative">
            <Image src="/cover.jpg" alt="cover photo" fill />
          </div>
          {/* AVATAR */}
          <div className="w-[1\5] aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2 ">
            <Image
              src="/profile-pic.jpg"
              alt="cover photo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex justify-center items-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              src="/icons/infoMore.svg"
              alt="more icon"
              width={20}
              height={20}
            />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              src="/icons/explore.svg"
              alt="more icon"
              width={20}
              height={20}
            />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              src="/icons/message.png"
              alt="more icon"
              width={20}
              height={20}
            />
          </div>
          <button className="py-2 px-4 font-bold bg-white text-black rounded-full cursor-pointer">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME AND HANDLE */}
          <div>
            <h1 className="text-2xl font-bold">Ay Dev</h1>
            <span className="text-textGray text-sm">@aydev</span>
          </div>
          <p>Believer || Full stack web developer || Musician</p>
          {/* JOB, LOCATION AND DATE */}
          <div className="flex text-textGray gap-4 text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/userLocation.svg"
                alt="user location icon"
                width={20}
                height={20}
              />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/icons/date.svg"
                alt="user location icon"
                width={20}
                height={20}
              />
              <span>Joined, July 2025</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">300</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">120</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED */}
      <Feed />
    </div>
  );
};

export default UserPage;
