type Pronoun = 'he/him' | 'she/her' | 'they/them';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  pronouns: Pronoun;
};

export type Student = User & {
  year: 1 | 2 | 3 | 4;
};

export type Teacher = User;

export type UserParam = keyof User;
