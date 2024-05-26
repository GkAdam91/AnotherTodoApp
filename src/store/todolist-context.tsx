import React, { PropsWithChildren, useState } from "react";
import { ItemClass } from "../Models/ItemClass";

export interface ToDoListObj {
  items: ItemClass[];
  itemClicked: (id: string) => void;
  itemDeleted: (id: string) => void;
}

export const TodoListContext = React.createContext<ToDoListObj>({
  items: [],
  itemClicked: (id: string) => {},
  itemDeleted: (id: string) => {},
});

const TodoListContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [items, setItems] = useState<ItemClass[]>([
    new ItemClass("Buy milk"),
    new ItemClass("Buy bread")
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

  const contextValue: ToDoListObj = {
    items: items,
    itemClicked: itemClicked,
    itemDeleted: itemDeleted,
  };

  return (
    <TodoListContext.Provider value={contextValue}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
