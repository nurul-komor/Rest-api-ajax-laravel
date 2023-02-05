import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Table(props) {
  const [userData, setUserData] = useState(props.users);
  console.log(userData);
  //   useEffect(() => {
  let id = 1;
  var test = userData.map((data, index) => {
    return (
      <tr className="" key={index}>
        <th scope="row">{id++}</th>
        <th scope="col">{data.name}</th>
        <th scope="col">{data.email}</th>
        <th scope="col">{data.address}</th>
        <th scope="col">{data.gender}</th>
        <th scope="col">
          <img
            loading="lazy"
            style={{ maxWidth: "120px", heigh: "auto" }}
            src={"http://localhost:8000/uploads/" + data.image}
            alt=""
          />
        </th>
        <th scope="col">
          <button
            type="button"
            className="btn btn-primary edit-user"
            data-bs-toggle="modal"
            data-id={data.id}
            data-bs-target="#userModal"
          >
            Edit
          </button>
          <button
            data-id="{data.id}"
            type="submit"
            id="delete-user"
            className="btn btn-warning delete-user-btn"
          >
            Delete
          </button>
        </th>
      </tr>
    );
  });
  //   });
  return (
    <div className=" ">
      <table className="table table-bordered text-center" id="user-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">gender</th>
            <th scope="col">image</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>{test}</tbody>
      </table>
    </div>
  );
}
