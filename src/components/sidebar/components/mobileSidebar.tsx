import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { IoMenu } from "react-icons/io5";
import Contents from "./contents";

const MobileSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mobile-sidebar">
      <Button
        className="mobile-sidebar-btn"
        ref={btnRef}
        onClick={onOpen}
        title="Open"
      >
        <IoMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        // className="mobile-drawer"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay style={{ background: "#ffffff9d" }} onClick={onClose} />
        <DrawerContent
          sx={{
            maxWidth: "300px",
            width: "100%",
            height: "100vh",
            background: "#fff",
          }}
          className=""
        >
          {/* <DrawerCloseButton position={'absolute'} top={5} right={5} borderRadius={50} padding={3} color={'red'} border={'none'} cursor={'pointer'}/> */}

          <DrawerBody onClick={onClose}>
            <div className="mobileContainer">
              <Contents />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
