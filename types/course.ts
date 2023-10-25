export interface Course {
  id: number;
  name: string;
  term: string;
  description: string | null;
  syllabus: string | null;
}

export type CourseInputVariables = {
  name: string;
  term: string;
  description?: string;
  syllabus?: string;
};
