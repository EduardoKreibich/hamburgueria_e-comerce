import styled from "styled-components";

export const StyledButtonPrimary = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    font-size: 14px;
    font-weight: 600;

    width: 106px;
height: 40px;

    color: var(--Color-White);
    background: var(--Color-Grey-3);
    border: 2px solid var(--Color-Grey-3);
    border-radius: 8px;

    :hover{
        background: var(--Color-Primary);
        border: 2px solid var(--Color-Primary);
    }

`

export const StyledLand = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 54px;
    height: 40px;

    color: var(--Color-White);
    background-color: var(--Color-Primary);

    border: 2px solid var(--Color-Primary);
    border-radius: 8px;

`

export const StyledButtonCart = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0px 20px;
    margin-top: 20px;
    height: 50px;
    gap: 10px;

    font-size: 16px;
    font-weight: 600;
    color: var(--Color-Grey-2);

    background-color: var(--Color-Grey-3);
    border-radius: 4px;


    width: 100%;

    :hover{
        background-color: var(--Color-Primary);
        color: var(--Color-Grey-3);
    }

`