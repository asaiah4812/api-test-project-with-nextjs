"use client"
import Link from "next/link";
import style from "./page.module.css";
import UserFilters from "../UserFilters";
import { useState } from "react";

const Filter = () => {
  const [search, setSearch] = useState("");
  return (
    <div className={style.container}>
      <input type="text" placeholder="Search Name...." onChange={event => {setSearch(event.target.value)}}/>
      <div className={style.list}>
        {
          UserFilters.filter((user) => {
            if (setSearch == ""){
              return user
            } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
              return user;
            }
          }).map((user) => (
            <p key={user.id}>{user.name}</p>
          ))
        }
      </div>
    </div>
  );
};

export default Filter;
