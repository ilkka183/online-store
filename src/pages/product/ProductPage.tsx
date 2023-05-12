import { HStack, Spacer, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/product/useProduct";
import Images from "./Images";
import Info from "./Info";
import Cart from "./Cart";
import Overview from "./Overview";

export default function ProductPage() {
  const { id } = useParams();

  if (id === undefined) return;

  const { data, error, isLoading } = useProduct(id);

  if (data === undefined) return;

  return (
    <VStack alignItems="left">
      <HStack alignItems="top" m={4}>
        <Images product={data} />
        <Info product={data} />
        <Spacer />
        <Cart product={data} />
      </HStack>
      <Overview product={data} />
    </VStack>
  );
}
