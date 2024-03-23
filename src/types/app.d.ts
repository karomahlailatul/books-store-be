export interface PaginationType {
  page: number;
  limit: number;
  totalData: number;
  totalPage: number;
}

export interface ResponseType<T> {
  status?: number;
  statusCode?: number;
  data?: T;
  message?: string;
  pagination?: PaginationType;
}

export interface ResponseHelperParamsType<T> {
  res: Response;
  result: T;
  status: number;
  message?: string;
  pagination?: PaginationType;
}

export interface QueryParamsType {
  page?: number;
  limit?: number;
  search?: string;
  searchBy?: string;
  sortBy?: string;
  sort?: string;
}

export interface GetByPaginationParamsType {
  page: number;
  limit: number;
  offset: number;
  search?: string;
  searchBy?: string;
  sortBy: string;
  sort: string;
}


export interface CustomErrorType extends Error {
  statusCode?: number;
}