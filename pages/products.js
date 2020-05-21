import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const products = [
    {
        name: 'Product 1',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: '1500',
        img: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
    },
    {
        name: 'Product 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: '1400',
        img: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
    },
    {
        name: 'Product 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: '1600',
        img: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
    },
    {
        name: 'Product 4',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: '1700',
        img: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
    },
    {
        name: 'Product 5',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        price: '1500',
        img: 'https://cdna.artstation.com/p/assets/images/images/015/550/396/large/andreas-hoas-wennevold-img-20190127-020920-339-1.jpg?1548776001',
    }
]

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

export default () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.containerBox}>
            <Grid container spacing={2}>
                {/*<Grid item xs={12} md={6} lg={4}>*/}
                {
                    products.map((product, index)=> {
                        return (
                            <Grid key={index} item xs={12} md={6} lg={4}>
                                <Card >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={product.img}
                                            title="Contemplative Reptile"
                                        />
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
                                        <Button className={classes.cartBotton} variant="contained" color="primary">
                                            Add to bag
                                        </Button>
                                        <Button className={classes.cartBotton} variant="contained" color="primary">
                                            Add to Favorites
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    );
};
