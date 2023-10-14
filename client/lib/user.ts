import { User } from "@/types/user";

export const getUser = async () => {
    return {
        firstName: 'Hello'
    };
};

export const getUsers = async (): Promise<User[]> => {
    try {
        const res = await fetch('http://127.0.0.1:5000/all-students');
        const data = await res.json();
        return data;
    } catch (e) {
        console.log('Could not fetch user data')
        return []
    }
};
