import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SearchImage from '../../images/search-symbol.svg';
import SearchImageW from '../../images/search-symbol-w.svg';

export const ClearSearch = styled.button`
    background: inherit;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: -35px;
    margin-top: -2px;
    visibility: hidden;
`;

export const SearchButton = styled.button`
    background: inherit;
    background-image: url(${SearchImage});
    background-repeat: no-repeat;
    background-size: cover;
    width: 20px;
    height: 20px;
    margin-right: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: ease-out 0.25s;
    margin-left: 3px;
`;

export const SearchBox = styled.input`
    margin: 0 0 0 auto;
    border: 1px solid gray;
    outline: none;
    height: 20px;
    padding-right: 40px;
    border-radius: 5px;
`;

export const NavLink = styled(Link)`
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    &:hover {
        color: black;
    };
    &:visited {
        color: black;
    };
    &:link {
        color: black;
    };
`;

export const NavItem = styled.li`
    color: gray;
`;

export const NavItemContainer = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    ${NavItem}:nth-child(n) {
        margin-left: 15px;
    };
`;

export const NavbarContainer = styled.div`
    border: 1px solid black;
    background: inherit;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    ${SearchButton}:hover {
        background: lightgreen;
        background-image: url(${SearchImageW});
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid lightgreen;
        border-radius: 5px;
        outline: none;
    };
    margin-bottom: 15px;
`;