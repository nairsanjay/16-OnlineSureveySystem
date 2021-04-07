import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import logo from './pic1.jpeg'

const useStyles = makeStyles((theme)=>
    ({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
          },
      })
);


export default function OneForm(props) {
    const classes = useStyles();

    const [form, setForm] = React.useState({})


    React.useEffect(()=>{
        
        setForm(props.formData)
    }, [props.formData])

    return (
       
              <Grid item  xs={12} sm={6} md={3}>
                    <Card className={classes.root}>
                        <CardActionArea href={"/s/"+form._id}>
                            <CardMedia
                            className={classes.media}
                            image={logo}
                            title="Click to fill form"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                               {form.name,console.log(form)}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               {form.description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                           Opened:  <Moment fromNow>{form.updatedAt}</Moment>
                            </Typography>
                            
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions> */}
                    </Card>
                </Grid>            
        
    )
}
