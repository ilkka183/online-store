import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
  label: string;
}

export default function FormInput({ label, ...props }: Props) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...props} />
    </FormControl>
  );
}
