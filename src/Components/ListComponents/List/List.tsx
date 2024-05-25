import * as React from "react";
import "./List.css";
import { ItemClass } from "../../../Models/ItemClass";
import { ListItem } from "../ListItem/ListItem";
import { ToDoListItemProps } from "../../../Models/ToDoListItemProps";

export const List: React.FC<ToDoListItemProps> = (props) => {
  return (
    <div>
      <ul>
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
    </div>
  );
};
