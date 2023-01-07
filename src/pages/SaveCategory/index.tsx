import { categoriesServices } from "../../services"
import { useState } from "react";
import { useParams } from "react-router-dom";

const SaveCategory = () => {
    const [catName, setCatName] = useState("");

    const { categoryId } = useParams();

    const fetchCategory = () => {
        if (categoryId) {
           categoriesServices.get(categoryId).then(data => {setCatName(data.name)})
        }
    }
    if (catName === '') fetchCategory();

    const saveCategory = (e: any) =>{
        e.preventDefault();
        categoriesServices.add({name: catName})
    }

    return (    
        <>
            <h1>Guardar categoria</h1>
            <form onSubmit={saveCategory}>
                <div className="form-group">
                    <label htmlFor="nameCategory">Nombre</label>
                    <input type="text" id="nameCategory" value={catName} onChange={e => setCatName(e.target.value)} />
                </div>
                <button className="btn btn-primary">Agregar</button>
            </form>
        </>
    )
}

export {SaveCategory}