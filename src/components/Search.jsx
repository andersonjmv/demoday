import React from 'react'
import styled from 'styled-components';

const Searchq = styled.div`
    width: 100%;
    position: relative;
    display: flex;
  `;
  
const SearchTerm = styled.div`
    width: 100%;
    border: 3px solid #000;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #000;
`;
  
  
const SearchButton = styled.div`
    width: 40px;
    height: 36px;
    border: 1px solid #000;
    background: #ff1616;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
`;
  
  /*Resize the wrap to see the search bar change!*/
const Wrap = styled.div`
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -480%);
`;

export const Search = () => {
    return (
        <Wrap>
            <Searchq>
                <SearchTerm type="text" placeholder="Buscar" />
                <SearchButton type="submit" >
                    <i className="fa fa-search" />
                </SearchButton>
            </Searchq>
        </Wrap>
    )
}
