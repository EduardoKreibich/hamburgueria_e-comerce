import styled from "styled-components";


export const Overlay = styled.div`
    position: fixed;

    display: flex;
    align-items:center;
    justify-content:center;
 
    inset:0;
    width: 100%;
    height: 100vh;

    background-color: rgb(0, 0, 0, 0.7);

    z-index: 1000;
`


export const Container = styled.div`

    background-color: var(--Color-White);
   
    width: clamp(9.375rem, 95%, 25rem);

    border: none;
    border-radius: .3125rem;

   
    .container{
       
    }

    .header-cart{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: .625rem;

        background-color: var(--Color-Primary);
        color: var(--Color-White);

        border-radius: .3125rem .3125rem 0rem 0rem;

        button{
            color: var(--Color-Grey-3);
        }
    }

    .cart-products{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        margin: 1.25rem;

        



        .item-cart{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .3125rem;


            img{
                width: 3.125rem;

                background-color: var(--Color-Grey-3);
                border-radius: .3125rem;
            }

            @media (max-width: 21.5rem){
                h3{
                    font-size: 1rem;
                }

                img{
                    width:2.5rem;
                }
            }
        }


        .quanty-cart{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: max-content;
            margin-left: .3125rem;

            div{
                display: flex;
                align-items: center;
                border: .125rem solid var(--Color-Grey-3);
                border-radius: .3125rem;
            }

            img{
                margin-left: .3125rem;
                cursor: pointer;
            }




            .add-quanty{
                width: 1.25rem;
                margin: 0rem .625rem;
                font-size: 1.0625rem;
                font-weight: 700;

                :hover{
                    color: var(--Color-Primary);
                    transition: 0.2s;
                }
            }

            .remove-quanty{
                width: 1.25rem;
                margin: 0rem .3125rem;
                font-size: 1.25rem;
                font-weight: 700;

                width:100%;
                                
                :hover{
                    color: var(--Color-Secundary);
                    transition: 0.2s;
                }
            }

            span{
                font-size: .9375rem;
                font-weight: 700;
            }
        }

    }

    .container-total{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        border-top: .125rem solid var(--Color-Grey-3);


    }

    .container-cart{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        height: max-content;
        min-height:18.75rem;
        width: 100%;

        p{
            margin-top: 1.25rem;
        }

        .value{
            margin-top: 1.25rem;
        }

    }

    .container-control{
        margin: 20px;
    }


    /* @media (max-width: 344px){
            .cart-products{
                margin:10px;
            }
        } */
`


