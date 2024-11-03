import { IoNotificationsOutline } from "react-icons/io5";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../../../ui/menu";

const NavNotifications = () => {
  const notifications = [
    {
      title: "New Message Received",
      content: "You have a new message from Sarah Connor. Check it out!",
      image: "https://i.pravatar.cc/300?img=1",
    },
    {
      title: "Meeting Reminder",
      content: "Don't forget your meeting with John Doe tomorrow at 10:00 AM.",
      image: "https://i.pravatar.cc/300?img=2",
    },
    {
      title: "Project Update",
      content:
        "The project 'Website Redesign' has been updated. Review the changes.",
      image: "https://i.pravatar.cc/300?img=3",
    },
    {
      title: "New Comment on Your Post",
      content: "Anna commented: 'Great job on the recent updates!'",
      image: "https://i.pravatar.cc/300?img=4",
    },
    {
      title: "File Upload Successful",
      content: "Your document 'Report_Q4.pdf' has been uploaded successfully.",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      title: "Password Expiration Alert",
      content: "Your password will expire in 3 days. Please update it soon.",
      image: "https://i.pravatar.cc/300?img=6",
    },
    {
      title: "New Connection Request",
      content: "Michael Brown has sent you a connection request.",
      image: "https://i.pravatar.cc/300?img=7",
    },
    {
      title: "System Maintenance Scheduled",
      content: "System maintenance is scheduled for Saturday, 10 PM - 12 AM.",
      image: "https://i.pravatar.cc/300?img=8",
    },
    {
      title: "New Like on Your Post",
      content: "Your post 'Weekly Update' received a new like from Jane.",
      image: "https://i.pravatar.cc/300?img=9",
    },
    {
      title: "Task Deadline Approaching",
      content: "The task 'Submit Financial Report' is due in 2 days.",
      image: "https://i.pravatar.cc/300?img=10",
    },
  ];

  return (
    <MenuRoot>
      <MenuTrigger asChild className="cursor-pointer">
        <IoNotificationsOutline className="text-text-secondary dark:text-dark-text-primary" />
      </MenuTrigger>
      <MenuContent className="max-h-[300px] max-w-[360px] mt-6 overflow-y-auto hide-scrollbar rounded-[16px]">
        {notifications.map((notification, index) => (
          <MenuItem key={index} value={notification.title}>
            <div className="flex gap-3 p-3 min-w-[360px]">
              <div className="w-[20%">
                <div className="h-[45px] w-[45px] rounded-full overflow-hidden">
                  <img src={notification.image} alt={notification.title} />
                </div>
              </div>

              <div className="w-[80%]">
                <h3>{notification.title}</h3>
                <p className="text-sm text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                  {notification.content}
                </p>
              </div>
            </div>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default NavNotifications;
