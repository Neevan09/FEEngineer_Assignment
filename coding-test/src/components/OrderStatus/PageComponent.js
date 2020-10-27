import React from "react";
// import { useSelector } from "react-redux";
import { get, isEmpty } from "lodash";

const PageComponent = (props) => {
  // const order = useSelector();

  const { userDetails, companyDetails, history } = props;
  const avatar = get(userDetails, "user.avatar") || "";
  const firstName = get(userDetails, "user.first_name") || "";
  const lastName = get(userDetails, "user.last_name") || "";
  const companyName = get(companyDetails, "company.company") || "";
  const companyUrl = get(companyDetails, "company.url") || "";

  const navigationHandler = () => {
    window.open(companyUrl);
    // history.push('/saved-items');
  };

  return (
    <div>
      <img src={avatar} alt="" />
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <h2>Company Name: {companyName}</h2>
      <button onClick={navigationHandler}>Link</button>
    </div>
  );
}

export default PageComponent;
