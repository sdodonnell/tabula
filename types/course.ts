import { User } from '@/types/user';

export interface Course {
  id: number;
  name: string;
  term: string;
  description: string | null;
  syllabus: string | null;
  sections?: Section[];
}

export interface Section {
  id: number;
  name: string;
  active: boolean;
  teacher: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  courseId?: number;
}

export interface SectionInputVariables {
  id?: number;
  active: boolean;
  name: string;
  courseId: number;
  teacherId: number;
}

export interface CourseInputVariables {
  id?: number;
  name: string;
  term: string;
  description?: string;
  syllabus?: string;
}
