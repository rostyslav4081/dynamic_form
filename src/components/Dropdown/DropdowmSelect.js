import React from "react";

const DropdownSelect = ({id, name, placeholder, required,val, _handleChange})=>(
    <div>
        <label>{placeholder}</label>
        <select id={id} name={name} required={required} onChange={_handleChange}>
            <option value="">Select an option</option>
            {val.map(values =><option value={values} key={values}>{values}</option>)}
        </select>
    </div>
);
export default DropdownSelect;