import {
  Button,
  Heading,
  HStack,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useCategories from "../../hooks/useCategories";

interface Props {
  selectedCategoryId?: number;
  onSelectCategory: (categoryId?: number) => void;
}

export default function CategoryList({
  selectedCategoryId,
  onSelectCategory,
}: Props) {
  const { data, error, isLoading } = useCategories();

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <Spinner />;

  const categories = [{ id: undefined, name: "" }, ...data];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id ? category.id : 0} paddingY="5px">
            <HStack>
              <Button
                fontSize="lg"
                fontWeight={
                  category.id === selectedCategoryId ? "bold" : "normal"
                }
                textAlign="left"
                variant="link"
                whiteSpace="normal"
                onClick={() => onSelectCategory(category.id)}
              >
                {category.id ? category.name : "All products"}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}
