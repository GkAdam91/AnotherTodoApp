import classes from "./ToDoList.module.css";
import { List } from "./ListComponents/List/List";
import NewItem from "./ListComponents/NewItem/NewItem";

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
        <NewItem></NewItem>
      </footer>
    </>
  );
};

export default ToDoList;
