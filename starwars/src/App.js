import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState([]);
  // console.log("App -> data", data);
  const [page, setPage] = useState(5);
  console.log(page);

  const Next = () => {
    let currentPage = page;
    setPage((currentPage += 1));
  };

  const Previous = () => {
    let currentPage = page;
    setPage((currentPage -= 1));
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        // console.log("App -> res", res);
        setData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  // const Previous = () => {
  //   setPage();
  // };

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <button onClick={() => Previous()}>Previous</button>
      <button onClick={() => Next()}>Next</button>
      <Card data={data} />a
    </div>
  );
};

export default App;
