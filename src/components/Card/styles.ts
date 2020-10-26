import styled from 'styled-components';

interface PropsStyledCard {
  color: string;
}

export const StyledCard = styled.div<PropsStyledCard>`
  position: relative;
  background: ${(props) => props.color};
  height: 35.8rem;
  width: 40.8%;
  margin: 0;
  margin-top: 5rem;

  border-radius: 5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 232px;
    height: 211px;

    position: absolute;

    left: -10rem;
  }

  div {
    text-align: left;
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-right: 5rem;
    h1 {
      font-size: 2.4rem;
      font-weight: 600;
    }

    p {
      width: 100%;
      margin: 0;
      color: #4b5d68;
      font-weight: 900;
      font-size: 1.6rem;
    }

    button {
      border: 0;
      background: none;
      padding: 1rem;
      border-radius: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.3rem;
      color: #212353;
      font-weight: bold;

      cursor: pointer;

      transition: 0.2s ease;

      &:hover {
        background: #fff;
        box-shadow: 0px 10px 10px rgba(75, 93, 104, 0.1);
        transform: scale(1.02);
      }
    }
  }
`;
