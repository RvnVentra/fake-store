import styled from 'styled-components';

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: row;
    float: left;
    flex-wrap: wrap;
    width: 125px;
    border: 1px solid black;
    margin-left: 15px;
    transition: 0.1s linear;
`;

export const ClearCategoryButton = styled.button`
    background: inherit;
    outline: none;
    border: none;
    width: 100%;
    border-bottom: 1px dotted black;
    height: 25px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    transition: 0.1s linear;
`;