import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import io from "socket.io-client";
import nanoid from "nanoid";

const socket = io.connect("http://localhost:5000");
function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const sendChat=(e)=>{
    e.preventDefault();
    // e.emit("chat",{message,user:"saqib"});
    socket.emit("chat",{message});
    console.log({ message });
    setMessage('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Socket Io app</h1>
        <form onSubmit={sendChat}>
          <div className="mb-3">
            <input
              type="text"
              name="chat"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Send Text"
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary btn-lg">
              Send
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
