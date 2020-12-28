import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';


import GoogleMap from '../../Components/GoogleMap'
import Search from '../../Components/Search'
class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id)
  }

  position () {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }))
    console.log(this.state.latitude, this.state.longitude)
  }
  render() {
  
    return (
      <Grid container component="main">
        <CssBaseline />
        <Grid container>
        <Grid item xs={8}  >
          <GoogleMap />
        </Grid>
        <Grid item xs={4}  >
          <Search />
        </Grid>
        </Grid>
      </Grid>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const connectedHomePage = connect(mapState)(Home);
export { connectedHomePage as Home };
