import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

export default function RouterButton({ to, children }: Props) {
  return (
    <Button as={Link} to={to}>
      {children}
    </Button>
  );
}
