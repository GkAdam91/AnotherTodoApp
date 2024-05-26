import * as React from "react";
import { ItemClass } from "../../../Models/ItemClass";
import { ListItem } from "../ListItem/ListItem";
import classes from "./List.module.css";
import { TodoListContext } from "../../../store/todolist-context";

export const List: React.FC = () => {
  const todoListCtx = React.useContext(TodoListContext);
  return (
    <ul className={classes.list}>
      {todoListCtx.items.map((item: ItemClass) => {
        return (
          <ListItem
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
};
