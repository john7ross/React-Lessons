import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {errorSelector, loadingSelector, usersSelector} from "../redux/reducers/userReducer/selectors";
import {loadUsers} from "../redux/reducers/userReducer/userReducer";

export const Home = () => {
    const users = useSelector(usersSelector);
    const loading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, []);

    const errorHandler = () => {
        dispatch(loadUsers())
    };

    if(loading) {
        return (
            <h3>Loading, please wait... </h3>
        )
    }

    if(error) {
        return (
            <div>
                <h3>Ouch, we take error, repeat? </h3>
                <button onClick={errorHandler}>Repeat</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Welcome</h2>
            {users.map((user) =>
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </div>
    );
};