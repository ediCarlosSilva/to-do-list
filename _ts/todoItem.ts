export default class ToDoItem {
  _id: string;
  _item: string;
  constructor(_id: string, _item: string) {
    this._id = _id;
    this._item = _item;
  }

  getId() {
    return this._id;
  }

  setId(id: string) {
    this._id = id;
  }

  getItem() {
    return this._item;
  }

  setItem(item: string) {
    this._item = item;
  }
}
