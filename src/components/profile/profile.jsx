import React from "react";
import Button from "../common/Button";

const Profile = (props) => {
  return (
    <>
      <Button
        label="Home버튼"
        onClick={alert("button clicked!")}
        disabled={false}
      />
    </>
  );
};

export default Profile;
