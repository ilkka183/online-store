import { Box, Button, HStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import FormHeading from "../../components/FormHeading";
import useClientAddresses from "../../hooks/client/useClientAddresses";
import AddressCard from "./AddressCard";

export default function AddressBookPage() {
  const clientId = 1;

  const { data } = useClientAddresses(clientId);

  const handleRemove = (id: number) => {
    console.log(id);
  };

  return (
    <Box paddingX={5}>
      <FormHeading>Address Book</FormHeading>
      <Button as={Link} to="/account/addressbook/add">
        Add New Address
      </Button>
      <HStack mt={4}>
        {data?.data.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onRemove={handleRemove}
          />
        ))}
      </HStack>
    </Box>
  );
}
