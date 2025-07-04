import Image from "next/image";

const Share = () => {
  return (
    <div className="p-4 flex gap-4">
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image src="/profile-pic.jpg" alt="avatar" fill />
      </div>
      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <Image
              src="/icons/image.svg"
              alt="image icon"
              width={20}
              height={20}
            />
            <Image src="/icons/gif.svg" alt="gif icon" width={20} height={20} />
            <Image
              src="/icons/poll.svg"
              alt="poll icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/emoji.svg"
              alt="emoji icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/schedule.svg"
              alt="schedule icon"
              width={20}
              height={20}
            />
            <Image
              src="/icons/location.svg"
              alt="location icon"
              width={20}
              height={20}
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
