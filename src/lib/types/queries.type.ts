import type { AxiosError, AxiosProgressEvent } from 'axios';

import { BaseError } from './response.type';

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
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
  onError?: (_error: AxiosError<BaseError>, _variables: unknown) => void;
  onAthorizedError?: (_error: AxiosError<BaseError>, _variables: unknown) => void;
  onSuccess?: (_data: T) => void;
}

export type MutateOptions<T> = QueryOptions<T> & {
  contentType?: string;
  showNotif?: boolean;
  notifSuccessText?: string;
  notifSuccessTitle?: string;
  notifErrorText?: string;
  notifErrorTitle?: string;
  onMutate?:
    | ((_variables: MutateFnParam | undefined) => Promise<unknown | undefined> | unknown | undefined)
    | undefined;
  onUploadProgress?: (_progressEvent: AxiosProgressEvent) => void;
};

export interface FetchQueryExtras<TData, TParam = TData> extends QueryExtras<TData, TParam> {
  params?: Record<string, unknown>;
  options?: FetchOptions<TData>;
}

export interface MutateQueryExtras<T> extends QueryExtras<T> {
  url: string;
  method: 'post' | 'put' | 'patch' | 'delete';
  options?: MutateOptions<T>;
}

export type MutateFnParam = {
  body?: unknown;
  id?: string;
};

export type FileApiResponse = {
  file_id: string;
  filename: string;
  status?: string;
  message?: string;
  url: string;
};

export type FileFormField = {
  file: string;
  fileId: string;
  filename: string;
};
