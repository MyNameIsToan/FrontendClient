import { Data } from "./data";

export class Forum {
  data !: Data[];
  currentPage !: number;
  totalItems !: number;
  totalPages !: number;
  result !: boolean
}
