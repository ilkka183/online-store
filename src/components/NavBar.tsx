import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";
import MenuItemLink from "./MenuItemLink";
import { CgShoppingCart } from "react-icons/cg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Cart } from "../api/cartApi";
import { ProductQuery } from "../api/productApi";

interface Props {
  cart: Cart;
  productQuery: ProductQuery;
  onSearch: (searchText: string) => void;
}

export default function NavBar({ cart, productQuery, onSearch }: Props) {
  const navigate = useNavigate();

  const handleSignOut = () => {};

  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" onClick={() => navigate("/home")} />
        <SearchInput productQuery={productQuery} onSearch={onSearch} />
        <Link as={RouterLink} to="/signup">
          Create account
        </Link>
        <Button onClick={() => navigate("/signin")}>Sign in</Button>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              variant="text"
              cursor={"pointer"}
              rightIcon={<ChevronDownIcon />}
            >
              <VStack alignItems="start" spacing={0}>
                <Text fontSize="sm" fontWeight="normal">
                  Hi {"Ilkka"}
                </Text>
                <Text>My Account</Text>
              </VStack>
            </MenuButton>
            <MenuList>
              <MenuItemLink to="/account/orders">Orders</MenuItemLink>
              <MenuItemLink to="/account/information">
                Account Information
              </MenuItemLink>
              <MenuItemLink to="/account/address-book">
                Address Book
              </MenuItemLink>
              <MenuItemLink to="/account/paymentmethods">
                Payment Methods
              </MenuItemLink>
              <MenuDivider />
              <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Box>
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
