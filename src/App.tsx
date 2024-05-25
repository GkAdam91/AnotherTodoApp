import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ToDoList from "./Components/ToDoList";
import { ItemClass } from "./Models/ItemClass";

function App() {
  const items: ItemClass[] = [
    new ItemClass("Buy milk", 1),
    new ItemClass("Buy bread", 2),
  ];

  const itemCLicked = (id: number) => {
    console.log("Item clicked: ", id);
  };

  const itemDeleted = (id: number) => {
    console.log("Item deleted: ", id);
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
