export class ItemClass {
  text: string;
  done: boolean;
  id: string;
  constructor(text: string) {
    this.text = text;
    this.done = false;
    this.id = makeid(10);
  }

  toggleDone() {
    this.done = !this.done;
  }
}

const makeid = (length: number): string => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
