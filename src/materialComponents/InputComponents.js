import React from 'react'

const InputComponents = ({ title, type, placeholder, name, value, onChange, size, disabled }) => {
    return (
        <div className='input-group mt-2'>
            <span className="bg-light input-group-text">{title}</span>
            <input
                className='form-control'
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                min="0"
                max="10000"
                disabled={disabled}
            />
        </div>
    )
}

export default InputComponents