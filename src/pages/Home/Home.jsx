import React from 'react';
import { Container, Text, Title, LinkSection, ContainerFooter, LinkItem, TextFooter } from './Home.styled';


const Home = () => {
  return (
    <Container>
      <>
      <Container>
        <Title>Welcome!</Title>
        <Text>
          Please, <LinkSection to="/register">Sign Up</LinkSection> or{' '}
          <LinkSection to="/login">Log in</LinkSection>  to have access to the Phonebook.
        </Text>
      </Container>
      <footer>
        <ContainerFooter>
          <TextFooter>
            Copyright ©{' '}
            <LinkItem href="https://github.com/dariaaferreira">
              Created by Daria Tkachenko
            </LinkItem>{' '}
            2023.
          </TextFooter>
        </ContainerFooter>
      </footer>
    </>
      
    </Container>
  );
};

export default Home;