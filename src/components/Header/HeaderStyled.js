import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
export const MainPerson = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-evenly;

  img {
    padding: 5px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    }
  
  div{
    width: 100px;
  }
`;
export const Icons = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }

  :active {
    filter: brightness(0.95);
  }
`;
