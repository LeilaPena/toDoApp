import { json } from "stream/consumers";
import { baseURL } from "../../constants";
import { mapToArray } from "../../helpers/mapToArray";
import { Category } from "../../types";

type getAllPayload = {
  text?: string | null;
  color?: string | null;
};

const getAll = async (search: getAllPayload) => {
  const response = await fetch(`${baseURL}/categories.json`);
  const data = await response.json();

  const arrayData = mapToArray<Category>(data);

  return arrayData
    .filter((cat) => (search.text ? cat.name.includes(search.text) : true))
    .filter((cat) => (search.color ? cat.color.includes(search.color) : true));
};

const get = async (id: string): Promise<Category> => {
  const response = await fetch(`${baseURL}/categories/${id}.json`);
  const data = await response.json();
  return { id, ...data };
};

type Payload = Omit<Category, "id">;

const add = async (category: Payload) => {
  const options = {
    method: "POST",
    body: JSON.stringify(category),
  };

  const response = await fetch(`${baseURL}/categories.json`, options);
  const data = await response.json();
  if (data.name) {
    return true;
  } else {
    return false;
  }
};

const remove = async (id: string) => {
  const options = {
    method: "DELETE",
  };
  await fetch(`${baseURL}/categories/${id}.json`, options);
};

const update = async ({ id, name, color }: Category) => {
  const options = {
    method: "PUT",
    body: JSON.stringify({ color, name }),
  };
  const response = await fetch(`${baseURL}/categories/${id}.json`, options);
  const data = await response.json();
  return data;
};

export const categoriesServices = { getAll, get, add, remove, update };
