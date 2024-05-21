import { MySpotyLibrary } from "../../Adapter/Interfaces/MySpotyArtist";
import { LibraryMapper } from "../../Adapter/Mappers/LibraryMapper";
import { mySpoty } from "../../Config/AxiosConfig";
import { LibraryEntity } from '../../Entities/Library';


export const getAll = async () => {
    try {
        const {data} = await mySpoty.get<MySpotyLibrary[]>('/library');
        return data.map(filter => LibraryMapper.ConvertLibraryAPIToLibraryEntities(filter));
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getLibraryById = async (id:number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyLibrary>(`/library/${id}`);

        return LibraryMapper.ConvertLibraryAPIToLibraryEntities(data);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

export const AddNewLibrary = async (library:LibraryEntity) => {
    
    try {
        const {data} = await mySpoty.post<MySpotyLibrary>('/library', library)
        return LibraryMapper.ConvertLibraryAPIToLibraryEntities(data);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}