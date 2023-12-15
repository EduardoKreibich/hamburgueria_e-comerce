import styled from "styled-components";


export const StyledListCard = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;

    gap: 40px;
    margin-top: 30px;
    
    margin-left: 20px;


    @media(max-width:768px){
        display: flex;
        gap: 30px;
        margin-left: 0;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;

    }
    
    
`
