import { BsFillHeartFill } from 'react-icons/bs';
import Card from '../../components/Card';
import CardTestimonials from '../../components/CardTestimonials';
import Header from '../../components/Header';

import {
  Section,
  Container,
  ContentWrapper,
  Text,
  Button,
  Cards,
  CardsTestimonials,
  Footer,
} from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Section img="/background.svg">
        <Container>
          <main>
            <ContentWrapper style="description">
              <Text typeText="title">Save your data storage here.</Text>
              <Text typeText="description">
                Data Warehouse is a data storage area that has been tested for
                security, so you can store your data here safely but not be
                afraid of being stolen by others.
              </Text>
              <Button>Learn more</Button>
            </ContentWrapper>
          </main>
        </Container>
      </Section>
      <main>
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
      </main>
      <ContentWrapper style="cards">
        <Container>
          <h1>Features</h1>
          <p>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>

          <Cards>
            <Card color=" #f0faf8" img="/card-1.png" />
            <Card color="#F5F0FC" img="/card-2.png" />
            <Card color="#F5F0FC" img="/card-3.png" />
            <Card color=" #f0faf8" img="/card-4.png" />
          </Cards>
        </Container>
      </ContentWrapper>

      <ContentWrapper style="testimonials">
        <h1>Testimonials</h1>
        <CardsTestimonials position="left">
          <CardTestimonials />
        </CardsTestimonials>
        <CardsTestimonials position="right">
          <CardTestimonials />
        </CardsTestimonials>
        <CardsTestimonials position="left">
          <CardTestimonials />
        </CardsTestimonials>
        <CardsTestimonials position="right">
          <CardTestimonials />
        </CardsTestimonials>
        <CardsTestimonials position="left">
          <CardTestimonials />
        </CardsTestimonials>
      </ContentWrapper>

      <Footer>
        <p>
          Created by:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Matheus0liveira"
          >
            Matheus Oliveira Santos{' '}
            <BsFillHeartFill color="#9c69e2" size={24} />
          </a>
        </p>
      </Footer>
    </>
  );
}
