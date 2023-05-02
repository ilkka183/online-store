import axios from "axios";

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

  protected getAllAt = (endpoint: string) => {
    return axiosClient.get<T[]>(endpoint).then(res => res.data);
  }
 
  public getAt = (endpoint: string) => {
    return axiosClient.get<T>(endpoint).then(res => res.data);
  }

  public getAll = () => {
    return axiosClient.get<T[]>(this.endpoint).then(res => res.data);
  }
 
  public get = (id: EntityId) => {
    return axiosClient.get<T>(this.endpoint + "/" + id).then(res => res.data);
  }
 
  public post = (data: T) => {
    return axiosClient.post<T>(this.endpoint, data).then(res => res.data);
  }
 
  public put = (data: ReplaceEntity<T>) => {
    return axiosClient.put<T>(this.endpoint + "/" + data.id, data.data).then(res => res.data);
  }
 
  public patch = (data: UpdateEntity<T>) => {
    return axiosClient.patch<T>(this.endpoint + "/" + data.id, data.data).then(res => res.data);
  }
 
  public delete = (id: EntityId) => {
    return axiosClient.delete<T>(this.endpoint + "/" + id).then(res => res.data);
  }
}
