import './App.css';
import React, {useEffect} from "react";
import {useState} from "react";

function App() {
  const[messageList, setMessageList] = useState([]);
  const[author, setAuthor] = useState("");
  const[message, setMessage] = useState("");
//comment
  let idCounter = messageList.length;

  useEffect(() => {
      if(messageList.length > 0)
      setTimeout(() => alert("Message send"), 1500)
  }, [messageList]);

  return (
    <div className="App">
        <>
            <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <br/>
            <input value={message} onChange={(e) => setMessage(e.target.value)}/>
            <br/>
            <button onClick={() => {
                setMessageList([...messageList, {
                    author: author,
                    text: message,
                    id: idCounter
                }])
            }}>Send</button>

        {messageList.map((item) =>
            <p key={item.id}>Author: {item.author}<br/>Say: {item.text}</p>
        )}

        </>
    </div>

  );

}

export default App;
