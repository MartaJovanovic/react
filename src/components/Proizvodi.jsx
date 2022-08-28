import React from 'react'
import Proizv from './Proizv.jsx'

const Proizvodi = ({przi, dodaj, oduzmi}) => {
  return (
    <div className='proizvodi'>

{przi.map((prod) => (
        <Proizv pr = {prod} key={prod.id} dodaj={dodaj} oduzmi = {oduzmi} kor={0}/>
      ))}
    </div>
  )
}

export default Proizvodi