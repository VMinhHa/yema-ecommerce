import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {

    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,

};

function InputField(props) {    
    const { form, name, label, disable } = props;

    const { control } = form;    //control là 1 object chứa các method để lấy dữ liệu từ form
    
    
    return (
        <Controller
        name={name}
        control={control}
        
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
            <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            name={name}
            label={label}
            disabled={ disable }
            value={value}
            
            error={invalid}
            helperText={error?.message}
            
            onChange={onChange}
            onBlur={onBlur}
            />
            
            )
        }
        
        >
        </Controller>
    );

}

export default InputField;