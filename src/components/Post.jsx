import React from 'react'

export default function Post(props) {
    return (

<div class="card" style={{width:"18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{props.data.id}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{props.data.title}</h6>
    <p class="card-text">{props.data.body}</p>
    <button onClick={() => props.jedoisSupprimer(props.data.id)} className="btn btn-danger">Le Chois de Supprimer</button>
  </div>
</div>
       
    )
}
