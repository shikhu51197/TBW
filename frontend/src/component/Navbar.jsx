import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Image,
  Flex,
  Text,
  Link as ChakraLink,
  Button,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import logo from "../assest/logo.png";
import "react-toastify/dist/ReactToastify.css";
import AuthButtons from "./AuthButtons";

import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfull");
    window.location.reload();
  };

  return (
    <>
      <Flex
        as="nav"
        align="center"
        bg="white.500"
        justify="space-between"
        p={4}
        fontFamily="serif"
      >
        <Box display="flex"  ml={"30px"}>
          <Link to="/">
            <Image src={logo} alt="My Logo" ml={"5px"} h="80px" w="50%" />
          </Link>
        </Box>
        <Heading   fontSize="2xl" >Welcome to The BrandWick Website!</Heading>
        <Box>
          <AuthButtons isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          {token ? null : (
            <Link to="/signup">
              <Button colorScheme="blue" size="lg">
                Signup
              </Button>
            </Link>
          )}
        </Box>
        <Button onClick={toggleColorMode} size="lg" mr={4}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Navbar;
