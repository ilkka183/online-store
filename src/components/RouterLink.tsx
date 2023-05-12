import { ReactNode } from "react";
import { Link, LinkProps } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props extends LinkProps {
  to: string;
  children: ReactNode;
}

export default function RouterLink({ to, children }: Props) {
  return (
    <Link as={ReactRouterLink} to={to}>
      {children}
    </Link>
  );
}
