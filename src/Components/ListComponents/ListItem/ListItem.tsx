import classes from "./ListItem.module.css";
import { ItemClass } from "../../../Models/ItemClass";
import React from "react";
import { TodoListContext } from "../../../store/todolist-context";

export const ListItem: React.FC<{
  item: ItemClass;
}> = ({ item, ...props }) => {
  const todoListCtx = React.useContext(TodoListContext);
  let { text, id } = item;

  return (
    <li className={classes.item}>
      <div className={classes.textContainer}>
        <button
          className={classes.toggleButton + " " + (item.done ? classes.done : "")}
          onClick={todoListCtx.itemClicked.bind(null, id)}
        />
        <p>{text}</p>
      </div>
      <div className={classes.deleteContainer}>
        <button onClick={todoListCtx.itemDeleted.bind(null, id)}>delete</button>
      </div>
    </li>
  );
};
