import { Monster } from "../../App";

import './card.styles.css';

type CardProps = {
    monster: Monster;
}

const Card = ({ monster }: CardProps ) => {
    const { id, name } = monster;
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt={`monster ${name}`}/>
            <h2>{name}</h2>
        </div>
    );
};

export default Card;