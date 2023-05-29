import React, { useState } from 'react'
import logo from "../Images/logo.svg";
import Input from './Input';
import ListItem from './ListItem';

const ToDoList = () => {

    // State for storing button name
    const [btn, setBtn] = useState("check list");
    const [icon, setIcon] = useState("add");
    const [listItems, updateList] = useState([]);
    const [newItem, setNewItem] = useState({ id: "", name: "" })
    const[isEdit,setIsEdit]=useState(null);
    function DeleteItem(key) {
        updateList(listItems.filter((val) => {
            return val.id !== key
        }))
    }

    function EditItem(key) {
        let eItem = listItems.find((val)=>{
            return val.id===key
        })
        setIcon('edit');
        setIsEdit(eItem)
        setNewItem({id:eItem.id,name:eItem.name})
    }

    return (<>
        <div className='container-fluid text-center p-5'>
            <img src={logo} alt="Notes" className='logo-image' />
        </div>

        <h1 className='text-center my-3 text-white head'>Add Your List Here ✌</h1>

        <Input
            icon={icon}
            onChange={(e) => {
                const item_id = new Date().getMilliseconds().toString();
                setNewItem({ id: item_id, name: e.target.value });
            }}
            arg={newItem.name} onSelect={() => {
                updateList((prev) => {
                    return (newItem ? [...prev, newItem] : ([...prev]))
                });
                setNewItem({ id: "", name: "" });
            }}
            
            onSelect2={() => {
                newItem.name && updateList(listItems.map((val)=>{
                if(val.id===isEdit.id){
                    return newItem
                }
                return val;
               }))
               setNewItem({id:"",name:""})
               setIcon('add')
            }}
        />
        
        <div className="container-fluid my-5 list-container">
            <div className="row">
                <div className="col-10 col-md-8 col-lg-6 col-xxl-6 col-xl-6 mx-auto">
                    {
                        listItems.map((val) => {
                            return (<ListItem key={val.id} content={val.name} onSelect1={() => {
                                EditItem(val.id);
                            }}
                                onSelect2={() => {
                                    DeleteItem(val.id)
                                }}
                            />)
                        })
                    }
                </div>
            </div>
        </div>
        <div className='container my-5 text-center'>
            <button className='check-btn' onMouseEnter={() => {
                setBtn("remove list")
            }} onMouseLeave={() => {
                setBtn('check list')
            }} onClick={() => {
                updateList([])
            }
            }>{btn}</button>
        </div>
    </>
    )
}

export default ToDoList
