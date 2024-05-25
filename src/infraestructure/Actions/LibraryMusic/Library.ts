import { MySpotyLibrary } from "../../Adapter/Interfaces/MySpotyArtist";
import { LibraryMapper } from "../../Adapter/Mappers/LibraryMapper";
import { mySpoty } from "../../Config/AxiosConfig";
import { StorageLocal } from "../../Config/StoreLocal";
import { LibraryEntity } from '../../Entities/Library';
import { User } from "../../Entities/User";


export const getAll = async () => {
    try {
        const dataUser = await StorageLocal.getData('user');
        if (dataUser != null) {
            const user: User = JSON.parse(dataUser);
            const {data} = await mySpoty.get<MySpotyLibrary[]>(`/library/${user.id}`);
            return data.map(filter => LibraryMapper.ConvertLibraryAPIToLibraryEntities(filter));
        } else {
            return [];
        }
        
    } catch (error) {
        
        return [];
    }
}

export const getLibraryById = async (id:number) => {
    
    try {
        const {data} = await mySpoty.get<MySpotyLibrary>(`/library/${id}`);

        return LibraryMapper.ConvertLibraryAPIToLibraryEntities(data);
    } catch (error) {
        
        return undefined;
    }
}

export const AddNewLibrary = async (library:LibraryEntity) => {
    
    try {
        const {data} = await mySpoty.post<MySpotyLibrary>('/library', library)
        return LibraryMapper.ConvertLibraryAPIToLibraryEntities(data);
    } catch (error) {
        
        return undefined;
    }
}