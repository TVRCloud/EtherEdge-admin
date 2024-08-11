import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IoNotificationsOutline } from "react-icons/io5";

interface DropdownProps {
  notifications: string[];
}
const Dropdown: React.FC<DropdownProps> = ({ notifications }) => {
  return (
    <Menu>
      <MenuButton className="notification-button" title="Notifications">
        <span className="notification-icon">
          <IoNotificationsOutline />
        </span>
      </MenuButton>
      <MenuList className="notification-list">
        {notifications.map((notification, index) => (
          <MenuItem className="notification-item" minH="48px" key={index}>
            <div className="notification-profile">
              <img src="https://i.pravatar.cc/300" alt="Profile" />
            </div>
            {notification}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
