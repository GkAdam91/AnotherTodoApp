import { ItemClass } from "./ItemClass";

export interface ToDoListItemProps {
  items: ItemClass[];
  itemClicked: (id: number) => void;
  itemDeleted: (id: number) => void;
}
