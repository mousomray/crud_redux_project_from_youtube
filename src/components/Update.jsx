import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser, detailsuser } from "../features/userDetailSlice";

const initialValue = {
  name: "",
  email: "",
  age: '',
  gender: '',
}

const Update = () => {
  const { id } = useParams();
  const [users, setUsers] = useState(initialValue);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleOnChange = (e) => {
    const { name, value } = e.target
    setUsers({ ...users, [name]: value })
  };

  // Get product For Single Value start
  const getUser = async () => {
    try {
      const response = await dispatch(detailsuser(id));

      const reg = {
        name: response?.payload?.name,
        email: response?.payload?.email,
        age: response?.payload?.age,
        gender: response?.payload?.gender,
      };
      setUsers(reg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  // Get product For Single Value end


  const handleOnUpdate = async (e) => {
    e.preventDefault();

    console.log("users...", users);
    await dispatch(updateUser(users));
    navigate("/read");

  };

  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleOnUpdate}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            value={users?.name}
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
            value={users?.email}
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
            value={users?.age}
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
            checked={users?.gender === "Male"}
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
            checked={users?.gender === "Female"}
            onChange={handleOnChange}
          />
          <label class="form-check-label">Female</label>
        </div>

        <button type="submit" class="btn btn-primary">
          Edit
        </button>
      </form>
    </div>
  );
};

export default Update;
