import  React, {useState, Fragment} from 'react'
import Item from './Item'
import{v4 as uuidv4}from 'uuid'

function Form(){
    const [dataArr, setDataArr] = useState([
        {text : 'Coding with react', id: uuidv4()},
        {text: 'Do the sports session', id: uuidv4()},
        {text: 'Send package for father', id: uuidv4()}
    ]);

    const [stateInput, setStateInput] = useState();

    const handleDelete = (id)=>{
        const fileredState =  dataArr.filter(item=> item.id !== id)
        setDataArr(fileredState)
    }

    const addTodo = (event) =>{
        event.preventDefault();
        const newArr = [...dataArr];
        const newTodo = {};

        newTodo.text=stateInput;
        newTodo.id = uuidv4();
        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput('')
    }

    const linkedInput = (event)=>{
        setStateInput(event);
    }
    
    return(
        <Fragment>
            <div className="m-auto col-12 col-sm-10 col-lg-10 px-4">
            <form onSubmit={event=>addTodo(event)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3"><h4>What's the plan for today ?</h4></label>
                <input value={stateInput} onChange={event=>linkedInput(event.target.value)} type="text" className="form-control" id="todo"/>
                <button className="btn btn-primary mt-3">Send</button>
            </form>
            <h4>To - do list : </h4>
                <ul className="list-group">
                    {dataArr.map(items => 
                        <Item text={items.text} key={items.id} id={items.id} handleDelete={handleDelete} />)
                    }                          
                </ul>
            </div>
        </Fragment>
    )
}
export default Form;