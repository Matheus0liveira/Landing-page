import styled, { css } from 'styled-components';

interface PropsSection {
  img: string;
}
interface PropsContentWrapper {
  style: 'description' | 'card';
}
interface PropsText {
  typeText: 'title' | 'description';
}

export const Section = styled.section<PropsSection>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 86rem 46rem;
  background-position: bottom right 25%;

  height: 66rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 0 2%;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div<PropsContentWrapper>`
  ${(props) =>
    props.style === 'description' &&
    css`
      width: 45%;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 5rem;
    `}

  ${(props) =>
    props.style === 'card' &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(240, 99, 184, 0.15);
      margin: 0 auto;

      width: 100%;
      border: 0;
      border-radius: 5rem;
      padding-right: 8rem;

      margin-top: 10rem;

      div {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 3.8rem;

        h1 {
          color: #212353;
          font-size: 4rem;
          font-weight: 400;
        }
        p {
          color: #4b5d68;
          width: 88%;
        }
      }

      img {
        width: 50%;
        height: 50.04rem;
      }
    `}
`;

export const Text = styled.h1<PropsText>`
  ${(props) =>
    props.typeText === 'title' &&
    css`
      font-size: 6.8rem;
      color: #212353;
    `}

  ${(props) =>
    props.typeText === 'description' &&
    css`
      font-size: 1.8rem;
      font-weight: normal;
      color: #4b5d68;
      width: 80%;
    `}
`;

export const Button = styled.button`
  background: #9c69e2;
  color: #fff;
  border: 0;
  border-radius: 5rem;

  width: 17rem;
  height: 6rem;

  font-weight: bold;

  cursor: pointer;
  transition: 0.2s ease;

  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);

  &:hover {
    box-shadow: 0px 10px 10px rgba(75, 93, 104, 0.1);
    transform: scale(1.02);
  }
`;

export const Main = styled.main``;
