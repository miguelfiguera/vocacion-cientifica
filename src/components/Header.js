import React from 'react'
import {useState} from 'react'
import headerBg from '../assets/background.jpeg'


export default function Header() {
const [currentUrl,setCurrentUrl]=useState(window.location.pathname)
const [size,setSize]=useState(window.innerWidth)

const bannerHeight= size<600 ? '20rem' : '30rem'

window.addEventListener('resize',()=>{
    setSize(window.innerWidth)
})

window.addEventListener('locationchange', ()=> {
	setCurrentUrl(window.location.pathname)
});
return(

    <div className=" my-0 py-0 justify-content-center align-content-center" style={{backgroundImage:`url(${headerBg})`,backgroundSize:'cover',height:bannerHeight}}>

<div className="container-fluid" style={{backgroundColor:'black'}}>
    <strong><h1 className=" my-0 py-0 text-light" style={{opacity:'1'}}> Hola!</h1></strong>
    </div>



    </div>
)







}

