import {React,useState} from 'react';

function Event() {
    const [count ,setcount]=useState(0)
    let Add =()=>{
        setcount(count+1)
    }
    let sub =()=>{
        setcount(count-1)
    }
    return (
        <div>
            <h1>
                {count}
            </h1>
            <input type="button" value="+"  onClick={Add}/>
                    <input type="button" value="-"  onClick={sub}/>
        </div>
    );
}

export default Event;