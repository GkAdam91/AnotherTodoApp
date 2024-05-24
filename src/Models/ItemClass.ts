export class ItemClass {
  text: string;
  done: boolean;
  id: number;
  constructor(text: string, id: number) {
    this.text = text;
    this.done = false;
    this.id = id;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
