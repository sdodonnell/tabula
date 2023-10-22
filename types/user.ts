type Gender = 'Male' | 'Female' | 'Genderfluid';
export type Role = 'STUDENT' | 'TEACHER' | 'ADMIN' | 'PARENT';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  role: Role;
};

export type Student = User & {
  year: 1 | 2 | 3 | 4;
};

export type Teacher = User;

export type UserParam = keyof User;
