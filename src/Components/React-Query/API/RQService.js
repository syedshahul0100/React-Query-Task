import { api } from "./BaseUrl";
export const DeleteRecord = (deleteUserData) => {
  return api.delete("/Data/"+ deleteUserData);
};
export const UserData =  () => {
  return api.get("/Data");  
};
export const AddUserData = (newValues) => {
  return api.post("/Data", newValues);
};
