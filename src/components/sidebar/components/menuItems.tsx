import { useEffect, useState } from "react";
import {
  IoHome,
  IoSettings,
  IoPerson,
  IoFolder,
  IoMail,
  IoStatsChart,
  IoImages,
  IoLogOut,
} from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const iconMapping = {
  IoHome: IoHome,
  IoSettings: IoSettings,
  IoPerson: IoPerson,
  IoFolder: IoFolder,
  IoMail: IoMail,
  IoStatsChart: IoStatsChart,
  IoImages: IoImages,
  IoLogOut: IoLogOut,
};

type NavData = {
  title: string;
  icon: keyof typeof iconMapping;
  url: string;
};

interface MenuItemsProps {
  navData: NavData[];
}

const MenuItems: React.FC<MenuItemsProps> = ({ navData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const currentIndex = navData?.findIndex(
      (item) => item.url === location.pathname
    );
    setActiveIndex(currentIndex);
  }, [location, navData]);

  return (
    <>
      {navData.map((item, index) => {
        const IconComponent = iconMapping[item.icon];

        return (
          <li
            key={index}
            className={`slider-item ${index === activeIndex ? "active" : ""}`}
          >
            <Link
              to={item.url}
              style={{ textDecoration: "none" }}
              onClick={() => setActiveIndex(index)}
            >
              <button title={item.title}>
                <span>{IconComponent && <IconComponent />}</span>
                {item.title}
              </button>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default MenuItems;
