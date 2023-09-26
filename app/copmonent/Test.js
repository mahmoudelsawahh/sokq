"use client"
import React, { useEffect, useState } from 'react'

const Test = () => {
  const [data , setData] = useState();
   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((item) => {
     return setData(item)
    })
   },[])
  return (
    <>
       {data ? 
        data.map((ele)=>{
          return (
            <h1 key={ele.id}>{ele.title}</h1>
          )
        })
       : null}
    </>
  )
}

export default Test