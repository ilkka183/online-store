import { Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import { CgShoppingCart } from "react-icons/cg";
import { Cart } from "../api/cartApi";

interface Props {
  cart: Cart;
  onSearch: (searchText: string) => void;
}

export default function NavBar({ cart, onSearch }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" onClick={() => navigate("/home")} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
        <Link as={RouterLink} to="/signup">
          Create account
        </Link>
        <Button onClick={() => navigate("/signin")}>Sign in</Button>
        <Link as={RouterLink} to="/cart">
          <HStack>
            <CgShoppingCart size="24px" />
            <Text>{`(${cart.items.length})`}</Text>
          </HStack>
        </Link>
      </HStack>
    </>
  );
}
