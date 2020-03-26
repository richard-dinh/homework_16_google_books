import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    display: 'inline-block'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

const BookCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        //BOOK TITLE HERE
        title={props.title}
        //BOOK AUTHOR HERE
        subheader={props.authors}
      />
      <CardMedia
        className={classes.media}
        // BOOK IMAGE HERE
        image={props.image}
        title={props.title}
      />
      <CardContent>
        {/* BOOK PLOT HERE */}
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions
        className={classes.action}
      >
        <Button 
          onClick = {props.onClickAction}
        >
        {props.action}</Button>
      </CardActions>
    </Card>
  )
}

export default BookCard