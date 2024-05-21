import { Track } from "../../Entities/Track";
import { MySpotyTrack } from "../Interfaces/MySpotyArtist";

export class TrackMapper {
    static ConvertMySpotyTracktoTrackEntity = (mySpotyTrack: MySpotyTrack):Track =>{
        return {
            id: mySpotyTrack.id,
            gender: mySpotyTrack.gender,
            imageTrack: mySpotyTrack.imageTrack,
            title: mySpotyTrack.title,
            deleted: mySpotyTrack.deleted,
            album: mySpotyTrack.album
        }
    }
}