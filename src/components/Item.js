import React from 'react'

const Item = (props) =>{
    return(
        <li className="border justify-content-between align-items-center bg-white d-flex p-1 m-3">
            <div className="text-dark font-weight-bold px-auto">{props.text}</div>
            <button onClick={()=>props.handleDelete(props.id)} className="btn btn-danger h-25 p-2"><i className="fas fa-trash"></i></button>
        </li>
    )
}
export default Item;