import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { requestApiData } from "../../pages/Home/containers/actions"

function PageComponent(props) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //     requestApiData();
  // }, [dispatch])
  const { requestApiData, routerDetails, homeDetails } = props;

  useEffect(() => {
    let orderId = 4;
    requestApiData(orderId);
  }, []);

  // console.log("Home Props------------", homeDetails.home);
  let objMap = new Map(Object.entries(homeDetails.home));
  return (
    <div>
      This is home!!
      {/* {
        // caching map
        //
        objMap.forEach((item, key) => {
            // do something with an item
            console.log(key, item);

            return (
                <div key={item}>adssa
                  <img src={item} alt="" />
                  <h4>First Name: {item}</h4>
                  <h4>Last Name: {item}</h4>
                  <h4>{item}</h4>
                  <h4>{item}</h4>
                </div>
              );
          })
      } */}
      {objMap.forEach((key, value) => {
        // console.log("VAlue: ", value);
    
        // console.log("VAlue of person: ", person[index]);
        return (
          <div key={value}>adsasdsa
          {    console.log("key: ", key)}
          <h2>Name: {key}</h2>
            {/* <img src={person.avatar} alt="" />
            <h4>{person.first_name}</h4>
            <h4>{person.id}</h4>
            <h4>{person.last_name}</h4>
            <h4>{person}</h4> */}
          </div>
        );
      })}
    </div>
  );
}

export default PageComponent;
