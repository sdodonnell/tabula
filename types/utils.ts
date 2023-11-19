export type Node = {
  id: number;
  [key: string]: any;
};

export type Nullable<T> = { [K in keyof T]: T[K] | null };

export type EntityType = 'user' | 'course' | 'assignment' | 'section';

export type URLParams = {
  id: string;
};

type EditorBlock = {
  id?: string;
  type: string;
  data: {
    text?: string;
    level?: number;
    items: object[];
  };
};

export type EditorData = {
  time: number;
  blocks: EditorBlock[];
  version: string;
};
