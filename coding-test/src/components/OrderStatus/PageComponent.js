import React from "react";
import { useSelector } from "react-redux";
import { get, isEmpty } from "lodash";

function PageComponent(props) {
  // const order = useSelector();

  const { homeDetails } = props;
  const avatar = get(homeDetails, "home.avatar") || "";
  const email = get(homeDetails, "home.email") || "";
  const firstName = get(homeDetails, "home.first_name") || "";
  const lastName = get(homeDetails, "home.last_name") || "";
  const userId = get(homeDetails, "home.id") || "";

  console.log("homeDetails", homeDetails)

  return (
    <div>
      <img src={avatar} alt="" />
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>User ID: {userId}</h2>
      <h2>Email: {email}</h2>
      <h2>Order Status!!</h2>
      <h2>Order Id: </h2>
      <h2>Order Quantity</h2>
      <h2>Shipped date</h2>
      <h2>Order Status</h2>
    </div>
  );
}

export default PageComponent;
