import React from 'react'

const Pelicula = (props) => (
    <div>
        <h2>{props.p.titulo}</h2>
        <img src={props.p.imagen} alt={props.p.titulo}  className="component-img-mostrar"/>
        <p>Duracion {props.p.duracion}</p>
        <p>Año {props.p.año}</p>
        <p>Director {props.p.director}</p>
        <p>productora {props.p.productora}</p>

    </div>
)

export default Pelicula