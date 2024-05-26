import { ItemClass } from "./ItemClass";

export interface ToDoListItemProps {
  items: ItemClass[];
  itemClicked: (id: string) => void;
  itemDeleted: (id: string) => void;
}
