import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';

export const ItemContainer = styled.div`
    border: 1px dotted black;
    box-shadow: 1.5px 1px 1.5px 1px #888888;
    margin: 5px;
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`;

export const ItemImage = styled.img`
    height: 125px;
    width: 125px;
`;

export const ItemTitle = styled(Link)`
    font-weight: bold;
    font-size: 16px;
    margin: 0px 10px;
    &:hover {
        color: red;
    };
    &:visited {
        color: black;
    };
    &:link {
        color: black;
    };
`;

export const ItemPrice = styled.p`
    text-decoration: underline;
    ${ItemContainer}:hover & {
        color: red;
        cursor: pointer;
    };
`;