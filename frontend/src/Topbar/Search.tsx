import React from 'react';

export default function Search() {
  return (
    <form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search Stock"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
  )
}
