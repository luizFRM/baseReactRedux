import React, { Component } from 'react';

//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Container, Route } from './styles';

const routes = [
  {name: 'home', route: '/'},
  {name: 'repositories', route:'/repositories'}
];

class Header extends Component {
  redirect = route => {
    this.props.history.push(route);
  }

  render() {
    return(
      <Container>
        {routes.map(route => (
          <Route onClick={()=> this.redirect(route.route)}>{route.name}</Route>
        ))}
      </Container>
    );
  }
}



const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Header);
