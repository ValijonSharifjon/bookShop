import React from "react";
import { useNavigate } from "react-router-dom";
const Card=({book,loading})=>{
  let navigate=useNavigate();
  // const [show,setShow]=useState(false)
  
  console.log(book)
  if (book===undefined){
    return(
      <><h1>No Result</h1></>
    )
  }
  else{
    return(
      <>
        {
          !loading ? book.map(item=>{
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount
            if (thumbnail!==undefined && amount!==undefined){
              return (
                <>
                 <div className="card" key={item.id} onClick={()=>{navigate(`/${item.id}`);}}>
                    <img src={thumbnail} alt=""></img>
                    <div className="bottom">
                       <h3 className="title">{item.volumeInfo.title}</h3>
                       <p className="amount">&#8377;{amount}</p>
                    </div>
                  </div>
                </>
              )
            }
            else return <></>
          }):<span>Loading...</span>
        }
      </>
        
    )
  }
}
export default Card;