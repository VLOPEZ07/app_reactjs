import React from "react"
import Imagen1 from "../imagen/10699.png"
import "./styles/Card.css"
import 'bootstrap/dist/css/bootstrap.css'
import ciclesImg from '../imagen/circles.jpg'


class Card extends React.Component{
    render(){
        const {title,descripcion,leftColor,rightColor} =  this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage:`url(${ciclesImg}) ,linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
            
            >

                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={Imagen1} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
