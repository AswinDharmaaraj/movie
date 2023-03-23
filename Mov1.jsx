import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const Mov1 = () => {
    var [update,setUpdate]=useState(false)
    var [SingleValue,setSingleValue]=useState([])
    var[movies,setmovies] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/Movies")
        .then(response=>{
            console.log(response.data)
            setmovies(movies=response.data)
        })
          .catch(err=>console.log(err))
    },)
    const updateValue = (value)=>{
      setSingleValue(value);
      setUpdate(true)
    }
    const deletemovies=(moviename)=>{
      console.log("delete clicked"+moviename)
      axios.delete("http://localhost:3005/Movies/"+moviename)
      .then(response=>{
        alert("deleted")
        window.location.reload(false)
      })
    }
  var finalJSX = <TableContainer>
  <Table>
      <TableHead>
          <TableRow>
              <TableCell>MovieName</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Genere</TableCell>
              <TableCell>Releaseyear</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Update</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        {movies.map((value,index)=>{
          return<TableRow>
            <TableCell>{value.Moviename}</TableCell>
            <TableCell>{value.Director}</TableCell>
            <TableCell>{value.Language}</TableCell>
            <TableCell>{value.Genere}</TableCell>
            <TableCell>{value.Releaseyear}</TableCell>
            <TableCell><Button onClick={()=>deletemovies(value.moviename)}>DELETE</Button></TableCell>
            <Button onClick={()=>updateValue(value)} color='success'>UPDATE</Button>
          </TableRow>
        })}
      </TableBody>
  </Table>
</TableContainer>
if (update)
finalJSX = <movies data={SingleValue} method="put"/>
  return (
    <div>
    <br></br> 
    <br></br>
    <br></br>
    {finalJSX}
    </div>
  )
}

export default Mov1
