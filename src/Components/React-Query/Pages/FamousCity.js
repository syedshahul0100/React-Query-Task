import React, { useState } from "react";
import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";
import { QueryKeys } from "../API/QueryKey";
import { useFormik } from "formik";
import "./React-Query.css";
import {
  fetchComments,
  fetchFamousCity,
  PostComments,
  UpdateComments,
} from "../API/FamousCityServices";
function FamousCity() {
  const { isLoading: isloadig, data } = useQuery({
    queryKey: [QueryKeys.getFamousCity],
    queryFn: () => fetchFamousCity(),
  });
  console.log(data);
  const { isLoading, data: comments } = useQuery(
    {
      queryKey: [QueryKeys.getComments],
      queryFn: () => fetchComments(),
    },
    {
      // The query will not execute until the userId exists
      enabled: true,
    }
  );
  const queryClient = useQueryClient();

  const { mutate: sendVales } = useMutation(UpdateComments, {
    onSuccess: (data) => {
      queryClient.setQueryData(QueryKeys.getComments, (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    }
  });
  console.log(data);

  console.log(comments);

  const formik = useFormik({
    initialValues: {
      name: "",
      comments: "",
    },
  });

  const sendComments = () => {
    const name = formik.values.name;
    const comments = formik.values.comments;
    const newValues = { comments, name };
    console.log(newValues);
    sendVales(newValues);
  };
  if (isLoading) return <h1>is Loading</h1>;

  const callingOnChange = (name) => {};

  const HandleClick = () => {
    // sendVales({name:"data"})
  };

  return (
    <>
      <h1 className="p-[50px] font-bold bg-sky-200  text-2xl text-center gap-4">
        Famous City In India
      </h1>

      <div className="flex flex-row justify-start flex-wrap bg-sky-200 h-[1200px] ">
        <div className="w-[21%] rounded-xl ml-[10px] h-[600px] bg-red-400 flex flex-col justify-center flex-wrap items-center">
          <h1 className="m-4  text-2xl font-semibold text-white">
            Enter Feedback About These Cities
          </h1>
          <div className="flex flex-row flex-wrap justify-start items-center gap-4 p-4">
            <div className="">
              <div className="p-3 font-semibold ">Enter Your Name </div>
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <textarea
                id="story"
                placeholder="Enter your comments"
                name="comments"
                value={formik.values.comments}
                onChange={formik.handleChange("comments")}
                class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows="5"
                cols="33"
              ></textarea>
            </div>
          </div>
          <button
            className="bg-black rounded-xl p-3 text-white m-6 hover:bg-sky-300 hover:text-black hover:font-semibold"
            onClick={sendComments}
          >
            Post Comments
          </button>
        </div>

        <div className="w-[31%] h-[600px] ml-[-84px] rounded-xl">
          <table className="drop-shadow-xl w-[476px] ">
            <tr className="p-1 bg-sky-300">
              <th>Name </th>
              <th>Comments </th>
            </tr>

            {comments.data.map((val, key) => {
              return (
                <>
                  <tr className="hover:bg-sky-100 ">
                    <td>{val.name}</td>
                    <td>{val.comments}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>

        <div className="w-[50%] rounded-xl p-4 bg-red-400 h-[1200px] flex flex-row flex-wrap gap-6 justify-center overflow-auto">
          {data.data.map((val, key) => {
            return (
              <>
                <div className="text-center  drop-shadow-2xl">
                  <h2 className="text-2xl rounded-xl p-3 font-semibold bg-sky-200 w-[377px] hover:bg-sky-400 hover:text-white ">
                    <img
                      src={val.image}
                      className="w-[350px] h-[300px] rounded-xl"
                      alt={val.city}
                    />
                    {val.city}
                  </h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default FamousCity;
