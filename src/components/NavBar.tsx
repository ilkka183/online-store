import { Button, HStack, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { CgShoppingCart } from "react-icons/cg";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" onClick={() => navigate("/home")} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
        <Link as={RouterLink} to="/createaccount">
          Create account
        </Link>
        <Button onClick={() => navigate("/signin")}>Sign in</Button>
        <CgShoppingCart />
        <Link as={RouterLink} to="/cart">
          Cart
        </Link>
      </HStack>
    </>
  );
}
