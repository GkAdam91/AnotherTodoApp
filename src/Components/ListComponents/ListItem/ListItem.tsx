import "./ListItem.css";
import { ItemClass } from "../../../Models/ItemClass";
import { ToDoListItemProps } from "../../../Models/ToDoListItemProps";

export const ListItem: React.FC<{
  item: ItemClass;
  itemClicked: (id: number) => void;
  itemDeleted: (id: number) => void;
}> = ({ item, itemClicked, itemDeleted, ...props }) => {
  let { text, id } = item;

  return (
    <div className="list-item">
      <div className="text-container">
        <button onClick={itemClicked.bind(null, id)}>done</button>
        <li>{text}</li>
      </div>
      <div className="delete-container">
        <button onClick={itemDeleted.bind(null, id)}>delete</button>
      </div>
    </div>
  );
};
