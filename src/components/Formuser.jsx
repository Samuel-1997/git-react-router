import React, { useState } from 'react'

export default function Form(props) {

    const [user,setuser]=useState({})

//Fonction pour Ajouter les Informations d'un Utilisatuer dans un formulaire !
  function utilisateur(e)
  {     setuser({
      ...user,
      [e.target.name]:e.target.value
  })
  }

        
return (
        <div className="form-group col-md-5 offset-3 mt-5">
            <h1 className="text-secondary">ajouter un utilisateur </h1>
            <input name='name'  onChange={utilisateur} type="text" className='form-control mt-2' />
            <input name='email' onChange={utilisateur} type="text" className='form-control mt-2' />
            <input name='phone' onChange={utilisateur} type="text" className='form-control mt-2' />
            <button onClick={()=> props.vasAjouter(user)} className='btn btn-success form-control mt-2'>add</button>

        </div>
    )
}
