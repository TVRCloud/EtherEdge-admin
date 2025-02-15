import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import {
  FiHome,
  FiSettings,
  FiUsers,
  FiFolder,
  FiPieChart,
  FiChevronDown,
  FiChevronRight,
  FiMail,
} from "react-icons/fi";

interface SidebarItem {
  name: string;
  icon: React.ElementType;
  path: string;
  subItems?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  { name: "Dashboard", icon: FiHome, path: "/" },
  {
    name: "About Me",
    icon: FiSettings,
    path: "/about",
  },
  {
    name: "Skills",
    icon: FiPieChart,
    path: "/skills",
  },
  {
    name: "Contact",
    icon: FiMail,
    path: "/contact",
  },
  {
    name: "Portfolio",
    icon: FiPieChart,
    path: "/portfolio",
    subItems: [
      { name: "Projects", icon: FiFolder, path: "/portfolio/projects" },
      { name: "Resume", icon: FiFolder, path: "/portfolio/resume" },
    ],
  },
  {
    name: "User Management",
    icon: FiUsers,
    path: "/users",
    subItems: [
      { name: "Users", icon: FiUsers, path: "/users/list" },
      { name: "Roles", icon: FiUsers, path: "/users/roles" },
    ],
  },
  {
    name: "Settings",
    icon: FiPieChart,
    path: "/settings",
  },
];

interface NestedSidebarItemProps {
  item: SidebarItem;
  isNested?: boolean;
  activePath: string;
  setActivePath: (path: string) => void;
  openSubmenus: string[];
  setOpenSubmenus: (paths: string[]) => void;
}

const NestedSidebarItem: React.FC<NestedSidebarItemProps> = ({
  item,
  isNested = false,
  activePath,
  setActivePath,
  openSubmenus,
  setOpenSubmenus,
}) => {
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isOpen = openSubmenus.includes(item.path);
  const isActive =
    activePath === item.path ||
    (hasSubItems &&
      item.subItems!.some((subItem) => activePath === subItem.path));

  const handleClick = () => {
    if (hasSubItems) {
      if (isOpen) {
        setOpenSubmenus(openSubmenus.filter((path) => path !== item.path));
      } else {
        setOpenSubmenus([
          ...openSubmenus.filter((path) => {
            const parentItem = sidebarItems.find((i) => i.path === path);
            return !parentItem || parentItem.subItems === undefined;
          }),
          item.path,
        ]);
      }
    }
  };

  return (
    <div className="flex flex-col text-sm">
      <div
        className={`flex items-center p-3 cursor-pointer rounded-[12px]
          ${
            isActive
              ? "bg-primary-color text-text-primary"
              : "text-text-primary hover:bg-main-bg"
          }
          ${isNested ? "pl-8" : "pl-4"}`}
        onClick={hasSubItems ? handleClick : undefined} // Handle click only for items with sub-items
      >
        {hasSubItems ? (
          <>
            <item.icon className="mr-3" />
            <span className="flex-1">{item.name}</span>
            {isOpen ? <FiChevronDown /> : <FiChevronRight />}
          </>
        ) : (
          <Link
            to={item.path}
            onClick={() => setActivePath(item.path)} // Update active path on click
            className={`flex items-center w-full
              ${
                isActive ? "bg-primary-color text-white " : "text-text-primary "
              }`}
          >
            <item.icon className="mr-3" />
            <span className="flex-1">{item.name}</span>
          </Link>
        )}
      </div>
      {/* Render sub-items only if the parent item is open */}
      {hasSubItems && isOpen && (
        <div className="mt-1 mb-1 pl-4">
          {item.subItems!.map((subItem) => (
            <div key={subItem.path} className="flex">
              <Link
                to={subItem.path}
                onClick={() => setActivePath(subItem.path)} // Update active path on click
                className={`flex items-center p-3 rounded-[12px]  w-full
                  ${
                    activePath === subItem.path
                      ? "bg-primary-color text-text-primary dark:bg-primary-color"
                      : "text-text-primary hover:bg-main-bg"
                  }`}
              >
                <subItem.icon className="mr-3" />
                <span className="flex-1">{subItem.name}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface NestedSidebarProps {
  initialActivePath?: string;
}

const NestedSidebar: React.FC<NestedSidebarProps> = ({
  initialActivePath = "/",
}) => {
  const location = useLocation(); // Get current location
  const [activePath, setActivePath] = useState(
    location.pathname || initialActivePath
  ); // Set initial active path to current pathname
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  useEffect(() => {
    // Update active path whenever location changes
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="h-full pb-10 overflow-x-hidden overflow-y-auto bg-primary-bg">
      <div className="flex flex-col mt-4 space-y-1">
        {sidebarItems.map((item) => (
          <NestedSidebarItem
            key={item.path}
            item={item}
            activePath={activePath}
            setActivePath={setActivePath}
            openSubmenus={openSubmenus}
            setOpenSubmenus={setOpenSubmenus}
          />
        ))}
      </div>
    </nav>
  );
};

export default NestedSidebar;
