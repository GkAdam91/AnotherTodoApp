export class ItemClass {
  text: string;
  done: boolean;
  id: string;
  constructor(text: string) {
    this.text = text;
    this.done = false;
    this.id = crypto.randomUUID();
  }

  toggleDone() {
    this.done = !this.done;
  }
}
