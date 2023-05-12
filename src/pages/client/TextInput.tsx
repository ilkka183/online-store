import { Input, InputProps } from "@chakra-ui/react";

export default function TextInput({ ...props }: InputProps) {
  return <Input type="text" {...props} />;
}
