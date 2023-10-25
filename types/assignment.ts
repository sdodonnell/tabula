export interface Assignment {
  id: number;
  name: string;
  description: string | null;
  filePath: string | null;
  dueDate: Date;
  createdDate: Date;
  sectionId: number | null;
  userId: number | null;
};

// TODO: Add relations as required to this input schema
export type AssignmentInputVariables = {
  name: string;
  description?: string | null;
  filePath?: string | null;
  dueDate: Date;
  createdDate: Date;
};
