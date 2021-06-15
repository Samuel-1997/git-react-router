import React, {useState} from 'react'

export default function Formalbum(props) {

    const [album, setAlbum] = useState({})


    function completer(e)
    {     setAlbum({
        ...album,
        [e.target.name]:e.target.value
    })
    }
    
    return (
        <div  className="form-group col-md-5 offset-3 mt-5">
             <h1 className="text-secondary">Ajouter un Album </h1>
             <input name='title' onChange={completer} type="text" className='form-control mt-2' />
             <button onClick={()=> props.foCompleter(album)} className='btn btn-success form-control mt-2 mb-5'>add</button>
        </div>
    )
}
