import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesServices } from "../../services";
import { Category } from "../../types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  const fetchCategories = () => categoriesServices.getAll(search).then((data) => setCategories(data)) 

  useEffect(() => {
    fetchCategories();
  }, [search]);

  const borrarCategoria = async (id: string) => {
    await categoriesServices.remove(id);
    fetchCategories()
  };

  return (
    <div>
      <h1>Categorias</h1>
      <hr />
      <form action="">
        <input type="text"
        name="text"
        id="text"
        value={search}
        onChange = {e => setSearch(e.target.value)} />
      </form>
      <table border={1}>
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
