import React from 'react'

export default function User(props) {
    return (
     
        <ul class="list-group col-md-4 mt-5">
        <li class="list-group-item active" aria-current="true">{props.data.name}</li>
        <li class="list-group-item">{props.data.email}</li>
        <li class="list-group-item">{props.data.phone}</li>
        <button onClick={()=>props.jeSupprime(props.data.id)} className='btn btn-success form-control mt-2' >Cliquez pour Supprimer</button>
        </ul>
      
    )
}
