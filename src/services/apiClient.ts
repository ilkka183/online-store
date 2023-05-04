import axios, { AxiosError } from "axios";

export type EntityId = string | number;

export interface Entity {
  id: EntityId;
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
  protected endpoint: string;
 
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  protected get client() {
    return axiosClient;
  }


  // Custom
  public getAllAt = (endpoint: string) => {
    return this.client.get<T[]>(endpoint).then(res => res.data);
  }
 
  public getAt = (endpoint: string, id: EntityId) => {
    return this.client.get<T>(endpoint + "/" + id).then(res => res.data);
  }
 

  // Default
  public getAll = () => {
    return this.getAllAt(this.endpoint);
  }
 
  public get = (id: EntityId) => {
    return this.getAt(this.endpoint, id);
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
