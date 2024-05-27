import React, { PropsWithChildren, useEffect, useState } from "react";
import { ItemClass } from "../Models/ItemClass";

export interface ToDoListObj {
  items: ItemClass[];
  itemClicked: (id: string) => void;
  itemDeleted: (id: string) => void;
  addItem: (text: string) => void;
}

export const TodoListContext = React.createContext<ToDoListObj>({
  items: [],
  itemClicked: (id: string) => {},
  itemDeleted: (id: string) => {},
  addItem: (text: string) => {},
});

const TodoListContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [items, setItems] = useState<ItemClass[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    if (items.length > 0) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    const newLocal = JSON.stringify(items);
    localStorage.setItem("items", newLocal);
  }, [items]);

  const itemClicked = (id: string) => {
    console.log("Item clicked", id);

    const updatedItems: ItemClass[] = items.map(
      (item: ItemClass): ItemClass => {
        if (item.id === id) {
          item.toggleDone();
        }
        return item;
      }
    );
    setItems(updatedItems);
  };

  const itemDeleted = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text: string) => {
    const newItem = new ItemClass(text);
    setItems((prevItems) => {
      return prevItems.concat(newItem);
    });
  };

  const contextValue: ToDoListObj = {
    items: items,
    itemClicked: itemClicked,
    itemDeleted: itemDeleted,
    addItem: addItem,
  };

  return (
    <TodoListContext.Provider value={contextValue}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
