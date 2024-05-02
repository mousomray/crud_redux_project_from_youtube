import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState([]);
  const { loading } = useSelector((state) => state.app);
  

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");

  };

  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleOnSubmit}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            onChange={handleOnChange}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            onChange={handleOnChange}
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Age</label>
          <input
            type="text"
            name="age"
            class="form-control"
            onChange={handleOnChange}
            required
          />
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={handleOnChange}
            required
          />
          <label class="form-check-label">Male</label>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={handleOnChange}
          />
          <label class="form-check-label">Female</label>
        </div>

        <button type="submit" class="btn btn-primary">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Create;
