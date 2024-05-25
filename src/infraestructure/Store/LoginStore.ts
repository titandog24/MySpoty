import { MySpotyUser } from "../Adapter/Interfaces/MySpotyArtist";
import { StorageLocal } from "../Config/StoreLocal";


export const saveLoginUser = async (user: MySpotyUser): Promise<boolean> => {
    try {   
        const userLoginSaved = await StorageLocal.getData('user');
        if (userLoginSaved === null) {
            await StorageLocal.removeData('user');
        }
        await StorageLocal.setData('user', JSON.stringify(user));
        return true;
    } catch (error) {
        
        return false;
    }
}

export const existLoginUser = async (): Promise<boolean> => {
    try {
        const data = await StorageLocal.getData('user');
        
        if (data != null) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        
        throw new Error("Ocurrió un error al ");
    }
}