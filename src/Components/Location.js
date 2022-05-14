import axios from "axios";
import imgRM from '../imgs/dbp1ypz-3bb9c9fa-4f68-4a66-a681-a49a58121c69.jpg'
import ResidentInfo from './ResidentInfo'
import imgPng from '../imgs/Rick-And-Morty-Logo.png'
import { useEffect, useState} from 'react';

const Location = () =>{

  const [Location, setLocation ] = useState({});
  const [ id, setId ] = useState('');

    useEffect(() => {

       const random = Math.floor(Math.random() * 126) + 1;
       axios.get(`https://rickandmortyapi.com/api/location/${random}`)
       .then((res) => setLocation(res.data));
       
       
      }, [ ]);

      const searchType = () => {
        console.log(id);
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
       .then((res) => setLocation(res.data));
      }

      console.log(Location);

    return(
        <div>

        <div className="Banner">
          <img src={imgRM} alt="" />
          
        </div>
        <div className="two-image">
          <img src={imgPng} style={{width: '300px'}} style_2={{margin: '0 auto'}} alt="" />
        </div>

          <div className="Container-Input-Button">
            <input type='text' placeholder="Type a location id!!" onChange={(e) => setId(e.target.value)} value={id} />
            <button onClick={searchType}>Search</button>
          </div>
          <br /> <br />

          <div className="head-info">
          <h2>{Location.name}</h2> <br />
          <p><b>type:</b> {Location.type}</p>
          <p><b>dimension:</b> {Location.dimension}</p>
          <p><b>population:</b> {Location.residents?.length}</p>
          </div>
          <br />
          
          <div>
          {Location.residents?.map((url) => (
            <ResidentInfo url={url} key={url} />  
          ))}
          </div>
          
        </div>
    )


}

export default Location;