import { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <Input type={showPassword ? "text" : "password"} />
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
