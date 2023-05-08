import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormHeading from "../../components/FormHeading";

export default function AddressBookPage() {
  return (
    <Box paddingX={5}>
      <FormHeading>Address Book</FormHeading>
      <Button as={Link} to="/account/addressbook/add">
        Add New Address
      </Button>
      <Button as={Link} to="/account/addressbook/edit/1" ml={2}>
        Edit Address
      </Button>
    </Box>
  );
}
