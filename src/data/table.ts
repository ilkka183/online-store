import { Entity } from "../services/entityService";

export default abstract class Table<T extends Entity> {
  protected abstract name(): string;
  protected abstract defaultData(): T[];

  protected getData(): T[] {
    const localValue = localStorage.getItem(this.name());

    let data = [];

    if (localValue != null)
      data = JSON.parse(localValue);
    else
      data = this.defaultData()

    return data;
  }

  protected setData(data: T[]) {
    localStorage.setItem(this.name(), JSON.stringify(data));
  }

  public getAll(): T[] {
    return this.getData();
  }

  public get(id: string | number): T | null {
    const data = this.getData();

    const index = data.findIndex(item => item.id == id);

    if (index >= 0)
      return data[index];

    return null;
  }

  public delete(id: string | number): boolean {
    const data = this.getData();

    const newData = data.filter(item => item.id != id);
    this.setData(newData);

    return true;
  }

  public post(entity: T): boolean {
    const data = this.getData();

    const newData = [entity, ...data];
    this.setData(newData);

    return true;
  }

  public put(entity: T): boolean {
    const data = this.getData();

    const newData = data.map(item => item.id == entity.id ? entity : item);
    this.setData(newData);

    return true;
  }
}
