import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/store";

const URL = "https://jsonplaceholder.typicode.com/users";

export const UserList = () => {
  const usersDate = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = fetch(URL, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>User List de JSON PlaceHolder</h2>
      <ul>
        <li>Usuarios</li>
      </ul>
    </>
  );
};
