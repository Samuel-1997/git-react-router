import React from 'react'

export default function Album(props) {
    return (

<div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">{props.data.id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.data.title}</h6>
    <button onClick={() => props.tuSupprime(props.data.id)} className="btn btn-primary">Je peux Supprimer</button>
  </div>
</div>
       
)
}
