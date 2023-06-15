import React, { useState } from "react";

function Searchbar(props){
    const [inputtxt,setinputtxt] = useState('');
    return(
        <div className="searchbar">
            <input 
            className="bar"
            type="text"
            placeholder="Enter your tasks" 
            value={inputtxt}
            onChange={e =>{
                setinputtxt(e.target.value)
            }}
            />
            <button className="btn" onClick= {() => {
                props.addlist(inputtxt);
                setinputtxt('');
                }}
            >+</button>
            
        </div>
    );
}

export default Searchbar;