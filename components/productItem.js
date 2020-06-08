import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    CardActions,
    CardContent,
    CardMedia,
    Card,
    CardActionArea,
    Button,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useGlobal} from '../src/context/GlobalContext';
import wishlist from "../pages/wishlist";
import Link from '../src/Link'
import { FormattedMessage } from 'react-intl';


const useStyles = makeStyles({
    containerBox: {
        marginTop: 15,
    },
    media: {
        height: 160,
    },
    cartBotton: {
        width: '50%',
        background: "black",
    },
    price: {
        color: "orange",
        textAlign: "center"
    }
});

export default function ProductItem({product}) {
    const classes = useStyles();
    const [ {state,cart, wishlist}, dispatch ] = useGlobal();
    const existBagProduct = cart.some(e => e.id === product.id)
    const existWishProduct = wishlist.some(e => e.id === product.id)
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card >
                <CardActionArea>
                    <Link href="/products/[product]" as={`/products/${product.id}`}>
                        <CardMedia
                            className={classes.media}
                            image={product.img}
                            title="Contemplative Reptile"
                        />
                    </Link>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.description}
                        </Typography>
                        <Typography className={classes.price} variant="body2" color="textSecondary" component="p">
                            {product.price} $
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        className={classes.cartBotton}
                        style = {!existBagProduct ? {} : {display:"none"}}
                        variant="contained"
                        color="primary"
                        onClick={ (evt) => {
                            if (evt) {
                                evt.preventDefault();
                            }

                            dispatch({
                                type: 'ADD_TO_BAG',
                                payload: {
                                    id: product.id,
                                    qty: 1
                                }
                            });
                        }}
                    >
                        <FormattedMessage id='btn.add.bag' />
                    </Button>
                    <Button
                        className={classes.cartBotton}
                        style = {!existBagProduct ? {display:"none"} : {}}
                        variant="contained"
                        color="primary"
                        onClick={ (evt) => {
                            if (evt) {
                                evt.preventDefault();
                            }

                            dispatch({
                                type: 'REMOVE_FROM_BAG',
                                payload: {
                                    id: product.id,
                                    qty: 1
                                }
                            });
                        }}
                    >
                        <FormattedMessage id='btn.remove.bag' />
                    </Button>
                    <Button
                        className={classes.cartBotton}
                        style = {!existWishProduct ? {} : {display:"none"}}
                        variant="contained"
                        color="primary"
                        onClick={ (evt) => {
                            if (evt) {
                                evt.preventDefault();
                            }
                            dispatch({
                                type: 'ADD_TO_WISH',
                                payload: {
                                    id: product.id,
                                    qty: 1
                                }
                            });
                        }}
                    >
                        <FormattedMessage id='btn.add.wish' />
                    </Button>
                    <Button
                        className={classes.cartBotton}
                        style = {!existWishProduct ? {display:"none"} : {}}
                        variant="contained"
                        color="primary"
                        onClick={ (evt) => {
                            if (evt) {
                                evt.preventDefault();
                            }
                            dispatch({
                                type: 'REMOVE_FROM_WISH',
                                payload: {
                                    id: product.id,
                                    qty: 1
                                }
                            });
                        }}
                    >
                        <FormattedMessage id='btn.remove.wish' />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
