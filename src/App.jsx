/* eslint-disable no-unused-vars */
import './App.css'
import { useState, useEffect } from 'react'
import { createConnection } from "./Chat.js"

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [serverURL, setServerURL] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId, serverURL]);

  return (
    <>
    <label>
      Server URL:{' '}
      <input
      value={serverURL}
      onChange={e => setServerURL(e.target.value)}/>
    </label>
    <h1>Welcome to the {roomId} room!</h1>
    </>
  )
}

function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room: {' '}
        <select
        value={roomId}
        onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
        <button onClick={() => setShow(!show)}>
          {show ? 'Close chat' : 'Open chat'}
        </button>
        {show && <hr />}
        {show && <ChatRoom roomId={roomId} />}
      </label>
    </>
  )
}

export default App
