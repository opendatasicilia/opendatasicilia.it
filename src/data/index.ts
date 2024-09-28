import {
  FaFacebook as fbicon,
  FaTelegram as tgicon,
  FaRegEnvelope as mailicon,
  FaTwitter as twicon,
  FaGithub as ghicon,
  FaYoutube as yticon,
} from "react-icons/fa";

import Card1 from "@assets/images/card-1.svg";
import Card2 from "@assets/images/card-2.svg";
import Card3 from "@assets/images/card-3.svg";

export const cards = [
  {
    title: "Unisciti",
    image: Card1,
  },
  {
    title: "Collabora",
    image: Card2,
  },
  {
    title: "Pubblica",
    image: Card3,
  },
];

export const menu = [
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Chi siamo",
    url: "/chi-siamo",
  },
  {
    name: "Eventi",
    url: "/eventi",
  },
  {
    name: "Progetti",
    url: "/progetti",
  },
  {
    name: "Catalogo",
    url: "/catalogo",
  },
];

export const socials = [
  [
    {
      name: "Telegram",
      url: "https://t.me/opendatasicilia",
      icon: tgicon,
    },
    {
      name: "Mailing list",
      url: "https://groups.google.com/g/opendatasicilia",
      icon: mailicon,
    },
    {
      name: "Facebook group",
      url: "https://www.facebook.com/groups/opendatasicilia/",
      icon: fbicon,
    },
    {
      name: "GitHub",
      url: "https://github.com/opendatasicilia",
      icon: ghicon,
    },
  ],
  [
    {
      name: "Twitter",
      url: "https://twitter.com/opendatasicilia",
      icon: twicon,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCyojAonwV6vNNJYAqw4JkTQ",
      icon: yticon,
    },
  ],
];
