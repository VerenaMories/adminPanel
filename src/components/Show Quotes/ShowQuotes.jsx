import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ShowQuotes() {
    const [quote, setQuote] = useState([]);
    // const [image, setImage] = useState();
  
    async function getQuote(){
  
   
  
       let {data}=await axios.get('http://192.168.1.162:3000/show_quote');
       setQuote (data.quote);
   console.log(data.quote[0]);
     }


   
   
  
  
     useEffect(()=>{getQuote();}
     
     , []);
    
  return (
   <>
<h1>Here's Your Quotes</h1>   
<div className='col-lg-12 bg-light m-2 ' >


  
 

 {quote.map((p, index)=>
 <div className='container' style={{backgroundColor:'#04AA6D', height:'30vh', borderRadius:'20px', marginBottom:'10px'}}   key={index} >
 <div>
 <div className='row' style={{paddingTop:'65px', color:'white', marginLeft:'10px'}}>  Name: {p.name}</div>
 
  <div className='row' style={{marginTop:'10px' , color:'white', marginLeft:'10px'}}>Email: {p.email}</div>
 
 
  <div className='row ' style={{marginTop:'10px', color:'white', marginLeft:'10px'}}>Product Name: {p.product}</div>
 
 </div>
  
 
 
  
     
 </div>


 )}


</div>
   </>
  )
}
