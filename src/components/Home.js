import React from 'react'

export default function Home({movies}) {
    
    return (
        <div>
            <h2>Search</h2>
            <form>
                <input />
                <button>Search</button>
            </form>
        <div style={{display:"inline-flex"}}>
            
            {movies.map(item=><div key={item.id} style={{margin:"10px", border:"1px solid black", height:"100px", width:"100px"}}>{item.name}</div>)}
        </div>
        </div>
    )
}
