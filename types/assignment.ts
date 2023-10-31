import { EditorBlock } from "./utils";

export interface Assignment {
  id: number;
  name: string;
  body: string | null;
  filePath: string | null;
  dueDate: Date;
  createdDate: Date;
  sectionId: number | null;
  userId: number | null;
}

// TODO: Add relations as required to this input schema
export type AssignmentInputVariables = {
  name: string;
  body?: EditorBlock[];
  filePath?: string | null;
  dueDate: Date;
  createdDate: Date;
};
