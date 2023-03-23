import { Button, Typography, TextField, } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Movie = (props) => {
    var [movies, setmovies] = useState(props.data)
    console.log("add page props" + props.data)
    const handlechange = (e) => {
        const { name, value } = e.target
        setmovies({ ...movies, [name]: value })
        console.log(movies)
    }
    const saveData = () => {
        console.log("button clicked")
        if (props.method === "post") {
            axios.post("http://localhost:3005/Movies", movies)
                .then(response => {
                    alert("Succesfully Added")
                })
                .catch(error => {
                    alert("Failed")
                })

        } else if (props.method === "put") {
            axios.put("http://localhost:3005/Movies/" + movies.id, movies)
                .then((response) => {
                    console.log("put data" + response.data)
                    alert("Success")
                    window.location.reload(false);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <div>
            <br></br>

            <br></br>

            <br></br>
            <Typography varient='h2'>Add Movies</Typography>
            <TextField label='moviename' varient='outlined' name='moviename' value={movies.moviename} onChange={handlechange} /><br></br><br></br>
            <TextField label='director' varient='outlined' name="director" value={movies.director} onChange={handlechange} /><br></br><br></br>
            <TextField label='language' varient='outlined' name="language" value={movies.language} onChange={handlechange} /><br></br><br></br>
            <TextField label='genere' varient='outlined' name="genere" value={movies.genere} onChange={handlechange} /><br></br><br></br>
            <TextField label='Releaseyear' varient='outlined' name="Releaseyear" value={movies.releaseyear} onChange={handlechange} /><br></br><br></br>
            <Button varient='contained' color='secondary' onClick={saveData}>SUBMIT</Button>

        </div>
    )

}
export default Movie
