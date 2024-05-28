import React, { PropsWithChildren, useEffect, useState } from "react";
import { ItemClass } from "../Models/ItemClass";
import { Layout } from "../Models/LayoutEnum";

export interface ToDoListObj {
  items: ItemClass[];
  itemClicked: (id: string) => void;
  itemDeleted: (id: string) => void;
  addItem: (text: string) => void;
  changeLayout: () => void;
  layout: Layout;
}

export const TodoListContext = React.createContext<ToDoListObj>({
  items: [],
  itemClicked: (id: string) => {},
  itemDeleted: (id: string) => {},
  addItem: (text: string) => {},
  changeLayout: () => {},
  layout: Layout.List,
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

  const [layout, setLayout] = useState<Layout>(Layout.List);

  useEffect(() => {
    const layout = JSON.parse(localStorage.getItem("layout") || "1");
    setLayout(layout);
  }, []);

  useEffect(() => {
    const newLayout = JSON.stringify(layout);
    localStorage.setItem("layout", newLayout);
  }, [layout]);

  const layoutChangeHandler = () => {
    if (layout === Layout.List) {
      setLayout(Layout.Grid);
    } else {
      setLayout(Layout.List);
    }
  };

  const contextValue: ToDoListObj = {
    items: items,
    itemClicked: itemClicked,
    itemDeleted: itemDeleted,
    addItem: addItem,
    changeLayout: layoutChangeHandler,
    layout: layout,
  };

  return (
    <TodoListContext.Provider value={contextValue}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
