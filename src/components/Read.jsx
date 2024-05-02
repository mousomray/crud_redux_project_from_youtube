import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";


const Read = () => {
  const dispatch = useDispatch();

 

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      
      <h2>All data</h2>
      

      <div>
        { Array.isArray(users) && users?.slice(0, users.length).reverse().map((value) => (
          <div key={value.id} className="card w-50 mx-auto my-2">
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{value.email}</h6>
              <p className="card-text">{value.gender}</p>
              
              <Link to={`/details/${value.id}`} className="card-link">
                Details
              </Link>
              <Link to={`/edit/${value.id}`} className="card-link">
                Edit
              </Link>
              <Link
                onClick={() => dispatch(deleteUser(value.id))}
                className="card-link"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Read;
