import * as React from "react";
import { ItemClass } from "../../../Models/ItemClass";
import { ListItem } from "../ListItem/ListItem";
import { ToDoListItemProps } from "../../../Models/ToDoListItemProps";
import classes from "./List.module.css";

export const List: React.FC<ToDoListItemProps> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item: ItemClass) => {
        return (
          <ListItem
            key={item.id}
            item={item}
            itemClicked={props.itemClicked}
            itemDeleted={props.itemDeleted}
          />
        );
      })}
    </ul>
  );
};
