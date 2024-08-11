import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Search from "./components/search";
import './navbar.scss';
import Dropdown from "./components/dropdown";
import MobileSidebar from "../sidebar/components/mobileSidebar";
import Profile from "./components/profile";

const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const notifications = ['New message received', 'Meeting reminder', 'Update available'];


  const generateBreadcrumbs = () => {
    return pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
            <BreadcrumbItem key={to}>
                <BreadcrumbLink as={Link} to={to} style={{ textDecoration: 'none', color: '#abb4cb' }}>
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                </BreadcrumbLink>
            </BreadcrumbItem>
        );
    });
};

const getPageTitle = () => {
  const currentPath = pathnames[pathnames.length - 1] || 'Home';
  return currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
};

const handleSearch = (value: string) => {
  console.log('Search:', value);
};

  return (
    <div className='Navbar'>
    <div className="page-info">
        <Breadcrumb >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/" style={{ textDecoration: 'none', color: '#abb4cb' }}>
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            {generateBreadcrumbs()}
        </Breadcrumb>
        <Heading as="h2" size="lg" mt={2} color="#000">
            {getPageTitle()}
        </Heading>
    </div>
    <div className="quick-menu">
        <Flex alignItems="center" gap={2}>
            <Search onSearch={handleSearch} />
            <Dropdown notifications={notifications} />
            <MobileSidebar />
            <Profile />

        </Flex>
    </div>
</div>  )
}

export default Navbar