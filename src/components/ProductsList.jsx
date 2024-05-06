import React, { useState, useEffect } from "react";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function ProductsList() {
  const [allMov, setAllMov] = useState([]);

  useEffect(() => {
    async function getMovie() {
      const querySnapshot = await getDocs(collection(db, "movies"));
      const movies = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllMov(movies);
    }
    getMovie();
  }, []); // Empty dependency array to run effect only once

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "movies", id));
      setAllMov(allMov.filter(movie => movie.id !== id));
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };
  const MovieList = ({ movies }) => {
    return (
      <ul className="flex flex-col gap-3">
        {movies.map((movie) => (
          <li className="hover:shadow-2xl hover:rounded-2xl" key={movie.id}>
            <div className="card card-side bg-base-100 shadow-md">
              <figure>
                <img className="w-48 h-" src={movie.imgUrl} alt="Movie" />
              </figure>
              <div className="card-body">
                <div className="mb-auto">
                  <h2 className="card-title text-2xl mb-2 ">{movie.title}</h2>
                  <h2 className="text-base ">
                    Worldwide Gross: {movie.wgross}
                  </h2>
                  <h2 className="text-base ">Domestic gross: $785,221,649</h2>
                  <h2 className="text-base">Rating: {movie.rating}</h2>
                </div>
                <div className="card-actions ">
                  <div>
                    <a
                      href="https://t.me/fayzullokhonweb"
                      className="btn btn-primary  text-gray-50 "
                    >
                      <span className="font-mono text-base">Watch</span>{" "}
                      <PiYoutubeLogoFill className="w-6 h-6" />
                    </a>
                  </div>

                  <div>
                    <button
                     onClick={() => handleDelete(movie.id)}
                      className="btn btn-primary  text-gray-50"
                    >
                      <span className="font-mono text-base">I saw</span>{" "}
                      <MdDeleteOutline className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <MovieList movies={allMov} />
    </div>
  );
}

export default ProductsList;
