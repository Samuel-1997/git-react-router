import React, {useEffect, useState} from 'react'
import Form from './Formuser'
import User from './User'

export default function Users(props) {

    const [users, setUsers] = useState([ ])
    //Fonction pour Supprimer les Informations d'un Utilisatuer !
    //Pour Supprimer les informations d'un State on utilise la propriété filter !
    function supprimer(id) {
        const result = users.filter(user=>user.id!=id)
        setUsers(result)
    }
    
    //Fonction d'intermédière pour Ajouter les Informations d'un Utilisatuer !
    function ajouter(user)
    {
            setUsers([...users,user])
    }

    //Fonction pour affiché les informatoins de l'API à l'estérieur !
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(res=>setUsers(res))
    }, []);

    return (
        <div className='container'>
            <Form vasAjouter={ajouter}  />
            <div className="row">
                
            {users.map((user) =>(
                <User data={user} jeSupprime={supprimer} />
            ))}
            </div>
            
        </div>
        //Pour Afficher les informations d'un State on utilise la propriété map !
    )
}
