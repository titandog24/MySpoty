import { LibraryEntity } from "../../Entities/Library";
import { MySpotyLibrary } from "../Interfaces/MySpotyArtist";

export class LibraryMapper {
    static ConvertLibraryAPIToLibraryEntities(library: MySpotyLibrary): LibraryEntity {
        return {
            id: library.id,
            counterSong: library.counterSong,
            name: library.name,
            picture: library.picture,
            user: library.user
        }
    }
}