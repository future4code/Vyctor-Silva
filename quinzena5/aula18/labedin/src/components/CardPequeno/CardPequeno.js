import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <p>{ props.email }</p>
            <p>{ props.endereço }</p>           
        </div>
    )
}

export default CardPequeno;
