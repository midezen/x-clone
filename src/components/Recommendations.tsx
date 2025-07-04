import Image from "next/image";
import Link from "next/link";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* USER CARD */}
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/profile-pic.jpg" alt="avatar" fill />
          </div>
          <div>
            <h1 className="text-md font-bold">Ay Dev</h1>
            <span className="text-textGray text-sm">@aydev</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/profile-pic.jpg" alt="avatar" fill />
          </div>
          <div>
            <h1 className="text-md font-bold">Emmanuel</h1>
            <span className="text-textGray text-sm">@emmanuel</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/profile-pic.jpg" alt="avatar" fill />
          </div>
          <div>
            <h1 className="text-md font-bold">Jonathan</h1>
            <span className="text-textGray text-sm">@jonathan</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
          Follow
        </button>
      </div>
      <Link href="/">
        <span className="text-iconBlue">Show more</span>
      </Link>
    </div>
  );
};

export default Recommendations;
