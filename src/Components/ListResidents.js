import axios from "axios";
import React, { useEffect, useState } from "react";
const ListResidents = ({url}) =>{
  const [ListResidents, setListResidents] =useState({})

  useEffect(() => {
    
    axios.get(url)
    .then((res) => setListResidents(res.data))
    
  }, [url])
  console.log(ListResidents);




    return(
        <div className="Card">
          
          <div className="image">
               <p>{ListResidents.status}</p> 
               {
                 ListResidents.status ==='Alive'?(
                   <p><i className='bx bxs-heart' style={{color: 'green'}}></i>{ListResidents.status}</p>
                 ):(
                   ListResidents.status === 'Dead'?(
                     <p><i className='bx bxs-skull' style={{color: 'red'}}></i>{ListResidents.status}</p>
                   ):(
                     <p><i className='bx bx-droplet'></i>{ListResidents.status}</p> 
                   )
                 )
               }
              <img src={ListResidents.image} alt="" />
              
          </div>

          <div className="Info-Charac">
            <h3>{ListResidents.name}</h3>
            <h4>{ListResidents.species}</h4> 
            <h4>{ListResidents.gender}</h4> 
            <h4><p className="Sub1">ORIGIN:</p>
              {ListResidents.origin?.name} 
            </h4> 
            <h4> <p className="Sub2">EPISODES WHERE APPEAR:</p>
              {ListResidents.episode?.length} 
            </h4>

          </div>


          

        </div>
    )
}

export default ListResidents;