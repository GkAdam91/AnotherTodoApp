import { useState } from "react";
import ToDoList from "./Components/ToDoList";
import { ItemClass } from "./Models/ItemClass";

function App() {
  const [items, setItems] = useState<ItemClass[]>([
    new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy breadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbreadbread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread and other things even though it makes no sense", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),
  ]);

  const itemCLicked = (id: number) => {
    console.log("Item clicked: ", id);
  };

  const itemDeleted = (id: number) => {
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
