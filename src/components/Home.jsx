import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div
      className="container mt-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="row">
        <div className="col-12 text-center">
          <h1>Welcome, {user.username}!</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
