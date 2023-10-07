import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
import {BiLogoFacebook} from "react-icons/bi"
import {BsFileX, BsFillTelephoneFill} from "react-icons/bs"
import {CgMail} from "react-icons/cg"
import {PiPhoneDisconnectFill} from "react-icons/pi"
import {AiOutlineTwitter,AiOutlineGoogle,AiOutlineInstagram,AiFillLinkedin,AiFillGithub,AiFillHome } from "react-icons/ai"

const Footer = () => {
  return (
    <div style={{backgroundColor:"#333",color:"#fff"}}>
      <div style={{display:'flex',justifyContent:"space-between",flexWrap:'wrap', alignItems:'center',padding:" 20px 70px"}}><h1 style={{fontSize:20}}>Get connected with us on social networks:</h1><div style={{display:'flex',justifyContent:"space-between",alignItems:"center",gap:20,flexWrap:'wrap'}}>
       <Link> <BiLogoFacebook className='icon'/></Link>
       <Link><AiOutlineTwitter className='icon'/></Link>
       <Link> <AiOutlineGoogle className='icon'/></Link>
       <Link><AiOutlineInstagram className='icon'/></Link>
       <Link><AiFillLinkedin className='icon'/></Link>
       <Link> <AiFillGithub className='icon'/></Link>
        </div></div>
        <hr />

      <div style={{
        display:"flex",
        justifyContent:'space-between',
        alignItems:"center",
        flexWrap:"wrap",
        padding:"18px 70px",
        gap:18
      }}>
        <div><h1 style={{fontSize:18}}>Product with New</h1><p style={{width:270,wordWrap:"break-word"}}>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>

        <div><h1 style={{fontSize:18}}>PRODUCTS</h1>
        <p><Link>Angular</Link></p>
        <p> <Link>React</Link></p>
        <p><Link>Vue</Link></p>
        <p><Link>Laravel</Link></p>
        </div>

        <div><h1 style={{fontSize:18}}>Useful Links</h1>
        <p><Link>Pricing</Link></p>
        <p> <Link>Settings</Link></p>
        <p><Link>Orders</Link></p>
        <p><Link>Help</Link></p>
        </div>

        <div><h1 style={{fontSize:18}}>Contact</h1>
        <div style={{display:"flex",gap:10,alignItems:'center'}}><AiFillHome  /><span>Hasan Squair Karachi, Pakistan</span></div>
        <div style={{display:"flex",gap:10,alignItems:'center'}}><CgMail /><span>ali4282271@gmail.com</span></div>
        <div style={{display:"flex",gap:10,alignItems:'center'}}><BsFillTelephoneFill /><span> +923333894552</span></div>
        <div style={{display:"flex",gap:10,alignItems:'center'}}><PiPhoneDisconnectFill /><span> +92212332341</span></div>
     
    
        </div>

      </div>

      <div style={{display:'flex',justifyContent:"center",fontSize:"18px",padding:"25px 0px"}}><p>© 2023 Copyright: ashraWeb.com</p></div>
    </div>
  )
}

export default Footer