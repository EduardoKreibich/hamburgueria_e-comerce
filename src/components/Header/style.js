import styled from "styled-components"


export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--Color-Grey-4);

    @media (max-width:  654px){
        .container-controler{
            flex-wrap: wrap;
        }


    }

    .container-controler{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        form{
            width: 100%;
            input{
                width: 100%;
            }
        }
    }

    .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 10px 20px;
        width:150%;

        .cart{
            display: flex;
            align-items: center;
            
            position: relative;
            height: 50px;
            margin: 5px;
            padding: 5px;

            img{
                cursor: pointer;
            }


            span{
                position: absolute;
                top: 0;
                right: 0;

                height: 20px;
                width: 10px;

                font-size:14px;
                font-weight: 600;

                padding: 1.5px 12px 0px 3px;
                margin-top: 5px;

                border-radius:4px;
                background-color: var(--Color-Primary);
                color: var(--Color-White);
                
            }
        }
    }

   
        
    

`
