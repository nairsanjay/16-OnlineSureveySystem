import React from 'react';

import { useHistory } from "react-router-dom";


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ViewListIcon from '@material-ui/icons/ViewList';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import IconButton from '@material-ui/core/IconButton';

function Copyright() {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      
      
      This Project is created by students of DA-IICT under the guidance of Prof Saurabh Tiwari. 
      
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: theme.palette.primary.dark,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  buttons : {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttongg: {
    backgroundColor: theme.palette.success.dark
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const cards = [];

export default function LangingPage() {


  const classes = useStyles();
  let history = useHistory();

  function loginClick(){
    history.push('/login')
  }

  return (
    <div>
      <CssBaseline />
      <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
        <AppBar position="relative" style={{backgroundColor: 'black'}}>
          <Toolbar>
            
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
              Online Survey System
            </Typography>
            <Button color="inherit" onClick={loginClick}>Login</Button>
          
          </Toolbar>
        </AppBar>
      </div>

      <main style={{textAlign: 'start'}}>
        <div>
          <Container>
            <br></br>
            <br></br>
            <br></br>
          <Paper className={classes.mainFeaturedPost} >
            
            {<img style={{ display: 'none' }} src="https://image.shutterstock.com/image-illustration/abstract-futuristic-technology-polygonal-shapes-600w-1725298402.jpg" alt="gg" />}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Online Survey System
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Create, Edit, Fill form.
                  </Typography>
                  <div className={classes.buttons}>
                    <Button variant="contained" color="primary" className={classes.buttongg} onClick={loginClick}>
                      Login
                    </Button>
                  </div>
                 
              
                  
                </div>
              </Grid>
            </Grid>
          </Paper>
           <br></br>
           <br></br>
           <br></br>
           

           <div>
           <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                     
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                    
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
           </div>
          </Container>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </main>
      
      
      <footer className={classes.footer} style={{}}>
        <Typography variant="h6" align="center" gutterBottom>
          Group 16
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}
