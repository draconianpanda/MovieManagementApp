import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddMovies = (props) => {
    var navigate = useNavigate()
    var [inp,setInp] = useState (props.data);

    const inputHandler = (e)=>{
        const{name,value}=e.target;
        console.log(e.target)
        setInp((inp)=>({...inp,[name]:value}));
        console.log(inp)
      }
  
      const readHandler = ()=>{
        console.log("Clicked");
        if(props.method=="post"){
        axios.post("http://localhost:8000/addmovie", inp)
        .then(()=>{
          alert("Movie Added");
          navigate('/')
        })
        .catch(err=>console.log(err))
      }

      if(props.method == 'put'){
        axios.put("http://localhost:8000/editmovie/" + inp._id , inp)
        .then(()=>{
          alert("Movie Updated");
          window.location.reload(false)
        })
        .catch(err=>console.log(err))
      }
    }

  return (
    <div style={{paddingTop: '100px'}}>
        <Typography variant='h4' style={{fontFamily:'BlinkMacSystemFont', color:'#3f51b5'}}>ADD MOVIES</Typography>&nbsp;

        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><TextField  variant='outlined' label='Movie Name' name='movieName' value={inp.movieName} onChange={inputHandler}/></TableCell>
                    <TableCell><TextField  variant='outlined' label='Actor' name='actor' value={inp.actor} onChange={inputHandler}/></TableCell>
                    <TableCell><TextField  variant='outlined' label='Actress' name='actress' value={inp.actress} onChange={inputHandler}/></TableCell>
                    <TableCell><TextField  variant='outlined' label="Director" name='director' value={inp.director} onChange={inputHandler}/></TableCell>
                    <TableCell><TextField  variant='outlined' label="Released Year" name='releaseYear' value={inp.releaseYear} onChange={inputHandler}/></TableCell>
                    <TableCell><TextField  variant='outlined' label='Camera' name='camera' value={inp.camera} onChange={inputHandler}/></TableCell>
                    <TableCell><TextField  variant='outlined' label="Producer" name='producer' value={inp.producer} onChange={inputHandler}/></TableCell>
                    <TableCell><TextField  variant='outlined' label="Language" name='language' value={inp.language} onChange={inputHandler}/></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell></TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
       <Button variant="contained" onClick={readHandler}>Submit</Button>
    </div>
  )
}

export default AddMovies