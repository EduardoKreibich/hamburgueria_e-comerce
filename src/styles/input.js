import styled from "styled-components";


export const StyledInput = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem .9375rem;
    gap: .625rem;

    width: 400px;  
    height: 3.75rem;

    margin: 0px 5px;

    background: var(--Color-Grey-4);
    border: .125rem solid var(--Color-Grey-3);
    border-radius: .5rem;

    :focus{
        border: .125rem solid var(--Color-Grey-1);
        background: var(--Color-White);
    }

`