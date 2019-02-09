import React, {Component} from 'react'
import Pelicula from './Pelicula'

class Peliculas extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [
                {
                    titulo: "Coraline",
                    duracion: "1 hora 40 min",
                    imagen: "https://imagessl2.casadellibro.com/a/l/t0/72/9788498382372.jpg" ,
                    año: "2009",
                    director: "Bill Mechanic‎",
                    productora: "laika"
                },
                {
                    titulo: "Lion",
                    duracion: "2 hora 9 min",
                    imagen: "https://upload.wikimedia.org/wikipedia/en/f/f0/Lion_%282016_film%29.png",
                    año: "2016",
                    director: "Garth Davis",
                    productora: "nose"
                },
                {
                    titulo: "Los iusionistas",
                    duracion: "2 hora 5 min",
                    imagen: "https://http2.mlstatic.com/los-ilusionistas-now-you-see-me-pelicula-dvd-D_NQ_NP_683631-MLM27201375632_042018-F.jpg",
                    año: "2013",
                    director: "Louis Leterrier",
                    productora: "‎K/O Paper Products	"
                },
                {
                    titulo: "Un milagro inesperado",
                    duracion: "3 hora 9 min",
                    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/The_Green_Mile_%28movie_poster%29.jpg/220px-The_Green_Mile_%28movie_poster%29.jpg",
                    año: "1999",
                    director: "Frank Darabont",
                    productora: " Frank Darabont,David Valdes "
                },
                {
                    titulo: "Could Atlas",
                    duracion: "5 hora 52 min",
                    imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Cloud_Atlas_Poster.jpg/220px-Cloud_Atlas_Poster.jpg",
                    año: "2012",
                    director: " Lana Wachowski, Tom Tykwer, Lilly Wachowski",
                    productora: "Stefan Arndl, Grant Hill, Tom Tykwer,Lily Wachowski,Lana Wachowski"
                },
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>peliculas con las que contamos</h1>
                {this.state.peliculas.map((pelicula, index)=>(
                    <div>
                        <img className="component-img-abrir" src= {pelicula.imagen}
                        alt={pelicula.titulo} />
                        <h3>{pelicula.titulo}</h3>
                        <p>{pelicula.duracion}</p>
                        <p>-------------------------------------</p>
                        <Pelicula p={pelicula} />
                    </div>
                ))}
            </div>
        )
    }
}
export default Peliculas