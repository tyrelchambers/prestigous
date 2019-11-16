import React from 'react'
import './SelectInput.scss'
import { Link } from 'react-router-dom'

const BASEURL = '/discover?theme='

const SelectInput = ({label, data}) => {

  const selectItems = data.map(x => (
    <Link to={`${BASEURL}${x.value}`} className="select-item" data-value={x.value} data-label={x.label} key={x.label}>
      {x.label}
    </Link>
  ));

  return (
    <div className="select d-f ai-c"onClick={dropdownToggle} >
      <span 
        className="select-label d-f jc-sb ai-c w-100pr"
        id="selectLabel"
      >
        <p id="label">{label}</p>
        <i className="fas fa-chevron-down"></i>  
      </span>

      <div className="select-dropdown" id="dropdownList">
        {selectItems}
      </div>
    </div>
  )
}

const dropdownToggle = (e) => {
  const parent = e.target.closest('.select');
  const list = parent.querySelector("#dropdownList");
  
  parent.classList.toggle('expanded-title');
  list.classList.toggle('expanded-select');
}

export default SelectInput
