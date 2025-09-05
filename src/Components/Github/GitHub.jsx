import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/EducationPorposeByAbdulSami")
  //     .then((response) => response.json()) // Return the parsed JSON here
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <>
      <div className="bg-orange-700 text-3xl p-4 m-4 text-white text-center">
        Github name: {data?.name}
      </div>
      <div className="bg-orange-700 text-3xl p-4 m-4 text-white text-center">
        Github followers: {data?.followers}
      </div>
      <div className="bg-orange-700 text-3xl p-4 m-4 text-white text-center">
        Github followings: {data?.following}
      </div>
    </>
  );
}

export default GitHub;

export const GitHubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/EducationPorposeByAbdulSami"
  );

  return response.json();
};
