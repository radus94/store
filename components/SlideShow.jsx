import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    media: {
        height: 250,
        [theme.breakpoints.up('md')]: {
            height: 500
        }
    },
    thumbnails: {
        opacity: 0.6,
        height: 30,
        [theme.breakpoints.up('md')]: {
            height: 50
        }
    },
    active: {
        opacity: 1
    }
}));

const SlideShow = ({
    slides = [],
    thumbnails = [],
    initialSlide = 0
}) => {
    const [activeSlide, setActiveSlide] = useState(initialSlide)
    const classes = useStyles()

    if(!slides.length || !thumbnails.length) {
        return null
    }

    return <>
        <h1>Slide SHow</h1>
        <Grid container spacing={0}>
            <Grid xs={12} item>
                <CardMedia
                    className={classes.media}
                    image={slides[activeSlide].src}
                    title={slides[activeSlide].alt}
                />
                <Button
                    onClick={() => setActiveSlide(activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1)}
                >
                    Prev
                </Button>
                <Button
                    onClick={() => setActiveSlide(activeSlide + 1 === slides.length ? 0 : activeSlide + 1)}
                >
                    Next
                </Button>
            </Grid>
            <Grid xs={12} item>
                <Typography variant="h5" gutterBottom>
                    {slides[activeSlide].alt}
                </Typography>
            </Grid>
            <Grid container spacing={0}>
                {thumbnails.map((thumbnails, index) => {
                    return (
                        <Grid xs={2} key={index} item>
                            <CardMedia
                                className={`${classes.thumbnails} ${activeSlide === index ? classes.active :''}`}
                                image={thumbnails.src}
                                title={thumbnails.alt}
                                onClick={()=>setActiveSlide(index)}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    </>
}

export default SlideShow;
