import {useMutation, useQueryClient } from "react-query";
import { api } from "./BaseUrl";
import { QueryKeys } from "./QueryKey";

const UpdateUserData = (newValues) => {
  return api.post("/Data", newValues);
};
export const UserData = () => {
    return api.get("/Data");
  
//   return useQuery("userData", fetchUserData);
};
export const AddUserData = () => {
  const queryClient = useQueryClient();
  return useMutation(UpdateUserData, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(QueryKeys.getData, (oldQueryData) => {
        console.log(oldQueryData);
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
