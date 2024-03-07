import React from "react";
function Header(props) {
  return (
    <>
    <div className="wrapper" >
      <img src={props.profileImg} alt="N/A"></img>
      <h1>{props.username}</h1>
    </div>
    </>
  );
}

export default Header;
