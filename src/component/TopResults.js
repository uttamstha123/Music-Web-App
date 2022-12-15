import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MusicCard from "./MusicCard";

const TopResults = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function fetchSong() {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
            params: { id: '40008598', locale: 'en-US' },
            headers: {
                'X-RapidAPI-Key': '8c46f68342msh5c466a395fdd3adp1664c5jsna3dd5eeb81c9',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        axios.request(options).then(response => {
            return response.data;
        }).then(data => {
            setSongs(data.tracks);
            console.log(data);
            setLoading(false);
        }).catch(error => {
            console.error(error)
            setError(error);
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchSong();
    }, []);
    return (
        <>
            {
                isLoading ? <p className="text-center">Loading...</p> : <><div className="ms-4 mt-4 d-flex align-items-center">
                    <h6 className="fw-400 text-secondary text-uppercase m-0 me-4">Top Tracks </h6>
                    <div className="bg-secondary w-50" style={{ height: "1px" }}></div>
                </div>
                    <div className="d-flex flex-wrap px-4 ">
                        {songs && <MusicCard songs={songs} />}
                    </div>
                </>
            }
        </>
    )
}

export default TopResults