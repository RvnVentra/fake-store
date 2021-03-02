import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 90%;
    height: 600px;
    margin: 0px auto;
    border: 1px solid black;
    padding-bottom: 2%;
`;

export const ItemImage = styled.img`
    width: 45%;
    height: 50%;
    float: left;
    margin: 2.5%;
    border: 1px solid red;
`;

export const ItemTitle = styled.h1`
    color: red;
    margin: 2.5% 2.5% 2.5% 0px;
    font-size: 1.75rem;
    text-align: center;
    border: 1px solid black;
`;

export const ItemPrice = styled.p`
    color: red;
    text-align: center;
`;

export const ItemDescription = styled.p`
    margin: 2.5% 2.5% 2.5% 0px;
    line-height: 1.5rem;
    border: 1px solid black;
`;