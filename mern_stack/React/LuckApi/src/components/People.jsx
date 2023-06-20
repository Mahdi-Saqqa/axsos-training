import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';

const People = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => { setData(response.data) })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <Typography variant="h1">{data.name}</Typography>
            <Typography variant="h4">Height:</Typography>
            <Typography variant="h6">{data.height}</Typography>
            <Typography variant="h4">Mass:</Typography>
            <Typography variant="h6">{data.mass}</Typography>
            <Typography variant="h4">Hair Color:</Typography>
            <Typography variant="h6">{data.hair_color}</Typography>
            <Typography variant="h4">Skin Color:</Typography>
            <Typography variant="h6">{data.skin_color}</Typography>
        </div>
    );
};

export default People;
