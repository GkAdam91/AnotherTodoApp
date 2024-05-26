import ToDoList from "./Components/ToDoList";
import TodoListContextProvider from "./store/todolist-context";

function App() {
  return (
    <TodoListContextProvider>
      <ToDoList />
    </TodoListContextProvider>
  );
}

export default App;
