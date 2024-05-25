import classes from "./ToDoList.module.css";
import { List } from "./ListComponents/List/List";
import { ToDoListItemProps } from "../Models/ToDoListItemProps";

const ToDoList: React.FC<ToDoListItemProps> = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.title}>My todo list</div>
        <div className={classes.searchBar}>Search bar</div>
      </div>
      <div className={classes.body}>
        <List
          items={props.items}
          itemClicked={props.itemClicked}
          itemDeleted={props.itemDeleted}
        ></List>
      </div>
      <div className={classes.footer}>
        <p>Footer</p>
      </div>
    </div>
  );
};

export default ToDoList;
