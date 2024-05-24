import "./ListItem.css";
import { ItemClass } from "../../../Models/ItemClass";
import { ToDoListItemProps } from "../../../Models/ToDoListItemProps";

interface ListItemProps {
  item: ItemClass;
  ClickHandler: Function;
  DeleteHandler: Function;
}

export const ListItem = (props: ListItemProps) => {
  let { text, id } = props.item;

  return (
    <div className="list-item">
      <div className="text-container">
        <button onClick={props.ClickHandler.bind(null, id)}>done</button>
        <li>{text}</li>
      </div>
      <div className="delete-container">
        <button onClick={props.DeleteHandler.bind(null, id)}>delete</button>
      </div>
    </div>
  );
};
