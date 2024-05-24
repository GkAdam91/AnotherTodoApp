import * as React from "react";
import "./List.css";
import { ItemClass } from "../../../Models/ItemClass";
import { ListItem } from "../ListItem/ListItem";
import { ToDoListItemProps } from "../../../Models/ToDoListItemProps";
interface ListProps {
  items: ItemClass[];
  ClickHandler: Function;
  DeleteHandler: Function;
}

export const List = (
  props: ListProps
) => {
  return (
    <div>
      <ul>
        {props.items.map((item: ItemClass) => {
          return (
            <ListItem
              item={item}
              ClickHandler={props.ClickHandler}
              DeleteHandler={props.DeleteHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};
