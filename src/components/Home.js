import React from 'react'

export default function Home({movies, addItem,changeHandler, submitHandler, searchText}) {

    
    return (
        <div>
            <h2>Search</h2>
            <form onSubmit={submitHandler}>
                <input 
                style={{ height: "40px", margin: "10px", width: "80%"}}
                placeholder="Search Movie..." type="text" value={searchText|| ""} onChange={changeHandler}/>
                <button style={{height:"50px"}}>Search</button>
            </form>


        <div style={{display:"inline-flex", flexWrap:"wrap", justifyContent:"center"}}>
            
            {movies && movies.map(item=><div key={item.imdbID} 
            style={{
                backgroundImage:`url(${item.Poster})`,
                backgroundSize:"cover",
                margin:"10px", border:"1px solid black", height:"250px", width:"175px", textAlign:"-webkit-center"}}>
                <div 
            style={{height:"100%", position:"relative"}}>{item.Title}
            
            <div 
            style={{background:"white", border:"1px solid black", height:"20px",width:"40px", position:"absolute", bottom:0, left:"50%", transform: "translateX(-50%)", cursor:"pointer", marginBottom:"15px"}}
            onClick={()=>addItem(item)}
            >Add</div></div></div>)}
        </div>


        </div>
    )
}
