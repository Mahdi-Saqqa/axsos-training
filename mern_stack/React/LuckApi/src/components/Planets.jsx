import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';

const Planets = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => { setData(response.data) })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <Typography variant="h1">{data.name}</Typography>
            <Typography variant="h4">Climate:</Typography>
            <Typography variant="h6">{data.climate}</Typography>
            <Typography variant="h4">Terrain:</Typography>
            <Typography variant="h6">{data.terrain}</Typography>
            <Typography variant="h4">Surface Water:</Typography>
            <Typography variant="h6">{data.surface_water}</Typography>
            <Typography variant="h4">Population:</Typography>
            <Typography variant="h6">{data.population}</Typography>
        </div>
    );
};

export default Planets;
