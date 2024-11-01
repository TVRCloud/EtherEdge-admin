type IconNames =
  | "IoHome"
  | "IoSettings"
  | "IoPerson"
  | "IoFolder"
  | "IoMail"
  | "IoStatsChart"
  | "IoImages"
  | "IoLogOut";

export const navData: {
  title: string;
  icon: IconNames;
  url?: string;
  subItems?: {
    title: string;
    icon: IconNames;
    url: string;
  }[];
}[] = [
  {
    title: "Dashboard",
    icon: "IoHome",
    subItems: [
      {
        title: "Projects",
        icon: "IoFolder",
        url: "/projects",
      },
      {
        title: "Portfolio",
        icon: "IoImages",
        url: "/portfolio",
      },
    ],
  },
  {
    title: "About Me",
    icon: "IoPerson",
    url: "/about",
  },
  {
    title: "Skills",
    icon: "IoStatsChart",
    url: "/skills",
  },
  {
    title: "Projects",
    icon: "IoFolder",
    url: "/projects",
  },
  {
    title: "Contact",
    icon: "IoMail",
    url: "/contact",
  },
  {
    title: "Portfolio",
    icon: "IoImages",
    url: "/portfolio",
  },
  {
    title: "Settings",
    icon: "IoSettings",
    url: "/settings",
  },
  {
    title: "Logout",
    icon: "IoLogOut",
    url: "/logout",
  },
];
