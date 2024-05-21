
export interface User {
    id:        number;
    name:      string;
    email:     string;
    password:  string;
    photo:     string;
    isDeleted: boolean;
}
export interface userFailed {
    message: string,
    user: User
}