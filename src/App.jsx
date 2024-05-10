import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/todo/fetchApiSlice";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) {
    return <div>...loading</div>;
  } else {
    return (
      <div>
        {users.map((user) => {
          return (
            <div>
              <div>{user.name}</div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
