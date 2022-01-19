import { Data } from './data';
export class Replies {
  data !: Data[];
  currentPage !: number;
  totalItems !: number;
  totalPages !: number;
  result !: boolean
}
