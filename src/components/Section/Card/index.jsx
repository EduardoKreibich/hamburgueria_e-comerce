import {StyledButtonPrimary} from "../../../styles/buttons"
import { StyledCard } from "./style"
import { toast } from "react-toastify"

import{ TittleCard, ParagraphCard, PriceCard } from "../../../styles/typography"


export const Card = ({products, cartProducts, setCartProducts}) => {


const checkDuplicity = (product, cartProducts) => {
    if(!cartProducts.includes( product )){
        product ["quanty"] = 1
        setCartProducts([...cartProducts, product])

    }else {toast.warning("Esse item já está no seu carinho")}

}

return(
    <>
        {
            products.map((product) => (
                <StyledCard key={product.id}>
                    <img src={product.img} alt="" />
                    <div>
                        <TittleCard>{product.name}</TittleCard>
                        <ParagraphCard>{product.category}</ParagraphCard>
                        <PriceCard>{`R$ ${product.price.toFixed(2)}`}</PriceCard>
                        <StyledButtonPrimary onClick={() => checkDuplicity(product, cartProducts)}>Adicionar</StyledButtonPrimary>
                    </div>
                </StyledCard>
            ))}
        </>
    )
}
