import React from "react";

const InputTextField = ({id, name, placeholder, required, _handleChange})=>(
    <div>
        <input
            type="text"
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={_handleChange}
        />
    </div>
);
export default InputTextField;