import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { ProductQuery } from "../api/productApi";

interface Props {
  productQuery: ProductQuery;
  onSearch: (searchText: string) => void;
}

export default function SearchInput({ productQuery, onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search products..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}
