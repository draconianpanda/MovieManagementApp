import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddMovies from './AddMovies';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const ViewMovies = () => {
  var [movies, setMovies] = useState([]);
  var [update, setUpdate] = useState(false)
  var [singleValue, setSingleValue] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/viewmovie")
    .then((response)=>{
        setMovies(response.data)
    })
  },[])

  var deleteValues = (id) =>{
    console.log(id);
    axios.delete("http://localhost:8000/deletemovie/" + id)
    .then (() => {
      alert("Movie Deleted")
      window.location.reload(false)
    })
    .catch(err=>console.log(err))
  }

  var updateValues = (value) =>{
    console.log(value);
    setUpdate(true);
    setSingleValue(value)
    
  }

  var finalJSX = (
    <div style={{paddingTop:'100px'}}>
        <Typography variant='h4' style={{fontFamily:'BlinkMacSystemFont', color:'#3f51b5'}}>MOVIES</Typography>&nbsp;
  <TableContainer>
  <Table style={{margin:'auto'}}>
    <TableHead>
      <TableRow>
        <TableCell style={{fontSize:'10px'}}>Movie Name</TableCell>
        <TableCell>Actor</TableCell>
        <TableCell >Actress</TableCell>
        <TableCell >Director</TableCell>
        <TableCell >Released Year</TableCell>
        <TableCell >Camera</TableCell>
        <TableCell>Producer</TableCell>
        <TableCell >Language</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {movies.map((val,i)=>{
        return(
          <TableRow key={i}>
            <TableCell>{val.movieName}</TableCell>
            <TableCell>{val.actor}</TableCell>
            <TableCell>{val.actress}</TableCell>
            <TableCell>{val.director}</TableCell>
            <TableCell>{val.releaseYear}</TableCell>
            <TableCell>{val.camera}</TableCell>
            <TableCell>{val.producer}</TableCell>
            <TableCell>{val.language}</TableCell>
            <TableCell>
              <Button onClick={()=>deleteValues(val._id)}><DeleteForeverIcon/></Button>
            </TableCell>
            <TableCell>
              <Button onClick={()=>updateValues(val)}><EditIcon/></Button>
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  </Table>
</TableContainer>
</div>
  );
  if (update) finalJSX = <AddMovies data={singleValue} method ='put'/>
  return finalJSX;
};

export default ViewMovies