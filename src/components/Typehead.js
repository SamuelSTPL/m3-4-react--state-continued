import React, { useState } from "react";
import styled from "styled-components";
import { Suggestions } from "./Suggestions";

const Typehead = ({ suggestions, handleSelect, categories }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isVisible, setIsVisible] = useState(false)
  const maxResults = 5;
  // console.log(suggestion)

  let matched = suggestions
    .filter((suggestion) => {
      const enoughChars = searchValue.length >= 2;
      const includesValue = suggestion.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return enoughChars && includesValue;
    })
    .slice(0, maxResults);

  // console.log(matched)

return (
    <Wrapper>
      <SearchInputs>
        <Input
          type="text"
          placeholder="Enter search here"
          onChange={(e) => setSearchValue(e.target.value)}

          onKeyDown={(e) => {
            switch (e.key) {
                case "Enter": {
                    handleSelect(e.target.value);
                    return;
                }
                case "Escape": {
                    setIsVisible(false)
                }

                case "ArrowUp":
                case "ArrowDown": {
                    e.preventDefault();
                    if (!matched){
                        return;
                    }
                }
            }
          }}
        ></Input>
        <Button onClick={() => setSearchValue("")}>Clear</Button>
      </SearchInputs>
      <SearchResults>
        <ul id="results">
            {matched.map((suggestion, index) => {
                const category = categories[suggestion.categoryId]
                return (
                    <ListItem>
                        <Suggestions 
                        key={suggestion.id}
                        suggestion={suggestion}
                        category={category}
                        searchValue={searchValue}
                        handleSelect={ (suggestion)=> {
                            window.alert(suggestion)
                        }}
                        />
                    </ListItem> 
                
                )
            })}
        </ul>
      </SearchResults>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SearchInputs = styled.div`
  display: flex;
`;
const SearchResults = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  font-size: 1.5rem;
  width: 640px;
  box-shadow: 0px 2px 15px 0px lightgray;
`;

const Input = styled.input`
  width: 500px;
  height: 60px;
  border-radius: 10px;
  margin-right: 20px;
  border: 1px solid gray;
  font-size: 1.5rem;
  padding-left: 15px;
`;

const ListItem = styled.li`
    margin-top: 10px;
    padding: 10px;
    &:hover {
    background-color: lemonchiffon;
    cursor: pointer;
  }
`

const Button = styled.button`
  width: 120px;
  height: 60px;
  background-color: blue;
  color: #fff;
  border-radius: 10px;
  font-size: 1.5rem;
  border: 0px;

  &:hover {
    cursor: pointer;
  }
`;

export { Typehead };
