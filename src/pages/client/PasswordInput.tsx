import { useState } from "react";
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function PasswordInput({ ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <Input type={showPassword ? "text" : "password"} {...props} />
      <InputRightElement h={"full"}>
        <Button
          variant={"ghost"}
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
