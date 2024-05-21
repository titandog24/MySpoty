import { User } from "./User";

export interface LibraryEntity {
    id:          number;
    name:        string;
    picture:     string;
    counterSong: number;
    user:        null | User;
}
