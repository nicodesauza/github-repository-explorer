export type Metadata = {
  total_count: number;
  incomplete_results: boolean;
};

export type BaseListResponse<T> = Metadata & {
  items: T[];
};

export interface BaseError {
  code: number;
  message: string;
  error?: string;
  payload?: ErrorPayload[];
}

export interface ErrorPayload {
  attemptedValue: string;
  errorCode: string;
  message: string;
  propertyName: string;
}

export type BaseQueryParams = {
  q?: string;
  page: number;
  per_page: number;
};
