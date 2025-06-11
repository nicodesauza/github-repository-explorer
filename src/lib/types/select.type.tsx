export type SelectOption = {
  label: string;
  value: string;
};

export type FilterOptionCandidate<T> = {
  label: string;
  value: string;
  data: T;
};

export type BaseItem = {
  id: string;
  name: string;
};
