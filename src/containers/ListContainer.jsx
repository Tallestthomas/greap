import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ListContext from '../contexts/ListContext.jsx';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };

  body {
    @import url('https://fonts.googleapis.com/css?family=Bitter|Work+Sans');
    font-family: 'Bitter';
  };

  h1, h2, h3 {
    font-family: 'Work Sans';
  };
`;

const Container = styled.div`
  box-shadow: 5px 5px 5px #00000050;
  max-width: 750px;
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.h1`
  text-align: center;
  padding: 1rem;
  margin: 0;
`;

class ListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      listItems: [],
    };
  }

  render() {
    return (
      <Container>
        <GlobalStyles />
        <Header>GREAP</Header>
        <ListContext.Provider value={this.state}>
          { this.props.children }
        </ListContext.Provider>
      </Container>
    );
  }
}

export default ListContainer;
