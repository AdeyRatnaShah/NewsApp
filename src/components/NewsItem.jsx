import React from 'react'
import { NavLink } from 'react-router-dom';
const Newsitem = (props) => {
  const capitalizeFirstLetter= (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// let a = " ";
  return (
    <div className='my-3'>
      <div className="card my-3"  style={{height:'450px'}} >
  <img src={props.urlToimage?props.urlToimage:props.defaultImage} className="card-img-top" style={{height:'250px'}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title?(props.title.length>70?props.title.slice(0,70):props.title):`{props.category}...`}...</h5>
    <p className="card-text">{props.description?(props.description.length>80?props.description.slice(0,80):props.description):"Click below to read more..."}</p>
    <a href={props.newsUrl} className="btn btn-primary">Read more...</a>
    <p class="card-text"><small class="text-body-secondary">By {props.author} on {(new Date(props.date)).toISOString()}</small></p>
  </div>
</div>
    </div>
  )
}

export default Newsitem

