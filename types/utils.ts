export type Node = {
  id: number;
  [key: string]: any;
};

export type Nullable<T> = { [K in keyof T]: T[K] | null };
