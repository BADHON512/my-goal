import React, {  useEffect, useState } from 'react';
import AddTask from '../AddTask/AddTask';
import "./Form.css"


const Form = () => {
    const local =localStorage.getItem("badhon") ? JSON.parse(localStorage.getItem("badhon")):[]
      const [task, settask]=useState(local)
      const [title, settitle]=useState("")
      const [description,setdescription]=useState("")
    const formSubmission = (e) => {
        e.preventDefault()
         settask([...task ,{title, description}])
        
         settitle(" ")
         setdescription(" ")
      
    }
    const deletetask=(index)=>{
         const dele= task.filter((item, inde)=>{
            return inde !==index
            
         })
         settask(dele)
         
    }

    useEffect(()=>{
      localStorage.setItem("badhon",JSON.stringify(task))

    },[task])
    return (
        <div className='bac'>
            <div className="container">
                <h1>MY GOALS</h1>
                <form onSubmit={formSubmission}>
                    <input type="text" placeholder='Title' required
                    value={title} onChange={(e)=>settitle(e.target.value)} />

                    <textarea value={description}required
                     onChange={(e)=>setdescription(e.target.value)}
                     
                     placeholder='Description' name="" id="" ></textarea>

                    <button type='submit' className='bn'>ADD</button>
                </form>
                {
                  task.map((item,index)=><
                  AddTask
                  title={item.title}
                  description={item.description}
                  key={index}
                  deletetask={deletetask}
                  index={index}
                  />)
                }
            </div>
        </div>
    );
};

export default Form;