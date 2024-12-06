import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import featureImage from "@/images/links-feature.svg";
import landingPage from "@/images/landing-page.svg";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const FeatureData = [
  {
    id: 1,
    heading: "SocialLinks.sa/me",
    description: "اصنع الرابط الخاص فيك بكل سهولة لكي تصل لي عملائك المحتملين",
    image: "",
  },
  {
    id: 2,
    heading: "",
    description: "اكتب link الخاص فيك مع جميع منصات السوشيل ميديا",
    image: featureImage,
  },
  {
    id: 3,
    heading: "",
    description: "LandingPage خاص فيك مع خاصية تعديل الروابط بشكل سهل",
    image: landingPage,
  },
];

export const titleCard = "ودك تجرب social Links";

export const titleFeature = "مميزات social Links";

export const cardLinksData = [
  {
    id: 0,
    urlName: "المتجر",
    urlLink: "",
    show: true,
  },
  {
    id: 1,
    urlName: "أطلب الأن اونلاين",
    urlLink: "",
    show: true,
  },
  {
    id: 2,
    urlName: "حجز",
    urlLink: "",
    show: true,
  },
  {
    id: 3,
    urlName: "الموقع",
    urlLink: "",
    show: true,
  },
];

import coffeeBeans from "@/images/coffeeBeans.jpg";
import coffee from "@/images/cup-coffee.jpg";
import player from "@/images/player.jpg";
import skyStars from "@/images/skystars.jpg";
import iphone from "@/images/iphone12.jpg";
import socialOrnage from "@/images/social-orange-pic.png";
import skyTheme from "@/images/skyblue-theme.jpg";
import profilePic from "@/images/profile-pic.jpg";
import skyOrangeTheme from "@/images/sky-orange-theme.jpg";
import Photopgrafer from "@/images/Photopgrafer.jpg";

export const themeCardData = [
  {
    id: 1,
    themeName: "ثيم كوفي",
    themeColor: "black",
    title: "Coffee Specialist",
    bio: "متجر المذاق الرائع لي القهوه المختصه",
    mainImage: coffee,
    altName: "cup of coffee",
    profileImage: coffeeBeans,
    imageSize: "object-cover",
    themeLinks: [
      { id: 1, linkName: "المتجر", top: "top-[200px]" },
      { id: 2, linkName: "احجز الان", top: "top-[250px]" },
      { id: 3, linkName: "تواصل معنا", top: "top-[300px]" },
    ],
  },
  {
    id: 2,
    themeName: "ثيم رياضي",
    themeColor: "white",
    title: "Player",
    bio: "لاعب طموع في نادي الشباب شيكو بروفايلي",
    mainImage: player,
    profileImage: player,
    altName: "Football Ground",
    imageSize: "object-fill",
    themeLinks: [
      { id: 4, linkName: "الاندية السابقه", top: "top-[200px]" },
      { id: 5, linkName: "الاهداف", top: "top-[250px]" },
      { id: 6, linkName: "تواصل معي", top: "top-[300px]" },
    ],
  },
  {
    id: 3,
    themeName: "ثيم النجوم",
    themeColor: "white",
    title: "starsCases",
    bio: "متجر ستار لي كفرات الجوال ايفون كل الانواع",
    mainImage: skyStars,
    profileImage: iphone,
    altName: "stars sky image",
    imageSize: "object-fill",
    themeLinks: [
      { id: 5, linkName: "كفرات ايفون 15", top: "top-[200px]" },
      { id: 6, linkName: "تواصل معي واتساب", top: "top-[250px]" },
      { id: 7, linkName: "احجز الان", top: "top-[300px]" },
    ],
  },
  {
    id: 4,
    themeName: "ثيم سوشال",
    themeColor: "white",
    title: "ali Video Editor",
    bio: "مصمم و editor شوفوو أعمالي تحت",
    mainImage: socialOrnage,
    profileImage: profilePic,
    altName: "social pic ",
    imageSize: "object-fill",
    themeLinks: [
      { id: 6, linkName: "اعمالي", top: "top-[200px]" },
      { id: 7, linkName: "فوديوهات اللي صصمتها", top: "top-[250px]" },
      { id: 8, linkName: "تواصل معاي", top: "top-[300px]" },
    ],
  },
  {
    id: 5,
    themeName: "ثيم السماء",
    themeColor: "white",
    title: "ahmed Social",
    bio: "مشهور على منصة التيك توك تابعو اعمالي",
    mainImage: skyTheme,
    profileImage: profilePic,
    altName: "social pic ",
    imageSize: "object-fill",
    themeLinks: [
      { id: 7, linkName: "حسابي في التيك توك", top: "top-[200px]" },
      { id: 8, linkName: "فوديوهات اللي صصمتها", top: "top-[250px]" },
      { id: 9, linkName: "تواصل معاي", top: "top-[300px]" },
    ],
  },

  {
    id: 6,
    themeName: "ثيم الارض",
    themeColor: "white",
    title: "Yseer Photopgrafer",
    bio: "مصور أحترافي لي الافنتات و المناسبات الخاصة",
    mainImage: skyOrangeTheme,
    profileImage: Photopgrafer,
    altName: "social pic",
    imageSize: "object-fill",
    themeLinks: [
      { id: 10, linkName: "تصوير خاص", top: "top-[200px]" },
      { id: 11, linkName: "تصويري في أحد الافينتات", top: "top-[250px]" },
      { id: 12, linkName: "تواصل معاي", top: "top-[300px]" },
    ],
  },
];

export const themeChoices = [
  {
    id: 1,
    name: "ثيم السماء",
    image: skyTheme,
  },
  {
    id: 2,
    name: "ثيم النجوم",
    image: skyStars,
  },
  {
    id: 3,
    name: "ثيم الارض",
    image: skyOrangeTheme,
  },
  {
    id: 4,
    name: "ثيم رياضي",
    image: player,
  },
  {
    id: 5,
    name: "ثيم السماء",
    image: skyTheme,
  },
  {
    id: 6,
    name: "ثيم كوفي",
    image: coffee,
  },
];
