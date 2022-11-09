import { FooterMain } from "./FooterStyled";
import mic from "../../assets/assets/microphone.svg";
import smile from "../../assets/assets/smiley.svg";
import paperclip from "../../assets/assets/paperclip.svg";
import { useState } from "react";

function Footer(props) {
  const [message, setMessage] = useState("");

  const onChangeInput = (event) => {
    setMessage(event.target.value)
  };

  const onKeyDownInput = (event) => {
    if(event.key === "Enter"){
        const novaMensage = [...props.messages]

        const novaPessoaMensagem = {
          person:props.person,
          message:message
        }

        novaMensage.push(novaPessoaMensagem)
        props.setMessages(novaMensage)
        setMessage("")
    }
  }

  return (
    <FooterMain>
      <div>
        <a href="#">
          <img src={smile} alt="smile icon" />
        </a>

        <input type={"text"} value={message} onChange={onChangeInput} onKeyDown={onKeyDownInput}/>

        <a href="#">
          <img src={paperclip} alt="paperclip icon" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src={mic} alt="microfone" />
        </a>
      </div>
    </FooterMain>
  );
}

export default Footer;
