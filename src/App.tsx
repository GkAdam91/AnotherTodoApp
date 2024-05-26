import { useState } from "react";
import ToDoList from "./Components/ToDoList";
import { ItemClass } from "./Models/ItemClass";

function App() {
  const [items, setItems] = useState<ItemClass[]>([
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass(
      "Buy breadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbread"
    ),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread and other things even though it makes no sense"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread"),
  ]);

  const itemCLicked = (id: string) => {
    console.log("Item clicked: ", id);
  };

  const itemDeleted = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ToDoList
      items={items}
      itemClicked={itemCLicked}
      itemDeleted={itemDeleted}
    />
  );
}

export default App;
