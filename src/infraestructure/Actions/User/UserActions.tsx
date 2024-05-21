import { MySpotyUser } from '../../Adapter/Interfaces/MySpotyArtist';
import { UserMapper } from "../../Adapter/Mappers/UserMapper";
import { mySpoty } from "../../Config/AxiosConfig";
import { User, userFailed } from '../../Entities/User';


export const getUserById = async (id: number): Promise<User> => {
    
    try {
        const {data} = await mySpoty.get<MySpotyUser>(`/user/${id}`);

        return UserMapper.UserMapperToEntity(data);
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}


export const login = async (email: string, password:string): Promise<userFailed> => {
    
    try {
        const myData: MySpotyUser = {
            id: 0,
            name: '',
            email,
            password,
            photo: '',
            isDeleted: false
        } 
        const {data, status} = await mySpoty.post<MySpotyUser>(`/user/validatelogin`,myData);

        if (status !== 200) {
            const userFailed: userFailed = {
                message: "Usuario o contraseña incorrectos",
                user: myData
            }
            return userFailed;
        }
        const userFailed: userFailed = {
            message: "",
            user: UserMapper.UserMapperToEntity(data)
        }

        return userFailed;
    } catch (error) {
        console.log(error);
        throw new Error("Ocurrió un error al ");
    }
}

export const register = async (user:User): Promise<userFailed> =>  {
    try {
        const {data, status} = await mySpoty.put<MySpotyUser>(`/user`,user);

        const userFailed: userFailed = {
            message: status.toString(),
            user: UserMapper.UserMapperToEntity(data)
        }
        return userFailed;
        
    } catch (error) {
        const userFailed: userFailed = {
            message: "Ocurrió un problema al realizar la consulta",
            user: user
        }
        return userFailed;
    }
}