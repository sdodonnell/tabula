export type Node = {
  id: number;
  [key: string]: any;
};

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type EntityType = 'user' | 'course' | 'assignment';

export type URLParams = {
  id: string;
};

type EditorBlock = {
  id?: string;
  type: string;
  data: object;
};

export type EditorData = {
  time: number;
  blocks: EditorBlock[],
  version: string;
}