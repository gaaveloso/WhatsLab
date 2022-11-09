import phone from "../../assets/assets/phone.svg";
import camera from "../../assets/assets/video-cam.svg";
import hamburger from "../../assets/assets/hamburger.svg";
import { Icons, MainHeader, MainPerson } from "./HeaderStyled"
function Header(props) {


  function onChangePerson(event){
    props.setPerson(event.target.value)
  }

    return (
        <MainHeader>
        <MainPerson>
        <img src="https://picsum.photos/200/300" alt="imagem perfil" />
        <div>
          <select value={props.person} onChange={onChangePerson}>
            <option value="me">Me</option>
            <option value="cesar">César</option>
            <option value="everson">Everson</option>
            <option value="lucas">Lucas</option>
            <option value="valmir">Valmir</option>
          </select>
          <p>Online</p>
        </div>
        </MainPerson>
        <Icons>
          <a><img src={phone} alt="camera" /></a>
          <a><img src={camera} alt="camera" /></a>
          <a><img src={hamburger} alt="hamburger" /></a>
        </Icons>
      </MainHeader>
    )
}

export default Header