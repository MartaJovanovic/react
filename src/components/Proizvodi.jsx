import React from 'react'
import Proizv from './Proizv.jsx'

const Proizvodi = ({przi}) => {
  return (
    <div className='proizvodi'>

{przi.map((prod) => (
        <Proizv pr = {prod} br = {prod.amount} key={prod.id}/>
      ))}
        {/* <Proizv naziv = "Naziv1" sastojci = "sasatojci1"/>
        <Proizv naziv = "Naziv2" sastojci = "sasatojci2"/>
        <Proizv naziv = "Naziv3" sastojci = "sasatojci3"/> */}
    </div>
  )
}

export default Proizvodi