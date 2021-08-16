import { useSelector } from "react-redux";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';

const Product = () => {
   
    const products = useSelector((state) => state.allProducts.products);
    const { id, title } = products[0];

    const useStyles = makeStyles((theme) =>({
        root: {
          maxWidth: 345,
          
        },
        margin: {
            margin: theme.spacing(1),
          },
          attachMoneyIcon: {
            marginRight: theme.spacing(1),
          },
      }));
      
      const classes = useStyles();

      return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={title}
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
            <AddIcon className={classes.extendedIcon} /> Add To Basket
                </Fab>
                <Button size="large" className={classes.margin}>
          Price: 200 $
        </Button>
          </CardActions>
        </Card>
      );
}

export default Product;