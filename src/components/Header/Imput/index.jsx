import Land from "./../../../assets/img/lupa.png"
import { StyledInput } from "../../../styles/input"
import { StyledLand } from "../../../styles/buttons"
import { StyledForm } from "./style"
import { useState } from "react"

export const InputHeader = ({ setInputSearch }) => {

    const [input, setInput] = useState("")

    const submit = (event) => {
        event.preventDefault()
        setInputSearch(input)
    }
    

    return(
        <StyledForm onSubmit={submit}>
            <StyledInput
            type="text" 
            placeholder="Digitar Pesquisa..."
            onChange={(event) => setInput(event.target.value)}
            />
            <StyledLand type="submit"><img src={Land} alt="Imagem de uma lupa de busca" /></StyledLand>
        </StyledForm>
    )

}