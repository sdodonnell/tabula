type Gender = 'Male' | 'Female' | 'Genderfluid';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
};

export type Student = User & {
  year: 1 | 2 | 3 | 4;
};

export type Teacher = User;

export type UserParam = keyof User;
