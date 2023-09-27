import {useDispatch, useSelector} from "react-redux";

const useFetchUser = () => {
    const userStatus = useSelector((state) => state.user.status);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const location = useSelector((state) => state.user.location);
    const username = useSelector((state) => state.user.username);
    const picture = useSelector((state) => state.user.picture);
    const registered = useSelector((state) => state.user.registered);

    return {
        userStatus,
        firstName,
        lastName,
        ...location,
        username,
        picture,
        registered
    };
}

export default useFetchUser;
