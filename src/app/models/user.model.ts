export interface User {
    profilePhoto?: string;
    name?: string;
    username: string;
    email?: string;
    dateOfBirth?: string;
    gender?: 'Male' | 'Female';
    password?: string
};