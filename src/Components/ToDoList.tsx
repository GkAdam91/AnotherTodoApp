import "./ToDoList.css";
import { List } from "./ListComponents/List/List";
import { ItemClass } from "../Models/ItemClass";
import { ToDoListItemProps } from "../Models/ToDoListItemProps";

// const items: ToDoListItemProps[] = [
//   {
//     item: new ItemClass("item 1"),
//     itemClicked: () => console.log("item 1 clicked"),
//     itemDeleted: () => console.log("item 1 deleted"),
//   },
//   {
//     item: new ItemClass("item2"),
//     itemClicked: () => console.log("item 1 clicked"),
//     itemDeleted: () => console.log("item 1 deleted"),
//   },
//   {
//     item: new ItemClass("item3"),
//     itemClicked: () => console.log("item 1 clicked"),
//     itemDeleted: () => console.log("item 1 deleted"),
//   },
// ];

const items: ItemClass[] = [
  new ItemClass("item 1", 1),
  new ItemClass("item2", 2),
  new ItemClass("item3", 3),
];

const ClickHandler = (id: number) => console.log(`clicked ${id}`);
const DeleteHandler = (id: number) => console.log(`deleted ${id}`);

const ToDoList = () => {
  return (
    <div>
      <div className="header">
        <div className="title">My todo list</div>
        <div className="searchbar">Search bar</div>
      </div>
      <div className="body">
        <List
          items={items}
          ClickHandler={ClickHandler}
          DeleteHandler={DeleteHandler}
        ></List>
      </div>
      <div className="footer">
        <p>Footer</p>
      </div>
    </div>
  );
};

export default ToDoList;
