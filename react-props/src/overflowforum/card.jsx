import React from "react";
import Body from "./body";
import Header from "./header";

function Card(props) {
  return (
    <>
      <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username}/>
      <Body comment={props.commentObject.comment}/>
    </>
  );
}

export default Card;
