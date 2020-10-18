import React, { useState } from "react";
import styled from "styled-components";



const Suggestions = ({ suggestion, searchValue, category}) => {

// console.log(searchValue.length)
// console.log(category)

const matchIndex =  suggestion.title 
    .toLowerCase()
    .indexOf(searchValue.toLowerCase())

const matchEnd = matchIndex + searchValue.length;

const firstHalf = suggestion.title.slice(0, matchEnd)
const secondtHalf = suggestion.title.slice(matchEnd)

return( 
    <>
        {firstHalf}
        <BoldSpan>{secondtHalf}</BoldSpan> {" "}
        <Caption>
            in <CategoryName>{category.name}</CategoryName>
        </Caption>
    </>
)
};

const BoldSpan = styled.span`
    font-weight: bolder;
`

const CategoryName = styled.span`
    font-weight: bolder;
    color: purple;
`

const Caption = styled.em`
    opacity: 0.75;
    font-size: 1.2rem;
`

export { Suggestions };
