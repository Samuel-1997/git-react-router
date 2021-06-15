import React, {useState} from 'react'

export default function Formpost(props) {

    const [post, setPost] =useState({})


    function completer(e)
    {     setPost({
        ...post,
        [e.target.name]:e.target.value
    })
    }

    
    return (
        <div  className="form-group col-md-5 offset-3 mt-5">
             <h1 className="text-secondary">Ajouter un Post  </h1>
             <input name='title' onChange={completer} type="text" className='form-control mt-2' />
             <input name='body' onChange={completer} type="text" className='form-control mt-2' />
             <button onClick={()=> props.jeComplete(post)} className='btn btn-success form-control mt-2 mb-5'>add</button>
        </div>
    )
}
