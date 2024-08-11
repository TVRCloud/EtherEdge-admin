import { navData } from "../../../data/navData";
import MenuItems from "./menuItems";
import SidebarDocs from "./sidebarCard";
const Contents = () => {
  return (
    <div className="Sidebar-contents">
      <div className="sidebar-header flex-center">
        <div className="logo">
          <h1>Admin Dash</h1>
        </div>
      </div>

      <div className="sidebar-body flex-center">
        <div className="navigation">
          <ul>
            <MenuItems navData={navData} />
          </ul>
        </div>
      </div>

      <div className="sidebar-bottom">
        <SidebarDocs />
      </div>
    </div>
  );
};

export default Contents;
