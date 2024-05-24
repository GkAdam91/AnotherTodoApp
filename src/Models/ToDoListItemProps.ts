import { ItemClass } from './ItemClass';

export interface ToDoListItemProps {
    item: ItemClass;
    itemClicked: () => void;
    itemDeleted: () => void;
  }