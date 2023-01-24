import { baseURL } from "../../constants";
import { mapToArray } from "../../helpers/mapToArray";
import { Category, Task } from "../../types"

const getAll = async(): Promise <Task[]> =>{
    const response = await fetch (`${baseURL}/tasks.json`)
    const data = await response.json();

    return mapToArray<Task>(data)
};

const taskDone = async (id:string) =>{
    const options = {
        method: "PATCH",
        body: JSON.stringify({status: 'done'})
    }
    const response= await fetch(`${baseURL}/tasks/${id}.json`, options)
    const data = await response.json()

    console.log(data)
}

const get = async (id:string): Promise <Task> =>{
    const response = await fetch (`${baseURL}/tasks/${id}.json`)
    const data = await response.json();
    return {id, ...data}
}

type Payload = Omit <Task, 'id'>

const add = async (task: Payload) =>{
    const options = {
        method: 'POST',
        body: JSON.stringify(task),
    }
    
    const response = await fetch(`${baseURL}/tasks.json`, options)
    const data = await response.json()
    if (data.title) {
        return true;
    }    
    else{
        return false
    }
};

const remove = async (id: string) =>{
    const options = {
        method: 'DELETE', 
    }
    await fetch (`${baseURL}/tasks/${id}.json`, options)
}

const update = async ({id, title, category, date, description, status}: Task) =>{

    const options = {
        method: 'PUT',
        body: JSON.stringify({title, category, date, description, status})
    }
    const response= await fetch (`${baseURL}/tasks/${id}.json`, options);
    const data = await response.json()
    return data 
}

export const tasksServices = {getAll, get, add, remove, update, taskDone}