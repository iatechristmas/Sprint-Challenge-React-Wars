import React, { useState } from "react";
import styled from "styled-components";

const OutsideDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  margin: auto;
  padding: 5%; */
  /* background-color: black; */
  width: 50%;
  font-weight: bold;

  /* img {
    height: auto;
    width: 10%;
  } */
`;

const InsideDiv = styled.div`
  background-color: white;
  padding: 1%;
  margin: 1%;
  width: 20%;
  border: 2px solid rgb(210, 210, 210);
  border-radius: 8px;
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);

  img {
    height: auto;
    width: 100%;
  }
`;

const Card = (props) => {
  console.log("Card -> props", props.data);
  return (
    <OutsideDiv>
      {props.data.map((item) => {
        return (
          <InsideDiv>
            <h2>{item.name}</h2>
            <img src={item.image} alt="" />
            <p>Gender: {item.gender}</p>
            <p>Status: {item.status}</p>
            <p>Species: {item.species}</p>
            <p>Location: {item.location.name}</p>
          </InsideDiv>
        );
      })}
    </OutsideDiv>
  );
};

// const Card = (props) => {
//   console.log(props.data);
//   return (
//     <OutsideDiv>
//       {props.data.map((item) => {
//         return (
//           <InsideDiv>
//             <p>{item.name}</p>
//
//           </InsideDiv>
//         );
//       })}
//     </OutsideDiv>
//   );
// };

export default Card;
