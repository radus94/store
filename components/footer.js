import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    footer: {
        left: 0,
        bottom: 0,
        width: "100%",
        background: "black",
        color: "white",
        marginTop: "15px",
        padding: "15px 0 10px 0",
    },
    socialIcon: {
        padding: "0 10px",
        color: "#a6a7a5"
    },
    'socialIcon:nth-child(3)': {
        paddingRight: "0"
    },
    hr: {
        background: "#a6a7a5",
        height: 1,
        width: "30%",
        margin: "0 auto"
    },
    copyRight: {
        marginTop: "3px",
        display: "block",
        color: "#a6a7a5",
        margin: "0 auto",
        textAlign: "center",
        fontSize: "10px"
    }
});

export default () => {

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <Container maxWidth="lg" className={classes.containerBox}>
                <Box display="flex" justifyContent="center">
                    <Link to="#" className={classes.socialIcon}>
                        <InstagramIcon />
                    </Link>
                    <Link to="#" className={classes.socialIcon}>
                        <FacebookIcon />
                    </Link>
                    <Link to="#" className={classes.socialIcon}>
                        <TwitterIcon />
                    </Link>
                    <Link to="#" className={classes.socialIcon}>
                        <LinkedInIcon />
                    </Link>
                </Box>
                <hr className={classes.hr} />
                <span className={classes.copyRight}>Copyright&copy;2020 Chisinau</span>
            </Container>
        </div>
    )
}
