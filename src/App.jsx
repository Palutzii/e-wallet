import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import NewCard from "./routes/NewCard.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRandomUser} from "./redux/userSlice.js";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRandomUser());
    }, [dispatch]);

    const addNewCard = (newCard) => {
        setCards(prevCards => [...prevCards, newCard]);
    };

    const router = createBrowserRouter(
            createRoutesFromElements(
                    <Route path="/" element={<Root />}>
                        <Route path="/home" index element={<Home  />} />
                        <Route path="/newCard" element={<NewCard addNewCard={addNewCard} />} />
                    </Route>
            )
    );

    return (
            <>
                <RouterProvider router={router} />
            </>
    );
}

export default App;
