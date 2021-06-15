import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Album from './Album'
import Formalbum from './Formalbum';

export default function Albums() {

    const [albums, setAlbums] = useState([])

//La méthode pour afficher l'API
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res=>setAlbums(res.data))
    }, []);

  //  axios

//function pour supprimer
    function supprime(id)
    {
        const result=albums.filter(album=>album.id!=id)
        setAlbums(result)
    }
 

  //Fonction d'intermédière pour Ajouter les Informations d'un Utilisatuer dans un formulaire !
  function complete(album)
  {
       axios.post('https://jsonplaceholder.typicode.com/albums',album)
       .then(res=>{
           setAlbums([res.data,...albums])
       })
  }

    return (
        <div className="container">
            <Formalbum foCompleter={complete} />
            <div className="row">
            {albums.map(album => (
                <Album data={album} tuSupprime={supprime} /> 
            ))}
            </div>
           
        </div>
    )
}
