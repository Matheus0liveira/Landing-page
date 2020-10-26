import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 0 2%;
  margin: 0 auto;
`;
export const StyledHeader = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;

  img {
    width: 4.9rem;
  }
`;

export const ContentWrapper = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  font-size: 1.6rem;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;

export const Button = styled.button`
  background: #ffffff;
  color: #212353;
  font-weight: 600;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  border-radius: 5rem;
  padding: 1.7rem 2.9rem;
  border: 0;

  display: flex;
  align-items: center;
  gap: 2rem;

  cursor: pointer;
  transition: box-shadow, transform 0.2s ease;

  &:hover {
    box-shadow: 0px 10px 10px rgba(75, 93, 104, 0.1);
    transform: scale(1.02);
  }
`;
