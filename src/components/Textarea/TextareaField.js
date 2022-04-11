import React from "react";

const TextAreaField = ({id, name, placeholder, required, _handleChange})=>(
    <div>
        <textarea
            type="text"
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={_handleChange}
        />
    </div>
);
export default TextAreaField;