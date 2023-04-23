import axios from "axios";
import MockTable from "../data/mockTable";

export type EntityId = string | number;

export interface Entity {
  id: EntityId;
}

export interface UpdateEntity<T> {
  id: EntityId;
  payload: Partial<T>
}

const axiosClient = axios.create({
//   baseURL: 'https://fakestoreapi.com'
  baseURL: '/api'
});

export default class APIClient<T extends Entity> {
  protected endpoint: string;
  private mockData: T[];
 
  constructor(endpoint: string, mockData: T[]) {
    this.endpoint = endpoint;
    this.mockData = mockData;
  }

  protected mockName(): string { return this.endpoint.substring(1); }

  public createMockTable() {
    return new MockTable<T>(this.mockName(), this.mockData);
  }

  protected getAt = (endpoint: string) => {
    return axiosClient.get<T[]>(endpoint).then(res => res.data);
  }
 
  public getAll = () => {
    return axiosClient.get<T[]>(this.endpoint).then(res => res.data);
  }
 
  public post = (data: T) => {
    return axiosClient.post<T>(this.endpoint, data).then(res => res.data);
  }
 
  public patch = (data: UpdateEntity<T>) => {
    return axiosClient.patch<T>(this.endpoint + "/" + data.id, data.payload).then(res => res.data);
  }
 
  public delete = (id: EntityId) => {
    return axiosClient.delete<T>(this.endpoint + "/" + id).then(res => res.data);
  }
}
