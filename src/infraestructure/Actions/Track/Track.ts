import { MySpotyTrack } from '../../Adapter/Interfaces/MySpotyArtist';
import { TrackMapper } from '../../Adapter/Mappers/TrackMapper';
import { mySpoty } from '../../Config/AxiosConfig';
import { Album } from '../../Entities/Album';
import { Track } from '../../Entities/Track';
export const getTracksByName = async () => {
    
    try {
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const getTrackById = async () => {
    
    try {
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllTrackByArtistId = async (artistId: number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/track/getalltrackbyartistid/${artistId}`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllTracksByAlbumId = async (idAlbum: number) => {
    
    try {
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllTracksByAlbumName = async (album: Album, idArtist: number) => {
    
    try {
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllTracksByArtistName = async (name: string): Promise<Track[]> => {
    console.log(name);
    
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/track/getalltrackbyartistname/${name}`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}
export const getAllTrack = async (): Promise<Track[]> => {
    try {
        const {data} = await mySpoty.get<MySpotyTrack[]>(`/track`);

        const Tracks = data.map(track => TrackMapper.ConvertMySpotyTracktoTrackEntity(track));

        return Tracks;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const deleteTrackById = async (album: Album, idArtist: number) => {
    
    try {
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const updateTrack = async (album: Album, idArtist: number) => {
    
    try {
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const addNewTrack = async (album: Album, idArtist: number) => {
    
    try {
        return;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}