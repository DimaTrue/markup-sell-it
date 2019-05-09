import { get } from './base';


export const getUser = () => {
  return get(`docs/`);
}