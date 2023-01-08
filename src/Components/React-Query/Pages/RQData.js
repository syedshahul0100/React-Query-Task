import React from "react";
import { AddUserData, UserData } from "../API/RQService";
import "./React-Query.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useFormik } from "formik";
import { QueryKeys } from "../API/QueryKey";
function RQData() {
  const { isLoading, data } = useQuery({
    queryKey:[QueryKeys.getData],
    queryFn: () =>UserData()
});
  const { mutate: sendVales } = AddUserData();
  console.log(data)
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      pincode: "",
    },
  });

  const handleApplyFilter = () => {
    const firstName = formik.values.firstName;
    const lastName = formik.values.lastName;
    const email = formik.values.email;
    const address = formik.values.address;
    const pincode = formik.values.pincode;
    const newValues = { firstName, lastName, email, address, pincode };
    sendVales(newValues);
  };

  if (isLoading) return <h1>is Loading</h1>;

  return (
    <>
      <div className=" bg-sky-200 mt-[-25px] p-5">
        <h1 className="text-center m-6 mt-[20px] text-3xl font-bold">
          Users List
        </h1>
        <div className="flex flex-row flex-wrap justify-start p-9 ">
          <div className="space-x-4 mb-2 ml-4 text-xl flex flex-col flex-wrap justify-start bg-amber-300 h-[627px] w-[469px]">
            <span className="m-4 text-xl font-semibold ">
              Enter User Details:
            </span>
            <div className="flex flex-row flex-wrap justify-start gap-4 p-4">
              <div>First Name </div>
              <div>
                <input
                  name="firstName"
                  placeholder="First name"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-start gap-4 p-4">
              <div>LastName </div>
              <div>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  class="ml-[8px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-start gap-4 p-4">
              <div>Email </div>
              <div>
                 <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  class="ml-[48px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />{" "}
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-start gap-4 p-4">
              <div>Address </div>
              <div>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange("address")}
                  class="ml-[24px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-row flex-wrap justify-start gap-4 p-4">
              <div> Pin Code </div>
              <div>
                <input
                  name="pincode"
                  type="text"
                  placeholder="Pin code"
                  value={formik.values.pincode}
                  onChange={formik.handleChange("pincode")}
                  class="ml-[16px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <div className="p-9">
                <button
                  className="mr-[40px] ml-[-20px] px-4 py-1 bg-indigo-600 m-4 text-white rounded hover:bg-indigo-700"
                  onClick={handleApplyFilter}
                >
                  Submit Details
                </button>
              </div>
            </div>
          </div>

          <div className="h-[603px] w-[603px]">
            <table className="drop-shadow-xl	">
              <tr className="p-1 bg-sky-300">
                <th>Name </th>
                <th>username </th>
                <th>email </th>
                <th>address </th>
                <th>zipcode </th>
              </tr>

              {data.data.map((val, key) => {
                return (
                  <>
                    <tr className="hover:bg-sky-100 ">
                      <td>{val.firstName}</td>
                      <td>{val.lastName}</td>
                      <td>{val.email}</td>
                      <td>{val.address}</td>
                      <td>{val.pincode}</td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default RQData;
