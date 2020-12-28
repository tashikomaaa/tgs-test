import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userActions} from '../../features/User/user.action';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://thegoodseat.fr/">
          the good seat -test
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.props.logout();

        this.state = {
            email: '',
            phoneNumber: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value}); 
    }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, phoneNumber } = this.state;
        if (email && phoneNumber) {
            this.props.login(email, phoneNumber);
        }
    }

    render() {

        const { email, phoneNumber, submitted } = this.state;
        return (
            <Grid item style={{height: '100%', marginTop: '5em'}} component={Paper} elevation={6} >
    <div style={{
      margin: '8, 4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>

        <Divider />
        <Avatar>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        <form name="form" onSubmit={this.handleSubmit} noValidate >
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={email} 
            onChange={this.handleChange}
            >{submitted && !email &&
                <div className="help-block">email is required</div>
            }</TextField>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="phoneNumber"
            type="phoneNumber"
            id="phoneNumber"
            value={phoneNumber} 
            onChange={this.handleChange}
            className={'form-group' + (submitted && !phoneNumber ? ' has-error' : '')}
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            <Button
            type='submit'
            fullWidth
            variant="contained"
            color="primary"
            
            >
            Sign In
            </Button>
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot phoneNumber?
                </Link>
            </Grid>
            <Grid item>
            <Link to="/register" className="btn btn-link">Don't have an account? Register</Link>
            </Grid>
            </Grid>
            <Box mt={5}>
            <Copyright />
            </Box>
        </form>
    </div>
</Grid>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
