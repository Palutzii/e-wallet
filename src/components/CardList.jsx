import Card from "./Card.jsx";
import {useDispatch} from "react-redux";
import {removeCard} from "../redux/cardSlice.js";
import binImg from '../assets/bin.png'
import {Link} from "react-router-dom";

const CardList = ({cards, activeCard, toggleSafety, isSafetyOn, handleSetActiveCard}) => {
    const dispatch = useDispatch();

    const handleRemoveCard = (cardNumber) => {
        dispatch(removeCard(cardNumber));
    };

    console.log(cards.length)
    return (
            <div className="card-list">
                <div className="active-card-section">
                    <div className="card-head">
                        <h3 className="active-card-title">Active</h3>
                        <div className="all-cards-safety-btn">
                            <button className="btn" onClick={toggleSafety}>Toggle Safety</button>
                        </div>
                    </div>

                    {activeCard ? <Card details={activeCard} isActive={true} isSafetyOn={isSafetyOn}/> :
                            <div>No active card</div>}
                </div>
                <div className="inactive-card-section">
                    <div className="card-head">
                        <h3 className="inactive-card-title">Inactive</h3>
                        <Link className="btn add-card" to={"/newCard"}>Add a card</Link>
                    </div>
                    {cards.length === 1 ? <div className="no-cards-extra-div" >No inactive cards</div> : ''}
                    {cards.map((card, index) => (
                            card.cardNumber !== activeCard.cardNumber &&
                            <div key={card.cardNumber}
                                 className={`inactive-card ${index === cards.length - 1 ? 'last-inactive-card' : ''}`}
                            >
                                <Card
                                        details={card}
                                        isActive={card === activeCard}
                                        isSafetyOn={isSafetyOn}
                                        handleSetActiveCard={() => handleSetActiveCard(card)}
                                />
                                <button className="remove-btn" onClick={() => handleRemoveCard(card.cardNumber)}>
                                    <img src={binImg} alt="Icon of a bin"/>
                                </button>
                            </div>
                    ))}
                </div>
            </div>
    );
}

export default CardList;