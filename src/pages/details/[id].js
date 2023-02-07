import { getDetails } from "@/redux/resucers/userReducer";
import { wrapper } from "@/redux/store";
import axios from "axios";
import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
  const { userDetails } = useSelector((state) => state.users);
  return userDetails ? (
    <>
    <Head>
        <title>{userDetails?.name}</title>
    </Head>
    <div className="details">
      <div className="details-card">
        <h1> Name : {userDetails.name}</h1>
        <h3>Username : {userDetails.username}</h3>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
        <p>Adress: {userDetails.address.city} </p>
        <p>Website: {userDetails.website} </p>
      </div>
    </div>
    </>
  ) : (
    ""
  );
};

export default Details;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${query.id}`
      );
      store.dispatch(getDetails(response.data));
    }
);
