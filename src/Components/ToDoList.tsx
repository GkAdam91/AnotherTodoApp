import classes from "./ToDoList.module.css";
import { List } from "./ListComponents/List/List";
import { ToDoListItemProps } from "../Models/ToDoListItemProps";

const ToDoList: React.FC<ToDoListItemProps> = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>My todo list</div>
        <div className={classes.searchBar}>Search bar</div>
      </header>
      <div className={classes.main}>
        <List
          items={props.items}
          itemClicked={props.itemClicked}
          itemDeleted={props.itemDeleted}
        ></List>
      </div>
      <footer className={classes.footer}>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default ToDoList;
