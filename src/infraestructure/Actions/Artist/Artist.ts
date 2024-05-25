import { MySpotyArtist } from "../../Adapter/Interfaces/MySpotyArtist";
import { ArtistMapper } from "../../Adapter/Mappers/ArtistMapper";
import { mySpoty } from "../../Config/AxiosConfig"
import { Artist } from "../../Entities/Artist";


export const getArtistByName = async (name: string) => {
    try {
        const { data } = await mySpoty.get<MySpotyArtist>(`artist/getartistbyname/${name}`);
        
        return ArtistMapper.ArtistMapperEntity(data);
    } catch (error) {
        
        throw new Error("Ocurrió un error al obtener el artista");
    }
}

export const getArtistById = async (id:number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyArtist>(`/artist/getartistbyid/${id}`);
     
        return ArtistMapper.ArtistMapperEntity(data);
        
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const getAllArtist = async () => {
    
    try {
        const {data} = await mySpoty.get<MySpotyArtist[]>(`/artist/getallartist`);
        const artistData = data.map(artistDb => ArtistMapper.ArtistMapperEntity(artistDb));
        return artistData.sort();

    } catch (error) {
        
        return undefined
    }
}

export const getAllAlbumsByArtistId = async (id:number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyArtist>(`/artist/getalbumofartistbyid/${id}`);
        return ArtistMapper.ArtistMapperEntity(data);
        
    } catch (error) {
        
        return undefined
    }
}

export const deleteUserById = async (id:number) => {
    
    try {
        const {data, status} = await mySpoty.delete<boolean>(`/artist/${id}`).catch();

        return data
    } catch (error) {
        
        return undefined
    }
}

export const updateArtist = async (artist:Artist) => {
    
    try {
        const {data} = await mySpoty.put<boolean>(`/artist`);

        return data
    } catch (error) {
        
        return undefined
    }
}

export const addNewArtist = async () => {
    
    try {
        const {data} = await mySpoty.post<MySpotyArtist>('/artist');

        return ArtistMapper.ArtistMapperEntity(data);
    } catch (error) {
        
        return undefined
    }
}