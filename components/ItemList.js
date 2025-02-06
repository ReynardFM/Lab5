import React from "react";
import { useState } from "react";

function ListItem({check, items, onRemove}) {

    let temp = items;

    if(check){
        temp = temp.filter((item)=>(item[0] === 'A' || item[0] === 'a'));
    }

    return (
        (temp.map((item,index)=>(
            <li>
                {item}
                <button onClick={() => onRemove(item)}>Remove</button>
            </li>
        )))
        
    );
  }

export default function ItemList(){
    const [items, setItems] = useState(["A","B","C"]);

    const [check, setCheck] = useState(false);
    const [input, setInput] = useState("");

    const addItem = () => {
        setItems([...items, input]);
        setInput("");
    };

    const removeItem = (id) => {
        setItems(items.filter((item)=>(item!==id)));
    };

    function handleCheck(){
        setCheck(!check);
        console.log(check);
    }
    
    return(
        <div>
            <ul>
                <ListItem check={check} items={items} onRemove={removeItem}/>
            </ul>
            <input type="text" id="add" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={addItem}>Add Item</button>
            <br/>
            <label for="A">Starts with A</label>
            <input name="A" type="checkbox" onChange={handleCheck}></input>
        </div>
    );
}