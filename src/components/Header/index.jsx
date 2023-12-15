import Cart from "./../../assets/img/cart.png"

import { RenderLogo } from "./Logo"
import { InputHeader } from "./Imput"
import { StyledHeader } from "./style"
import { StyledContainer } from "../../styles/grid"


export const Header = ({ modalOpen, setModalOpen, cartProducts, setInputSearch }) => {


   
    const AcumulatorCart = ( cartProducts ) =>{
        const newValue = cartProducts.reduce((acc, product) =>  acc + product.quanty, 0)

        return newValue
    }
    

    return(
        <StyledHeader>
            <StyledContainer>
                <div className="container-controler">
                    <div className="container">
                        <RenderLogo />
                        <div className="cart">
                            <img onClick={() => setModalOpen(true)} src={Cart} alt="Imagem de um carrinho de compras" />
                            <span>{AcumulatorCart(cartProducts)}</span>
                        </div>
                    </div>
                        <InputHeader setInputSearch = {setInputSearch}/>
                </div>
            </StyledContainer>
            
        </StyledHeader>
        )
}