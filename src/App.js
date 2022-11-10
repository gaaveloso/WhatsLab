import "./App.css";
import Header from "./components/Header/Header.js";
import { Main } from "./appStyled";
import ChatBox from "./components/ChatBox/ChatBox";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("me");
  const [messages, setMessages] = useState([]);

  // console.log(person)
  // console.log(messages)

  return (
    <Main>
      <Header person={person} setPerson={setPerson} />
      <ChatBox person={person} messages={messages} setMessages={setMessages} />
      <Footer person={person} messages={messages} setMessages={setMessages} />
    </Main>
  );
}

export default App;
