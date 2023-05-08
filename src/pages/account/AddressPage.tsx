import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import FormInput from "../../components/FormInput";
import FormHeading from "../../components/FormHeading";
import LinkButton from "../../components/LinkButton";
import { ClientAddress } from "../../api/clientAddressApi";

export default function AddressPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { properties, handleSubmit, errors } = useForm<ClientAddress>([
    { name: "fullName", required: true },
    { name: "addressLine1", required: true },
    { name: "addressLine2" },
    { name: "city", required: true },
    { name: "postalCode", required: true },
    { name: "country", required: true },
    { name: "phoneNumber", required: true },
  ]);

  const onSubmit = async (data: ClientAddress) => {
    console.log(data);
    navigate("/account/addressbook");
  };

  return (
    <Stack paddingX={5}>
      <FormHeading>{id ? "Edit Address" : "Add New Address"}</FormHeading>
      <FormInput label="Full Name" {...properties("fullName")} />
      <FormInput label="Address Line 1" {...properties("addressLine1")} />
      <FormInput label="Address Line 2" {...properties("addressLine2")} />
      <FormInput label="City" {...properties("city")} />
      <FormInput label="Postal Code" {...properties("postalCode")} />
      <FormInput label="Country" {...properties("country")} />
      <FormInput label="Phone Number" {...properties("phoneNumber")} />
      <HStack>
        <Button colorScheme="blue" onClick={() => handleSubmit(onSubmit)}>
          Save
        </Button>
        <LinkButton to="/account/addressbook">Cancel</LinkButton>
      </HStack>
    </Stack>
  );
}
