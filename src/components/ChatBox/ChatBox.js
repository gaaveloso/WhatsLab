import { MainChatBox, Message } from "./ChatBoxStyled";
import tickGreen from "../../assets/assets/tick-green-double.svg"

function ChatBox(props) {
  const mostraMensagem = props.messages.map((message, index) => {
    return (
      <Message key={index} person={message.person}>
        <h1>{message.person}</h1>
        <div>
          <p>{message.message}</p>
          <div>
            <img src={tickGreen} />
          </div>
        </div>
      </Message>
    );
  });
  return <MainChatBox>{mostraMensagem}</MainChatBox>;
}

export default ChatBox;
