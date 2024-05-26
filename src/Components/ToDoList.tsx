import classes from "./ToDoList.module.css";
import { List } from "./ListComponents/List/List";

const ToDoList: React.FC = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>My todo list</div>
        <div className={classes.searchBar}>Search bar</div>
      </header>
      <main className={classes.main}>
        <List></List>
      </main>
      <footer className={classes.footer}>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default ToDoList;
