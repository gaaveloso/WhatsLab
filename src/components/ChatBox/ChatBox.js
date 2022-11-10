import { MainChatBox, Message } from "./ChatBoxStyled";
import tickGreen from "../../assets/assets/tick-green-double.svg";

function ChatBox(props) {
  const deletaMensagem = (idDaMensagem) => {
    const confirmar = window.confirm("Deseja deletar a mensagem?")
    if(confirmar){
    const apagarMensagem = props.messages.filter((mensagem) => {
      if (mensagem.idAutor !== idDaMensagem) {
        return mensagem;
      }
    });
    props.setMessages(apagarMensagem);
  }};
  console.log();
  const mostraMensagem = props.messages.map((message, index) => {
    return (
      <Message
        key={index}
        person={message.person}
        onDoubleClick={() => deletaMensagem(message.idAutor)}
      >
        <h1>{message.person}</h1>
        <div>
          <p>{message.message}</p>
          <div>
            <img src={tickGreen} />
          </div>
          <p>{message.horario}</p>
        </div>
      </Message>
    );
  });
  return <MainChatBox>{mostraMensagem}</MainChatBox>;
}

export default ChatBox;
