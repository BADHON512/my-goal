import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Badhon = () => {

    const param= useParams()
    const navige= useNavigate()
    console.log(param.id);
    return (
        <div>
                <h1>badhon</h1>
                <button onClick={()=>{navige("/Raja")}}>go to</button>
        </div>
    );
};

export default Badhon;