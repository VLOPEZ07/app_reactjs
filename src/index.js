/*
const element = document.createElement("h1")
const contenedor = document.getElementById("root")
element.innerText="Hola Victor Alexander"
contenedor.appendChild(element)
*/
import React from "react"
import ReactDOM from "react-dom"
import Card from "./components/Card"
 

const contenedor = document.getElementById("root")


ReactDOM.render(<Card
                    title="Guia Tecnica"
                    descripcion="Aprenda a diseña increibles imagenes"
                    img=""
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />,contenedor)



