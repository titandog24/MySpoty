import { Album } from "../../Entities/Album";
import { MySpotyAlbum } from '../Interfaces/MySpotyArtist';


export class AlbumMapper {
    static AlbumMapperEntity(mySpotyAlbum: MySpotyAlbum):Album {
        return {
            id:          mySpotyAlbum.id,
            title:       mySpotyAlbum.title,
            age:         mySpotyAlbum.age,
            releaseDate: mySpotyAlbum.releaseDate,
            gender:      mySpotyAlbum.gender,
            deleted:     mySpotyAlbum.deleted,
            artist:      mySpotyAlbum.artist,  
            tracks:      mySpotyAlbum.tracks,  
            imageAlbum:  mySpotyAlbum.imageAlbum,
        }
    }
}   