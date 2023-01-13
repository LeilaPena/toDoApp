import { User } from "../../types"

const getAll = () =>{};

const get = (id: string) =>{};

type Payload = Omit <User, 'id'>

const add = (user: Payload) =>{

};
const remove = (id: string) =>{

}

const update = () =>{

}

export const usersServices = {getAll, get, add, remove, update}