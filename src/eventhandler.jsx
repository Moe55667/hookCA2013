import React, { useState } from 'react';

function Eventhandler() {
    const [data,setdata]=useState('hello')
    const [bgColor,setbgColor]=useState(true)
    const clickhandler=()=>{
        setdata('submit')
    }
    const MouseOver=()=>{
        setbgColor(false)
    }
    const MouseOut=()=>{
        setbgColor(true)
    }
    return (
        <div>
            <h1>
             {data}
            </h1>
            <input type='text' placeholder="Enter Text" />
            <input type="button"  style={{color:'',background:(bgColor)?'blue':'red'
            }
            }
            value="Submit" onClick={clickhandler}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            />
            
        </div>
    );
}

export default Eventhandler;