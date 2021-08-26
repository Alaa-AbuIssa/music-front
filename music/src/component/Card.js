import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './Css/card.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
});

export default function ImgMediaCard({ artists }) {
    const classes = useStyles();

    return (

        <div className="container">
            {artists.map((val) => {
                return (
                    <div className="card" key={val.id}>
                        <Card className={classes.root}>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <CardActionArea>
                                        <div className="flip-card-front">
                                            <CardMedia className="image"
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="150"
                                                image={val.image}
                                                title="Contemplative Reptile"
                                            />
                                        </div>
                                        <div class="flip-card-back">
                                            <CardContent>
                                                <h3>
                                                    {val.artistName}
                                                </h3>
                                                <span className="title">Album : </span>{val.albumSet.map(item => {
                                                    return (
                                                        <>
                                                            <span>{item.albumName} , </span>
                                                            <br />
                                                            {item.songSet.length > 0 && <span> <span className="title">Songs : </span> {item.songSet.map(song => {
                                                                return <span>{song.songName} , </span>
                                                            })}</span>}

                                                        </>
                                                    )
                                                })}
                                            </CardContent>
                                        </div>
                                    </CardActionArea>
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </div>


    );
}

