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
      "Buy bread and other things even though it makes no sense"
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

  const itemClicked = (id: string) => {
    console.log("Item clicked", id);
    
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.toggleDone();
      }
      return item;
    });
    setItems(updatedItems);
  };

  const itemDeleted = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ToDoList
      items={items}
      itemClicked={itemClicked}
      itemDeleted={itemDeleted}
    />
  );
}

export default App;
