import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Onlynetflix = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata(req, res) {
      try {
        const result = await axios.get(
          "https://netflix-clone-backend-vas2.onrender.com/api/flix/onlyonnetflix"
        );
        console.log(result.data.onlyonflix);
        setMovies(result.data.onlyonflix);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  const navigate = useNavigate();
  const handleclick = async (movie_id) => {
    try {
      const response = await axios.get(
        `https://netflix-clone-backend-vas2.onrender.com/api/flix/onlyonnetflix/${movie_id}`
      );
      console.log(response.data)
      if(response.status === 200)
      {
        navigate("/onlyflixpage", {state: {array: response.data}})
      }
    } catch (error) {
      console.log(error)
      console.log("error fetching")
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-center p-5">
        <h1 className="font-stylish text-2xl font-medium text-white md:text-xl">
          Only on Netflix Movies
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 p-7 md:grid md:grid-cols-3 md:gap-8 md:p-7 ">
        {movies.map((card, index) => {
          return (
            <div key={index} className="rounded-xl bg-white h-[50vh]">
              <img
                src={card.image}
                alt=""
                className="w-full h-[40vh] rounded-t-xl object-cover"
              />
              <div className="p-3 flex justify-between items-center">
                <h1 className="font-stylish font-medium">{card.name}</h1>
                <button
                  className="px-3 py-2 bg-blue rounded-md text-white"
                  onClick={() => {
                    console.log("id: ",card._id)
                    handleclick(card._id)}}
                >
                  See more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Onlynetflix;
