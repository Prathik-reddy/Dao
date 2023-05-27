import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listVoters } from "../Blockchain";
import { daysRemaining } from '../store'
const Voters = () => {
  const { id } = useParams();
  const [voter, setvoter] = useState([]);

  const votersListArr = async () => {
    let voters = await listVoters(id);
    setvoter(voters);
    // Update the value of voters after the asynchronous function has finished executing.
  };
  useEffect(() => {
    votersListArr();
  }, []);

  return (
    <>
      <div className="text-center text-3xl underline decoration-solid underline-offset-8">
        <h1>Voters List</h1>
      </div>
      {voter.length != 0 ? (
        <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto mt-8 ">
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
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Chosen
                  </th>
                </tr>
              </thead>
              <tbody>
                {voter.map((vote, id) => (
                  <tr
                    key={id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {id + 1}
                    </th>
                    <td className="px-6 py-4">{vote[0]}</td>
                    <td className="px-6 py-4">{daysRemaining(vote[1])}</td>
                    <td className="px-6 py-4">{vote[2].toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="text-center text-xl m-5">
            <h3>Sorry no voter has voted yet on this proposal.</h3>
            <p>Voters list is currently empty</p>
          </div>
        </>
      )}
    </>
  );
};

export default Voters;
