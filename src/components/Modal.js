import React from 'react';
import './style.css'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Modal=()=>{
    const {BookId}=useParams()
    const [item,setItem]=useState()
    useEffect(()=>{
        console.log(BookId)
        if (BookId){
            console.log('hello')
            fetch(`https://www.googleapis.com/books/v1/volumes/${BookId}`)
            .then(res=>res.json())
            .then(data=>{
             setItem(data)
             }).catch(err=>console.log(err))
        }
        
    },[BookId])
    console.log(item)
    return(
        <>
          {
            item && (
                <>
                  <div className='overlay'>
                    <div className='overlay-inner'>
                      <button className='close'><i class="fa-solid fa-xmark"></i></button>
                      <div className='inner-box'>
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                        <div className='info'>
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3><br/>
                            <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                      </div>
                      <h4 className='description'>{item.volumeInfo.description}</h4>
                    </div>
                  </div>
                </>
            )
          }
        </>
    )
}
export default Modal