import { Artist } from "../../Entities/Artist";
import { MySpotyArtist } from "../Interfaces/MySpotyArtist";

export class ArtistMapper {
    static ArtistMapperEntity(mySpotyArtist: MySpotyArtist): Artist {
        return {
            id: mySpotyArtist.id,
            name: mySpotyArtist.name,
            age: mySpotyArtist.age,
            artistName: mySpotyArtist.artistName,
            biography: mySpotyArtist.biography,
            deleted: mySpotyArtist.deleted,
            isActive: mySpotyArtist.isActive,
            albums: mySpotyArtist.albums,
            imageArtist: mySpotyArtist.imageArtist,
        }
    }
}