import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Form = () => {
    const [type, setType] = useState('people');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`);
    };

    return (
        <Container maxWidth="sm" className="mt-5">
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth>
                    <InputLabel id="search-label">Search for:</InputLabel>
                    <Select
                        labelId="search-label"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <MenuItem value="people">people</MenuItem>
                        <MenuItem value="planets">planet</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="ID"
                    fullWidth
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </Container>
    );
};

export default Form;
