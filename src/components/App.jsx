import '../css/App.css';
import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Chats} from './Chats';
import {Messages} from "./Messages";
import {Profile} from "./Profile";
import {NotFound} from "./NotFound";
import {Home} from "./Home";

export default function App() {

    return (
        <div className="App">
            <nav style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '30px',
                backgroundColor:'yellowgreen', minHeight: '60px', alignItems: 'center'}}>
                <Link to='/'>Home</Link>
                <Link to='/chats/*'>Chats</Link>
                <Link to='/messages/*'>Messages</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
<Routes>
    <Route index exact path='/' element={<Home/>}/>
    <Route path='/chats/:id' element={<Chats/>}/>
    <Route path='/messages/:id' element={<Messages/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='*' element={<NotFound/>}/>
</Routes>
        </div>
    );
}
