import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

function CategoryList({ selectedCategory, onSelectCategory }: Props) {
  const { data: categories } = useCategories();

  return (
    <List>
      <ListItem onClick={() => onSelectCategory("")}>All products</ListItem>
      {categories.map((category) => (
        <ListItem key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;
