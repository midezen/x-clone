"use client";

import Image from "next/image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        What's happening?
      </h1>
      {/* TREND EVENT*/}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden object-cover">
          <Image src="/event.jpg" alt="event" fill />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">Man U vs Chelsea</h2>
          <span className="text-sm text-textGray">Last night</span>
        </div>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image
            src="/icons/infoMore.svg"
            alt="more info icon"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>

        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Sports • Trending</span>
          <Image
            src="/icons/infoMore.svg"
            alt="more info icon"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>

        <h2 className="text-textGrayLight font-bold">Cole Palmer</h2>
        <span className="text-textGray text-sm">10K posts</span>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Politics • Trending</span>
          <Image
            src="/icons/infoMore.svg"
            alt="more info icon"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>

        <h2 className="text-textGrayLight font-bold">Tinubu</h2>
        <span className="text-textGray text-sm">30K posts</span>
      </div>
      {/* TOPICS */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology • Trending</span>
          <Image
            src="/icons/infoMore.svg"
            alt="more info icon"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>

        <h2 className="text-textGrayLight font-bold">JavaScript</h2>
        <span className="text-textGray text-sm">5K posts</span>
      </div>
    </div>
  );
};

export default PopularTags;
