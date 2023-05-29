import React from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip';

const ListItem = (props) => {
  return (
    <div className='container my-2 rounded-2 w-100 d-flex justify-content-center'>
        <div className="row gx-1 item bg-white">
            <div className="col-10 text-start item-value ps-2">
                {props.content}
            </div>
            <div className="col-2 item-buttons-container text-end d-flex">
            <Tooltip title="Edit Item">
                <ModeEditOutlineIcon className='item-buttons mx-2 edit' onClick={props.onSelect1}/>
            </Tooltip>
            <Tooltip title="Delete Item">
                <DeleteOutlineIcon className='item-buttons mx-2 delete' onClick={props.onSelect2}/>
            </Tooltip>
            </div>
        </div>
    </div>
  )
}

export default ListItem
