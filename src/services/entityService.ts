import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./apiClient";
import MockTable from "../data/mockTable";

export interface Entity {
  id: number | string;
}

export default class EntityService<T extends Entity> {
  private name: string;
  private mockData: T[];

  constructor(name: string, mockData: T[]) {
    this.name = name;
    this.mockData = mockData;
  }

  protected endpoint(): string { return "/" + this.name; }
  protected endpointOf(id: string | number): string { return this.endpoint() + "/" + id; }

  public createMockTable() {
    return new MockTable<T>(this.name, this.mockData);
  }

  protected useOf(endpoint: string, deps?: any[]) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
  
      apiClient
        .get<T[]>(endpoint, {
          signal: controller.signal,
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
  
          setError(err.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, deps ? [...deps] :  []);

    const onCreate = (entity: T) => {
      const originalData = [...data];

      const newData = [entity, ...data]; 
      setData(newData);

      apiClient.post(this.endpoint(), entity).catch((err) => setData(originalData));
    }
  
    const onReplace = (entity: T) => {
      const originalData = [...data];

      const newData = data.map(item => item.id === entity.id ? entity : item);
      setData(newData);

      apiClient.put(this.endpointOf(entity.id), entity).catch((err) => setData(originalData));
    }
  
    const onUpdate = (id: string | number, entity: Partial<T>) => {
      const originalData = [...data];

      const newData = data.map(item => item.id === id ? {...item, ...entity} : item); 
      setData(newData);

      apiClient.patch(this.endpointOf(id), entity).catch((err) => setData(originalData));
    }

    const onDelete = (id: string | number) => {
      const originalData = [...data];

      const newData = data.filter((item) => item.id !== id);
      setData(newData);
  
      apiClient.delete(this.endpointOf(id)).catch((err) => setData(originalData));
    }
 
    return { data, onCreate, onReplace, onUpdate, onDelete, error, isLoading }
  }

  public use(deps?: any[]) {
    return this.useOf(this.endpoint(), deps);
  }
}
