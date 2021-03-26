import React, { useState, useEffect } from "react";

function Card(props) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
      if(JSON.stringify(props.userdata) !== JSON.stringify(userData)){
          setUserData(props.userData);
      }
  }, [props.userData]);

  return (
        <div className="card w-20" style={{margin:"5px",cursor: "pointer"}}>
          <div className="card-body">
            <p className="card-text">
            {userData.name}
            </p>
          </div>
        </div>
  );
}

export default Card;
