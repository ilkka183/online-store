import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function EmailField() {
  return (
    <FormControl>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input id="email" type="email" />
    </FormControl>
  );
}

export default EmailField;
