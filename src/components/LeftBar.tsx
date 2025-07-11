import Image from "next/image";
import Link from "next/link";
import {
  HiHome,
  HiOutlineHashtag,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineBookmark,
  // HiOutlineBriefcase,
  // HiOutlineUserGroup,
  // HiOutlineDocumentText,
  // HiOutlineBadgeCheck,
  // HiOutlineUser,
  // HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";

const menuList = [
  { id: 1, name: "Home", link: "/", icon: HiHome },
  { id: 2, name: "Explore", link: "/", icon: HiOutlineHashtag },
  { id: 3, name: "Notifications", link: "/", icon: HiOutlineBell },
  { id: 4, name: "Messages", link: "/", icon: HiOutlineMail },
  { id: 5, name: "Grok", link: "/", icon: HiOutlineLightBulb },
  { id: 6, name: "Premium", link: "/", icon: HiOutlineSparkles },
  { id: 7, name: "Bookmarks", link: "/", icon: HiOutlineBookmark },
  // { id: 8, name: "Jobs", link: "/", icon: HiOutlineBriefcase },
  // { id: 9, name: "Communities", link: "/", icon: HiOutlineUserGroup },
  // { id: 10, name: "Articles", link: "/", icon: HiOutlineDocumentText },
  // { id: 11, name: "Verified Orgs", link: "/", icon: HiOutlineBadgeCheck },
  // { id: 12, name: "Profile", link: "/", icon: HiOutlineUser },
  // { id: 13, name: "More", link: "/", icon: HiOutlineDotsCircleHorizontal },
];

const LeftBar = () => {
  return (
    <div className="flex flex-col justify-between pb-8 h-screen sticky top-0 ">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="logo.svg" alt="logo" width={50} height={50} />
        </Link>

        {/* MENU LIST */}
        <nav className="flex flex-col gap-4">
          {menuList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.link}
                className="flex items-center gap-4 p-2 rounded-full hover:bg-[#181818] transition-colors"
              >
                <Icon size={24} />
                <span className="hidden xxl:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        {/* POST BUTTON */}
        <Link
          href="/compose/post"
          className="xxl:hidden bg-white rounded-full w-12 h-12 flex items-center justify-center"
        >
          <HiOutlineSparkles size={24} color="black" />
        </Link>
        <Link
          href="/compose/post"
          className="hidden xxl:block bg-white rounded-full font-bold py-2 px-20"
        >
          <span className="text-black">Post</span>
        </Link>
      </div>

      {/* USER   */}
      <Link href="/profile/ayo" className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden relative">
            <Image src="/profile-pic.jpg" alt="profile pic" fill />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Ay Dev</span>
            <span className="text-sm text-textGray">@aydev</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </Link>
    </div>
  );
};

export default LeftBar;
