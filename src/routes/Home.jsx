import CardList from "../components/CardList.jsx";
import { useSelector, useDispatch } from "react-redux";
import {setActiveCard, setLoading} from "../redux/cardSlice.js";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Footer} from "../components/Footer.jsx";
import {AccountInfo} from "../components/AccountInfo.jsx";
import Profile from "../components/Profile.jsx";

const Home = ( ) => {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.cards);
    const activeCard = useSelector((state) => state.cards.activeCard);
    const isSafetyOn = useSelector((state) => state.cards.isSafetyOn);
    const isLoading = useSelector((state) => state.cards.isLoading);
    const user = useSelector((state) => state.user);

    console.log('user:',user)

    const handleSetActiveCard = (card) => {
        dispatch(setActiveCard(card));
    };
    const toggleSafety = () => {
        dispatch({ type: 'cards/toggleSafety'});
    };

    useEffect(() => {
        dispatch(setLoading(false));
    });

    const firstName = user ? user.firstName : '';

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (cards.length === 0) {
        return (
                <>
                    <div className="container wrap">
                        <div className="blocks">
                            <div className="block-elms">
                                <h1>{`Welcome ${firstName}`}</h1>
                                <AccountInfo balance={"€0"} transactions={"€0"} summary={"None"}/>
                                <div className="cards-info">
                                    <div>
                                        <p>No cards found.</p>
                                    </div>
                                    <div>
                                        <Link className="btn add-card" to={"/newCard"}>Add a card</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-block">
                                <Profile />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </>
        )
    }

    return (
            <>
                <div className="container wrap">
                    <div className="blocks">
                        <div className="block-elms">
                            <h1>{`Welcome ${firstName}`}</h1>
                            <AccountInfo balance={"€146 379"} transactions={"- €304"} summary={"Entertainment"} />
                            <div className="all-cards">
                                <CardList cards={cards} activeCard={activeCard} toggleSafety={toggleSafety} isSafetyOn={isSafetyOn} handleSetActiveCard={handleSetActiveCard} />
                            </div>
                        </div>
                        <div className="profile-block">
                            <Profile />
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
    );
}

export default Home;