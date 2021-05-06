import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Tab,Tabs } from '@material-ui/core';
import SignIn from './SignIn';
import SignUp from './SignUp';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const LoginContainer = () => {
    const [value, setvalue] = useState(0);
    const handleChange = (event, newValue) =>{
        setvalue(newValue);
    }
    return (
        <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              variant='fullWidth'
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <SignIn />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp />
            </TabPanel>
        </Paper>
    )
}

export default LoginContainer
