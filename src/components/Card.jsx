import {useState} from "react";
import chipImg from '../assets/chip.png';
import wifiBlack from '../assets/wifi-black.png';
import wifiBlue from '../assets/wifi-blue.png';

const Card = ({ details, isActive, isSafetyOn, handleSetActiveCard , isLast }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(prev => !prev);
    };


    console.log("is last: ",isLast)

    if (!details) {
        return <div>No card details available</div>;
    }
    return (
            <div className={`card  ${isActive ? 'active' : 'inactive'} ${isFlipped ? 'flipped' : ''}`} onClick={isActive ? toggleFlip : handleSetActiveCard}>
                <div className={`card-inner ${details.vendor.toLowerCase()}`}>
                    <div className="card-front">

                        { !isFlipped && (
                                <div className="card-side-inner">
                                    <div className="card-top">
                                        <div className="wifi-icon"><img src={details.vendor === 'WoX' ? wifiBlue : wifiBlack } alt=""/></div>
                                        <div className="vendor-icon">{details.vendor ? details.vendor : 'Vendor'}</div>
                                    </div>
                                    <div className="chip">
                                        <img src={chipImg} alt="Image of a electronic chip"/>
                                    </div>
                                    <div className="card-number">
                                            {details && details.cardNumber ?
                                                    (isSafetyOn ? `**** **** **** ${details.cardNumber.slice(-4)}` : details.cardNumber)
                                                    : 'Enter Card number'
                                            }
                                    </div>
                                    <div className="expire">{details.expireMonth ? details.expireMonth : "Month"}/{details.expireYear ? details.expireYear : "Year"}</div>
                                    <div className="card-holder">{details.cardHolder.toUpperCase()}</div>

                                </div>
                        )}
                    </div>
                    <div className="card-back">
                        {isActive && isFlipped && (
                                <>
                                    <div className="back-line"></div>
                                    <div className="ccv-container">
                                        <div className="ccv">
                                            {details.CCV ? details.CCV : "CCV"}
                                        </div>
                                    </div>
                                </>
                        )}
                    </div>
                </div>
            </div>
    );
}

export default Card;