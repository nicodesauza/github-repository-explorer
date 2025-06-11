import type { AxiosError } from "axios";

import type { BaseError } from "./response.type";

export interface QueryOptions<T> {
  onError?: (_error: AxiosError<BaseError>, _variables: unknown) => void;
  onSuccess?: (_data: T) => void;
  retry?: boolean | number;
  refetchOnMount?: boolean;
}

export interface QueryExtras<TData, TParam = TData> {
  normalizer?: (_data: TParam) => TData;
}

export interface FetchOptions<T> extends QueryOptions<T> {
  enabled?: boolean;
  initialData?: T | undefined;
  contentType?: string;
  responseType?:
    | "arraybuffer"
    | "blob"
    | "document"
    | "json"
    | "text"
    | "stream";
  onError?: (_error: AxiosError<BaseError>, _variables: unknown) => void;
  onAthorizedError?: (
    _error: AxiosError<BaseError>,
    _variables: unknown
  ) => void;
  onSuccess?: (_data: T) => void;
}

export interface FetchQueryExtras<TData, TParam = TData>
  extends QueryExtras<TData, TParam> {
  params?: Record<string, unknown>;
  options?: FetchOptions<TData>;
}
