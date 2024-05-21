import { create } from 'zustand'
import { User } from '../Entities/User'

interface IArtistStore {
    artistStore: boolean,
    gbSetArtist: (flag: boolean) => void
}

export const useArtistStore = create<IArtistStore>()( (set,get) =>({
    artistStore: false,

    gbSetArtist: async (flag: boolean) => {
        set({artistStore: flag})
    },
}))