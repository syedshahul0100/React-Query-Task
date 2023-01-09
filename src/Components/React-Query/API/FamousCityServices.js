import { api } from "./BaseUrl";
export const fetchFamousCity = () => {
  return api.get("/Places");
};
export const fetchComments = () => {
  return api.get("/Comments");
};
 export const UpdateComments = (newValues) => {
  try {
    return api.post("/Comments",newValues );
  } catch (error) {
    console.error(error.response.data);     
  }
};
