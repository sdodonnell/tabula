import { EditorData } from './utils';

export interface Assignment {
  id: number;
  name: string;
  body: EditorData;
  filePath: string | null;
  dueDate: Date;
  createdDate: Date;
  sectionId: number | null;
  userId: number | null;
}

// TODO: Add relations as required to this input schema
export type AssignmentInputVariables = {
  id?: number;
  name: string;
  body?: EditorData;
  filePath?: string | null;
  dueDate: string;
};
