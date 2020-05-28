import React from "react";
import { Grid, Container } from '@material-ui/core';
import {useGlobal} from '../../src/context/GlobalContext'
import ProductItem from '../../components/productItem'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    containerBox: {
        marginTop: 15,
    }
});

export default () => {
    const classes = useStyles();
    const [state, dispatch] = useGlobal();

    return (
        <Container maxWidth="lg" className={classes.containerBox}>
            <h1>Products</h1>
            <Grid container spacing={2}>
                {state.products.map((product, index)=> <ProductItem key={index} product={product}/>)}
            </Grid>
        </Container>
    );
};
