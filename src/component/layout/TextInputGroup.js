import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//inport the neccessary libraries and the components.

const TextInputGroup=({
    label,
    name,
    placeholder,//input group components and its attributes
    type,
    value,
    onChange,
    error
}) => {
    return (// returns the form which provides the input form to the components.
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type}
        name={name}
        className={classnames('form-control form-control-lg',{
            'is-invalid':error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        {error && <div className="invalid-feedback">
            {error}
        </div>}
        
    </div>
    
    );
    
};
//attribute is defined that all the fields are necessary to be field.

TextInputGroup.prototype={
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    error:PropTypes.string.isRequired
}

TextInputGroup.defaultProps={
    type:'text'
};

export default TextInputGroup;
