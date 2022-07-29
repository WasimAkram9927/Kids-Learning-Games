import React, {useState} from "react";
import {Tabs, Tab} from "@mui/material"
import { Annimal } from "./Animal";
import { Fruits } from "../Components/Fruits";
import { Article } from "./Article";
import { AnimalPic } from "./AnimalPic";
import { ArticleGallary } from "./ArticleGallary";
import { FruitsGallery } from "./FruitsGallery";

 export const Home=()=>{
    const[val,setVal]=useState("animal")
    return(
        <div className="sub">
            <h1>Home</h1>
            <Tabs value={val} onChange={(e,value)=>setVal(value)}>
                <Tab label="Animal" value="animal"  />
                <Tab label= "Animal Gallary" value="animalpic" />
                <Tab label="Fruits" value="fruits" />
                <Tab label="Fruits Gallery" value="fruitsgallary" />
                <Tab label= "Article" value="article" />
                <Tab label="Articles Gallery" value="articlegallary" />
            </Tabs>

             {val=== "animal" && <Annimal/>}
             {val=== "animalpic" && <AnimalPic/>}
             {val=== "fruits" && <Fruits/>}
             {val=== "fruitsgallary" && <FruitsGallery/>}
             {val==="article" && <Article/>}
             {val=== "articlegallary" && <ArticleGallary/>}
             

        </div>
    )
 }