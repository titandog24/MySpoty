import { User } from "../../Entities/User";
import { MySpotyUser } from "../Interfaces/MySpotyArtist";

export class UserMapper {
    static UserMapperToEntity(mySpotyUser: MySpotyUser): User {
        return {
            id:        mySpotyUser.id,
            name:      mySpotyUser.name,
            email:     mySpotyUser.email,
            password:  mySpotyUser.password,
            photo:     mySpotyUser.photo,
            isDeleted: mySpotyUser.isDeleted
        }
    }
}