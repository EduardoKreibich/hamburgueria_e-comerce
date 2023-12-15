import { Card } from "../Card"

import { StyledListCard } from "./style"


export const CardList = ({products, cartProducts, setCartProducts}) =>{

    return(
        <StyledListCard>
            <Card products = {products} cartProducts = {cartProducts} setCartProducts = {setCartProducts} />
        </StyledListCard>
    )
}