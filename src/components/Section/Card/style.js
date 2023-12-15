import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: max-content;

    background: var(--Color-White);
    border: .125rem solid var(--Color-Grey-3);
    border-radius: .3125rem;

    margin-bottom: 10px;

    :hover{

        border: .125rem solid var(--Color-Primary);
    }

    img{
        width: 250px;
        height: 8.75rem; 

        object-fit: contain;
        object-position: top;

        background-color: var(--Color-Grey-4);
    }

    div{
        display: flex;
        flex-direction: column;
        margin: .625rem;
        gap: .625rem;

    }

`