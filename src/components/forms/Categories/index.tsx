import { useState, FC } from "react";
import { Button } from "../../commons";
import { defaultValues, formFields } from "./defaultValues";

type Props= {
    onSearch: (params: formFields) => void
}

const FormCategories: FC<Props> = ({onSearch}) => {
  const [fields, setFields] = useState(defaultValues);

  const handleSubmit = (e:any) =>{
    e.preventDefault(
    onSearch(fields)
    )
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Text</label>
        <input
          type="text"
          name="text"
          className="form-control"
          value={fields.text}
          onChange={(e) => setFields(prevState => ({ ...prevState, text: e.target.value }))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Color</label>
        <input
          type="text"
          name="color"
          className="form-control"
          value={fields.color}
          onChange={e => setFields(prevState => ({...fields, color: e.target.value}))}
        />
      </div>
      <Button
        className="btn btn-primary"
        type="submit"
        text="Filtrar"
      />
    </form>
  );
};

export { FormCategories };
