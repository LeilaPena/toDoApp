import {useState, useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { tasksServices } from "../../services"

function SaveTask() {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [status, setStatus] = useState("");
    // const [date, setDate] = useState("");



    // const navigate = useNavigate();
    // const { id } = useParams();

    // useEffect( () => {
    //     if (id){
    //         tasksServices.get(id).then(data => {
    //           setTitle(data.title)
    //           setDescription(data.description)
    //           setStatus(data.status)
    //         })
    //       }
    // }, [])

    // const saveTask = async (e: any) =>{
    //     e.preventDefault();
        
    //     const rta = await tasksServices.add({title, date, category, description, status})

        
    // }

    return <div className="saveTask"> SaveTask</div>
} 

export {SaveTask}