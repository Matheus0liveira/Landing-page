import styled, { css } from 'styled-components';

interface PropsSection {
  img: string;
}
interface PropsContentWrapper {
  style: 'description' | 'card' | 'cards' | 'testimonials';
}
interface PropsText {
  typeText: 'title' | 'description';
}

interface PropsCardsTestimonials {
  position: string;
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
      overflow: hidden;
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

    ${(props) =>
    props.style === 'cards' &&
    css`
      text-align: center;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;

      margin-top: 15rem;

      h1 {
        font-size: 4rem;
        color: #212353;
      }

      p {
        font-size: 1.8rem;
        width: 50%;
        margin: 5rem auto 0 auto;
      }
    `}
    ${(props) =>
    props.style === 'testimonials' &&
    css`
      width: 68%;
      max-width: 1248px;
      margin: 0 auto;
      background: #9c69e2;
      /* height: 709px; */

      margin-top: 15rem;
      border-radius: 5rem;

      padding: 9rem;

      h1 {
        color: #ffff;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 8.8rem;
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

export const Cards = styled.div`
  width: 100%;
  max-width: 1248px;
  /* padding: 0 2%; */
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  gap: 10%;
  margin-top: 7rem;
`;

export const CardsTestimonials = styled.div<PropsCardsTestimonials>`
  display: flex;

  margin: 5rem 0;

  ${(props) =>
    props.position === 'left' &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.position === 'right' &&
    css`
      justify-content: flex-end;
    `}

  gap: 10rem;
  /* position: absolute; */
  /* margin-right: 20rem; */
`;
