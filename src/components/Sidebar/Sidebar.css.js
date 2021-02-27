import styled from 'styled-components';

export const Item = styled.button`
    background: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-size: 15px;
`;

export const SidebarItem = styled.li`
    list-style: none;
    border-bottom: 1px dotted black;
    width: 100%;
    height: 75px;
    text-align: center;
    ${Item}:hover {
        background: black;
        color: white;
    };
`;