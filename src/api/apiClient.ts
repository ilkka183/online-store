import axios from "axios";

export type EntityId = string | number;

export interface Entity {
  id: EntityId;
}

export interface Entities<T> {
  count: number;
  data: T[];
}

export interface ReplaceEntity<T extends Entity> {
  id: EntityId;
  data: T;
}

export interface UpdateEntity<T extends Entity> {
  id: EntityId;
  data: Partial<T>;
}

const axiosClient = axios.create({
//   baseURL: 'https://fakestoreapi.com'
  baseURL: '/api'
});

export default class APIClient<T extends Entity> {
  protected readonly endpoint: string;
 
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  protected get client() {
    return axiosClient;
  }

  public fetchById = (id: EntityId) => {
    return this.client.get<T>(this.endpoint + "/" + id).then(res => res.data);
  }
 
  public getAll = () => {
    return this.client.get<Entities<T>>(this.endpoint).then(res => res.data);
  }
 
  public post = (data: T) => {
    return this.client.post<T>(this.endpoint, data).then(res => res.data);
  }
 
  public put = (data: ReplaceEntity<T>) => {
    return this.client.put<T>(this.endpoint + "/" + data.id, data.data).then(res => res.data);
  }
 
  public patch = (data: UpdateEntity<T>) => {
    return this.client.patch<T>(this.endpoint + "/" + data.id, data.data).then(res => res.data);
  }
 
  public delete = (id: EntityId) => {
    return this.client.delete<T>(this.endpoint + "/" + id).then(res => res.data);
  }
}
