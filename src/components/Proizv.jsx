import React from 'react'

function Proizv() {
  return (
    <div className='kartica'>  
      <img classname = "kartica-slika" src = "https:/picsum.photos/200" alt= "SLika"></img>
      <div className="kartica-body">
        <h3 className="kartica-naslov">Naziv</h3>
        <p className="kartica-sastojci">Sastojci</p>
      </div>
      <button className="btn">+</button>
      <button className="btn">-</button>
      </div>
  )
}

export default Proizv