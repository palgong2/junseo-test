import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("백엔드 연결 실패");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>React + Node.js 테스트</h1>

      <button onClick={callBackend}>백엔드 호출하기</button>

      <p>{message}</p>
    </div>
  );
}

export default App;
