import React from "react";
import { Grid, Container } from '@material-ui/core';
import {useGlobal} from '../src/context/GlobalContext'
import CartItem from '../components/cartItem'
import {makeStyles} from "@material-ui/core/styles";
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles({
    containerBox: {
        marginTop: 15,
    }
});

export default () => {
    const classes = useStyles();
    const [state, dispatch] = useGlobal()

    return (
        <Container maxWidth="lg" className={classes.containerBox}>
            <h1><FormattedMessage id='cart.title' /></h1>
            <Grid container spacing={2}>
                {!state.cart.length &&
                <h2><FormattedMessage id='empty.cart' /></h2>
                }

                {state.cart.map((product, index)=> <CartItem key={index} product={product} />)}

            </Grid>
        </Container>
    );
};
