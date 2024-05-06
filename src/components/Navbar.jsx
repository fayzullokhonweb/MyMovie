import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
// context
import { GlobalContext } from "../context/useGlobal";

function Navbar() {
  const { dispatch, user } = useContext(GlobalContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="shadow-md hover:shadow-2xl py-1 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <Link to="/" className="text-3xl  font-medium font-mono ">
              MyMovie
            </Link>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <div>{user && <p className="-mb-1">{user.displayName}</p>}</div>

            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogout}
                className=" font-sans hover:opacity-60"
              >
                <span className="flex items-center gap-1 ">
                  <span className="text-xl ">Logout</span>{" "}
                  <IoArrowForwardOutline className="-mb-1.5 text-lg" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
