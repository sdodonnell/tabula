import { User } from '@/types/user';

export interface Course {
  id: number;
  name: string;
  term: string;
  description: string | null;
  syllabus: string | null;
}

export interface Section {
  id: number;
  active: boolean;
  teacher?: User | null;
  course: Course;
}

export type CourseInputVariables = {
  id?: number;
  name: string;
  term: string;
  description?: string;
  syllabus?: string;
};
