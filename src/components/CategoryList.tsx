import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import useCategories from "../hooks/useCategories";

interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

function CategoryList({ selectedCategory, onSelectCategory }: Props) {
  const { data: categories } = useCategories();

  return (
    <List dense={true}>
      <ListItem disablePadding>
        <ListItemButton
          selected={selectedCategory === ""}
          onClick={() => onSelectCategory("")}
        >
          <ListItemText primary="All products" />
        </ListItemButton>
      </ListItem>
      {categories.map((category) => (
        <ListItem disablePadding key={category}>
          <ListItemButton
            selected={selectedCategory === category}
            onClick={() => onSelectCategory(category)}
          >
            <ListItemText primary={category} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;
