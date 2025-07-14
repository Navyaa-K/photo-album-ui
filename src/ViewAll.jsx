import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import axios from 'axios'

export const ViewAll = () => {
    const [data,changeData]=useState(
        []
)
const fetchData=()=>{
  axios.get("https://jsonplaceholder.typicode.com/photos").then(
    (response)=>{changeData(response.data)}
  ).catch()
}
  useEffect(()=>{fetchData()},[])
  return (
    <div
    style={{
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/035/494/595/non_2x/ai-generated-antique-old-elegant-background-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
        <Nav />
        <div className="container-fluid">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">AlbumId</th>
      <th scope="col">Id</th>
      <th scope="col">title</th>
      <th scope="col">UrL</th>
      <th scope="col">thumbnailUrL</th>
    </tr>
  </thead>
  <tbody>
        {data.map(
            (value,index)=>{
                return (<tr>
      <th scope="row">{value.albumId}</th>
      <td>{value.id}</td>
      <td>{value.title}</td>
      <td>{value.url}</td>
      <td>{value.thumbnailUrl}</td>
    </tr>)
            }
        )}

    
    
  </tbody>
</table>
                        </div>
                    </div>
    </div>
                </div>
            </div>
        </div>
    
  )
}
