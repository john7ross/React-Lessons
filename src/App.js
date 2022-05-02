import './App.css';
import Message from './Message';

function App() {
  const myText = "Tasks from Lesson 1 complete";
  return (
    <div className="App App-header">
      <Message text = {myText} />
    </div>
  );
}

export default App;