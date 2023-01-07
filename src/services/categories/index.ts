import { mapToArray } from "../../helpers/mapToArray";
import { Category } from "../../types"

const getAll = async () =>{
    const response = await fetch (`https://todoapp-b7341-default-rtdb.firebaseio.com/categories.json`)
    const data = await response.json();
    return mapToArray(data)
};

const get = async (id: string) =>{
    const response = await fetch (`https://todoapp-b7341-default-rtdb.firebaseio.com/categories/${id}.json`)
    const data = await response.json();
    return data
};

type Payload = Omit <Category, 'id'>

const add = (category: Payload) =>{
    const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify(category),
    }

    fetch('https://todoapp-b7341-default-rtdb.firebaseio.com/categories.json', options)
};

export const categoriesServices = {getAll, get, add}