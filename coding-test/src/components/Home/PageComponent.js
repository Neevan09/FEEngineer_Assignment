import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { get } from "lodash";

const PageComponent = props =>{
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     requestApiData();
  // }, [dispatch])

  const { requestApiData, routerDetails, userDetails, isFetching } = props;
  const avatar = get(userDetails, "user.avatar") || "";
  const email = get(userDetails, "user.email") || "";
  const firstName = get(userDetails, "user.first_name") || "";
  const lastName = get(userDetails, "user.last_name") || "";
  const userId = get(userDetails, "user.id") || "";
    
  useEffect(() => {
    let orderId = 4;
    requestApiData(orderId);
  }, []);

  return (
    <div>
      {!isFetching && (
        <>
          <img src={avatar} alt="" />
          <h2>First Name: {firstName}</h2>
          <h2>Last Name: {lastName}</h2>
          <h2>User ID: {userId}</h2>
          <h2>Email: {email}</h2>
        </>
      )}
    </div>
  );
}

export default PageComponent;
