import React from 'react'
import "./Search.css"
const Search = () => {
  return (

    <div className='search'>
      <h1 style={{color:'white',padding:35,fontSize:30,marginRight:30}}>Search for event...</h1>
    <div className='bar'>
<form>
<div class="location">
    <p>Location</p>
    <input type="text" placeholder="City?"/>
  </div>
  <div class="check-in">
        <p>Events</p>
    <input type="text" placeholder="Wedding,Gathering,Prom"/>
  </div>
  <div class="check-out">
        <p>Categories</p>
    <input type="text" placeholder="Florist,Photographer,Venue..."/>
  </div>
      </form>
    </div>
    </div>
  )
}

export default Search