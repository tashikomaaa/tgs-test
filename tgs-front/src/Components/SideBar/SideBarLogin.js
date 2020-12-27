import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SideBarSearch from './SideBarSearch';
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
  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      height: '100%'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function SideBarLogin() {
    const classes = useStyles();
    const [login, setLogin] = React.useState(false)
    const [logged, setLogged] = React.useState(false)
    const [formData, setFormData] = React.useState(
      {
        email: '',
        firstname: '',
        lastname: '',
        date: '',
        phone: '',
        country: '',
        password: ''
      }
    );
    console.log(formData)
    const handleChange = (e) => {
      e.preventDefault()
      console.log(e.currentTarget.name)
      const name = e.target.id;
      const value = e.currentTarget.value;
      console.log('name', name, 'value', value)
      setFormData({...formData,
        [name]: value
      })
      console.log(formData)
    };
    const handleSubmit = () => {
      setLogged(!logged)
    }
    const handleClick = () => {
      setLogin(!login)
    }
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            The Good Seat - test
          </Typography>
          <Divider />
          {!logged ?          <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      {
        login ? (
          <>
            <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={(e) => {e.preventDefault(); handleSubmit()}}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link  onClick={handleClick}  variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          </>
          ) : ( <>
            <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type='text'
              id="firstname"
              label="firstname"
              name="firstname"
              autoFocus
              onChange={(e) => handleChange(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type='text'
              id="lastname"
              label="lastname"
              name="lastname"
              autoFocus
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={(e) => {e.preventDefault(); handleSubmit()}}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link onClick={handleClick} variant="body2">
                  {"Allready have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          </>)
      }
     </>
     : <SideBarSearch />}
 </div>
  </Grid>

  );
}
