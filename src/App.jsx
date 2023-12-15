import { useEffect } from "react"
import { useState } from "react"

import { Header } from "./components/Header/index"
import { CardList } from "./components/Section/CardList"
import { api } from "./services/api"
import { Modal } from "./components/Section/Cart"


import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Reset } from "./styles/reset"
import { GlobalStyle } from "./styles/global"
import { StyledContainer } from "./styles/grid"



const  App = () => {

  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [inputSearch, setInputSearch] = useState('')


  const filterProducts = products.filter(
    product => product.name.toUpperCase().includes(inputSearch.toUpperCase())
    
    )


  useEffect(() => {
    const getProducts = async () => {
        const response = await api.get("/products")

        setProducts(response.data)
    }
    getProducts()

}, [])


  return (
    <div className="App">
    <Reset />
    <GlobalStyle />
    <ToastContainer />
      <Header modalOpen = {modalOpen} setModalOpen = {setModalOpen} cartProducts = {cartProducts} setInputSearch = {setInputSearch} inputSearch={inputSearch}/>
    <StyledContainer>
      <CardList products = {filterProducts} cartProducts = {cartProducts} setCartProducts = {setCartProducts}/>
    </StyledContainer>
      <Modal cartProducts = {cartProducts} modalOpen = {modalOpen} setModalOpen = {setModalOpen} setCartProducts = {setCartProducts}/>

    </div>
  )
}

export default App
