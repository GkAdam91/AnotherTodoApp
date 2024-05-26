import classes from "./ListItem.module.css";
import { ItemClass } from "../../../Models/ItemClass";

export const ListItem: React.FC<{
  item: ItemClass;
  itemClicked: (id: string) => void;
  itemDeleted: (id: string) => void;
}> = ({ item, itemClicked, itemDeleted, ...props }) => {
  let { text, id } = item;

  return (
    <li className={classes.item}>
      <div className={classes.textContainer}>
        <button
          className={classes.toggleButton + " " + (item.done ? classes.done : "")}
          onClick={itemClicked.bind(null, id)}
        />
        <p>{text}</p>
      </div>
      <div className={classes.deleteContainer}>
        <button onClick={itemDeleted.bind(null, id)}>delete</button>
      </div>
    </li>
  );
};
