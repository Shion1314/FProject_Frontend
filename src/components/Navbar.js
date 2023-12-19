import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUniversity } from "react-icons/fa";
import {
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";

const NavbarLink = ({ to, children, ...props }) => {
  return (
    <NavLink style={{ textDecoration: "none", color: "black" }} to={to} {...props}>
      <Flex alignItems="center">{children}</Flex>
    </NavLink>
  );
};

export const Navbar = () => {
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <Flex
      style={{
        fontFamily: "Nunito",
        fontWeight: "bold",
        backgroundColor: "#EEE6FF",
        borderBottom: "3px solid white",
        width: "100%",
        height: "85px",
        overflowX: "clip",
      }}
    >
      <Flex
        style={{
          width: "100%",
          justifyContent: "space-between",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <NavbarLink to="/">
          <FaUniversity size="40" color="#544caf" />
          <Text pl="5">Home</Text>
        </NavbarLink>

        <Flex alignItems="center">
          <Menu>
            <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
              <Avatar name={currentUser && `${currentUser.firstName} ${currentUser.lastName}`} />
            </MenuButton>
            <MenuList maxW="50px">
              <MenuGroup
                title={
                  currentUser
                    ? `You are now logged in as ${currentUser.firstName} ${currentUser.lastName}`
                    : `You are not logged in`
                }
              >
                <MenuDivider />
                {currentUser && (
                  <MenuItem as={Link} to="/Profile">
                    My Favorites
                  </MenuItem>
                )}
                <MenuItem as={Link} to={`/${currentUser ? "logout" : "login"}`}>
                  {currentUser ? "Logout" : "Login"}
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};
