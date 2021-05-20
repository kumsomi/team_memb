import React, { useEffect, useState } from "react";
import IndiPersonComp from "./IndiPersonComp";
import style from "../CSS/style.css";

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const api = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users");
        const { data } = await response.json();
        setApiData(data);
      } catch (error) {
        console.log("Some error occured");
      }
    };
    api();
  }, [apiData]);

  return (
    <div className="container">
      {apiData.map(({ email, avatar, first_name }) => (
        <div className="con">
          <IndiPersonComp email={email} image={avatar} name={first_name} />
        </div>
      ))}
    </div>
  );
};

export default App;
