import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {
        const { name, id } = this.props.monster;
        return (
            <div className='card-container'>
                <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt={`monster ${name}`}/>
                <h2>{name}</h2>
            </div>
        );
    }
}

export default Card;