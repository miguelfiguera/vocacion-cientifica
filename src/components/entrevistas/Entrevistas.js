import React,{Suspense,lazy} from 'react'
import Entrevista from './entrevista'
import { entrevistados } from '../Helpers'

export default function Entrevistas() {

  return (
    <div className="container-fluid d-flex p-2 flex-wrap justify-content-center">

    {entrevistados.filter(object=>object.name !=='').reverse().map((obj)=>{
      return <Entrevista object={obj} key={obj.id}/>
    })}

    </div>
  )
}
