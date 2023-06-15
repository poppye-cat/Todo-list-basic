import React from "react";

function Listelement(props){
    return(
        <div className="liele">
        <li className="listele">
            {props.item}
            <span className="delbtn">
            <i class="fa-sharp fa-solid fa-trash" 
            onClick= {() => {
                props.delet(props.index)
            }}
            ></i>
            </span>
        </li>
        </div>
    );
}

export default Listelement;