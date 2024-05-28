import classes from "./ToDoList.module.css";
import { List } from "./ListComponents/List/List";
import NewItem from "./ListComponents/NewItem/NewItem";
import { ListIcon } from "../svg/ListIcon";
import { GridIcon } from "../svg/GridIcon";
import { Layout } from "../Models/LayoutEnum";
import { TodoListContext } from "../store/todolist-context";
import React from "react";

const ToDoList: React.FC = () => {
  const todoListCtx = React.useContext(TodoListContext);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>My todo list</div>
        <div className={classes.searchBar}>Search bar</div>
        <button
          onClick={todoListCtx.changeLayout}
          className={classes.layoutButton}
        >
          {todoListCtx.layout === Layout.List ? <ListIcon /> : <GridIcon />}
        </button>
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
