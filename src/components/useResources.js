import { useEffect, useState } from 'react';
import axios from 'axios';

const userResources = resource => {
    const [resources, setResources] = useState([]);
    
    // const fetchResource = async resource => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    
    //     setResources(response.data);
    // }
    
    // useEffect(() => {
    //   fetchResource(resource);
    // }, [resource]);
    
    useEffect(() => {
      (async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
      })(resource); // funcao auto executada
    }, [resource]);
  
    return resources;
};

export default userResources;