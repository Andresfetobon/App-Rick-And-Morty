import axios from "axios";
import ListResidents from '../Components/ListResidents'
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  const [ResidentInfo, setResidentInfo] = useState({});
  
  useEffect(() => {
    axios.get(url).then((res) => setResidentInfo(res.data));
  }, [url ]);
  console.log(ResidentInfo);
  return (
    <div>
      <div>
        <div>
          <ListResidents url={url} key={url}/>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;
