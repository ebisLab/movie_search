import React from 'react'

export default function Home({movies,addItem}) {
    
    
    return (
        <div>
            <h2>Search</h2>
            <form>
                <input />
                <button>Search</button>
            </form>
        <div style={{display:"inline-flex"}}>
            
            {movies && movies.map(item=><div key={item.id} 
            style={{margin:"10px", border:"1px solid black", height:"100px", width:"100px", textAlign:"-webkit-center"}}>
                <div 
            style={{height:"100%", position:"relative"}}>{item.name}
            
            <div 
            style={{border:"1px solid black", height:"20px",width:"40px", position:"absolute", bottom:0, left:"50%", transform: "translateX(-50%)", cursor:"pointer", marginBottom:"15px"}}
            onClick={()=>addItem(item)}
            >Add</div></div></div>)}
        </div>
        </div>
    )
}
