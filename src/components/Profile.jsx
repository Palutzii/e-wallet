import { useSelector } from "react-redux";
import { getCode } from 'country-list';
import 'flag-icon-css/css/flag-icons.min.css';

const Profile = () => {
    const { firstName, lastName, username, country, city, streetName, streetNumber, picture, registered, status } = useSelector((state) => ({
        ...state.user,
        ...state.user.location
    }));

    const countryCode = getCode(country)?.toLowerCase();

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error loading profile</div>;

    return (
            <div className="profile">
                <div className="profile-img-container">
                    <img src={picture} alt={`Image of ${firstName} ${lastName}`}/>
                </div>
                <div className="profile-names">
                    <h2>{`${firstName} ${lastName}`}</h2>
                    <p>{username}</p>
                </div>
                <div className="profile-address">
                    <div className="flag-icon-container">
                        {countryCode && <span className={`flag-icon flag-icon-${countryCode}`}></span>}
                    </div>
                    <p>{`${country}, ${city}`}</p>
                    <p>{` ${streetName} ${streetNumber}`}</p>
                </div>
                <div className="profile-registered">
                    <p>Joined:</p>
                    <p>{new Date(registered).toLocaleDateString()}</p>
                </div>
            </div>
    );
};

export default Profile;
