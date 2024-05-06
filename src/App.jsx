// react-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// context
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobal";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

// action
import { action as SignUpAction } from "./pages/SignUp";
import { action as LoginAction } from "./pages/Login";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";

// components
import ProtectedRoutes from "./components/ProtectedRoutes";

// layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      action: SignUpAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });

    async function getData() {
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {

        console.log(doc.id, " => ", doc.data());
      });
    }
    getData();
  }, []);

  return <RouterProvider router={routes} />;
}

export default App;
