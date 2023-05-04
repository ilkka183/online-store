import { Entity, EntityId } from "../services/apiClient";
import Controller from "./controller";

export default class Table<T extends Entity> {
  private name: string;
  private defaultData: T[];
  public data: T[];

  constructor(controller: Controller<T>) {
    this.name = "STORE_" + controller.name.toUpperCase() + "_TABLE";
    this.defaultData = controller.defaultData;
    this.data = this.readData();
  }

  public find(id: EntityId): T | null {
    const entity = this.data.find(item => item.id == id);

    return entity ? entity : null;
  }

  public add(entity: T) {
    if (entity.id === 0) {
      let id: EntityId = 0;

      for (let item of this.data)
        if (item.id > id)
          id = item.id;

      entity.id = (id as number) + 1;
    }

    const newData = [...this.data, entity];
    this.setData(newData);
  }

  public replace(id: EntityId, entity: T) {
    const newData = this.data.map(item => item.id == id ? entity : item);
    this.setData(newData);
  }

  public update(id: EntityId, entity: Partial<T>) {
    const newData = this.data.map(item => item.id == id ? {...item, ...entity} : item);
    this.setData(newData);
  }

  public delete(id: EntityId) {
    const entity = this.find(id);

    if (entity != null) {
      const newData = this.data.filter(item => item.id != id);
      this.setData(newData);
    }
  }

  private readData(): T[] {
    const localValue = localStorage.getItem(this.name);

    let data = [];

    if (localValue != null)
      data = JSON.parse(localValue);
    else
      data = this.defaultData

    return data;
  }

  private setData(value: T[]) {
    this.data = value;

    localStorage.setItem(this.name, JSON.stringify(this.data));
  }

}
