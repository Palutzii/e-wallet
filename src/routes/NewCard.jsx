import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Card from "../components/Card.jsx";
import { addCard } from "../redux/cardSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchRandomUser} from "../redux/userSlice.js";
import useFetchUser from "../utils/useFetchUser.js";

const NewCard = ( ) => {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const userStatus = useSelector((state) => state.user.status);
    const userError = useSelector((state) => state.user.error);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        vendor: "",
        cardNumber: "",
        expireMonth: "",
        expireYear: "",
        CCV: ""
    });
    const [fieldValidity, setFieldValidity] = useState({
        vendor: false,
        cardNumber: false,
        expireMonth: false,
        expireYear: false,
        CCV: false
    });

    const [errorMessages, setErrorMessages] = useState({
        vendor: '',
        cardNumber: '',
        expireMonth: '',
        expireYear: '',
        CCV: ''
    });

    const validateField = (name, value) => {
        let isValid = true;

        switch (name) {
            case 'vendor':
                isValid = value !== "";
                break;
            case 'cardNumber':
                isValid = value.replace(/\s+/g, '').length === 16;
                break;
            case 'expireMonth':
                isValid = value.length === 2;
                break;
            case 'expireYear':
                isValid = value.length === 2;
                break;
            case 'CCV':
                isValid = value.length === 3;
                break;
            default:
                isValid = false;
                break;
        }

        setFieldValidity((prevValidity) => ({
            ...prevValidity,
            [name]: isValid
        }));
    };

    const handleChange = (e) => {
        const { name, value} = e.target;
        let formattedValue = value;

        if (name === "cardNumber") {
            //removes all non-digit characters
            formattedValue = value.replace(/\D+/g, "");
            //insets spaces after every 4 digits
            formattedValue = formattedValue.replace(/(\d{4})/g, "$1 ").trim();
        }

        setFormData(prevState => ({ ...prevState, [name]: formattedValue}));
        validateField(name, formattedValue.replace(/\s+/g, ''));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userStatus === 'succeeded') {
            const cardHolder = `${firstName} ${lastName}`;
            const newCardData = {
                ...formData,
                cardHolder,
            };
            const isFormValid = Object.values(fieldValidity).every(Boolean);

            if (isFormValid) {
                dispatch(addCard(newCardData));

                setFormData({
                    vendor: "",
                    cardNumber: "",
                    expireMonth: "",
                    expireYear: "",
                    CCV: ""
                });
                navigate('/home');
            } else {
                const newErrorMessages = {};
                for (const [field, isValid] of Object.entries(fieldValidity)) {
                    newErrorMessages[field] = isValid ? '' : `Invalid ${field}`;
                }
                setErrorMessages(newErrorMessages);
            }

        } else if (userStatus === 'failed') {
            console.error('Failed to fetch user:', userError);
            alert(`Failed to fetch user: ${userError}`)
        }
    };

    useFetchUser();

    const previewCardData = {
        ...formData,
        cardHolder: `${firstName} ${lastName}` || "Loading...",
    };

    return (
            <div className="new-card-container wrap">
                <div className="preview-card">
                    <Card details={previewCardData} isActive={true} isSafetyOn={false} />
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="vendor" className="select">
                        <select required name="vendor" value={formData.vendor} onChange={handleChange}>
                            <option value="" disabled>Select Vendor</option>
                            <option value="Visa">Visa</option>
                            <option value="Mastercard">Mastercard</option>
                            <option value="WoX">WoX</option>
                        </select>
                        {errorMessages.vendor && <span className="error-text">{errorMessages.vendor}</span>}
                    </label>
                    <div className="form-two-inputs">
                        <label htmlFor="cardNumber">Card number:</label>
                        <input type="text"
                               name="cardNumber"
                               pattern="\d{4} ?\d{4} ?\d{4} ?\d{4}"
                               minLength="16"
                               maxLength="19"
                               value={formData.cardNumber}
                               onChange={handleChange}
                               placeholder="XXXX XXXX XXXX XXXX"
                               className={fieldValidity.cardNumber ? '' : 'invalid-field'}
                               required
                        />
                        {errorMessages.cardNumber && <span className="error-text">{errorMessages.cardNumber}</span>}
                    </div>
                    <div className="form-two-inputs">
                        <label>Expiration date:</label>
                        <div className="expire-input-container">
                            <input type="text"
                                   name="expireMonth"
                                   pattern="\d*"
                                   minLength="2"
                                   maxLength="2"
                                   value={formData.expireMonth}
                                   onChange={handleChange}
                                   placeholder="Month"
                                   className={fieldValidity.expireMonth ? '' : 'invalid-field'}
                                   required
                            />
                            /
                            <input type="text"
                                   name="expireYear"
                                   pattern="\d*"
                                   minLength="2"
                                   maxLength="2"
                                   value={formData.expireYear}
                                   onChange={handleChange}
                                   placeholder="Year"
                                   className={fieldValidity.expireYear ? '' : 'invalid-field'}
                                   required
                            />
                        </div>
                    </div>
                    {errorMessages.expireMonth && <span className="error-text">{errorMessages.expireMonth}</span>}
                    {errorMessages.expireYear && <span className="error-text">{errorMessages.expireYear}</span>}
                    <div className="form-two-inputs">
                        <label htmlFor="CCV">CCV:</label>
                        <input type="text"
                               name="CCV"
                               pattern="\d*"
                               minLength="3"
                               maxLength="3"
                               value={formData.CCV}
                               onChange={handleChange}
                               placeholder="CCV"
                               className={fieldValidity.CCV ? '' : 'invalid-field'}
                               required
                        />
                        {errorMessages.CCV && <span className="error-text">{errorMessages.CCV}</span>}
                    </div>
                    <div className="buttons-container">
                        <button className="btn" type="submit" disabled={!Object.values(fieldValidity).every(Boolean)}>
                            Add Card
                        </button>
                        <Link className="btn cancel" to={"/home"}>Cancel</Link>
                    </div>
                </form>
            </div>
    );
}

export default NewCard;