import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ShowMessages() {
    const [message, setMessage] = useState([]);
    // const [image, setImage] = useState();
  
    async function getMessage(){
  
   
  
       let {data}=await axios.get('http://192.168.1.162:3000/show_contact_us');
       setMessage (data.messages);
   console.log(data.messages[0]);
     }


   
   
  
  
     useEffect(()=>{getMessage();}
     
     , []);
    
  return (
   <>
<h1>Here's Your Messages</h1>   
<div className="container" >
    <div className="row">
    <div className='col-lg-12 bg-light m-2 ' >


  
 

{message.map((p, index)=>
<div className='container' style={{backgroundColor:'#04AA6D', height:'30vh', borderRadius:'20px', marginBottom:'10px', paddingLeft:'0'}}   key={index} >
<div>
<div className='row' style={{paddingTop:'65px', color:'white', marginLeft:'10px'}}>  Name: {p.name}</div>

 <div className='row' style={{marginTop:'10px', color:'white', marginLeft:'10px'}}>Email: {p.email}</div>

 <div className='row' style={{marginTop:'10px', color:'white', marginLeft:'10px'}}>Subject: {p.subject}</div>

 <div className='row ' style={{marginTop:'10px', color:'white', marginLeft:'10px'}}>Message: {p.message}</div>

</div>
 


 
    
</div>
)}

</div>
    </div>
</div>

   </>
  )
}
