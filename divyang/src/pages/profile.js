import React from "react";
import { useNavigate } from "react-router-dom";
function Profile()  {
    
  let navigate = useNavigate();
  let goToAnotherPage = () => {
    navigate("/login");
  };
  let goToSomePage = () => {
    navigate("/home");
  };
  let goBack = () => {
    navigate(-1);
  };
return (
	<div>
	<h1>
	This is your profile!
	</h1>

      <span
        onClick={goToAnotherPage}
        style={{ backgroundColor: "yellow", fontSize: 33, padding: 5 }}
      >
        Go To Another Page
      </span>
      <br />
      <span
        onClick={goToSomePage}
        style={{ backgroundColor: "yellow", fontSize: 33, padding: 5 }}
      >
        Go To Some Page
      </span>
      <br />
      <span
        onClick={goBack}
        style={{ backgroundColor: "lightblue", fontSize: 33, padding: 5 }}
      >
        Go Back
      </span>
    </div>
	
);
};

export default Profile;
