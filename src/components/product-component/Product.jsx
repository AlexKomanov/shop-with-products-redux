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
import { Link } from "react-router-dom";

const Product = () => {

    const useStyles = makeStyles((theme) =>({
        root: {
          maxWidth: 345,   
          width: 345,   
          height: 400,
        },
        margin: {
            margin: theme.spacing(1),
          },
          attachMoneyIcon: {
            marginRight: theme.spacing(1),
          },
      }));
      
      const classes = useStyles();
   
    const products = useSelector((state) => state.allProducts.products);
    const productsList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
           
            <Card className="product-card" key={id}>
               
            <CardActionArea>
            <Link to={`/product/${id}`}>
              <CardMedia className="card-image"
                component="img"
                alt={title}
                image={image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                 {category}
                </Typography>
              </CardContent>
              </Link>
            </CardActionArea>
            <CardActions className="card-bottom">
              <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
              <AddIcon className={classes.extendedIcon} /> Add To Basket
                  </Fab>
                  <Button size="large" className={classes.margin}>
            <h3>{price} $ </h3>
          </Button>
            </CardActions>
           
          </Card>
          
        );
    });
    
    
    

      return (
          <div className="products-list">
   {productsList}
   </div>
      );
}

export default Product;