import { HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/product/useProduct";
import Images from "./Images";
import Info from "./Info";
import Cart from "./Cart";
import Overview from "./Overview";
import RouterLink from "../../components/RouterLink";

export default function ProductPage() {
  const { id } = useParams();

  if (id === undefined) return null;

  const { data, error, isLoading } = useProduct(id);

  if (data === undefined) return null;

  return (
    <VStack alignItems="left" m={4}>
      <HStack>
        <Text>Brands</Text>
        <Text>{" > "}</Text>
        <RouterLink to={"/brands/" + data.brand.id}>
          {data.brand.name}
        </RouterLink>
      </HStack>
      <HStack>
        <Text>Categories</Text>
        <Text>{" > "}</Text>
        <RouterLink to={"/categories/" + data.category.id}>
          {data.category.name}
        </RouterLink>
      </HStack>
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
