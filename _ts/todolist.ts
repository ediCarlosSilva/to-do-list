export default class ToDoList {
  _list: { _id: string; _item: string }[] = [];
  constructor() {
    this._list = [];
  }

  getList() {
    return this._list;
  }

  clearList() {
    this._list = [];
  }

  addItemToList(itemObj: { _id: string; _item: string }) {
    this._list.push(itemObj);
  }

  removeItemFromList(id: string) {
    const list = this._list;
    for (let i = 0; i < list.length; i++) {
      if (list[i]._id == id) {
        list.splice(i, 1);
        break;
      }
    }
  }
}
