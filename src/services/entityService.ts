import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./apiClient";

export interface Entity {
  id: number;
}

export default class EntityService<T extends Entity> {
  private endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public useAll(deps?: any[]) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
  
      setLoading(true);
  
      apiClient
        .get<T[]>(this.endpoint, {
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
  
    return { data, setData, error, isLoading }
  }

  public delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  public create(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  public update(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}
