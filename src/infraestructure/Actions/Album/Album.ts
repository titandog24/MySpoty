import { AlbumMapper } from '../../Adapter/Mappers/AlbumMapper';
import { mySpoty } from '../../Config/AxiosConfig';
import { Album } from '../../Entities/Album';
export const getAlbumByName = async (name:string) => {
    
    try {
        
        const {data} = await mySpoty.get<Album>('');

        return AlbumMapper.AlbumMapperEntity(data);

    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const getAlbumById = async (id:number) => {
    
    try {
        const {data} = await mySpoty.get<Album>('');

        return AlbumMapper.AlbumMapperEntity(data);
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const deleteAlbumById = async (idAlbum: number) => {
    
    try {
        const {data} = await mySpoty.get<boolean>('');

        return data;
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const updateAlbum = async (album: Album, idArtist: number) => {
    
    try {
        const {data} = await mySpoty.get<boolean>('');

        return data;
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}

export const addNewAlbum = async (album: Album, idArtist: number) => {
    
    try {
        const {data} = await mySpoty.get<Album>('');

        return AlbumMapper.AlbumMapperEntity(data);
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}