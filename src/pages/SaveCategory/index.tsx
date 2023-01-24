import { categoriesServices } from "../../services";
import { useState, useEffect } from "react";
import { useNavigate, useParams,  } from "react-router-dom";

const SaveCategory = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const [ifError, setIfError] = useState(false);

  useEffect(() => {
    if (id){
      categoriesServices.get(id).then(data => {
        setName(data.name)
        setColor(data.color)
      })
    }
  }, [])

  const saveCategory = async (e: any) => {
    e.preventDefault();

    setIfError(false);

    let rta;
    if (id){
        rta = await categoriesServices.update({color, name, id});
    } else{
        rta = await categoriesServices.add({color, name})
    }


    if (rta) {
      navigate(`/categories`);
    } else {
      setIfError(true);
    }
  };

  return (
    <>
      <h1>Guardar categoria</h1>
      <form onSubmit={saveCategory}>
        <div className="form-group">
          <label htmlFor="nameCategory">Nombre</label>
          <input
            type="text"
            id="nameCategory"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="colorCategory">Color</label>
          <input
            type="color"
            id="colorCategory"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Agregar</button>

        {ifError && <p style={{ color: "red" }}>Hubo un error</p>}
      </form>
    </>
  );
};

export { SaveCategory };
