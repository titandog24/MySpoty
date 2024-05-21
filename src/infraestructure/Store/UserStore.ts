import { create } from 'zustand'
import { User } from '../Entities/User'

interface IUserStore {
    gbUser: User | undefined,
    gbSetUser: (user: User) => void,
    gbGetUser: () => Promise<User>
}

export const userStore = create<IUserStore>()( (set,get) =>({
    gbUser: undefined,

    gbSetUser: async (user: User) => {
        set({gbUser: user})
    },

    gbGetUser: async () => {
        const {gbUser} = get();
        return gbUser!;
    }
}))