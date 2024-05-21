import AsyncStorage from "@react-native-async-storage/async-storage";

export type keys = 'artist' | 'user';


export class StorageLocal {

    static async getData(key:keys) {
        try {
            return await AsyncStorage.getItem(key);
        } catch (e) {
            throw new Error("Error al recuperar la data info");
            
        }
    }

    static async setData(key:keys, info:string) {
        try {
            return await AsyncStorage.setItem(key, info);
        } catch (e) {
            throw new Error("Error al recuperar la data info");
            
        }
    }

    static async removeData(key:keys) {
        try {
            return await AsyncStorage.removeItem(key);
        } catch (e) {
            throw new Error("Error al recuperar la data info");
            
        }
    }
}