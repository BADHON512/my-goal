import React from 'react';
import "./AddTask.css"

const AddTask = ({title,description,deletetask,index}) => {
    return (
        <div className='ssp'>
           <div className="task">
             <h3>{title}</h3>
             <h5>{description}</h5>
           </div>
           <button onClick={()=>deletetask(index)}>Remove</button>
        </div>
    );
};

export default AddTask;