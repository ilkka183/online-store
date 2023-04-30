import { Entity, EntityId } from "../services/apiClient";

export default abstract class MockTable<T extends Entity> {
  private name: string;
  private defaultData: T[];

  constructor(name: string, defaultData: T[]) {
    this.name = name.toUpperCase();
    this.defaultData = defaultData;
  }

  protected getData(): T[] {
    const localValue = localStorage.getItem(this.name);

    let data = [];

    if (localValue != null)
      data = JSON.parse(localValue);
    else
      data = this.defaultData

    return data;
  }

  protected setData(data: T[]) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }

  protected find(data: T[], id: EntityId): T | null {
    const entity = data.find(item => item.id == id);

    return entity ? entity : null;
  }

  public getAll(): T[] {
    return this.getData();
  }

  public get(id: EntityId): T | null {
    const data = this.getData();

    return this.find(data, id);
  }

  public post(entity: T): T {
    const data = this.getData();

    if (entity.id === 0) {
      let id: EntityId = 0;

      for (let item of data)
        if (item.id > id)
          id = item.id;

      entity.id = (id as number) + 1;
    }

    const newData = [...data, entity];
    this.setData(newData);

    return entity;
  }

  public put(id: EntityId, entity: T): T | null {
    const data = this.getData();

    const newData = data.map(item => item.id == id ? entity : item);
    this.setData(newData);

    return this.find(data, id);
  }

  public patch(id: EntityId, entity: Partial<T>): T | null {
    const data = this.getData();

    const newData = data.map(item => item.id == id ? {...item, ...entity} : item);
    this.setData(newData);

    return this.find(data, id);
  }

  public delete(id: EntityId): T | null {
    const data = this.getData();
    
    const entity = this.find(data, id);

    const newData = data.filter(item => item.id != id);
    this.setData(newData);

    return entity;
  }
  
}
