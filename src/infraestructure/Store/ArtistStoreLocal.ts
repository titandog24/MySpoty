import { StorageLocal } from "../Config/StoreLocal";
import { Artist } from "../Entities/Artist";

export const getTempUser = async (): Promise<Artist[]> => {
    const data = await StorageLocal.getData("artist");
    if (data === null) {
        return []
    }
    const storageArrayArtist: Artist[] = JSON.parse(data)
    return storageArrayArtist;
}

export const saveTempUser = async (artist: Artist) => {
    let arrayArtist: Artist[] = new Array();
    const data = await StorageLocal.getData("artist")
    if (data === null) {
        arrayArtist.push(artist);
        return await StorageLocal.setData('artist', JSON.stringify(arrayArtist));
    } else {
        const storageArrayArtist: Artist[] = JSON.parse(data);
        arrayArtist = storageArrayArtist.filter(elemento => elemento.id !== artist.id);
        if (arrayArtist.length === storageArrayArtist.length) {
            arrayArtist.push(artist);
            return await StorageLocal.setData('artist', JSON.stringify(arrayArtist));
        }
    }
}

export const removeTemp = async(): Promise<boolean> => {
    try {
        await StorageLocal.removeData('artist')
        return true;
    } catch (error) {
        return false;
    }
}
