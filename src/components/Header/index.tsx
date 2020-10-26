import {
  StyledHeader,
  Container,
  ContentWrapper,
  NavBar,
  Button,
} from './styled';

import Link from 'next/link';

import { BsArrowRight } from 'react-icons/bs';
const Header = () => (
  <StyledHeader>
    <Container>
      <ContentWrapper>
        <img src="/Logo.svg" alt="Logo" />
        <NavBar>
          <ul>
            <li>
              <Link href="">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Help</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Feature</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Signup</a>
              </Link>
            </li>
          </ul>
        </NavBar>
        <div></div>
        <div></div>
        <div>
          <Button>
            Request Demo <BsArrowRight size={23} color="#9C69E2" />
          </Button>
        </div>
      </ContentWrapper>
    </Container>
  </StyledHeader>
);

export default Header;
