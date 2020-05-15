import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Card from "./Card";
import Search from "./Search";

const StyledTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap");
  font-family: "Amatic SC", cursive;
  color: #443e3e;
  font-size: 4rem;
  text-shadow: 1px 1px 5px #fff;
  background-color: #8ffd44;
`;

const App = () => {
  const [chars, setChars] = useState([]);

  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const Next = () => {
    let currentPage = page;
    setPage((currentPage += 1));
  };

  const Previous = () => {
    let currentPage = page;
    setPage((currentPage -= 1));
  };

  const filterChars = (chars) => {
    return chars.filter((charObj) => {
      if (!searchTerm) {
        return charObj;
      }
      if (charObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return charObj;
      }
    });
  };
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        // console.log("App -> res", res);
        setChars(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <div className="App">
      <StyledTitle>Rick & Morty Characters</StyledTitle>
      <Search updateSearchTerm={setSearchTerm} />
      <p></p>
      <button onClick={() => Previous()}>Previous</button>
      <button onClick={() => Next()}>Next</button>
      <Card data={filterChars(chars)} />
    </div>
  );
};

export default App;
