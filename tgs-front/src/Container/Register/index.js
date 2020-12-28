
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

import { userActions } from '../../features/User/user.action';


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
class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                phoneNumeber: '',
                date: '',
                country: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;

            this.props.register(user);
    }

    render() {
        const { user} = this.state;
        return (
            <Grid item xs={12} style={{height: '100%', marginTop: '5em'}} component={Paper} elevation={6} square>
                <div  style={{
      margin: '8, 4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
                    <Divider />
                    <Avatar >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <form name="form" onSubmit={this.handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type='text'
                            id="firstname"
                            label="firstname"
                            name="firstName"
                            autoFocus
                            value={user.firstName}
                            onChange={this.handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type='text'
                            id="lastname"
                            label="lastname"
                            name="lastName"
                            autoFocus
                            value={user.lastName}
                            onChange={this.handleChange}
                            />
                            <TextField
                            id="date"
                            style={{justifySelf: 'center'}}
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name='date'
                            value={user.date}
                            onChange={this.handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            type="phone"
                            required
                            fullWidth
                            id="phone"
                            label="phone number"
                            name="phone"
                            autoFocus
                            value={user.phone} 
                            onChange={this.handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            type='email'
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            value={user.email} 
                            onChange={this.handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="country"
                            label="country"
                            name="country"
                            autoFocus
                            value={user.country} 
                            onChange={this.handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password" 
                            value={user.password} 
                            onChange={this.handleChange}
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
                            Register
                            </Button>
                            <Grid container>
                            <Grid item xs>
                                
                            </Grid>
                            <Grid item>
                                <Link to='/login'>
                                {"Allready have an account? Login"}
                                </Link>
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
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as Register };

