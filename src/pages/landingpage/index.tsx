import Header from '../../components/Header';

import {
  Section,
  Container,
  ContentWrapper,
  Text,
  Button,
  Main,
} from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Section img="/background.svg">
        <Container>
          <ContentWrapper style="description">
            <Text typeText="title">Save your data storage here.</Text>
            <Text typeText="description">
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </Text>
            <Button>Learn more</Button>
          </ContentWrapper>
        </Container>
      </Section>
      <Main>
        <Container>
          <ContentWrapper style="card">
            <img src="/image-card.svg" alt="" />
            <div>
              <h1>We are a high-level data storage bank</h1>
              <p>
                The place to store various data that you can access at any time
                through the internet and where you can carry it. This very
                flexible storage area has a high level of security. To enter
                into your own data you must enter the password that you created
                when you registered in this Data Warehouse.{' '}
              </p>
            </div>
          </ContentWrapper>
        </Container>
      </Main>
    </>
  );
}
