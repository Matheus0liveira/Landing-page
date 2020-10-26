import Header from '../../components/Header';

import { Section, Container, ContentWrapper, Text, Button } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Section img="/background.svg">
        <Container>
          <ContentWrapper>
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
    </>
  );
}
