import React, { useRef } from "react";
import { TodoListContext } from "../../../store/todolist-context";

import classes from "./NewItem.module.css";

const NewItem = () => {
  const todoListCtx = React.useContext(TodoListContext);
  const inputTextRef = useRef<HTMLInputElement>(null);

  const saveItem = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputTextRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todoListCtx.addItem(enteredText);
    inputTextRef.current!.value = "";
  };

  return (
    <>
      <form className={classes.formContainer} onSubmit={saveItem}>
        <input
          className={classes.input}
          ref={inputTextRef}
          id="inputText"
          type="text"
        />
        <button className={classes.button}>Add</button>
      </form>
    </>
  );
};

export default NewItem;
