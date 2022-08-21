import React from "react";
import './Home.module.css';
import { Link } from "react-router-dom";





export default function Home() {



  return (
    <>



     <h1 >Hello Admin</h1>
    
<div className="container">
  <div className="row">
    <div className="col-md-6 " >
      <div className="container">
      <div style={{backgroundColor:'#04AA6D', height:'30vh', borderRadius:'20px', display:'flex', justifyContent:'center', alignItems:'center',marginBottom:'10px'}}>
 <Link to='/showqoutes' style={{textDecoration:'none'}}><h2 style={{marginRight:'10px', color:'white'}}>Show Quotes</h2> </Link> 
 <i className="fa-solid fa-cube fs-1"></i>
</div>
      </div>

    </div>
    <div className="col-md-6 " >
      <div className="container">
      <div style={{backgroundColor:'#04AA6D', height:'30vh', borderRadius:'20px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Link to='/showmessages' style={{textDecoration:'none'}}><h2 style={{marginRight:'10px', color:'white'}} >Show Messages</h2></Link> 
<i className="fa-solid fa-comments fs-1"></i></div>
      </div>

    </div>
  </div>
</div>
  

   
     
  
    </>
  );
}
