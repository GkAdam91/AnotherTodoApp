import "./ToDoList.css";
import { List } from "./ListComponents/List/List";
import { ToDoListItemProps } from "../Models/ToDoListItemProps";

const ToDoList: React.FC<ToDoListItemProps> = (props) => {
  console.log("🚀 ~ props:", props)
  
  
  return (
    <div>
      <div className="header">
        <div className="title">My todo list</div>
        <div className="searchbar">Search bar</div>
      </div>
      <div className="body">
        <List
          items={props.items}
          itemClicked={props.itemClicked}
          itemDeleted={props.itemDeleted}
        ></List>
      </div>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default ToDoList;
