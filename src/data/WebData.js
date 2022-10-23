import { BsChatLeftText } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { girlImg, HeroBgImg } from "../assets/importAssets";

// Dropdown menu items
export const DropdownItems = [
  {
    _id: 1,
    title: "Blogs",
    path: "/blogs",
    icon: BsChatLeftText,
  },
  {
    _id: 2,
    title: "Upcoming Events",
    path: "/events",
    icon: MdOutlineEventAvailable,
  },
];

// Slider data
export const sliderData = [
  {
    _id: 1,
    title: "Help your child become the best version of themselves",
    description:
      "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",
    button: "Learn More",
    image: girlImg,
    bgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-medium-orchid",
    bgImage: HeroBgImg,
  },
  {
    _id: 2,
    title: "Help your child become the best version of themselves",
    description:
      "We are raising a community of spiritually-led kids who are academically sound, uniquely talented and have the capacity to shine anywhere they go.",
    button: "Learn More",
    image: girlImg,
    bgColor:
      "bg-gradient-to-r from-blue-primary via-medium-slate-blue to-misty-rose",
    bgImage: HeroBgImg,
  },
];
