import React, { Component } from 'react';

import Header from '../../components/Header';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, BackgroundImage, MessageContainer, Title, SubTitle } from './styles';

class Home extends Component {
  render() {
    console.tron.log(this.props)
    return(
      <>
        <Header history={this.props.history}/>
        <Container>
          <div style={{textAlign: 'center'}}>
            <BackgroundImage src={require('./background.jpg')}/>
          </div>
          <MessageContainer>
            <Title>A simple Reactjs base</Title>
            <SubTitle>Click here</SubTitle>
          </MessageContainer>
        </Container>
      </>
    );
  }
}


const mapStateToProps = state => ({
  repositories: state.repositories
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Home);

