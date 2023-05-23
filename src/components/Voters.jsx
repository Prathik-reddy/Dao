import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listVoters } from "../Blockchain";

const Voters = () => {
  const { id } = useParams();
  const [voter, setvoter] = useState([]);

  const votersListArr = async () => {
    console.log("hui");
    let voters = await listVoters(id);
    console.log("slkf;", voters);
    setvoter(voters);
    console.log("v si ", voter);
  };

  const votersListArr2 = async () => {
    console.log("hui");
    let voters = await listVoters(id);
    return voters;
  };

  const votersListArr3 = async () => {
    console.log("hui");
    let voters = await listVoters(id);
    setvoter(voters);
    console.log(voters);
    // Update the value of voters after the asynchronous function has finished executing.
  };
  useEffect(() => {
    votersListArr3();
  }, []);

  return (
    <>
      {/* {console.log(
        "votrs : ",voter[0].voter,voter[0].timestamp,voter[0].chosen
      )} */}

      {voter != [] ? (
        <>
          {console.log("slkd;f ", voter)}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-5 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sr.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TimeStamp
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Chosen
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">{voter[0].voter}</td>
                  <td className="px-6 py-4">{voter[0].timestamp}</td>
                  <td className="px-6 py-4">{voter[0].chosen.toString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <h3>Sry no voter has voted yet on this proposal</h3>
        </>
      )}

      <button onClick={votersListArr}>Click me</button>
    </>
  );
};

export default Voters;
