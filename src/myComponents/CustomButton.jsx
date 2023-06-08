import './custom_button.css'
import React from 'react'

function CustomButton(props){
    const onPressed=(event)=>{
        console.log("on pressed",event)
    }
    return(
         button id={props.id}  onClick={onPressed} className={`btn ${props.colorClass}`}>{props.title}{
        props.isdownload && 
        <span class="material-symbols-outlined">
        arrow_downward
        </span>
}
</button>
    )
}

export default CustomButton