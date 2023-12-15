import lixeira from "./../../../../src/assets/img/lixeira.png"
import { Container, Overlay } from "./style"

import { TittleCart, TotalValue, TittleValue } from "../../../styles/typography"
import {StyledButtonCart} from "../../../styles/buttons"
import { useRef } from "react"
import { useEffect } from "react"



export const Modal = ({ cartProducts, modalOpen, setModalOpen, setCartProducts }) =>{


    const RemoveItem = (cartProducts, id) => {  

        const newArray = cartProducts.filter((product)=> product.id != id)
        setCartProducts(newArray)   
   
    }

    const TotalValueCart = (cartProducts) => {
        const newValue = cartProducts.reduce((acc, product) => acc + (product.price*product.quanty), 0 )
        
        return newValue

    }

    const AddQuanty = (product, cartProducts) => {
       const newArray = cartProducts.map( (element) => {
           if(element.id == product.id){
               element.quanty = element.quanty + 1
            }
            return element
        })
    
           setCartProducts(newArray) 
    }


    const RemoveQuanty = (product, cartProducts) => {
        const newArray = cartProducts.map( (element) => {
            if(element.id == product.id && element.quanty > 1){
                element.quanty = element.quanty - 1
             }
             return element
         })
     
            setCartProducts(newArray) 
     }


     const modalRef = useRef(null)

     useEffect(() =>{
        const handleOutClick = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setModalOpen(false)
            }
        }

        window.addEventListener("mousedown", handleOutClick)
   
        return () => {
            window.removeEventListener("mousedown", handleOutClick)
        }
     }, [])

     useEffect(() =>{
        const handleKeydown = (event) => {
            if(event.key == "Escape"){
                setModalOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeydown)
   
        return () => {
            window.removeEventListener("keydown", handleKeydown)
        }
     }, [])


   
     if(modalOpen){
         return(
            <Overlay role="dialog">
                <Container ref={modalRef}>
                    <div className="header-cart">
                        <TittleCart>Carrinho de compras</TittleCart>
                        <button onClick={() => setModalOpen(false)}>X</button> 
                    </div>
                    <section className="container-cart">
                        <ul className="container">
                            {cartProducts.map((product) =>
                                <li className="cart-products" key={product.id}>
                                    <div className="item-cart">
                                        <img src={product.img} alt= {`Imagem de um ${product.name}`} />
                                        <TittleCart>{product.name}</TittleCart>
                                    </div>
                                    <div className="quanty-cart">
                                        <div>
                                            <button className="remove-quanty" onClick={() => RemoveQuanty(product, cartProducts)}>-</button>
                                            <span>{product.quanty}</span>
                                            <button className="add-quanty" onClick={() => AddQuanty(product, cartProducts)}>+</button>
                                        </div>
                                        <img onClick={() => RemoveItem(cartProducts, product.id) } src={lixeira} alt="Imagem de uma lixeira" />
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="container-control">
                            <div className="container-total">
                                <TittleValue>Total:</TittleValue>
                                <TotalValue className="value">{`R$ ${TotalValueCart(cartProducts).toFixed(2)}`}</TotalValue>
                            </div>
                            <StyledButtonCart onClick={() => setCartProducts([])}>Remover Todos</StyledButtonCart>
                        </div>
                    </section>
                </Container>     
            </Overlay>
         )
     }
}