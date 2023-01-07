import { useState } from "react";
import { Link } from "react-router-dom";
import { categoriesServices } from "../../services";
import { Category } from "../../types";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = () => {
    categoriesServices.getAll().then((data) => {
      setCategories(data as Category[]);
    });
  };
 
  fetchCategories();
 
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat) => {
          return (
            <tr>
              <td>{cat.id}</td>
              <td> 
                <Link to={`/categories/save/${cat.id}`}>{cat.name}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export { Categories };
