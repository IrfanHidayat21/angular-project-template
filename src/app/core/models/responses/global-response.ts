export interface GlobalResponse<T> {
  code: string,
  status: string
  data: T;
}