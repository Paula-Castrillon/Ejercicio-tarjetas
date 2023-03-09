import React from 'react';
import '../stylesheets/Review.css';

function Review(props){
    return(
        <div className="container">
            <p>{props.texto}</p>
            <div className="box-user">
                <img src= {require(`../images/${props.imagen}.jpg`)} className="img-rounded" alt=""/>
                <div>
                    <h3>{props.nombre}</h3>
                    <p>{props.cargo}</p>
                </div>
            </div>
        </div>
    )
}

export default Review;
