import axios, { CanceledError } from "axios";

export { CanceledError }

export default axios.create({
   baseURL: 'https://fakestoreapi.com'
});