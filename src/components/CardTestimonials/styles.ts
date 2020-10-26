import styled from 'styled-components';

export const Card = styled.div`
  background: #ffff;
  width: 645px;
  height: 330px;

  display: flex;
  padding: 6rem 7rem 5rem 7rem;

  border-radius: 2rem;

  /* margin: 0 auto; */

  border: 0.1rem solid #9c69e2;
  box-shadow: 0px 20px 0px rgba(000, 000, 000, 0.1);
  img {
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
  }

  div {
    margin-left: 3rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 900;
      color: #212353;
      margin: 0;
    }
    a {
      color: #9c69e2;
      font-weight: 500;
    }

    p {
      font-weight: 900;
      font-size: 18px;
      line-height: 180%;
      color: #4b5d68;
      margin-top: 2rem;
    }
  }
`;
