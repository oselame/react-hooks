import React from 'react';

import userResources from './useResources';


const ResourceList = ({ resource }) => {

    const resources = userResources(resource);

    return (
      <div className="ui relaxed divided list">
            {resources.map((rec) => (
              <div key={rec.id} className="item">
                <div className="content">
                  {rec.title}
                </div>
              </div>
            ))}
      </div>
    )
}


export default ResourceList;