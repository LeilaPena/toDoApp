import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { categoriesServices } from "../../services";
import { Category } from "../../types";
import {Spinner} from "../../components/commons"
import { FormCategories } from "../../components";
import { filterFields } from "./types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchParams, setSearchParams] = useSearchParams()
  
  const navigate = useNavigate();

  const fetchCategories = () => categoriesServices.getAll({text: searchParams.get('text'), color: searchParams.get('color')}).then((data) => setCategories(data)) 

  useEffect(() => {
    fetchCategories();
  }, [searchParams]);

  const borrarCategoria = async (id: string) => {
    await categoriesServices.remove(id);
    fetchCategories()
  };

  if (!categories.length) return <Spinner />

  const setSearchQuery = (params: filterFields) => {
      setSearchParams(params)
  }

  return (
    <div>
      <h1>Categorias</h1>

      <FormCategories onSearch={setSearchQuery}/>

      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => {
            return (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.color}</td>
                <td style={{display: 'flex', alignItems: 'center'}}>
                  <div style={{width: 40, height: 40, borderRadius: 20, backgroundColor: cat.color, margin: 10}}></div>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => borrarCategoria(cat.id)}
                  >
                    Borrar
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => navigate(`/categories/save/${cat.id}`)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    
  );
};
export { Categories };
