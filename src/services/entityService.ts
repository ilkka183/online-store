import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./apiClient";

export interface Entity {
  id: number | string;
}

export default abstract class EntityService<T extends Entity> {
  protected abstract name(): string;
  protected endpoint(): string { return "/" + this.name(); }

  public useAll(deps?: any[]) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
  
      apiClient
        .get<T[]>(this.endpoint(), {
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

    const onDelete = (id: number | string) => {
      const originalData = [...data];

      setData(data.filter((data) => data.id !== id));
  
      apiClient.delete(this.endpoint() + "/" + id).catch((err) => setData(originalData));
    }
  
    const onCreate = (entity: T) => {
      const originalData = [...data];

      setData([entity, ...data]);

      apiClient.post(this.endpoint(), entity).catch((err) => setData(originalData));
    }
  
    const onUpdate = (entity: T) => {
      const originalData = [...data];

      apiClient.patch(this.endpoint() + "/" + entity.id, entity).catch((err) => setData(originalData));
    }
  
    return { data, onDelete, onCreate, onUpdate, error, isLoading }
  }
}
