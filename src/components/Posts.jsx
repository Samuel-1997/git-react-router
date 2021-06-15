import React, { useEffect, useState} from 'react'
import Post from './Post'
import Formpost from './Formpost';
import axios from 'axios';


export default function Posts() {
    const [posts, setPosts] =useState([])

//Fonction pour affiché les informatoins de l'API à l'estérieur !
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>setPosts(res.data))
        // .then(res=>setPosts(res))
       
    }, []);


//Fonction d'intermédière pour Ajouter les Informations d'un Utilisatuer !
  function complete(post)
  { 
      axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(res=>{
            setPosts([res.data,...posts])
        })
          
  }

//La fonction pour supprimer
    function supprime(id)
    {
        const result=posts.filter(post=>post.id!=id)
        setPosts(result)
    }

    return (
        <div className="container">
            <Formpost jeComplete={complete} />
            <div className="row">
            {posts.map((post)=>(
            <Post data={post} jedoisSupprimer={supprime} />
            ))}
            </div>
            
        </div>
    )
}
