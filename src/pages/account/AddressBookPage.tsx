import { Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormHeading from "../../components/FormHeading";
import useAddresses from "../../hooks/client/useAddresses";
import AddressCard from "./AddressCard";

export default function AddressBookPage() {
  const clientId = 1;
  const { data } = useAddresses(clientId);

  const handleRemove = (id: number) => {
    console.log(id);
  };

  const handleSetAsDefault = (id: number) => {
    console.log(id);
  };

  return (
    <Box paddingX={5}>
      <FormHeading>Address Book</FormHeading>
      <Button as={Link} to="/account/address-book/add">
        Add New Address
      </Button>
      <HStack mt={4}>
        {data?.data.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onRemove={handleRemove}
            onSetAsDefault={handleSetAsDefault}
          />
        ))}
      </HStack>
    </Box>
  );
}
