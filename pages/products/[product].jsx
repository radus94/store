import React from "react";
import { Grid, Container } from '@material-ui/core';
import {useGlobal} from '../../src/context/GlobalContext'
import ProductItem from '../../components/productItem'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabPanel from '../../components/TabPanel'

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
}));

export default () => {
    const classes = useStyles();
    // const [state, dispatch] = useGlobal();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="lg" className={classes.containerBox}>
            <h1>Product page</h1>
            <Grid container spacing={2}>
                <Grid xs={12} md={6} item>
                    Image
                </Grid>
                <Grid xs={12} md={6} item>
                    Data
                </Grid>
                <Grid item xs={12}>
                    Tabs
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        // variant="scrollable"
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
    );
};
