import React, {useState} from "react";
import {Grid, Button, Card, CardContent} from "@mui/material"

export const Annimal=()=>{
    const [Animal,setAnimal]=useState("Monkey");

    return(
        <div className="ssub" >
            <h1>Annimal Home</h1>
            <Grid container spacing={3}>
             <Grid item xs={12}>
              <Card>
               <CardContent className="txt">{Animal}</CardContent>
              </Card>
             </Grid>
 <Grid item xs={4}><Button variant= "contained" fullWidth color="warning" onClick={()=>setAnimal("CAT")}> 
               CAT</Button></Grid>
 <Grid item xs={4}><Button variant= "contained" fullWidth color="warning" onClick={()=>setAnimal("TIGER")}>
               TIGER </Button></Grid>
 <Grid item xs={4}><Button variant= "contained" fullWidth color="warning" onClick={()=>setAnimal("ZEBRA")}>
                ZEBRA</Button></Grid> 
 <Grid item xs={3}><Button variant=  "contained" fullWidth color= "error" onClick= {()=>setAnimal("CUB")}>
               CUB</Button></Grid>   
 <Grid item xs={3}><Button variant="contained" fullWidth color="error" onClick={()=>setAnimal("ELEPHANT")}>
               Elephant</Button></Grid>   
 <Grid item xs={3}><Button variant="contained" fullWidth color="error" onClick={()=>setAnimal("CHETAH")}>
               CHETAH</Button></Grid>   
 <Grid item xs={3}><Button variant="contained" fullWidth color="error" onClick={()=>setAnimal("GOAT")}>
               Goat</Button></Grid> 

           </Grid>
        </div>
    )
}