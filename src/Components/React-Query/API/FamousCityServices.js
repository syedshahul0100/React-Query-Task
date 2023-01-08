// import {useMutation, useQueryClient } from "react-query";
import { api } from "./BaseUrl";
// import { QueryKeys } from "./QueryKey";

export const fetchFamousCity = () => {
  return api.get("/Places");
};
export const fetchComments = () => {
  return api.get("/Comments");
};

 export const UpdateComments = (newValues) => {
  console.log(newValues)
  try {
    return api.post("/Comments",newValues );
  } catch (error) {
    console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
  }
  
};


// export const PostComments = () => {
//   const queryClient = useQueryClient();
//   return useMutation(UpdateComments, {
//     onSuccess: (data) => {
//       console.log(data);
//       queryClient.setQueryData(QueryKeys.getComments, (syed) => {
//         console.log(syed);
//         return {
//           ...syed,
//           data: [...syed.data, data.data],
//         };
//       });
//     },
//   });
// };

