import { baseURL } from "../../constants";
import { mapToArray } from "../../helpers/mapToArray";
import { User } from "../../types"

const getAll = async() =>{
    const response = await fetch (`${baseURL}/users.json`)
    const data = await response.json();
    return mapToArray<User>(data)
};

const get = (id: string) =>{};

type Payload = Omit <User, 'id'>

const add = (user: Payload) =>{

};
const remove = (id: string) =>{

}

const update = () =>{

}

export const usersServices = {getAll, get, add, remove, update}