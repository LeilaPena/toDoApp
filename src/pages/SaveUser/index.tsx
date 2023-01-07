import { useParams } from "react-router-dom"

const SaveUser = () =>{
    const {userId} = useParams()
    
    return (
         <div>Estoy en SaveUser usando el id {userId} </div>
    )
}

export {SaveUser}