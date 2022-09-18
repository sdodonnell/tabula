export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: "male" | "female";
    type: "student" | "teacher" | "administrator" | "parent"
}
