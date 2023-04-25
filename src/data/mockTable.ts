import { Entity, EntityId, ReplaceEntity, UpdateEntity } from "../services/apiClient";

export default class MockTable<T extends Entity> {
  private name: string;
  private defaultData: T[];

  constructor(name: string, defaultData: T[]) {
    this.name = name.toUpperCase();
    this.defaultData = defaultData;
  }

  private getData(): T[] {
    const localValue = localStorage.getItem(this.name);

    let data = [];

    if (localValue != null)
      data = JSON.parse(localValue);
    else
      data = this.defaultData

    return data;
  }

  private setData(data: T[]) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }

  private find(data: T[], id: EntityId): T | null {
    const entity = data.find(item => item.id == id);

    return entity ? entity : null;
  }

  public getAll(): T[] {
    return this.getData();
  }

  public getById(id: EntityId): T | null {
    const data = this.getData();

    return this.find(data, id);
  }

  public post(entity: T): T {
    const data = this.getData();

    const newData = [entity, ...data];
    this.setData(newData);

    return entity;
  }

  public put(variables: ReplaceEntity<T>): T | null {
    const data = this.getData();

    const newData = data.map(item => item.id == variables.id ? variables.data : item);
    this.setData(newData);

    return this.find(data, variables.id);
  }

  public patch(variables: UpdateEntity<T>): T | null {
    const data = this.getData();

    const newData = data.map(item => item.id == variables.id ? {...item, ...variables.data} : item);
    this.setData(newData);

    return this.find(data, variables.id);
  }

  public delete(id: EntityId): T | null {
    const data = this.getData();
    
    const entity = this.find(data, id);

    const newData = data.filter(item => item.id != id);
    this.setData(newData);

    return entity;
  }
}
