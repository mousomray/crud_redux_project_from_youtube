import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { detailsuser } from "../features/userDetailSlice";


const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(detailsuser(id));
    }, []);

    if (loading) {
        return <h2>Loading</h2>;
    }

    return (
        <>

            <h2>Details</h2>

            <div>
                <div className="card w-50 mx-auto my-2">
                    <div className="card-body">
                        <h1><b>Name :</b> {users?.name}</h1>
                        <h1><b>Email :</b> {users?.email}</h1>
                        <h1><b>Age :</b> {users?.age}</h1>
                        <h1><b>Gender :</b> {users?.gender}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
