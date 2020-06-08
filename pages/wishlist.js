import React from "react";
import { Grid, Container } from '@material-ui/core';
import {useGlobal} from '../src/context/GlobalContext'
import WishItem from '../components/wishItem'
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
            <h1><FormattedMessage id='wish.title' /></h1>
            <Grid container spacing={2}>
                {!state.wishlist.length &&
                <h2><FormattedMessage id='empty.wishlist' /></h2>
                }

                {state.wishlist.map((product, index)=> <WishItem key={index} product={product} />)}

            </Grid>
        </Container>
    );
};
