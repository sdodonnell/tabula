type Gender = 'Male' | 'Female' | 'Genderfluid';
export type Role = 'STUDENT' | 'TEACHER' | 'ADMIN' | 'PARENT';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  role: Role;
};

export type Student = User & {
  year: 1 | 2 | 3 | 4;
};

export type Teacher = User;

export type UserParam = keyof User;

export enum USER_ROLES {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}

export type UserInputVariables = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  role: Role;
};

export type UserSession = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  },
  expires: string
};
