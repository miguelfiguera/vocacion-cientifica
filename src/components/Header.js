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

//add current URL logic to change header title

return(

    <div className=" my-0 py-0 justify-content-center align-content-center" style={{backgroundImage:`url(${headerBg})`,backgroundSize:'cover',height:bannerHeight}}>

<div className="container-fluid " style={{backgroundColor:'black',height:bannerHeight,opacity:'0.5'}}>
    </div>
    <strong><h1 className=" my-0 py-0 text-light fs-1" style={{scale:'1.2',backgroundColor:'transparent',translate:'0% -600%',scale:'2'}}> Hola!</h1></strong>



    </div>
)







}

