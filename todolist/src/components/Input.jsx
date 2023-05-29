import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Tooltip from '@mui/material/Tooltip';
const Input = (props) => {
  return (
    <div className='container text-center bg-white input-container'>
      <input type="text" placeholder='✍Add new item...' className='w-100 input-field' value={props.arg} onChange={props.onChange} />
      {
        props.icon === 'add' ?
          (<Tooltip title="Add Item"><AddIcon className='input-field-icon' onClick={props.onSelect} /></Tooltip>) :
          (<Tooltip title="Update Item">
            <DriveFileRenameOutlineIcon className='input-field-icon' onClick={props.onSelect2} />
          </Tooltip>)
      }
    </div>
  )
}

export default Input
