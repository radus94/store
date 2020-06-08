import React, {useState} from "react";
import {Grid, Container, Button} from '@material-ui/core';
import {useGlobal} from '../../src/context/GlobalContext'
import ProductItem from '../../components/productItem'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabPanel from '../../components/TabPanel'
import {withRouter} from "next/router";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import StarIcon from '@material-ui/icons/Star';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { flexbox } from '@material-ui/system'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SlideShow from '../../components/SlideShow';
import { FormattedMessage } from 'react-intl';



function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    ratingsList: {
        display: "flex",
        paddingLeft: "0"
    },
    ratingsItem: {
        listStyle: "none"
    },
    media: {
        height: "60vh",
    },
    paramTitle: {
      fontWeight: "bold"
    },
    qty: {
        width: "100%",
        textAlign: "center",
        padding: "4px 0",
        border: "1px solid black",
        borderRadius: "2px"
    },
    cartBotton: {
        background: "black",
    },
    parameter: {
        marginTop: "10px"
    }

}));

const ProductPage = (props) => {
    const classes = useStyles();
    const [{products, cart}, dispatch] = useGlobal();
    const product = products.find(item => item.id === props.router.query.product)
    const [value, setValue] = React.useState(0);
    const productQty = product.qty;
    const [qty, setQty] = useState(productQty);
    const existBagProduct = cart.some(e => e.id === product.id);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        product ?
        <Container maxWidth="lg" className={classes.containerBox}>
            <h1>Product page</h1>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} item>
                    <SlideShow slides={product.slideImg} thumbnails={product.slideImg}/>
                </Grid>
                <Grid xs={12} md={6} item>
                    <h2>{product.name}</h2>
                    <p>Auto</p>
                    <ul className={classes.ratingsList}>
                        <li className={classes.ratingsItem}>
                            <StarIcon/>
                        </li>
                        <li className={classes.ratingsItem}>
                            <StarIcon/>
                        </li>
                        <li className={classes.ratingsItem}>
                            <StarIcon/>
                        </li>
                        <li className={classes.ratingsItem}>
                            <StarIcon/>
                        </li>
                        <li className={classes.ratingsItem}>
                            <StarIcon/>
                        </li>
                    </ul>
                    <p><span><strong>{product.price} $</strong></span></p>
                    <p>{product.description}</p>
                    <div >
                        <Grid container spacing={1}>
                            <Grid className={classes.paramTitle} item lg={3} md={4} sm={4} xs={6}>
                                Model
                            </Grid>
                            <Grid item lg={9} md={8} sm={8} xs={6}>
                                {product.parameter[0]}
                            </Grid>
                            <Grid className={classes.paramTitle} item lg={3} md={4} sm={4} xs={6}>
                                Color
                            </Grid>
                            <Grid item lg={9} md={8} sm={8} xs={6}>
                                {product.parameter[1]}
                            </Grid>
                            <Grid className={classes.paramTitle} item lg={3} md={4} sm={4} xs={6}>
                                Delivery
                            </Grid>
                            <Grid item lg={9} md={8} sm={8} xs={6}>
                                {product.parameter[2]}
                            </Grid>
                        </Grid>
                        <hr className={classes.marginTop} />
                        <Grid container spacing={1}>
                            <Grid item lg={3} md={4} sm={4} xs={6}>
                                Quantity
                            </Grid>
                            <Grid item lg={3} md={4} sm={4} xs={6}>
                                Size
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item lg={3} md={4} sm={4} xs={6}>
                                <Box display="flex" >
                                    <Box
                                        className={classes.qty}
                                        onClick={(evt) => setQty(qty - 1)}
                                    >
                                        -
                                    </Box>
                                    <Box className={classes.qty}>{qty}</Box>
                                    <Box
                                        className={classes.qty}
                                        onClick={(evt) => setQty(qty + 1)}
                                        >
                                        +
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={9} md={8} sm={8} xs={6}>
                                <RadioGroup row>
                                    <FormControlLabel value="small" control={<Radio color="primary" size="small"/>} label="Small" />
                                    <FormControlLabel value="medium" control={<Radio color="primary" size="small"/>} label="Medium" />
                                    <FormControlLabel value="large" control={<Radio color="primary" size="small"/>} label="Large" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignContent="center">
                            <Grid item lg={3} md={4} sm={3} xs={12}>
                                <Button
                                    className={classes.cartBotton}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    <FormattedMessage id='btn.buy.now' />
                                </Button>
                            </Grid>
                            <Grid item lg={5} md={5} sm={4} xs={12}>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    style = {!existBagProduct ? {} : {display:"none"}}
                                    onClick={ (evt) => {
                                        if (evt) {
                                            evt.preventDefault();
                                        }
                                        dispatch({
                                            type: 'ADD_TO_BAG',
                                            payload: {
                                                id: product.id,
                                                qty: qty
                                            }
                                        });
                                    }}
                                >
                                    <ShoppingCartIcon fontSize="small"/> 
                                    <FormattedMessage id='btn.add.bag' />
                                </Button>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    style = {!existBagProduct ? {display:"none"} : {}}
                                    onClick={ (evt) => {
                                        if (evt) {
                                            evt.preventDefault();
                                        }
                                        dispatch({
                                            type: 'REMOVE_FROM_BAG',
                                            payload: {
                                                id: product.id,
                                                qty: qty
                                            }
                                        });
                                    }}
                                >
                                    <FormattedMessage id='btn.remove.bag' />
                                </Button>
                            </Grid>
                        </Grid>
                    </div>

                </Grid>
                <Grid item xs={12}>
                    Tabs
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        variant="fullWidth"
                        centered
                    >
                        <Tab label="Description" {...a11yProps(0)} />
                        <Tab label="Information" {...a11yProps(1)} />
                        <Tab label="Reviews" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>Description</TabPanel>
                    <TabPanel value={value} index={1}>Information</TabPanel>
                    <TabPanel value={value} index={2}>Reviews</TabPanel>
                </Grid>
                <Grid item xs={12}>
                    Related
                </Grid>
            </Grid>
        </Container>
        : <CircularProgress />
    );
};

export default withRouter(ProductPage)
