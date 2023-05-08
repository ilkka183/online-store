import { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export default function FormHeading({ children }: Props) {
  return (
    <Heading fontSize={"4xl"} paddingBottom={3}>
      {children}
    </Heading>
  );
}
