import { Entity, EntityId } from "../services/apiClient";

export class Table<T extends Entity> {
  private controller: Controller<T>;
  public data: T[];

  constructor(controller: Controller<T>) {
    this.controller = controller;
    this.data = this.getData();
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

  private getData(): T[] {
    const localValue = localStorage.getItem(this.controller.name);

    let data = [];

    if (localValue != null)
      data = JSON.parse(localValue);
    else
      data = this.controller.defaultData

    return data;
  }

  private setData(value: T[]) {
    this.data = value;

    localStorage.setItem(this.controller.name, JSON.stringify(this.data));
  }

}

export default abstract class Controller<T extends Entity> {
  public name: string;
  public defaultData: T[];

  constructor(name: string, defaultData: T[]) {
    this.name = name.toUpperCase();
    this.defaultData = defaultData;
  }

  public getAll(): T[] {
    const table = new Table(this);

    return table.data;
  }

  public get(id: EntityId): T | null {
    const table = new Table(this);

    return table.find(id);
  }

  public add(entity: T): T {
    const table = new Table(this);
    table.add(entity);

    return entity;
  }

  public replace(id: EntityId, entity: T): T | null {
    const table = new Table(this);
    table.replace(id, entity);

    return table.find(id);
  }

  public update(id: EntityId, entity: Partial<T>): T | null {
    const table = new Table(this);
    table.update(id, entity);

    return table.find(id);
  }

  public delete(id: EntityId): T | null {
    const table = new Table(this);
    const entity = table.find(id);

    if (entity != null)
      table.delete(id);

    return entity;
  }
  
}
