import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 370px;
  align-items: center;
  position: relative;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    button{
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;

      &:hover {
        img, button{
          opacity: unset;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 80vw;
  }

`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  align-items: center;
  font-size: 18px;
`;

