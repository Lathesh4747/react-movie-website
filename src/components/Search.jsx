import React from 'react'

const Search = ({searchTeam1,setsearchTeam1}) => {
  return (
    <div className='search'>
        <div>
            <img src="./search.svg" alt="search-icon" />
            <input 
            type="text"
            placeholder="Search through 300+ movies online"
            value={searchTeam1}
            onChange={(e)=>setsearchTeam1(e.target.value)}
             />
        </div>
    </div>
  )
}

export default Search