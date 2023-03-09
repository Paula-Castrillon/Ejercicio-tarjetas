import React from "react";
import '../stylesheets/Tarjeta.css';

function Tarjeta(props){
    return(
        <div className="box-container">
        <div className="card">
            <div className="body">
                <img src= {require(`../images/${props.cimg}.jpg`)} alt="" className="cimg" />
                <h3 className="titulo">{props.titulo}</h3>
                <p className="texto">{props.texto}</p>

            <div className="info2">
                <div className="tiempo">
                    <img src= {require(`../images/${props.imgt}.svg`)} alt="" className="imgt" />
                    <p className="texto2">{props.texto2}</p>
                </div>
                <div className="tiempo2">
                    <img src= {require(`../images/${props.imgt2}.svg`)} alt="" className="imgt2" />
                    <p className="texto3">{props.texto3}</p>
                </div>
            </div>
            <div className="linea"></div>
            <div className="piedp">
                <img src= {require(`../images/${props.imgp}.png`)} alt="" className="imgp" />
                <p className="t1">{props.t1}</p>
                <p className="t2">{props.t2}</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Tarjeta;
