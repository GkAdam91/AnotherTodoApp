import classes from "./ListItem.module.css";
import { ItemClass } from "../../../Models/ItemClass";

export const ListItem: React.FC<{
  item: ItemClass;
  itemClicked: (id: number) => void;
  itemDeleted: (id: number) => void;
}> = ({ item, itemClicked, itemDeleted, ...props }) => {
  let { text, id } = item;

  return (
    <li className={classes.item}>
      <div className={classes.textContainer}>
        <button onClick={itemClicked.bind(null, id)}>done</button>
        <p>{text}</p>
      </div>
      <div className={classes.deleteContainer}>
        <button onClick={itemDeleted.bind(null, id)}>delete</button>
      </div>
    </li>
  );
};
