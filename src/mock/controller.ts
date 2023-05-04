import { Entity, EntityId } from "../services/apiClient";
import Table from "./table";

export default abstract class Controller<T extends Entity> {
  public name: string;
  public defaultData: T[];

  constructor(name: string, defaultData: T[]) {
    this.name = name;
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
