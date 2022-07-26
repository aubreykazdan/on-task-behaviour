import { BsCardList } from "react-icons/bs";

export default {
  name: "socials",
  title: "Socials",
  type: "document",
  icon: BsCardList,
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  initialValue: {
    title: "Social Links",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "instagram",
      title: "Instagram URL",
      type: "url",
      placeholder: "https://www.instagram.com/",
    },
    {
      name: "snapchat",
      title: "Snapchat URL",
      type: "url",
      placeholder: "https://open.spotify.com/",
    },
    {
      name: "tiktok",
      title: "TikTok URL",
      type: "url",
      placeholder: "https://www.tiktok.com/",
    },
    {
      name: "twitter",
      title: "Twitter URL",
      type: "url",
      placeholder: "https://www.twitter.com/",
    },
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
      placeholder: "https://www.facebook.com/",
    },
    {
      name: "youtube",
      title: "YouTube URL",
      type: "url",
      placeholder: "https://www.youtube.com",
    },

    {
      name: "spotify",
      title: "Spotify URL",
      type: "url",
      placeholder: "https://www.spotify.com/",
    },

    {
      name: "soundcloud",
      title: "Soundcloud URL",
      type: "url",
      placeholder: "https://www.soundcloud.com/",
    },
    {
      name: "discord",
      title: "Discord URL",
      type: "url",
      placeholder: "https://discord.gg/",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
