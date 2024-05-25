import { MySpotyTrack } from '../../Adapter/Interfaces/MySpotyArtist';
import { TrackMapper } from '../../Adapter/Mappers/TrackMapper';
import { mySpoty } from '../../Config/AxiosConfig';
import { Album } from '../../Entities/Album';
import { Track } from '../../Entities/Track';
export const getTracksByName = async () => {
    
    try {
        return;
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const getTrackById = async () => {
    
    try {
        return;
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllTrackByArtistId = async (artistId: number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/track/getalltrackbyartistid/${artistId}`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllTracksByAlbumId = async (idAlbum: number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/track/getalltracksbyalbumid/${idAlbum}`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;

    } catch (error) {
        
        return undefined
    }
}



export const getAllTracksByPlaylist = async (idPlaylist: number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/playlist/${idPlaylist}`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;

    } catch (error) {
        
        return undefined
    }
}
export const saveFavoriteTrack = async () => {
    
    try {
        return;
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllTracksByArtistName = async (name: string): Promise<Track[]> => {
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/track/getalltrackbyartistname/${name}`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;
    } catch (error) {
        
        return [];
    }
}
export const getAllTrack = async (): Promise<Track[]> => {
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/track`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;
    } catch (error) {
        
        return [];
    }
}

export const saveTrackInPlayList = async (idLibrary: number, idTrack: number) => {
    try {

        const params = {
            idLibrary: idLibrary,
            idTrack: idTrack
        }

        const {data} = await mySpoty.post<MySpotyTrack>(`/playlist`, params);

        const playlist = TrackMapper.ConvertMySpotyTracktoTrackEntity(data);

        return playlist;
    } catch (error) {
        
        return undefined;
    }
}