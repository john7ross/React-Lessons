import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/selectors";
import {registerInitiate} from "../redux/actions/actions";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, userName))
    }

    return (
        <div>
            <header style={{backgroundColor: "gray", width: "100%", minHeight: 70}}>
                <NavLink to={'/login'}>Enter</NavLink>
                <h2>Register</h2>
                <form onClick={handleSubmit}>
                    <input type={"text"} value={userName} onChange={(e) => {
                        setUserName(e.target.value)
                    }}/>
                    <input type={"text"} value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                    <input type={"text"} value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    <input type={"text"} value={passwordConfirm} onChange={(e) => {
                        setPasswordConfirm(e.target.value)
                    }}/>
                    <button type={"submit"}>SIGN_UP</button>
                </form>

            </header>
        </div>
    );
};

export default Register;