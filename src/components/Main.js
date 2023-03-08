import React from 'react'
import { useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./BookSlice"

const Main = () => {
    const [search,setSearch]=useState('')
    const dispatch = useDispatch();
    const { items, loading } = useSelector(state => state.bookSlice)
    
    const searchBook=(evt)=>{
        if(evt.key==='Enter'){
            if (search.trim().length){
               dispatch(fetchBooks(search))
            }
        }
    }
    const searchBookClick=()=>{
        if(search.trim().length){
            dispatch(fetchBooks(search))
        }
    }
    return(
        <>
         <div className='header'>
            <div className='row1'>
                <h1>A room without books is like <br/> a body without soul.</h1>
            </div>
            <div className='row2'>
                <h2>Find Your Book</h2>
                <div className='search'>
                    <input type='text' placeholder='Enter Your Book Name' value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} />
                    <button onClick={searchBookClick}><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src="./images/bg2.png" alt=""/>
            </div>
         </div>
         <div className='container'>
            {
                <Card book={items} loading={loading}/>
            }
         </div>
        </>
    )
}

export default Main