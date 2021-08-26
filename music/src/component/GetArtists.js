import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_ARTISTS } from '../GraphQl/Queries';
import Card from "./Card"
import Footer from './Footer';
import Hit from "../assists/hit.png"


function GetArtists() {
    const { error, data } = useQuery(LOAD_ARTISTS);
    const [artists, setArtists] = useState([])

    useEffect(() => {
        console.log(data, error);
        if (data) {
            setArtists(data.allArtists)
        }
    }, [data, error])


    return (
        <>
            <section className="hero">
                <div className="left">
                    <span>AMP UP</span>
                    <br />
                    <span>THOSE DBS</span>
                    <br />
                    <p>MAKE MUSIC IN THE GO</p>
                    <br />
                    <img src={Hit} alt="hit" className="logo-left" />
                </div>
                <div className="right">
                    <Card artists={artists} />
                </div>
            </section>

            <section className="body">
                <span id="get-prod">GET PRODUCIN WITH MUSICDB</span>
                <br /><br />
                <p id="pick">PICK YOUR PREFERED INSTRUMENT</p>
                <br />
                <p>PICK YOUR INSTRUMENT YOU NEED TO COMPOSE YOUR PIECE</p>
                <br />
                <span id="start">START COMPOSING</span>

            </section>
            <Footer />
        </>
    )
}

export default GetArtists;

