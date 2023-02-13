import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contrats = () => {
  const [contrats, setContrats] = useState([]);

  const userId = localStorage.getItem('userId')

  useEffect(() => {
    const getContrats = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/contrats/forUser/${userId}`);
        setContrats(result.data);
        console.log(result.data)

      } catch (error) {
        console.log('La requête pour récupérer les contrats a échouée', error);
      }
    };
    getContrats();
  }, []);


  return (
    <div className="contrat-container">
      <ul>
        {contrats.map((contrat, index) =>
        
        <div className='contrat_result' data-index={index}>
            <h4>Contrat n°{contrat.id}</h4>
        <div className='datedebut'>{contrat.datedebut}</div>
        <div className='datefin'>{contrat.datefin}</div>
        <div className='prenomGardien'>{contrat.gardien.nom}</div>
        <div className='prenomClient'>{contrat.client.nom}</div>
        <div className='emailGardien'>{contrat.gardien.email}</div>
        <div className='emailClient'>{contrat.client.email}</div>
        
    </div>
    )}
        
        
            

    
      </ul>
    </div>
  );
};

export default Contrats;
