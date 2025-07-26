import React,{useState,useEffect} from "react";

export default function Film(){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
}